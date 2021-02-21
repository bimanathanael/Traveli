import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer'

import { Hero } from '../components/home/Hero'
import { Benefits } from '../components/home/Benefits'
import { Why } from '../components/home/Why'

export const Home = () => {

  return (
    <>
      <div className="Home">
        <Nav/>  
        <Hero/>
        <Why/>
        <Benefits/>
        <Footer/>
      </div>
    </>
  )
}

