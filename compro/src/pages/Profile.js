import { Hero } from '../components/profile/Hero'
import { AboutUs } from '../components/profile/AboutUs'
import { VisionMission } from '../components/profile/VisionMission'
import { Team } from '../components/profile/Team'
import { useEffect, useState } from 'react'

export const Profile = () => {

  let [dataProfile, setDataProfile] = useState()

  useEffect( ()=> {
    fetch(`https://pacific-hamlet-79377.herokuapp.com/id/Profile`)
    .then( resp => resp.json() )
    .then( data => {
      setDataProfile(data.message)
    })
  }
  ,[])

  return (
    <>
      { dataProfile != undefined ? 
        <div>
          <Hero data={dataProfile.Hero}/>
          <AboutUs data={dataProfile}/>
          <VisionMission data={dataProfile.VisiMisi}/>
          <Team/>
        </div>
        :
        null
      }
    </>
  )
}

