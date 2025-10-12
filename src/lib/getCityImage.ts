export function getCityImage(cityName: string): string {
  const formattedName = cityName
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[.'"]/g, "");
  return `/cities/${formattedName}.jpg`;
}
