import { FaUserFriends } from "react-icons/fa";
import { SiZendesk } from "react-icons/si";
import {IoMdNotifications, IoMdSettings } from "react-icons/io";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
        <SiZendesk className="text-xl" />
        <div className="">
          <FaUserFriends className="" />
          <IoMdNotifications className="" />
          <IoMdSettings className="" />
        </div>
    </div>
  )
}

export default Header