export const getContent = async (language: string) => {
  const res = await fetch(`/api/content/${language}`);
  if (!res.ok) {
    throw new Error("Failed to fetch content");
  }
  const content = await res.json();
  return content;
};
