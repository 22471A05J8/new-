import React, { useCallback, useState, useEffect } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Start.css";
import datavalley from '../images/datavalley mern ai.jpg';
import image from '../images/image.png'
const Start = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // 🔥 Detect which section is visible
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const handleScrollActive = () => {
      let scrollY = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        if (
          scrollY > section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScrollActive);
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  return (
    <>
      {/* ===== Fixed Background Video ===== */}
      <video className="global-bg-video" autoPlay loop muted playsInline>
        <source src="/bgs.mp4" type="video/mp4" />
      </video>
      <div className="global-overlay"></div>

      {/* ===== Navbar ===== */}
      <nav className="modern-navbar">
        <div className="nav-content">
          <div className="nav-logo">
            H<span>S</span>
          </div>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["home", "about", "skills", "projects", "certificates", "contact"].map(
              (item) => (
                <li
                  key={item}
                  onClick={() => handleScroll(item)}
                  className={activeSection === item ? "active" : ""}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              )
            )}
          </ul>

          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </div>
        </div>
      </nav>

      {/* ===== Particles ===== */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 80 },
            color: { value: "#a78bfa" },
            links: {
              enable: true,
              color: "#a78bfa",
              distance: 150,
              opacity: 0.3,
            },
            move: { enable: true, speed: 1 },
            size: { value: 2 },
          },
        }}
      />

      {/* ===== home Sections ===== */}
      <section id="home" className="section">
  <div className="hero-content">
    <h1 className="hero-name">Harini Sunkara</h1>
    <h2 className="hero-role">MERN Full Stack Developer & Web Developer</h2>
    <p className="hero-desc">
      A Computer Science student & aspiring Web Developer with strong skills in HTML, CSS, JavaScript, and React.
      I love solving real-world problems through creative design and clean code.
    </p>
    <div className="hero-icons">
      <a href="https://github.com/22471A05J8" target="_blank" rel="noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/harini2213" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://wa.me/8688531506?text=Hi%20Harini!" target="_blank" rel="noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="mailto:harinisunkara2005@gmail.com">
        <i className="fa-solid fa-envelope"></i>
      </a>
    </div>
  </div>
</section>




{/*-----------About Section----------*/} 
    <section id="about" className="section about-section">
  <h2 className="about-title">About Me</h2>
  <div className="about-card">
    <h2 className="hero-role">Hello, I'm Harini Sunkara</h2>
    <p className="about-desc">
      I'm a Computer Science student with a passion for web development.
      I enjoy crafting seamless user experiences using React, Node.js,
      and modern web technologies.
    </p>
    <button
      className="about-btn"
      onClick={() =>
        window.open(
          "https://drive.google.com/file/d/1UQNmncm0imxSQQ8VMjpmgnDpMbn7msRG/view?usp=drivesdk",
          "_blank"
        )
      }
    >
      View Resume
    </button>
  </div>
</section>






{/*-----------skills Section----------*/} 
     <section id="skills" className="section skills-section">
  <h2 className="skills-title">Skills</h2>
  <div className="skills-triangle">
    <div className="skills-row">
      <span>GitHub</span>
    </div>
    <div className="skills-row">
      <span>Kotlin</span>
      <span>Android</span>
    </div>
    <div className="skills-row"> 
      <span>MongoDB</span>
      <span>Node.js</span>
      <span>Express</span>
    </div>
    <div className="skills-row">
      <span>HTML</span>
      <span>CSS</span>
      <span>React</span>
      <span>JavaScript</span> 
    </div>
  </div>
</section>






{/*-----------projects Section----------*/} 
      <section id="projects" className="section">
<h2 className="projects-title text-4xl font-bold text-white mb-3 text-center">
  Projects
</h2>
<p className="projects-subtitle text-gray-300 text-lg text-center mb-10">
  Take a look at some of my recent work and experiments.
</p>

<div className="projects-grid grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
  {/* Project Card 1 */}
  <div className="project-card-1 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1">
    <img
      src="https://img.freepik.com/premium-vector/online-education-e-learning-online-course-concept-home-school-illustration-students-laptop-computer-screen_7280-4687.jpg"
      alt="ignitia"
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-white mb-3">
       Ignitia
      </h3>
      <button
        className="project-btn-1 bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition"
        onClick={() =>
          window.open("https://your-portfolio-link.com", "_blank")
        }
      >
        View Project
      </button>
    </div>
  </div>

  {/* Project Card 2 */}
  <div className="project-card-2 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
    <img
      src="https://assets.designtemplate.io/images/Travel%20Agency%20Logo%20Animation-HD.webp"
      alt="Travel Tales"
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-white mb-3">
        Travel Tales
      </h3>
      <button
        className="project-btn-2 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
        onClick={() =>
          window.open("https://your-quizapp-link.com", "_blank")
        }
      >
        View Project
      </button>
    </div>
  </div>
</div>
      </section>





{/*-----------certificate Section----------*/} 
      <section id="certificates" className="section"> 
        <h2 className="certificates-title">Certificates</h2> 
        <p className="certificates-subtitle">Here are my achievements and certifications.</p>
         <div className="certificates-buttons"> 
          <button className="cert-btn cert-btn-1" onClick={() => document.querySelector(".cert-modal-1").classList.add("active") } >
             View Web  internship </button>
              <button className="cert-btn cert-btn-2" onClick={() => document.querySelector(".cert-modal-2").classList.add("active") } >
                 View Java Internship  </button>
                  </div>
            {/* 🌟 Modal 1 */} 
                   <div className="cert-modal cert-modal-1" onClick={(e) => e.target.classList.remove("active")}> 
                    <img src={image} alt="Web Development Internship" />
                     </div> 
            {/* 🌟 Modal 2 */} <div className="cert-modal cert-modal-2" onClick={(e) => e.target.classList.remove("active")}> 
              <img src={datavalley} alt="MERN + AI Certificate" />
              </div> 
              </section>

















{/*-----------contact Section----------*/} 
     {/*-----------contact Section----------*/} 
<section id="contact" className="section contact-section">
  <h2 className="contact-title">Let's Connect</h2>
  <p className="contact-subtitle">
    Feel free to reach out for collaborations, opportunities, or just to say hi 👋
  </p>

  <div className="contact-icons">
    <a
      href="mailto:harinisunkara2005@gmail.com"
      className="contact-icon email"
      title="Email"
    >
      <i className="fas fa-envelope"></i>
    </a>
    <a
      href="https://github.com/22471A05J8"
      target="_blank"
      rel="noreferrer"
      className="contact-icon github"
      title="GitHub"
    >
      <i className="fab fa-github"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/harini2213"
      target="_blank"
      rel="noreferrer"
      className="contact-icon linkedin"
      title="LinkedIn"
    >
      <i className="fab fa-linkedin"></i>
    </a>
    <a
      href="https://wa.me/8688531506?text=Hi%20Harini!"
      target="_blank"
      rel="noreferrer"
      className="contact-icon whatsapp"
      title="WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  </div>

  <div className="contact-email">
    <a href="mailto:harinisunkara2005@gmail.com" className="email-link">
      harinisunkara2005@gmail.com
    </a>
  </div>
</section>

    </>
  );
};

export default Start;
