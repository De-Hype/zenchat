"use client";
import Link from "next/link";
import { SiZendesk } from "react-icons/si";
import { MdAccountCircle } from "react-icons/md";
type Props = {};
const NotUserHeader = (props: Props) => {
  return (
    <div className="flex items-center justify-between border-b py-2 px-4">
      <SiZendesk className="text-5xl cursor-pointer" />
      <Link className="text-black transition hover:text-blue-700" href="/login">
        <MdAccountCircle className="text-2xl" />
      </Link>
    </div>
  );
};

export default NotUserHeader;
