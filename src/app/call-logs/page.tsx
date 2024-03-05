"use client"
import Link from "next/link"
import Header from "@/Components/Header";

type Props = {}
const page = (props: Props) => {
    
  return (
    <div className="min-h-screen">
    <Header />
    <div className="flex justify-center items-center">
    <div className="flex flex-col items-center">
        <h3>This page is under development by David Hyp   e</h3>
        <Link href="/chat">Go to chat</Link>
    </div>
    </div>
    </div>
  )
}

export default page