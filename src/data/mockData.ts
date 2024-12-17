import { Article, User } from '../types';

export const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Tech enthusiast and writer',
    likedArticles: [],
  },
  {
    id: '2',
    name: 'Jane Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Digital nomad and content creator',
    likedArticles: [],
  },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends in web development and what they mean for developers.',
    content: `The landscape of web development is constantly evolving. With the rise of new frameworks and technologies, developers need to stay updated with the latest trends.

    One of the most significant trends is the adoption of AI-powered development tools. These tools are revolutionizing how we write and debug code, making development more efficient than ever before.

    Another important trend is the growing importance of performance optimization. As web applications become more complex, ensuring fast load times and smooth user experiences becomes crucial.`,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    author: users[0],
    likes: 156,
    comments: 24,
    shares: 38,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Mastering Remote Work',
    excerpt: 'Tips and strategies for staying productive while working from home.',
    content: `Remote work has become the new normal for many professionals around the world. While it offers flexibility and comfort, it also comes with its own set of challenges.

    Creating a dedicated workspace, maintaining a routine, and setting clear boundaries between work and personal life are essential for remote work success.

    Communication becomes even more critical in a remote setting. Using the right tools and establishing clear communication protocols can help teams stay connected and productive.`,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    author: users[1],
    likes: 243,
    comments: 56,
    shares: 89,
    createdAt: '2024-01-14',
  },
];