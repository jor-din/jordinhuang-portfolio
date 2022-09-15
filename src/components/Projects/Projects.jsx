import React from 'react'
import ProjectCard from './ProjectCard'
import Remind from '../../Assets/remind hackathon.png'
import Zombodie from '../../Assets/zombodie-2-love-landing.png'
import Whitelights from '../../Assets/wl-landing page.png'
import TTT from '../../Assets/ttt-landing.png'
import './Projects.css'
import Container from '@mui/material/Container';


const Projects = (props) => {
  return (
    <Container className='projects'>
        <div className='projects-title'>
            <h2>Projects</h2>
        </div>
        <div className="project-cards">
        <ProjectCard 
            img={Remind}
            alt = 'img of re/mind'
            title='Re/Mind'
            description='(Hackathon Group Project). A MERN stack application that promotes positive thinking and resilience by recording three positive thing that happens during the day.'
            deployment='https://remind-jbs.netlify.app/'
            github='https://github.com/ssemlitz/jbs-hackathon-front-end'
        />
        <ProjectCard 
            img={Zombodie}
            alt = 'img of zombodie'
            title='Zombodie2Love'
            description='(Group Project). A MERN stack dating application that allow users to view potential matches and chat in real time using socket.io.'
            deployment='https://zombodie-2-love.netlify.app/'
            github='https://github.com/ssemlitz/zombodie-2-love-front-end'
        />
        <ProjectCard 
            img={Whitelights}
            alt = 'img of wl'
            title='Whitelights'
            description='A MEN stack workout tracker allowing users to create, view, update and delete workouts.'
            deployment='https://whitelights.herokuapp.com/'
            github='https://github.com/jor-din/powerlift-tracker'
        />
        <ProjectCard 
            img={TTT}
            alt = 'img of ttt'
            title='Tic Tac Toe'
            description='Simple tic-tac-toe using vanilla Javascript, HTML, CSS'
            deployment='https://ttt-jordinh.netlify.app/'
            github='https://github.com/jor-din/ttt-weekend'
        />
        </div>
    </Container>
  )
}

export default Projects