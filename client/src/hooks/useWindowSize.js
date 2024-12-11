import { useState, useEffect } from "react"

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return windowSize
}

export default useWindowSize
  // import useWindowSize from "hooks/useWindowSize";
//   const { width: screen } = useWindowSize();

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       setIsSticky(screen <= 474 && offset > 0);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [screen]);
