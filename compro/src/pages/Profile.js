import { Hero } from '../components/profile/Hero'
import { AboutUs } from '../components/profile/AboutUs'
import { VisionMission } from '../components/profile/VisionMission'
import { Team } from '../components/profile/Team'

export const Profile = () => {

  return (
    <>
      <div>
        <Hero/>
        <AboutUs/>
        <VisionMission/>
        <Team/>
      </div>
    </>
  )
}

