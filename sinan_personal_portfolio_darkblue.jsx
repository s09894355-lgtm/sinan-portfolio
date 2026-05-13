export default function SinanPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white font-sans overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/20 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-widest text-cyan-400">
            SINAN U
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen px-6"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-700/20 blur-3xl rounded-full"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <p className="uppercase tracking-[8px] text-cyan-400 mb-4 text-sm">
            Web Designer • Developer • Creator
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Building Modern
            <span className="block text-cyan-400">Digital Experiences</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Hi, I'm Sinan U from Kerala. I create modern websites,
            wedding invitation pages, save-the-date websites, and stylish
            digital experiences with premium designs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-cyan-400 text-slate-900 font-bold hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-500/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="rounded-3xl border border-blue-500/20 bg-white/5 backdrop-blur-xl p-10 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/20">
                  <h2 className="text-4xl font-black text-cyan-400">2+</h2>
                  <p className="text-slate-300 mt-2">Years Experience</p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/20">
                  <h2 className="text-4xl font-black text-cyan-400">50+</h2>
                  <p className="text-slate-300 mt-2">Creative Designs</p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/20">
                  <h2 className="text-4xl font-black text-cyan-400">100%</h2>
                  <p className="text-slate-300 mt-2">Responsive</p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/20">
                  <h2 className="text-4xl font-black text-cyan-400">24/7</h2>
                  <p className="text-slate-300 mt-2">Support</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[6px] text-cyan-400 mb-4 text-sm">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Creative Developer From Kerala
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              I design and build stylish websites with modern animations,
              premium layouts, and smooth user experiences. I also create
              digital wedding invitation websites, birthday websites,
              save-the-date pages, and personal portfolio websites.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8">
              My goal is to make every website feel premium, cinematic,
              responsive, and visually unforgettable.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                'HTML',
                'CSS',
                'JavaScript',
                'React',
                'UI/UX',
                'Animations',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[6px] text-cyan-400 mb-4 text-sm">
              My Services
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              What I Create
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Wedding Websites',
                desc: 'Luxury wedding invitation websites with music, animations, countdowns, galleries, and RSVP sections.',
              },
              {
                title: 'Portfolio Websites',
                desc: 'Modern personal portfolio websites for creators, students, and professionals.',
              },
              {
                title: 'Business Websites',
                desc: 'Responsive business websites with premium design, fast performance, and smooth UI.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-blue-500/20 bg-white/5 p-8 hover:-translate-y-2 hover:border-cyan-400/40 transition duration-300 shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                  ✦
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                <p className="text-slate-300 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[6px] text-cyan-400 mb-4 text-sm">
              Featured Work
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              My Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Wedding Invitation Website',
              'Birthday Celebration Website',
              'Tourism Landing Page',
            ].map((project) => (
              <div
                key={project}
                className="overflow-hidden rounded-3xl border border-blue-500/20 bg-white/5 hover:scale-[1.02] transition duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-cyan-500/30 to-blue-700/20 flex items-center justify-center text-2xl font-bold text-cyan-300">
                  {project}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project}</h3>

                  <p className="text-slate-300 leading-relaxed mb-6">
                    Premium responsive design with modern animations and a
                    cinematic user experience.
                  </p>

                  <button className="px-5 py-3 rounded-xl bg-cyan-400 text-slate-900 font-bold hover:scale-105 transition">
                    Explore Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[6px] text-cyan-400 mb-4 text-sm">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Let's Build Something Amazing
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Need a stylish website, wedding invitation page, or modern digital
            experience? Let's work together.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://instagram.com"
              className="px-8 py-4 rounded-2xl bg-cyan-400 text-slate-900 font-bold hover:scale-105 transition"
            >
              Instagram
            </a>

            <a
              href="mailto:hello@example.com"
              className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-blue-500/20 py-8 text-center text-slate-400">
        <p>
          © 2026 Sinan U — Designed with passion and creativity.
        </p>
      </footer>
    </div>
  );
}
