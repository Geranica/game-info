import { ReactNode } from "react";

interface ContentProps {
  isLoading?: boolean;
  isFetching?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  isLoadingContent?: ReactNode;
  isFetchingContent?: ReactNode;
  isSuccessContent?: ReactNode;
  isErrorContent?: ReactNode;
  page?: number;
}

export const setContent = ({
  isLoading,
  isFetching,
  isSuccess,
  isError,
  isLoadingContent,
  isFetchingContent,
  isSuccessContent,
  isErrorContent,
  page,
}: ContentProps): ReactNode => {
  if (isLoading) {
    return isLoadingContent;
  } else if (isFetching && page === 1) {
    return isLoadingContent;
  } else if (isFetching) {
    return isFetchingContent;
  } else if (isSuccess) {
    return isSuccessContent;
  } else if (isError) {
    return isErrorContent;
  }
};
