export function getCityImage(cityName: string): string {
  const formattedName = cityName.toLowerCase().replace(/\s+/g, "");
  return `/cities/${formattedName}.jpg`;
}
