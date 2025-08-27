import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supa = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false },
});

type ReviewRow = {
  id: number;
  name: string;
  rating: number;
  message: string;
  created_at: string;
};

type ReviewInput = {
  name?: string;
  rating?: number | string;
  message?: string;
  _hp?: string;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "GET") {
      const { data, error } = await supa
        .from("reviews")
        .select<"id,name,rating,message,created_at", ReviewRow>(
          "id,name,rating,message,created_at"
        )
        .order("created_at", { ascending: false })
        .limit(5);

      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json(data ?? []);
    }

    if (req.method === "POST") {
      const bodyRaw =
        typeof req.body === "string"
          ? JSON.parse(req.body || "{}")
          : req.body || {};
      const { name, rating, message, _hp } = bodyRaw as ReviewInput;

      if (_hp && _hp.length > 0) return res.status(204).end();

      const ratingNum =
        typeof rating === "number"
          ? rating
          : typeof rating === "string"
          ? Number(rating)
          : NaN;

      if (
        typeof name !== "string" ||
        name.length < 1 ||
        name.length > 80 ||
        !Number.isInteger(ratingNum) ||
        ratingNum < 1 ||
        ratingNum > 5 ||
        typeof message !== "string" ||
        message.length < 2 ||
        message.length > 800
      ) {
        return res.status(400).json({ error: "Invalid payload" });
      }

      const { data, error } = await supa
        .from("reviews")
        .insert({ name, rating: ratingNum, message })
        .select<"id,name,rating,message,created_at", ReviewRow>(
          "id,name,rating,message,created_at"
        )
        .single();

      if (error) return res.status(500).json({ error: error.message });
      if (!data)
        return res.status(500).json({ error: "Insert failed with no data." });

      return res.status(201).json(data);
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (e: unknown) {
    const msg =
      typeof e === "object" && e && "message" in e
        ? String((e as { message: unknown }).message)
        : "Server error";
    console.error(e);
    return res.status(500).json({ error: msg });
  }
}
