import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { addItem } from "../redux/fileSystemSlice";
import Folder from "./Folder";


const FileExplorer = () => {
    const fileSystem = useSelector((state) => state.fileSystem)
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addItem({ path: ["root"], newItem: { name: "qwe.pdf", isFolder: false } }))
    }

    return (
        <div className="explorer">
            <Folder folder={fileSystem} path={[]} />
        </div>
    )
}

export default FileExplorer