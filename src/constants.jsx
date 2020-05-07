
const AboutAuthor = {
    name: "Sudharshan Tk",
    nickname: "Shan.tk",
    email: "tksudharshan@infozy.tk",
    shortdesc: "CA Final Student and a Full Stack Developer",
    longdesc: "Currently Pursuing Articleship in a CA Firm and Doing some Full Stack web Development/Mobile Development in my Free Time. Complete List of known Technologies can be Seen Below",
    fronttechnologies: [
        "HTML5",
        "CSS3",
        "JS-ES6",
        "Jquery",
        "Bootstrap",
        "React"
    ],
    backendtechnologies: [
        "NodeJs",
        "Ejs Templating",
        "Api Management",
        "Databases - SQL as well as NO-SQL",
        "MongoDB",
        "RESTfull Api Development",
        "Secure Authentication - oAuth, Local"
    ],
    mobiletechnologies: [
        "Complete Flutter Development",
        "Android Rom Development",
    ],
    datarelatedtechnologies: [
        "Microsoft Excel VBA",
        "Python with AI and Machine Learning",
    ]
}

const HeaderItems = {
    line1: "Open",  //What do you do in 3 Lines Short and Sweet
    line2: "Your Eyes",  //What do you do in 3 Lines Short and Sweet
    line3: "Scroll Down",   //What do you do in 3 Lines Short and Sweet
    button1: {
        name: "About Me",
        link: "#about"
    },
    button2: {
        name: "My Projects",
        link: "#projects"
    }
}

const MenuItems = [
    {
        displayname: "Home",
        link: "#welcome-section"
    },
    {
        displayname: "About",
        link: "#about"
    },
    {
        displayname: "Portfolio",
        link: "#projects"
    },
    {
        displayname: "Contact",
        link: "#contact"
    }
];

const NavbarTrimValue = 3;

const ProjectsList = {
    overview: "Here's a list of most of the projects I've been working on lately. All of these were built during my Free Time.",
    projectList: [
        {
            title: "Infozy",
            image: "https://infozy.tk/assets/icons/favicons/mstile-310x310.png",
            icon: "js css sass",
            link: "https://infozy.tk",
            repo: "https://github.com/tks18/infozy",
            shortdesc: "Built using Sass and jquery, Fully Automatic Fetching of Posts from Rss Feeds with No Backend.",
            longdesc: "This is a full-stack website that I made which lets the users can get Latest News/ the Home Page for Other Websites under the Group."
        },
        {
            title: "Flutter Mobile Chat App",
            image: "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
            icon: "",
            link: "#",
            repo: "https://github.com/tks18",
            shortdesc: "Built using Flutter native Android Library.",
            longdesc: "Currently Under Development."
        }
    ]
}

const SocialList = [
    {
        name: "Twitter",
        link: "https://twitter.com/shantk18",
        icon: "fab fa-twitter"
    },
    {
        name: "GitHub",
        link: "https://github.com/tks18",
        icon: "fab fa-github"
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/shantk18/",
        icon: "fab fa-linkedin"
    },
    {
        name: "LinkedIn",
        link: "https://www.instagram.com/shantk18//",
        icon: "fab fa-instagram"
    }
]


export {AboutAuthor, HeaderItems, MenuItems, NavbarTrimValue, ProjectsList, SocialList};