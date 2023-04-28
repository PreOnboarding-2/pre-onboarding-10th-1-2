import { useRef, useEffect } from "react";

export const useForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    const debounce = (func: any, delay: number) => {
      let timeoutId: ReturnType<typeof setTimeout>;
      return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func(...args);
        }, delay);
      };
    };

    // delay 500ms
    const debouncedFocusEmailRef = debounce(() => {}, 500);

    const handleInput = () => {
      debouncedFocusEmailRef();
    };

    document.addEventListener("input", handleInput);
    return () => {
      document.removeEventListener("input", handleInput);
    };
  }, []);

  return {
    emailRef
  };
};
