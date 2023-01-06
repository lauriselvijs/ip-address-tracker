import { useEffect } from "react";

export const useReconnectWhenOnline = () => {
  const whenOnline = () => {
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener("online", whenOnline);

    return () => window.removeEventListener("online", whenOnline);
  }, []);
};
