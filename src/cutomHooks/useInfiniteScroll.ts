import { useEffect, useCallback, useRef, useState } from "react";

interface UseInfiniteScrollOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  enabled?: boolean;
}

interface UseInfiniteScrollReturn {
  isFetching: boolean;
  setIsFetching: (isFetching: boolean) => void;
  lastElementRef: (node: HTMLElement | null) => void;
}

/**
 * Custom hook for implementing infinite scroll functionality
 * Uses Intersection Observer API for optimal performance
 *
 * @param fetchMore - Function to call when more data needs to be loaded
 * @param options - Configuration options for the intersection observer
 * @returns Object containing isFetching state and ref for the last element
 */
export const useInfiniteScroll = (
  fetchMore: () => Promise<void> | void,
  options: UseInfiniteScrollOptions = {}
): UseInfiniteScrollReturn => {
  const {
    threshold = 1.0,
    root = null,
    rootMargin = "100px",
    enabled = true,
  } = options;

  const [isFetching, setIsFetching] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  // Memoized callback to handle intersection
  const handleIntersection = useCallback(
    async (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];

      if (target.isIntersecting && enabled && !isFetching) {
        setIsFetching(true);
        try {
          await fetchMore();
        } catch (error) {
          console.error("Error fetching more data:", error);
        } finally {
          setIsFetching(false);
        }
      }
    },
    [fetchMore, enabled, isFetching]
  );

  // Ref callback to attach observer to the last element
  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      // Disconnect previous observer
      if (observer.current) {
        observer.current.disconnect();
      }

      // Don't observe if disabled or no node
      if (!enabled || !node) return;

      // Create new observer
      observer.current = new IntersectionObserver(handleIntersection, {
        threshold,
        root,
        rootMargin,
      });

      // Start observing the new node
      observer.current.observe(node);
    },
    [handleIntersection, threshold, root, rootMargin, enabled]
  );

  // Cleanup on unmount
  useEffect(() => {
    const currentObserver = observer.current;
    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, []);

  return {
    isFetching,
    setIsFetching,
    lastElementRef,
  };
};
