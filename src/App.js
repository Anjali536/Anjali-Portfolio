import React from "react";
import Hero from "./components/Hero";
import myImage from "./anjali.jpg";
import { SiHtml5, SiCss3, SiReact, SiYoutube } from 'react-icons/si';
import { SiDjango, SiJavascript, SiPostman } from 'react-icons/si';
import { SiBootstrap, SiTailwindcss, SiYoutubekids, SiGithub } from 'react-icons/si';
import myVideo from "./Todo-App.mp4";
import Video3 from "./Portfolio.mp4";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Video2 from "./Truthabra.mp4";

const Home = () => {
  return (
    <>
    <div className="profile-container">
      <img src={myImage} alt="My image" className="profile-pic" />
    </div>
    <div className="hero-container">
      <h1>Hi, I am <span className="hero-title">Anjali Thakur</span></h1>
    </div>
    <Hero />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="stars"></div> {/* background */}
      {/* Sections */}
      <section id="home">
        <Home />
      </section>

      <section id="about" class="about-section">
          <h2>About Me?</h2>
          <p>A developer in its mission to make every website functional, responsive, and smooth like BUTTER!</p>
          <div className="About-container">
          <div className="Technology-container">
            <h2>Technologies</h2>
            <div className="tech-list-container">
              <div className="tech-element">
                <SiHtml5 size={50} color="#E34F26" />
                <p>HTML</p>
              </div>
              <div className="tech-element">
                <SiCss3 size={50} color="#1572B6" />
                <p>CSS</p>
              </div>
              <div className="tech-element">
                <SiJavascript size={50} color="#F7DF1E" />
                <p>JavaScript</p>
              </div>
              <div className="tech-element">
                <SiReact size={50} color="#61DAFB" />
                <p>React</p>
              </div>
              <div className="tech-element">
                <SiDjango size={50} color="#1b1ba9ff" />
                <p>Django</p>
              </div>
              <div className="tech-element">
                <SiPostman size={50} color="#FF6C37" />
                <p>REST Api</p>
              </div>
            </div>
          </div>
          <div className="Technology-container">
            <h2>Frameworks</h2>
            <div className="tech-list-container">
              <div className="tech-element">
                <SiBootstrap size={50} color="#563d7c" />
                <p>Bootstrap</p>
              </div>
              <div className="tech-element">
                <SiTailwindcss size={50} color="#38b2ac" />
                <p>Tailwind CSS</p>
              </div>
              <div className="tech-element">
                <SiYoutubekids size={50} color="#007fff" />
                <p>Material-UI</p>
              </div>
              <div className="tech-element">
                <SiPostman size={50} color="#1b1ba9ff" />
                <p>Django REST</p>
              </div>
              <div className="tech-element">
                <SiGithub size={50} color="#1b1ba9ff" />
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
        </section>

      <section id="projects" className="project-section">
        <h2>My Projects</h2>
          <div className="project-container">
              <video className="project-video" src={myVideo} autoPlay loop muted></video>
              <div className="project-content">
                <h3>TodoX — Smart Task Manager</h3>
                <p>A Modern and efficient Task Management Website Which allows user to 
                  Edit , Delete , Search all their tasks. The most magical and Secretive 
                  Function among all these is "User can Archive the their Tasks!"
                  And No you cant search them up too!, Now you can Hide your tasks and play with the website too!
                  Todo App also has User Authentication with secure Passwords and Name, That Means
                  No snippers allowed!
                  Do check out the source code on GitHub for more details.
                </p>
                <a
                  href="https://github.com/Anjali536/Todo-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <GitHubIcon /> View Source
                </a>
              </div>
          </div>
          <div className="project-container">
            <video className="project-video2" src={Video2} autoPlay loop muted></video>
            <div className="project-content">
                <h3>TruthAbra — AI-Powered Fact-Checker</h3>
                <p>TruthAbra is a smart fact-checking tool designed to 
                  help users quickly verify the authenticity of claims,
                  news headlines, and viral posts. By comparing user-submitted 
                  text against trusted online sources, it provides a similarity
                  score, related posts, and a concise verdict. Built with React 
                  for a clean, responsive interface and powered by an intelligent 
                  backend, TruthAbra makes misinformation detection simple, fast, and accessible.
                </p>
                <a
                  href="https://github.com/Anjali536/TruthAbra-Factcheck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <GitHubIcon /> View Source
                </a>
              </div>
          </div>
          <div className="project-container">
            <video className="project-video2" src={Video3} autoPlay loop muted></video>
            <div className="project-content">
                <h3>Personal Portfolio Website </h3>
                <p>A responsive, interactive portfolio built 
                  with React, Tailwind CSS, and Material UI 
                  to showcase my projects and skills. 
                  Designed with smooth animations, custom components, 
                  and optimized for all devices.
                </p>
                <a
                  href="https://github.com/Anjali536/Portfolio.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <GitHubIcon /> View Source
                </a>
              </div>
          </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
          <div className="contact-container">
            {/* Top Line */}
            <p className="contact-intro">
              &lt;Lets Make the Internet a Cooler Place/&gt;
            </p>

            {/* Middle Row */}
            <div className="contact-middle">
              <div className="contact-left">
                <MailOutlineIcon fontSize="large" className="social-icon"/>
                <p>sarojini46k@gmail.com</p>
              </div>
              <div className="contact-right">
                <p className="name">Anjali Thakur</p>
                <p className="college">Galgotias College of Engineering and Technology</p>
                <p className="college">Greater Noida, Noida</p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="contact-bottom">
              <div className="social-icons">
                <a href="https://github.com/Anjali536" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon fontSize="large" className="social-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/anjali-thakur-158686298/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon fontSize="large" className="social-icon"/>
                </a>
              </div>
              <p className="footer-note">© {new Date().getFullYear()} Anjali Thakur. All Rights Reserved.</p>
            </div>
          </div>
        </section>


    </div>
  );
}


export default App;
