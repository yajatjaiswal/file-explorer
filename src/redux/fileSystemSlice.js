import { createSlice } from "@reduxjs/toolkit";
import fileSystem from "../data/fileSystem";

const findFolder = (state, path) => {
    let current = state;
    for (const folder of path) {
        const found = current.children?.find((item) => item.name === folder)
        if (!found || !found.isFolder) return null;
        current = found
    }
    return current
}

const fileSystemSlice = createSlice({
    name: "fileSystem",
    initialState: fileSystem,
    reducers: {
        addItem: (state, action) => {
            const { path, newItem } = action.payload;
            const parentFolder = findFolder(state, path);
            if (parentFolder) {
                if (!parentFolder.children) parentFolder.children = [];
                parentFolder.children.push(newItem);
            }
        },
        renameItem: (state, action) => {
            const { path, newName } = action.payload;
            const parentFolder = findFolder(state, path.slice(0, -1));
            if (parentFolder) {
                const file = parentFolder.children?.find((item) => item.name === path[path.length - 1]);
                if (file) file.name = newName;
            }
        },
        deleteItem: (state, action) => {
            const { path } = action.payload;
            const parentFolder = findFolder(state, path.slice(0, -1))
            if (parentFolder) {
                parentFolder.children = parentFolder.children?.filter((item) => item.name !== path[path.length - 1]);
            }
        }
    },
});

export const { addItem, renameItem, deleteItem } = fileSystemSlice.actions;
export default fileSystemSlice.reducer;