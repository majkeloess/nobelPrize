import Loading from "./Loading.tsx";
import { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import YearContext from "./Context";
import { getYear } from "./apiRes";

export default function DataFetcher() {
  const yearContext = useContext(YearContext);

  if (!yearContext) {
    throw new Error("DataFetcher must be used within a YearProvider");
  }

  const { setYears } = yearContext;

  const {
    data: yearsArr,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["years"],
    queryFn: getYear,
  });

  useEffect(() => {
    if (yearsArr) {
      setYears(yearsArr);
    }
  }, [yearsArr, setYears]);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return null;
}
