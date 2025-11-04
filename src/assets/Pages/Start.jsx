import React, { useCallback, useState, useEffect } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Start.css";

// ✅ Import local images
import datavalley from "../images/datavalley mern ai.jpg";
import image from "../images/image.png";
import bgVideo from "/bgs.mp4"; // ✅ keep bgs.mp4 in /public

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

  // 🔥 Detect active section while scrolling
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
      {/* ===== Background Video ===== */}
      <video className="global-bg-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="global-overlay"></div>

      {/* ===== Navbar ===== */}
      <nav className="modern-navbar">
        <div className="nav-content">
          <div className="nav-logo">
            H<span>S</span>
          </div>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {[
              "home",
              "about",
              "skills",
              "projects",
              "certificates",
              "contact",
            ].map((item) => (
              <li
                key={item}
                onClick={() => handleScroll(item)}
                className={activeSection === item ? "active" : ""}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>

          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </div>
        </div>
      </nav>














      {/* ===== Particle Background ===== */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 70 },
            color: { value: "#a78bfa" },
            links: {
              enable: true,
              color: "#a78bfa",
              distance: 150,
              opacity: 0.4,
            },
            move: { enable: true, speed: 1 },
            size: { value: 2 },
          },
        }}
      />

















      {/* ===== Home Section ===== */}
      <section id="home" className="section fade-in">
        <div className="hero-content">
          <h1 className="hero-name">Harini Sunkara</h1>
          <h2 className="hero-role">
            MERN Full Stack Developer & Web Developer
          </h2>
          <p className="hero-desc">
            A Computer Science student passionate about building creative,
            responsive web apps with React, Node.js, and MongoDB.
          </p>
          <div className="hero-icons">
            <a
              href="https://github.com/22471A05J8"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/harini2213"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://wa.me/8688531506?text=Hi%20Harini!"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:harinisunkara2005@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>














      {/* ===== About Section ===== */}
      <section id="about" className="section about-section slide-up">
        <h2 className="about-title">About Me</h2>
        <div className="about-card">
          <p className="about-desc">
            I’m a Computer Science student passionate about creating interactive
            user experiences using React, Express, and MongoDB.
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















      {/* ===== Skills Section ===== */}
      <section id="skills" className="section skills-section fade-in">
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






















      {/* ===== Projects Section ===== */}
      <section id="myproj-section" className="myproj-section fade-in">
  <h2 className="myproj-title">Projects</h2>
  <p className="myproj-subtitle">
    Take a look at some of my recent work and experiments.
  </p>

  <div className="myproj-grid">
    <div className="myproj-card">
      <img
        src="https://img.freepik.com/premium-vector/online-education-e-learning-online-course-concept-home-school-illustration-students-laptop-computer-screen_7280-4687.jpg"
        alt="Ignitia"
        className="myproj-image"
      />
      <div className="myproj-content">
        <h3 className="myproj-heading">Ignitia</h3>
        <button
          className="myproj-btn"
          onClick={() =>
            window.open("https://your-portfolio-link.com", "_blank")
          }
        >
          View Project
        </button>
      </div>
    </div>

    <div className="myproj-card">
      <img
        src="https://assets.designtemplate.io/images/Travel%20Agency%20Logo%20Animation-HD.webp"
        alt="Travel Tales"
        className="myproj-image"
      />
      <div className="myproj-content">
        <h3 className="myproj-heading">Travel Tales</h3>
        <button
          className="myproj-btn"
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



















      {/* ===== Certificates Section ===== */}
      <section id="certificates" className="section fade-in">
        <h2 className="certificates-title">Certificates</h2>
        <p className="certificates-subtitle">
          Here are my achievements and certifications.
        </p>

        <div className="certificates-buttons">
          <button
            className="cert-btn"
            onClick={() =>
              document.querySelector(".cert-modal-1").classList.add("active")
            }
          >
            View Web Internship
          </button>
          <button
            className="cert-btn"
            onClick={() =>
              document.querySelector(".cert-modal-2").classList.add("active")
            }
          >
            View Java Internship
          </button>
        </div>

        {/* Modal 1 */}
        <div
          className="cert-modal cert-modal-1"
          onClick={(e) => e.target.classList.remove("active")}
        >
          <img src={image} alt="Web Internship" />
        </div>

        {/* Modal 2 */}
        <div
          className="cert-modal cert-modal-2"
          onClick={(e) => e.target.classList.remove("active")}
        >
          <img src={datavalley} alt="MERN + AI Certificate" />
        </div>
      </section>




















      {/* ===== Contact Section ===== */}
      <section id="contact" className="section contact-section fade-in">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-subtitle">
          Feel free to reach out for collaborations or just to say hi 👋
        </p>

        <div className="contact-icons">
          <a
            href="mailto:harinisunkara2005@gmail.com"
            className="contact-icon"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://github.com/22471A05J8"
            target="_blank"
            rel="noreferrer"
            className="contact-icon"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/harini2213"
            target="_blank"
            rel="noreferrer"
            className="contact-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://wa.me/8688531506?text=Hi%20Harini!"
            target="_blank"
            rel="noreferrer"
            className="contact-icon"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        <a href="mailto:harinisunkara2005@gmail.com" className="email-link">
          harinisunkara2005@gmail.com
        </a>
      </section>
    </>
  );
};

export default Start;