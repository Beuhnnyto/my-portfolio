import React from 'react'
import Navbar from './Navbar'
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import SpaceSquad from '../assets/SpaceSquad.png'
import AlpineBouzeb from '../assets/AlpineBouzeb.png'
import YourEfrei from '../assets/YourEfrei.png'



const Home = () => {
  return (
    <>
    

    <Navbar />
  <main >
    <section>
  <div className="text-center p-10 py-10">
          <h2 id="about" className="text-5xl py-2 text-lime-600 font-medium md:text-6xl">
            Adam MALEK
          </h2>
          <h3 className="text-2xl py-2  md:text-3xl">
            Dev & Data Student.
          </h3>
          <p className="text-md py-5 leading-8  max-w-xl mx-auto md:text-xl">
            I'm a 22 years old student from France, currently studying
            development at <span className="text-blue-600 font-extrabold underline"><a href="https://www.efrei.fr" target='_blank' rel='noreferrer'>EFREI</a></span> and data science & cybersecurity in personal time. 
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 ">
            <a href="https://www.linkedin.com/in/malekadam/" target='_blank' rel='noreferrer'><AiFillLinkedin className='hover:scale-105 hover:text-lime-400'/></a>
            <a href="https://github.com/Beuhnnyto" target='_blank' rel='noreferrer'><AiOutlineGithub className='hover:scale-105 hover:text-lime-400'/></a>
            
          </div>
        </div>
      </section>
      <section className='flex-col text-center items-center'>
<div>
  <h3 id='skills' className="text-3xl py-1">Capabilities</h3>
  <p className="text-md py-2 leading-8"></p>
</div>
<div className='font-serif grid grid-cols-1 md:grid-cols-3 md:px-10 gap-10 justify-center mx-auto'>
  <div className="text-center border-2 border-lime-400 shadow shadow-lime-400 p-10 rounded-xl my-10 max-w-md">
    <h3 className="text-3xl font-semibold underline text-[#e3d9e7] font-mono pt-8 pb-2">
      Known Techs
    </h3>
    <p className="py-2 flex-wrap">
      <span className="underline font-extrabold">Frontend</span> : React, NextJS, Javascript, TailwindCSS, HTML, CSS <br />
      <span className='underline font-extrabold'> Backend</span> : NodeJS (Express), Python (Flask) <br />
      <span className='underline font-extrabold'> Data</span> : Python (Pandas, Numpy, Matplotlib, Scikit-Learn), SQL (PostgreSQL, MySQL), Excel, PowerBI <br />
      <span className='underline font-extrabold'> Environment</span> : Git, Docker, Linux (Debian, Ubuntu, Kali), Windows
    </p>
  </div>

  <div className="text-center border-2 border-lime-400 shadow shadow-lime-400 p-10 rounded-xl my-10 max-w-md">
    <h3 className="text-3xl font-semibold underline text-[#e3d9e7] font-mono pt-8 pb-2">
      Soft Skills
    </h3>
    <p className="py-2 flex-wrap">
      <span className='underline font-extrabold'>Interpersonal </span>: Teamwork, Communication, Adaptability, Problem Solving <br />
      <span className='underline font-extrabold'> Management </span>: Leadership, Organization, Time Management, Decision Making <br />
      <span className='underline font-extrabold'> Other </span>: Creativity, Critical Thinking, Curiosity, Motivation <br />
      <span className='underline font-extrabold'> Languages</span> : French (Native), English (Fluent), Spanish (In progress), Korean (In progress) <br />
    </p>
  </div>

  <div className="text-center border-2 border-lime-400 shadow shadow-lime-400 p-10 rounded-xl my-10 max-w-md">
    <h3 className="text-3xl font-semibold underline text-[#e3d9e7] font-mono pt-8 pb-2">
      Hobbies
    </h3>
    <p className="py-2 flex-wrap">
      <span className='underline font-extrabold'> Primary </span>: Cooking, Music, Video Games(Tabletop RPGs, Assassin's Creed, The Witcher...), Programming <br />
      <span className='underline font-extrabold'> Secondary </span>: Watching Sports(F1, MotoGP, MMA) , Reading (Fantasy, Sci-Fi)
            
    </p>
  </div>
</div>
</section>
<section className='py-10'>
<div className='flex flex-col items-center'>
  <h3 id='projects' className="text-3xl py-1">Projects</h3>
  </div>
  <div className='grid grid-cols-1 md:grid-cols-3 md:px-10 gap-10 justify-center mx-auto'>
  <div className='flex flex-col items-center'>
    <img src={SpaceSquad} alt='SpaceSquad' />
    <p className='text-center'>SpaceSquad is a website team project retracing the history of space exploration with minigames and others functionalities</p>
    <p className='text-center'> Built with HTML CSS and Javascript</p>
  </div>

  <div className='flex flex-col items-center'>
    <img src={AlpineBouzeb} alt='AlpineBouzeb' />
    <p className='text-center'>Bouzeb Motos is a website for searching and filtering motorbikes.</p>
    <p className='text-center'> Built with AlpineJS HTML and TailwindCSS </p>
  </div>
  <div className='flex flex-col items-center'>
    <img src={YourEfrei} alt='YourEfrei' />
    <p className='text-center'>YourEfrei is a website simulating the intranet of Efrei, it's a project with front and Backend.</p>
    <p className='text-center'> Built with React, NodeJS, Express, MySQL and CSS </p>
  </div>

  </div>

</section>
<section className='py-10'>
<div className='flex flex-col items-center'>
  <h3 id='contact' className="text-3xl py-1">Contact</h3>
  </div>
  <h4 className='text-center'>Please contact me by mail: </h4>
  <a href='mailto:adam.malek@efrei.net'>
  <HiMail className="mx-auto text-white text-4xl hover:scale-105 hover:text-lime-400" />
    </a>

</section>

        
    
  </main>
  </>
  )
}

export default Home