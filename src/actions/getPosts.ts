import { useEffect, useState, useCallback } from "react";

interface PostData {
  id: number;
  username: string;
  title: string;
  content: string;
  created_datetime: Date;
}

interface FetchPostsResult {
  posts: PostData[];
  fetchPosts: () => Promise<void>;
}

const useFetchPosts = (): FetchPostsResult => {
  const [posts, setPosts] = useState<PostData[]>([]);

  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch(
        "https://dev.codeleap.co.uk/careers/?format=json"
      );
      const data = await response.json();
      setPosts(data.results);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, fetchPosts };
};

export default useFetchPosts;
