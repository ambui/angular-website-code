import { Project } from './project';

export const PROJECTS: Project[] = [
    {   
        title: 'Real Estate Web-App',
        desc: '<p>This Web App was my CSE 445(Distributed Systems) final project. It was coded with C# and using the ASP.NET framework. It is a conglomeration many of the concepts I learned over the semester. Through the use of REST APIs and WCF Services I developed, the app takes location data and returns relevant information about the surroundings (weather, restraunts, stores, etc.). It also has forms authentication with encrypted user data.</p> <hr> <a class="btn btn-primary" href="https://github.com/ambui/RealEstateApp" role="button">View on Github&#187;</a>',
        image: './assets/projects/realEstApp.PNG'
    },
    {
        title: 'ASU Web-Scraper',
        desc: '<p>Web-Scraper for use with ASU\'s Blackboard System. Uses Selenium to create a virtual browser that can be automated. Navigates to a classes discussion board and parses Questions from students and the instructor\'s reponse. The script has been integrated as a lambda function in AWS to automatically pull data. It is being used to gather data for my Capstone project.</p><hr><a class="btn btn-primary" href="https://github.com/ambui/ASU-Web-Scraper" role="button">View on Github&#187;</a>', 
        image: ''
    },
    {
        title: 'Game of Life',
        desc: '<p>Simple implementation of Conway\'s Game of Life with Pygame</p><hr><a class="btn btn-primary" href="#" role="button">View on Github&#187;</a>',
        image: './assets/projects/GoL.gif'
    },
];