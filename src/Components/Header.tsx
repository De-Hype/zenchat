import { FaUserFriends } from "react-icons/fa";
import { SiZendesk } from "react-icons/si";
import {  IoMdSettings } from "react-icons/io";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import Link from "next/link";

type Props = {};

const Header = (props:Props) => {
  return (
    <div className="flex justify-between items-center py-2 px-4 border-b">
      <SiZendesk className="text-5xl cursor-pointer" />
      <div className="flex items-center gap-5">
        <Link
          className="text-black transition hover:text-blue-700"
          href="/friend-request"
        >
          <FaUserFriends className="text-2xl" />
        </Link>
        <Link
          className="text-black transition hover:text-blue-700"
          href="/chat"
        >
          <BsChatSquareQuoteFill className="text-2xl" />
        </Link>
        <Link
          className="text-black transition hover:text-blue-700"
          href="/call-logs"
        >
          <IoCall className="text-2xl" />
        </Link>
        <Link
          className="text-black transition hover:text-blue-700"
          href="/friend-request"
        >
          <IoMdSettings className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
