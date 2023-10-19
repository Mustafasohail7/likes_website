import '../styles/Features.css'

import { BsSearch,BsFillPencilFill,BsFillCalendarCheckFill } from 'react-icons/bs'

import FeaturesItem from './FeaturesItem'

const Features = () => {

    const features = [
        {id:0, name:'service', heading: 'Choose a service', detail: 'Make a selection from our followers, likes views and comments services', icon:<BsSearch />},
        {id:1, name:'details', heading: 'Enter your details', detail: 'Enter your username and the link to your post', icon:<BsFillPencilFill />},
        {id:2, name:'grow', heading:'Grow your Social Media', detail:'Once your payment is received, we will being right away', icon:<BsFillCalendarCheckFill />}
    ]

  return (
    <div className='features-holder'>
      <div className='features-card-holder'>
        {features.map((features)=>(
            <FeaturesItem key={features.id} feature={features}/>
        ))}
      </div>
    </div>
  )
}

export default Features
