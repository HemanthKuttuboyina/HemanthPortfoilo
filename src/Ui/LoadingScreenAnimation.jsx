import { useEffect, useState } from "react";

function LoadingScreenAnimation({ onComplete }) {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);

  const fullText = "Loading Portfolio";

  useEffect(() => {
    let index = 0;
    const textInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      setProgress((index / fullText.length) * 100);
      index++;

      if (index > fullText.length) {
        clearInterval(textInterval);
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, 120);

    return () => clearInterval(textInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center gap-8">
      {/* Decorative elements */}
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      <div className="decorative-circle circle-3"></div>

      <div className="flex flex-col items-center gap-6 z-10">
        <div className="text-center">
          <div className="monochrome-text text-4xl md:text-5xl font-bold mb-4">
            HELLO
          </div>
          <div className="text-lg text-gray-300">Welcome to my portfolio</div>
        </div>

        <div className="w-[300px] h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-white via-gray-300 to-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="text-2xl md:text-3xl font-semibold text-center h-12">
          {text}
          <span className="animate-blink ml-1">|</span>
        </div>

        <div className="flex gap-2 mt-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-white animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingScreenAnimation;