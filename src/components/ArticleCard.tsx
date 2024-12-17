import { useNavigate } from "react-router-dom";
import { ArticleCardProps } from "../types";
import { Award, User } from "lucide-react";
import { LazyImage } from "./LazyImage";

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="article-card cursor-pointer"
      onClick={() => navigate(`/article/${article.id}`)}
    >
      <LazyImage
        src={`https://picsum.photos/seed/${article.id}/800/600`}
        alt={article.title}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">{article.title}</h2>
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{article.by}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Award className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">{article.score}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
