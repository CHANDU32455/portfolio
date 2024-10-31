import React, { memo } from 'react';
import './portfolio.css'; // Ensure this file contains the necessary styles for your projects section
import ebidimg from '../assets/img/—Pngtree—bidding and bidding charity auction_6701939.png';
import tempconimg from '../assets/img/Lovepik_com-380013323-temperature-hot-cold-thermometer.png';
import pda from '../assets/img/virtual_assistant.png';
import kivy from '../assets/img/kivy_yt.png';
import flutter from '../assets/img/flutter todo.png';
import phonebook from '../assets/img/—Pngtree—phonebook icon design vector_3648176.png';
import todo from '../assets/img/—Pngtree—to do list icon cartoon_5080528.png';
import musicplyrimg from '../assets/img/vecteezy_color-music-free-illustration_22983477.png';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: 'Ebidding',
      description: 'Web Development Project',
      imageUrl: ebidimg,
      liveDemoLink: 'https://github.com/CHANDU32455/ebidding/tree/master',
      githubLink: 'https://github.com/CHANDU32455/ebidding/tree/master'
    },
    {
      id: 2,
      title: 'Temperature Converter',
      description: 'Web Development Project',
      imageUrl: tempconimg,
      liveDemoLink: 'https://github.com/CHANDU32455/OIBSIP',
      githubLink: 'https://github.com/CHANDU32455/OIBSIP'
    },
    {
      id: 3,
      title: 'Personal Desktop Assistant',
      description: 'Python Project',
      imageUrl: pda,
      liveDemoLink: 'https://github.com/CHANDU32455/my-work/tree/main/desktop_assistant',
      githubLink: 'https://github.com/CHANDU32455/my-work/tree/main/desktop_assistant'
    },
    {
      id: 4,
      title: 'Kivy YouTube Audio-Video Downloader',
      description: 'Python Project',
      imageUrl: kivy,
      liveDemoLink: 'https://github.com/CHANDU32455/kivy',
      githubLink: 'https://github.com/CHANDU32455/kivy'
    },
    {
      id: 5,
      title: 'Flutter To-Do App',
      description: 'Flutter Project',
      imageUrl: flutter,
      liveDemoLink: 'https://github.com/CHANDU32455/flutter/tree/master',
      githubLink: 'https://github.com/CHANDU32455/flutter/tree/master'
    },
    {
      id: 6,
      title: 'Music Player in Python',
      description: 'Python Project',
      imageUrl: musicplyrimg,
      liveDemoLink: 'https://github.com/CHANDU32455/my-work/tree/main/musicplayer',
      githubLink: 'https://github.com/CHANDU32455/my-work/tree/main/musicplayer'
    },
    {
      id: 7,
      title: 'Phonebook in Python',
      description: 'Python Project',
      imageUrl: phonebook,
      liveDemoLink: 'https://github.com/CHANDU32455/CodeSoft/blob/main/phone%20book',
      githubLink: 'https://github.com/CHANDU32455/CodeSoft/blob/main/phone%20book'
    },
    {
      id: 8,
      title: 'To-Do List in Python',
      description: 'Python Project',
      imageUrl: todo,
      liveDemoLink: 'https://github.com/CHANDU32455/CodeSoft/blob/main/to%20do%20list.py',
      githubLink: 'https://github.com/CHANDU32455/CodeSoft/blob/main/to%20do%20list.py'
    },
  ];

  return (
    <>
    <section id='projects' className="projects-section">
    <h2 className="section-title">Projects</h2>
    </section>
    <section className="projects-section">
      <div className="projects-container">
        {projectData.map((project) => (
          <div className="project-item" key={project.id}>
            <a href={project.liveDemoLink} className="work__img" target="_blank" rel="noopener noreferrer">
              <img src={project.imageUrl} alt={project.title} loading="lazy" />
              <div className="overlay">
                <div className="overlay-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

// Memoize the Projects component
export default memo(Projects);
