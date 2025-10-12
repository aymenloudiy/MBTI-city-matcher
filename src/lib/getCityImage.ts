export function getCityImage(cityName: string): string {
  const formattedName = cityName.replace(/\s+/g, "").replace(/[.'"]/g, "");
  return `/cities/${formattedName}.jpg`;
}
