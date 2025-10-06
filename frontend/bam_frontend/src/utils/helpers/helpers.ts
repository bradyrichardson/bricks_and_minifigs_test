export const capitalize = (text: string): string => {
  if (!text || text.length === 0) return text;
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
