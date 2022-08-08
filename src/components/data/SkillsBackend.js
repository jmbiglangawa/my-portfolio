import Git from './skills/Git'
import Heroku from './skills/Heroku'
import Hibernate from './skills/Hibernate'
import Java from './skills/Java'
import Maven from './skills/Maven'
import Nodejs from './skills/Nodejs'
import Spring from './skills/Spring'
import SQL from './skills/SQL'

const SkillsBackend = [
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

export default SkillsBackend
