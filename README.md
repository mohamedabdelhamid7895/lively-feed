# Welcome to your Lovable project

## Project info

A React application that fetches and displays news from the Hacker News API with pagination functionality.

## How can I edit this code?

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router for navigation

## Features




















- Fetches news from Hacker News API

















- Implements pagination (10 articles per page)
- Lazy loading images
- Responsive design
- Article detail pages
- optimized API requests
## My Approach


1.**API Integration**

- Used TanStack Query for efficient data fetching and caching
- Implemented pagination to load 10 articles per page
- Created custom hooks for reusable data fetching logic

2.**Performance Optimization**

- Lazy loading images using Intersection Observer
- Implemented skeleton loading states

3.**Component Structure**

- Created reusable components (ArticleCard, LazyImage)
- Separated business logic into custom hooks
- Used TypeScript for type safety
"# lively-feed" 