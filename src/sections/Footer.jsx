import { FaXTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/HemanthKuttuboyina",
      label: "GitHub",
      color: "hover:bg-white/10"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      href: "https://www.linkedin.com/in/hemanthk7/",
      label: "LinkedIn",
      color: "hover:bg-white/10"
    },
    {
      icon: <FaXTwitter className="text-xl" />,
      href: "https://x.com/hemu__07?s=11",
      label: "Twitter",
      color: "hover:bg-white/10"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      href: "mailto:hemanthkuttuboyina@gmail.com",
      label: "Email",
      color: "hover:bg-white/10"
    }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      
      <div className="relative z-10 py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            
            {/* Brand & Description */}
            <div className="text-center md:text-left max-w-md">
              <a 
                href="#home" 
                className="text-3xl font-bold monochrome-text inline-block mb-4 hover:scale-105 transition-transform"
              >
                HK
              </a>
              <p className="text-gray-400 mb-6">
                Full Stack Developer passionate about creating elegant, 
                efficient solutions and pushing the boundaries of web technology.
              </p>
              
              {/* Quick Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-glass flex items-center justify-center text-white hover:scale-110 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              {/* Resume Download */}
              <div className="mt-8">
                <a
                  href="/HEMANTHCV.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
                >
                  <IoDocumentText className="text-lg" />
                  <span>Download Resume</span>
                  <span className="group-hover:translate-y-1 transition-transform">↓</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Copyright & Footer Note */}
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              © {currentYear} Hemanth Kuttuboyina. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with React, Tailwind CSS, and ❤️
            </p>
            
            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-8 text-sm text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto group"
            >
              <span>Back to top</span>
              <span className="group-hover:-translate-y-1 transition-transform">↑</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
    </footer>
  );
}

export default Footer;