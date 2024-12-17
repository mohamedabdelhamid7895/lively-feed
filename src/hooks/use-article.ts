import { useState, useEffect } from "react";
import { Article } from "../types";

export const useArticle = (id: string | undefined) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      if (!id) return;

      try {
        setLoading(true);
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }

        const data = await response.json();
        setArticle(data);
      } catch (error) {
        setError(error instanceof Error ? error : new Error("Unknown error"));
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  return { article, loading, error };
};
