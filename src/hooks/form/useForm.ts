import { useRef, useEffect } from "react"

export const useForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // debounce
    const debounce = (func: any, delay: number) => {
      let timeoutId: ReturnType<typeof setTimeout>;
      return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func(...args);
        }, delay);
      };
    };

    // email input 엘리먼트에 focus
    const focusEmailRef = () => {
      emailRef.current?.focus();
    };

    // delay 500ms
    const debouncedFocusEmailRef = debounce(focusEmailRef, 500);

    const handleInput = () => {
      debouncedFocusEmailRef();
    };

    // document 객체에 input 이벤트 리스너 등록
    document.addEventListener("input", handleInput);

    // useEffect 함수의 cleanup 함수
    return () => {
      // document 객체에서 input 이벤트 리스너 제거
      document.removeEventListener("input", handleInput);
    };
  }, []);

  return {
    emailRef
  }
}
