import { reactive } from 'vue'

export const store = reactive({
    links: [
        {
            text: "Courses",
            url: "#"
        },
        {
            text: "Course Formats",
            url: "#"
        },
        {
            text: "Add Course",
            url: "#"
        },
        {
            text: "Pages",
            url: "#"
        },
        {
            text: "Demos",
            url: "#"
        }
    ],

    about: [
        {
            title: "ABOUT",
            text: "Masterstudy is Education WordPress theme featured by Learning Management System (LMS) for online education.",
            developed: "Developed by StylemixThemes.",
            facebookIcon: `<i class="fa-brands fa-facebook"></i>`,
        }
    ],
    contact: [
        {
            title: "CONTACT",
            address: "USA, California 20, First Avenue, California",
            tel: "Tel.: +1 212 458 300 32",
            fax: "Fax: +1 212 375 24 14",
            email: "info@masterstudy.com"
        },
    ],
    pages: [
        {
            title: "PAGES",
            firstPagesList: ["Blog", "Home", "Shortcodes"],
            secondPagesList: ["Courses", "Membership A...", "Typography"],
        },
    ],
    blog: [
        {
            title: "BLOG",
        }
    ]

})


// {
//     about: [
//         {
//             title: "ABOUT",
//             text: "Masterstudy is Education WordPress theme featured by Learning Management System (LMS) for online education.",
//             developed: "Developed by StylemixThemes.",
//             icons: [
//                 `<i class="fa-brands fa-facebook"></i>`,
//                 `<i class="fa-brands fa-twitter"></i>`,
//                 `<i class="fa-brands fa-instagram"></i>`
//             ]
//         }
//     ]



// },
// {
//     contact: {
//         title: "CONTACT",
//     }
// },
// {
//     pages: {
//         title: "PAGES",
//     }
// },
// {
//     blog: {
//         title: "BLOG",
//     }
// }