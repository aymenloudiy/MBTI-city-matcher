export function getCityImage(cityName: string): string {
  const formattedName = cityName.replace(/\s+/g, "");
  return `/cities/${formattedName}.jpg`;
}
