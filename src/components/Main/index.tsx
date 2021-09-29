import Image from 'next/image'
import ilustration from '../../img/hero-illustration.svg'

const Main = ({
  description = 'TypeScript, ReactJS, NextJS, Bootstrap and Sass'
}) => (
  <div>
    <Image
      src={ilustration}
      alt="A developer in front of a code screen."
      width="300px"
    />
    <p>{description}</p>
  </div>
)

export default Main
