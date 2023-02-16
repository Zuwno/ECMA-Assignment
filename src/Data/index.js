const menus = [
    {id: 1, name: "Trang chủ", link: "/"},
    {id: 2, name: "Dự án", link: "/Projects"},
    {id: 3, name: "Liên hệ", link: "/Contact"},
    {id: 4, name: "Bài viết", link: "/Posts"},
];
const projects = [
    {
        id: 1,
        name: "Dự án 1",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Lâm" },
        ],
    },
    { id: 2, name: "Dự án mẫu", author: "Đạt" },
    {
        id: 3,
        name: "Dự án tốt nghiệp",
        teams: [
            { id: 1, name: "Hưng" },
            { id: 2, name: "Quân" },
            { id: 3, name: "Lâm" },
            { id: 4, name: "Đạt" },
        ],
    },
];
export { projects, menus };