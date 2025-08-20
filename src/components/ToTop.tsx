import { useEffect, useState } from "react";

function ToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!showButton && window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showButton]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <div className="fixed bottom-5 end-5 rounded-full p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out z-50">
        <button onClick={handleScrollToTop}>Scroll to Top</button>;
      </div>
    )
  );
}

export default ToTop;
