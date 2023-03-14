import Feed from "../components/forum-page/Feed"
import Sidebar from "../components/forum-page/Sidebar"
import Widgets from "../components/forum-page/Widgets"
import "./forum.css"

const ForumPage = () => {
    return (
        <div className="app">
            <Sidebar/>
            <Feed/>
            <Widgets/>
        </div>
    )
}

export default ForumPage