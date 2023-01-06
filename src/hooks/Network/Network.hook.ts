import { useEffect } from "react";

//TODO
// [] - only reload on initial page load
export const useReconnectWhenOnline = () => {
  const whenOnline = () => {
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener("online", whenOnline);

    return () => window.removeEventListener("online", whenOnline);
  }, []);
};
