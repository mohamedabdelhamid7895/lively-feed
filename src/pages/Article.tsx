import { useParams, useNavigate } from "react-router-dom";
import { Award, MessageSquare, ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useArticle } from "../hooks/use-article";

export const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { article, loading, error } = useArticle(id);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Skeleton className="h-[400px] w-full rounded-lg mb-8" />
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-4 w-1/2 mb-8" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Button variant="ghost" className="mb-6" onClick={() => navigate("/")}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Feed
      </Button>

      <img
        src={`https://picsum.photos/seed/${article.id}/800/600`}
        alt={article.title}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
        loading="lazy"
      />

      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">{article.title}</h1>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-gray-500" />
            <span className="font-medium text-gray-900">{article.by}</span>
          </div>
          <span className="text-sm text-gray-500">
            {new Date(article.time * 1000).toLocaleDateString()}
          </span>
        </div>

        {article.url && (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Read full article
          </a>
        )}

        <div className="flex items-center space-x-6 pt-6 border-t">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-gray-500" />
            <span>{article.score} points</span>
          </div>

          <div className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-gray-500" />
            <span>{article.descendants || 0} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};