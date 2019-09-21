//Build the projects section.

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const projects = [
    {
        name: 'Whack Chat',
        desc: 'A simple chat application using socket.io, Node.js, Express, MongoDB, and Bcrypt.',
        image: '../public/assets/images/whackchat.png',
        demo: 'https://whack-chat.herokuapp.com/',
    },
    {
        name: 'Valet 2.0',
        desc: 'An application that I entered into an innovation contest for my company.',
        image: '../public/assets/images/valetapp.png',
        demo: 'https://secure-sierra-44285.herokuapp.com/',
    },
    {
        name: 'Computer Services',
        desc: 'A demonstration of my web development skills. No more, no less.',
        image: '../public/assets/images/Computer Services.png',
        demo: '../public/pages/computer.services/index.html',
    }
]

const buildProjects = (parent) =>{
    if(parent != 'undefined' || parent != null)
    {
        projects.forEach((e) =>{
            let project = document.createElement('section');
            project.setAttribute('class', 'project');

            let projectTop = document.createElement('section');
            projectTop.setAttribute('class', 'project-top');

            let projectImg = document.createElement('img');
            projectImg.setAttribute('src', e.image);
            projectImg.setAttribute('class', 'project-img');
            projectTop.appendChild(projectImg);

            let projectTitle = document.createElement('h2');
            let projectTitleText = document.createTextNode(e.name);
            projectTitle.appendChild(projectTitleText);

            let projectBody = document.createElement('section');
            projectBody.setAttribute('class', 'project-body');
            let projectBodyText = document.createTextNode(e.desc);
            let projectDemoLink = document.createElement('a');
            projectDemoLink.setAttribute('href', e.demo);
            let projectDemoBtn = document.createElement('button');
            projectDemoBtn.setAttribute('class', 'btn primary');
            let projectDemoBtnText = document.createTextNode('Demo');
            projectDemoBtn.appendChild(projectDemoBtnText);
            projectDemoLink.appendChild(projectDemoBtn);
            projectBody.appendChild(projectBodyText);


            project.appendChild(projectTop);
            project.appendChild(projectTitle);
            project.appendChild(projectBody);
            project.appendChild(projectDemoLink);


            parent.appendChild(project);
        });
    } else {
        console.log(`Parent element doesn't exist`);
    }
    
}

export {buildProjects}