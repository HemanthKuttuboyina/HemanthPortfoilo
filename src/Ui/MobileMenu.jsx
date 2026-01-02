import { RxCross2 } from "react-icons/rx";
import { useEffect } from "react";

function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div
      className={`fixed w-full top-0 left-0 z-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        isMenuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
      style={{
        background: 'rgba(15, 12, 41, 0.95)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-6 right-6 text-2xl p-2 rounded-full bg-glass hover:bg-white/20 transition-colors duration-300 focus:outline-none"
        aria-label="Close Menu"
      >
        <RxCross2 className="text-white" />
      </button>

      <div className="flex flex-col items-center gap-8">
        {menuItems.map((item, index) => (
          <a
            key={item.label}
            onClick={() => setIsMenuOpen(false)}
            href={item.href}
            className={`text-3xl font-bold transform transition-all duration-700 ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isMenuOpen ? `${index * 100 + 300}ms` : '0ms',
              background: 'linear-gradient(45deg, #ff6b6b, #4d96ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="absolute bottom-8 text-gray-400 text-sm">
        Navigate through portfolio
      </div>
    </div>
  );
}

export default MobileMenu;