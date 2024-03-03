import Image from "next/image";


type Props = {};

const Hero = (props: Props) => {
  // <Image src={} alt="An image of the zenchat chat application." />
  return (
    <section className="px-4 flex items-center justify-between">
      <aside>
        <h3 className="font-extrabold text-4xl text-blue-800">Zenchat</h3>
        <p className="">Join million of users on Zenchat in connecting the world.</p>
      </aside>
     
    </section>
  )
}

export default Hero