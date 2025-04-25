'use client'
import { useEffect, useState } from "react";

export const useBodyOverflow = () => {
  const [isOverflowHidden, setIsOverflowHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOverflowHidden ? "hidden" : "";
  }, [isOverflowHidden]);

  const toggleOverflow = () => {
    setIsOverflowHidden((prev) => !prev);
  };

  return { toggleOverflow };
};
