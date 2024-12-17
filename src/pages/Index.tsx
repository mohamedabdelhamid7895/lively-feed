import { useState } from "react";
import { useNews } from "../hooks/use-news";
import { ArticleCard } from "../components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const { articles, loading, totalPages } = useNews(currentPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Hacker News Feed
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 10 }).map((_, i) => (
                <Skeleton key={i} className="h-[300px] rounded-lg" />
              ))
            : articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="py-2">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
