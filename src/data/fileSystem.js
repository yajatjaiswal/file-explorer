const fileSystem = {
    name: "root",
    isFolder: true,
    children: [
        {
            name: "Documents",
            isFolder: true,
            children: [
                { name: "sample.pdf", isFolder: false },
                { name: "noteSample.txt", isFolder: false },
            ],
        },
        {
            name: "Pictures",
            isFolder: true,
            children: [
                { name: "pic.jpeg", isFolder: false },
                { name: "pic1.jpeg", isFolder: false },
            ]
        },
        // { user: "README.md", isFolder: false }
    ]
}

export default fileSystem