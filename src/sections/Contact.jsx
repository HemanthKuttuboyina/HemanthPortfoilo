import RevealOnScroll from "../Ui/RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 monochrome-text">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Have a project in mind or want to collaborate? 
              Feel free to reach out. I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400">hemanthkuttuboyina@gmail.com</p>
            </div>
            
            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-400">India</p>
              <p className="text-gray-400 text-sm">Available for remote work</p>
            </div>
            
            <div className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-white mb-2">Response Time</h3>
              <p className="text-gray-400">Within 24 hours</p>
            </div>
          </div>

          <form
            action="https://formsubmit.co/hemanthkuttuboyina@gmail.com"
            method="POST"
            className="space-y-6 card"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white transition-all duration-300 focus:outline-none focus:border-white/30 focus:bg-white/10 focus:scale-105"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white transition-all duration-300 focus:outline-none focus:border-white/30 focus:bg-white/10 focus:scale-105"
                />
              </div>
            </div>
            
            <div className="relative">
              <input
                type="text"
                id="subject"
                name="_subject"
                placeholder="Subject"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white transition-all duration-300 focus:outline-none focus:border-white/30 focus:bg-white/10 focus:scale-105"
              />
            </div>
            
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Your message here..."
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white transition-all duration-300 focus:outline-none focus:border-white/30 focus:bg-white/10 focus:scale-105 resize-none"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">
                * All fields are required
              </div>
              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 px-8 py-4 hover:scale-105 transition-all duration-300 group"
              >
                <span>Send Message</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};