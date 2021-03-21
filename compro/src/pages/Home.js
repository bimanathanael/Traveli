import { Hero } from '../components/home/Hero'
import { Benefits } from '../components/home/Benefits'
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
      </div>
    </>
  )
}

