export function getCityImage(cityName: string): string {
  // Normalize by removing spaces
  const formattedName = cityName.replace(/\s+/g, "");

  // Handle known filename mismatches in the public/cities folder
  const exceptions: Record<string, string> = {
    // filename in repo is "CharlotteTown.jpg" but cityName used is "Charlottetown"
    Charlottetown: "CharlotteTown.jpg",
  };

  if (exceptions[formattedName]) {
    return `/cities/${exceptions[formattedName]}`;
  }

  return `/cities/${formattedName}.jpg`;
}
