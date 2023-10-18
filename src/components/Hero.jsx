import '../styles/Hero.css'

import youtube from '../assets/youtube.png'

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="tagline">
        elevate <br/> your Social Media <br/> Presence 
      </h1>
      <p className="sub-tagline">
        We have the best and unmatched quality. <br/> Our service is unparalleled.
      </p>
      <div className='absolute-youtube'>
        <img src={youtube} alt='youtube logo' className='youtube-logo'/>
      </div>
    </div>
  )
}

export default Hero
