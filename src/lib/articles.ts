import { Article } from "../types/articles";

export async function getNewsArticles(): Promise<Article[]> {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    console.warn("NEWS_API_KEY environment variable is not set.");
    return [];
  }

  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await res.json();
    return data.articles || [];
  } catch (error) {
    console.error("Database Error:", error);
    return [];
  }
}
