const formatDateFromString = (dateString: string | null) => {
  if (typeof dateString === "string") {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  } else {
    return "TBA";
  }
};
export { formatDateFromString };
