"use client"

import { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

type Props = {};

const UserSideBar = (props:Props) => {
    const [search, setSearch] = useState("");

    //Search components
    //Messaged user components
    //For the messaged user, it will have this =>
    //image, {username, message}, activestatus
    // <Image src={} alt="A profile image of the zenchat chat application user, David Hype ." />
    const handleFriendSearch =(e:any)=>{
        e.preventDefault();
        console.log(search);
    }
  return (
    <section className="border flex flex-col gap-3 px-3 w-1/4 py-2">
        <form onSubmit={handleFriendSearch} className="border bg-red-300 relative flex items-center">
            <input onChange={(e:any)=>setSearch(e.target.value)} type="text" name="search" id="search" placeholder="Search friend..." className="px-3 w-full py-2 outline-none text-sm" />
            <FaSearch className="absolute" />
        </form>
        <aside className="">
            <div className="flex items-center justify-between py-2">
                <div className="">
                    <h3 className="font-bolder" >David Hype</h3>
                    <p className="text-sm font-" >This is the last message sent.</p>
                </div>
                <div className="">
                    <GoDotFill className="text-green-500" />
                    <p className="font-light text-xs" >10:40 AM</p>
                </div>
            </div>
        </aside>
    </section>
  )
}

export default UserSideBar