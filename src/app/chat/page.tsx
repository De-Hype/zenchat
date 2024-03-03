import ChatSidebar from "@/Components/ChatSidebar"
import Header from "@/Components/Header"
import UserSideBar from "@/Components/UserSideBar"

type Props = {}
const page = (props: Props) => {
    
  return (
    <div className="min-h-screen">
        <Header />
        <section className="py-2 px-4 flex items-center gap-3">
          <UserSideBar />
          <ChatSidebar />
        </section>
    </div>
  )
}

export default page