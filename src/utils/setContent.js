export const setContent = ({
  isLoading,
  isFetching,
  isSuccess,
  isError,
  isLoadingContent,
  isFetchingContent,
  isSuccessContent,
  isErrorContent,
}) => {
  if (isLoading) {
    return isLoadingContent;
  } else if (isFetching) {
    return isFetchingContent;
  } else if (isSuccess) {
    return isSuccessContent;
  } else if (isError) {
    return isErrorContent;
  }
};
