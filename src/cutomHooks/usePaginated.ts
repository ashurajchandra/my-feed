import { useState, useMemo, useCallback, useEffect } from 'react';
import { useInfiniteScroll } from './useInfiniteScroll';

interface UsePaginationOptions<T> {
  data: T[];
  pageSize?: number;

}

interface UsePaginationReturn<T> {
  displayedData: T[];
  isFetching: boolean;
  hasMore: boolean;
  lastElementRef: (node: HTMLElement | null) => void;
  reset: () => void;
  totalCount: number;
  currentPage: number;
}

/**
 * Simple hook for infinite scroll pagination with local data
 * Supports basic search and filtering only
 */
export const usePaginated = <T>({
  data,
  pageSize = 10,
}: UsePaginationOptions<T>): UsePaginationReturn<T> => {
  const [currentPage, setCurrentPage] = useState(1);



  // Calculate displayed data based on current page
  const displayedData = useMemo(() => {
    return data.slice(0, currentPage * pageSize);
  }, [data, currentPage, pageSize]);

  const hasMore = displayedData.length < data.length;
  const totalCount = data.length;

  // Load more data (increase page)
  const fetchMore = useCallback(async () => {
    if (hasMore) {
      // Add 2 second delay to simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentPage(prev => prev + 1);
    }
  }, [hasMore]);

  // Reset pagination
  const reset = useCallback(() => {
    setCurrentPage(1);
  }, []);

  // Auto-reset when search or filter changes
  useEffect(() => {
    reset();
  }, [reset]);

  const { isFetching, lastElementRef } = useInfiniteScroll(fetchMore, {
    enabled: hasMore,
  });

  return {
    displayedData,
    isFetching,
    hasMore,
    lastElementRef,
    reset,
    totalCount,
    currentPage,
  };
};

