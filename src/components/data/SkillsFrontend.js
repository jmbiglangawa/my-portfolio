import Bootstrap from './skills/Bootstrap'
import Css3 from './skills/Css3'
import Firebase from './skills/Firebase'
import Html from './skills/Html'
import Javascript from './skills/Javascript'
import Jquery from './skills/Jquery'
import ReactIcon from './skills/ReactIcon'
import Sass from './skills/Sass'

const SkillsFrontend = [
    {
        id: 'react',
        icon: <ReactIcon />,
        png: 'ReactIcon',
        label: 'React',
        command: 'react',
        output:
            'One of the best Frontend libraries out there (Number 1 on my list!). I love using React in my projects as it provides the same level of component management as Java. It also has a ton of free libraries available at npmjs.com that helps development become faster and more efficient!',
    },
    {
        id: 'javascript',
        icon: <Javascript />,
        png: 'Javascript',
        command: 'javascript',
        output:
            "Basic programming language a browser can handle. This language has grown over the years and I started using it by the time it was easiest to learn, which is recently. I love using ES6 as it resembles Java's stream API and it makes codes very easy to read and understand.",
    },
    {
        id: 'html',
        icon: <Html />,
        png: 'Html',
        command: 'html',
        output:
            "Contains your good 'ol HTML tags that displays stuff on the browser. I barely code .html files and use html tags on React instead. Coding on the document level is not really good as it throws away any efficiency for simple tasks.",
    },
    {
        id: 'css3',
        icon: <Css3 />,
        png: 'Css3',
        label: 'Css',
        command: 'css',
        output:
            'Layout and design manager of your website. This is quite difficult to learn at the start but once you ride the wave, you start coding CSS smoothly. I dislike how one-level CSS files can be so I use SCSS, tailwind, or emotion/styled-components instead.',
    },
    {
        id: 'sass',
        icon: <Sass />,
        png: 'Sass',
        command: 'sass',
        output:
            'A very good CSS alternative with importing system. Very useful when segregating your CSS into component level and not to mention the CSS nesting feature it provides.',
    },
    {
        id: 'bootstrap',
        icon: <Bootstrap />,
        png: 'Bootstrap',
        command: 'bootstrap',
        output:
            "A big CSS library with many layout and responsiveness helpers. I don't use Boostrap that much as there are better alternatives now (e.g. MUI or TailwindCSS)",
    },
    {
        id: 'jquery',
        icon: <Jquery />,
        png: 'Jquery',
        command: 'jquery',
        output:
            'A simple Javascript library to simplify DOM manipulation with plusses like simple animations and a quick ajax utility. JQuery is usually required when you do vanilla, and due to that this is at the bottom of my list.',
    },
    {
        id: 'firebase',
        icon: <Firebase />,
        png: 'Firebase',
        command: 'firebase',
        output:
            'A handy dandy all-in-one hosting service with so many useful features! I frequently use this for my personal projects and it really empowers a frontend-only setup for websites.',
    },
]

export default SkillsFrontend
