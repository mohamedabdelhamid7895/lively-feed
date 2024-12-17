import { useState, useEffect } from "react";
import { Article } from "../types";

const ITEMS_PER_PAGE = 10;

export function useNews(page: number) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        // Fetch top stories IDs
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/topstories.json"
        );
        const storyIds = await response.json();

        // Calculate pagination
        setTotalPages(Math.ceil(storyIds.length / ITEMS_PER_PAGE));

        // Get IDs for current page
        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const pageStoryIds = storyIds.slice(startIndex, endIndex);

        // Fetch story details
        const storyPromises = pageStoryIds.map((id) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
            (res) => res.json()
          )
        );

        const stories = await Promise.all(storyPromises);
        setArticles(stories);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [page]);

  return { articles, loading, totalPages };
}
