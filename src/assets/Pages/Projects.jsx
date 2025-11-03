// import React, { useCallback, useState } from "react";
// import Particles from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./Start.css";


// const Start = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   const handleScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   return (
//     <div className="portfolio-container">
//       {/* ===== Background Video ===== */}
//       <video autoPlay loop muted playsInline className="background-video">
//         <source src={backgroundVideo} type="video/mp4" />
//       </video>

//       {/* ===== Fixed Navbar ===== */}
//       <nav className="modern-navbar">
//         <div className="nav-content">
//           <div className="nav-logo">H<span>S</span></div>
//           <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//             <li onClick={() => handleScroll("home")}>Home</li>
//             <li onClick={() => handleScroll("about")}>About</li>
//             <li onClick={() => handleScroll("skills")}>Skills</li>
//             <li onClick={() => handleScroll("projects")}>Projects</li>
//             <li onClick={() => handleScroll("certificates")}>Certificates</li>
//             <li onClick={() => handleScroll("contact")}>Contact</li>
//           </ul>
//           <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? "✖" : "☰"}
//           </div>
//         </div>
//       </nav>

//       {/* ===== Particles Layer ===== */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           background: { color: "transparent" },
//           fpsLimit: 60,
//           particles: {
//             number: { value: 80 },
//             color: { value: "#a78bfa" },
//             links: {
//               enable: true,
//               color: "#a78bfa",
//               distance: 150,
//               opacity: 0.3,
//             },
//             move: { enable: true, speed: 1 },
//             size: { value: 2 },
//           },
//         }}
//       />

//       {/* ===== Sections ===== */}
//       <section id="home" className="hero-section">
//         <div className="hero-content">
//           <h1 className="hero-name">Harini Sunkara</h1>
//           <h2 className="hero-role">Full Stack Developer</h2>
//           <p className="hero-desc">
//             I’m passionate about technology. I love to explore new technologies
//             and push the boundaries of what's possible.
//           </p>

//           <div className="hero-icons">
//             <a href="https://github.com/" target="_blank" rel="noreferrer" className="icon github">
//               <i className="fab fa-github"></i>
//             </a>
//             <a href="https://www.linkedin.com/in/harini2213" target="_blank" rel="noreferrer" className="icon linkedin">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//             <a href="https://wa.me/8688531506?text=Hi%20Harini!" target="_blank" rel="noreferrer" className="icon whatsapp">
//               <i className="fab fa-whatsapp"></i>
//             </a>
//             <a href="mailto:harinisunkara2005@gmail.com" target="_blank" rel="noreferrer" className="icon mail">
//               <i className="fa-solid fa-envelope"></i>
//             </a>
//           </div>
//         </div>
//       </section>

//       <section id="about" className="section">
//         <h2>About Me</h2>
//         <p>
//           I'm a Computer Science student passionate about full-stack development.
//           I love building interactive, beautiful web applications using React,
//           Node.js, and Express.
//         </p>
//       </section>

//       <section id="skills" className="section">
//         <h2>Skills</h2>
//         <ul className="skills-list">
//           <li>HTML</li>
//           <li>CSS</li>
//           <li>JavaScript</li>
//           <li>React</li>
//           <li>Node.js</li>
//           <li>Express</li>
//           <li>GitHub</li>
//         </ul>
//       </section>

//       <section id="projects" className="section">
//         <h2>Projects</h2>
//         <p>Showcase of my recent web development projects with live demos.</p>
//       </section>

//       <section id="certificates" className="section">
//         <h2>Certificates</h2>
//         <p>Here are some of my certifications and achievements.</p>
//       </section>

//       <section id="contact" className="section contact">
//         <h2>Contact</h2>
//         <p>Let’s connect! Reach me at:</p>
//         <a href="mailto:harinisunkara2005@gmail.com" className="contact-link">
//           harinisunkara2005@gmail.com
//         </a>
//       </section>
//     </div>
//   );
// };

// export default Start;
import React from "react";

const Projects = () => {
  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <p>Showcase your projects here!</p>
    </div>
  );
};

export default Projects;
