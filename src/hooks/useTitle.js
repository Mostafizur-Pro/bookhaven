import { useEffect } from "react";
const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Bookhaven`;
  }, [title]);
};

export default useTitle;
