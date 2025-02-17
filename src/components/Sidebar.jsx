import Folder from "./Folder"
import { useSelector } from "react-redux"

const SideBar = () => {
    const fileSystem = useSelector((state) => state.fileSystem)
    return (
        <div className="sidebar">
            <h3>File Explorer</h3>
            <Folder data={fileSystem} />
        </div>
    )
}

export default SideBar