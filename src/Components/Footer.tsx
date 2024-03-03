import Link from "next/link";


type Props = {};
const Footer = (props: Props) => {
  return (
    <section>
      <h3 className="text-center">
          <span>Created by </span>
          <Link
            className="text-black font-extrabold transition hover:text-red-500"
            href="https:?/hire-david-hype.vercel.app"
          >
            David Hype
          </Link>
        </h3>
    </section>
  )
}

export default Footer;