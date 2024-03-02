"use client"
import { useState } from "react"

type Props = {}
const page = (props: Props) => {
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const HandleRegister=(e:any) =>{
        e.preventDefault()
    }
  return (
    <div className="min-h-screen">
      <div className="">
        <form onSubmit={HandleRegister} className="">
            <input type="text" name="name" placeholder="Name" id="" />
            <input type="text" name="username" placeholder="Username" id="" />
            <input type="password" name="password" placeholder="Password" id="" />
            <input type="submit" value="Register" onClick={(e)=>HandleRegister(e)} />
        </form>
        <button className="" type="button">Register with Google</button>
        <button className="" type="button">Register with Github</button>
      </div>
    </div>
  )
}

export default page