type Props = {}
const page = (props: Props) => {
    const HandleRegister=(e)=>{
        e.preventDefault()
    }
  return (
    <div className="min-h-screen">
        <form className="">
            <input type="text" name="name" placeholder="Name" id="" />
            <input type="text" name="username" placeholder="Username" id="" />
            <input type="password" name="password" placeholder="Password" id="" />
            <input type="submit" value="Register" onClick={HandleRegister} />
        </form>
        <button type="button">Google</button>
        <button type="button">Facebook</button>
    </div>
  )
}

export default page