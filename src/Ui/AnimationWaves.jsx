function AnimationWaves() {
  return (
    <div className="absolute bottom-0 w-full hidden lg:block">
      <svg
        viewBox="0 0 1440 320"
        className="wave w-full h-auto"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="waveGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#cccccc" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#999999" stopOpacity="0.4" />
            <stop offset="75%" stopColor="#666666" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#333333" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient
            id="waveGradient2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#999999" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#666666" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,192C672,203,768,213,864,202.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          opacity="0.8"
        ></path>
        <path
          fill="url(#waveGradient2)"
          d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,234.7C672,235,768,213,864,192C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          opacity="0.6"
        ></path>
      </svg>
    </div>
  );
}

export default AnimationWaves;