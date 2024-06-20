import './Hero.scss'
import hero from '../assets/image-hero-mobile.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <img src={hero} />
    </div>
  )
}
