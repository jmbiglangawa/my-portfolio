import Bootstrap from './Bootstrap'
import Css3 from './Css3'
import Firebase from './Firebase'
import Git from './Git'
import Heroku from './Heroku'
import Hibernate from './Hibernate'
import Html from './Html'
import Java from './Java'
import Javascript from './Javascript'
import Jquery from './Jquery'
import Maven from './Maven'
import Nodejs from './Nodejs'
import ReactIcon from './ReactIcon'
import Sass from './Sass'
import Spring from './Spring'
import SQL from './SQL'

const FrontendSkills = [
    {
        id: 'react',
        icon: <ReactIcon />,
        command: 'react',
        output:
            'One of the best Frontend libraries out there (Number 1 on my list!). I love using React in my projects as it provides the same level of component management as Java. It also has a ton of free libraries available at npmjs.com that helps development become faster and more efficient!',
    },
    {
        id: 'javascript',
        icon: <Javascript />,
        command: 'javascript',
        output:
            "Basic programming language a browser can handle. This language has grown over the years and I started using it by the time it was easiest to learn, which is recently. I love using ES6 as it resembles Java's stream API and it makes codes very easy to read and understand.",
    },
    {
        id: 'html',
        icon: <Html />,
        command: 'html',
        output:
            "Contains your good 'ol HTML tags that displays stuff on the browser. I barely code .html files and use html tags on React instead. Coding on the document level is not really good as it throws away any efficiency for simple tasks.",
    },
    {
        id: 'css3',
        icon: <Css3 />,
        command: 'css',
        output:
            'Layout and design manager of your website. This is quite difficult to learn at the start but once you ride the wave, you start coding CSS smoothly. I dislike how one-level CSS files can be so I use SCSS, tailwind, or emotion/styled-components instead.',
    },
    {
        id: 'sass',
        icon: <Sass />,
        command: 'sass',
        output:
            'A very good CSS alternative with importing system. Very useful when segregating your CSS into component level and not to mention the CSS nesting feature it provides.',
    },
    {
        id: 'bootstrap',
        icon: <Bootstrap />,
        command: 'bootstrap',
        output:
            "A big CSS library with many layout and responsiveness helpers. I don't use Boostrap that much as there are better alternatives now (e.g. MUI or TailwindCSS)",
    },
    {
        id: 'jquery',
        icon: <Jquery />,
        command: 'jquery',
        output:
            'A simple Javascript library to simplify DOM manipulation with plusses like simple animations and a quick ajax utility. JQuery is usually required when you do vanilla, and due to that this is at the bottom of my list.',
    },
    {
        id: 'firebase',
        icon: <Firebase />,
        command: 'firebase',
        output:
            'A handy dandy all-in-one hosting service with so many useful features! I frequently use this for my personal projects and it really empowers a frontend-only setup for websites.',
    },
]

const BackendSkills = [
    {
        id: 'java',
        icon: <Java />,
        command: 'java',
        output:
            "My number one expertise and the programming language I love the most at the moment. I really love how programmers can organize with Java and it really proves it's the best programming language by staying in the business for a very long time now (And it still keeps on improving!).",
    },
    {
        id: 'spring-boot',
        icon: <Spring />,
        command: 'spring-boot',
        output:
            "This is the framework that makes Java shine even more than ever. The combination of Spring's dependency injection and IOC and so many utilities is what makes me keep on using Spring Boot.",
    },
    {
        id: 'git',
        icon: <Git />,
        command: 'git',
        output:
            'A source control tool that greatly enables teams to work together on a single project. Learning this is very critical to the delivery of a release!',
    },
    {
        id: 'hibernate',
        icon: <Hibernate />,
        command: 'hibernate',
        output:
            "The ORM behind Java's connectivity with the database. Having hibernate aboard helps with using the Java OOP approach in fetching stuff from the database and yet still enables developers the use of JQL and SQL.",
    },
    {
        id: 'maven',
        icon: <Maven />,
        command: 'maven',
        output:
            'Package management tool that helps with the packaging of your JARs and WARs. This was the most effective yet simple solution versus having a Java app where you have to import every JAR file you need manually.',
    },
    {
        id: 'nodejs',
        icon: <Nodejs />,
        command: 'nodejs',
        output:
            'NodeJS is a command line runtime language that enables people who are expert in Javascript also participate in backend activities. It allows easy setup if partnered with Express to create a RestAPI service.',
    },
    {
        id: 'sql',
        icon: <SQL />,
        command: 'sql',
        output:
            'One of the most fundamental requirements in coding in backend. Knowing how to utilize SQL properly enables a developer to optimize fetch time and enables an application to retrieve data in a short span of time.',
    },
    {
        id: 'heroku',
        icon: <Heroku />,
        command: 'heroku',
        output:
            "Similar with firebase, but this is a handy dandy service I use when deploying Java based apps. They're one of the few hosting services that allows developers to deploy Java code on a server online without paying anything.",
    },
]

export { FrontendSkills, BackendSkills }
