"use client"

import { useState } from "react";
import Footer from "@/Components/Footer"
import Header from "@/Components/Header"
import Image from "next/image";
import unknownUser from "@/assets/unknownUser.jpeg";
import { FaSearch } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

type Props = {}
const page = (props: Props) => {
  const [search, setSearch] = useState("");

  //Search components
  //Messaged user components
  //For the messaged user, it will have this =>
  //image, {username, message}, activestatus
  const handleFriendAdd = (e: any) => {
    e.preventDefault();
    console.log(search);
  };
    
  return (
    <div className="h-screen">
        <Header />
        <section className="h-3/4 my-3 py-2 px-4 flex items-center gap-3">
        <section className="h-full overflow-y-auto border self-start flex flex-col gap-3 px-3 w-1/4 py-2 shadow">
      <form
        onSubmit={handleFriendAdd}
        className="border py-1 px-2 rounded relative flex items-center"
      >
        <input
          onChange={(e: any) => setSearch(e.target.value)}
          type="text"
          name="search"
          id="search"
          placeholder="Add to friend..."
          className="pl-3 pr-8 w-full py-2 outline-none text-sm"
        />
        <FaSearch className="absolute right-3 cursor-pointer" onClick={handleFriendAdd} />
      </form>
      <aside className="">
      <div className="flex items-center justify-between transition px-2 cursor-pointer py-2 border-b hover:bg-slate-200">
          <div className="flex items-center gap-1">
            <Image
              className="rounded-full h-14 w-14"
              src={unknownUser}
              alt="A profile image of the zenchat chat application user, David Hype ."
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-sm">My Sunlight</h3>
              <p className="text-xs font-">I love you...</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <GoDotFill className="text-green-500 font-bold" />
            <p className="font-light text-xs self-end">10:40 AM</p>
          </div>
        </div>
       <div className="flex items-center justify-between transition px-2 cursor-pointer py-2 border-b hover:bg-slate-200">
          <div className="flex items-center gap-1">
            <Image
              className="rounded-full h-14 w-14"
              src={unknownUser}
              alt="A profile image of the zenchat chat application user, David Hype ."
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-sm">Sufficient White</h3>
              <p className="text-xs font-">This is the last...</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <GoDotFill className="text-green-500 font-bold" />
            <p className="font-light text-xs self-end">10:40 AM</p>
          </div>
        </div>
        <div className="flex items-center justify-between transition px-2 cursor-pointer py-2 border-b hover:bg-slate-200">
          <div className="flex items-center gap-1">
            <Image
              className="rounded-full h-14 w-14"
              src={unknownUser}
              alt="A profile image of the zenchat chat application user, David Hype ."
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-sm">David Hype</h3>
              <p className="text-xs font-">Bring jobs.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <GoDotFill className="text-green-500 font-bold" />
            <p className="font-light text-xs self-end">10:40 AM</p>
          </div>
        </div>


      </aside>
    </section>
        </section>
        <Footer />
    </div>
  )
}

export default page