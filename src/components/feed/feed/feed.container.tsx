import { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getAllPublicPostPending } from "../../../redux/slide/post/post.action";
import useThrottle from "../../../ultils/customHook/useThrottle";

import type { IPost } from "../../../datatypes/types";
import FeedView from "./feed.view";

function FeedContainer() {
  //setup
  const dispatch = useAppDispatch();
  const {
    posts: _posts,
    isLoading,
    status,
    message,
  } = useAppSelector((state) => state.post);

  //state & ref
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [hasMore, setHasmore] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

  // function
  const fetchPosts = useCallback(
    (page: number) => {
      dispatch(getAllPublicPostPending({ page }));
    },
    [dispatch]
  );

  const handleScroll = useCallback(() => {
    if (!hasMore) {
      return;
    }
    if (page >= _posts.meta.pages) {
      return;
    }
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 200) {
      if (page >= _posts.meta.pages) {
        return;
      }
      setPage((prev) => prev + 1);
    }
  }, [_posts]);

  const throttledScroll = useThrottle(handleScroll, 100);

  // initial load
  useEffect(() => {
    if (isInitialLoad) {
      fetchPosts(1);
      setIsInitialLoad(false);
    }
  }, [dispatch, isInitialLoad]);

  // load more
  useEffect(() => {
    if (page > 1 && hasMore) {
      fetchPosts(page);
    }
  }, [page, dispatch, hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [throttledScroll]);

  // setPosts
  useEffect(() => {
    if (_posts?.data && Array.isArray(_posts.data)) {
      setPosts((prev: IPost[]) => {
        if (page == 1) {
          return _posts.data;
        }

        const existingIds = new Set(prev.map((post: IPost) => post._id));
        const newPosts = _posts.data.filter(
          (post: IPost) => !existingIds.has(post._id)
        );

        return [...prev, ...newPosts];
      });
      if (_posts.meta && _posts.meta.pages) {
        if (_posts.meta?.pages !== undefined) {
          setHasmore(page < _posts.meta.pages);
        }
      }
    } else if (status === "failed") {
      setError(message || "Failed to fetch posts");
    } else if (status === "success") {
      console.log("sucess");
      setHasmore(false);
    }
  }, [page, _posts]);

  return <FeedView posts={posts} hasMore={hasMore} error={error} />;
}

export default FeedContainer;
