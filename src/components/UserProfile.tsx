import { User } from '../types';

interface UserProfileProps {
  user: User;
}

export const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center space-x-4 mb-8">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-gray-600">{user.bio}</p>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Liked Articles</h2>
        {user.likedArticles.length > 0 ? (
          user.likedArticles.map((article) => (
            <div key={article.id} className="p-4 border rounded-lg">
              <h3 className="font-medium text-gray-900">{article.title}</h3>
              <p className="text-gray-600">{article.excerpt}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No liked articles yet.</p>
        )}
      </div>
    </div>
  );
};