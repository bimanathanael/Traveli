import { Hero } from '../components/home/Hero'
import { Benefits } from '../components/home/Benefits'
import { News } from '../components/home/News'
import { Partners } from '../components/home/Partners'
import { Testimonials } from '../components/home/Testimonials'
import { Why } from '../components/home/Why'
import { Provide } from '../components/home/Provide'

export const Home = () => {

  return (
    <>
      <div>
        <Hero/>
        <Why/>
        <Provide/>
        <Benefits/>
        <News/>
        <Partners/>
        <Testimonials/>
      </div>
    </>
  )
}

