import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem, deleteItem, renameItem } from "../redux/fileSystemSlice";
import File from "./File";


const Folder = ({ folder, path }) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false)
    const [expanded, setExpanded] = useState(false)

    const handleToggle = () => setExpanded(!expanded)

    const handleAddFolder = () => {
        const name = prompt("Enter folder name:");
        if (name) dispatch(addItem({ path, newItem: { name, isFolder: true, children: [] } }))

    }
    const handleAddFile = () => {
        const name = prompt("Enter folder name:");
        if (name) dispatch(addItem({ path, newItem: { name, isFolder: false } }))
    }

    const handleRename = () => {
        const newName = prompt("Enter name:", folder.name);
        if (newName) dispatch(renameItem({ path, newName }))
    }

    const handleDelete = () => {
        dispatch(deleteItem({ path }))
    }

    return (
        <div className="folder">
            <div className="folder-header">
                <div className="icon" onClick={handleToggle}>
                    <span>
                        {folder.isFolder ? (expanded ? "📂" : "📁") : "📄"} {folder.name}
                    </span>
                </div>
                <button className="btn" onClick={handleAddFolder}>+ Folder</button>
                <button className="btn" onClick={handleAddFile}>+ File</button>
                <button className="btn" onClick={handleRename}>Rename</button>
                <button className="btn" onClick={handleDelete}>Delete</button>
            </div>

            {expanded && folder.children?.map((child, index) =>
                child.isFolder ? <Folder key={index} folder={child} path={[...path, child.name]} />
                    : <File key={index} file={child} path={[...path, child.name]} />
            )}
        </div>
    )
}

export default Folder;