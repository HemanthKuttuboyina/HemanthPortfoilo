function Logo() {
  return (
    <a 
      href="#home" 
      className="text-2xl font-bold hover-lift transition-all duration-300 group"
    >
      <span className="text-white group-hover:text-gray-300 transition-colors">HK</span>
      <span className="monochrome-text ml-2 group-hover:brightness-110 transition-all">
        Portfolio
      </span>
    </a>
  );
}

export default Logo;