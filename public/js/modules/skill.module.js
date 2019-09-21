const skills = [
    {
        name: 'HTML',
        desc: `I've been doing web development for nearly a decade. HTML is the backbone of web development, it would be silly not to know it.`,
        image: 'fab fa-html5',
        level: 87,
        subsets: [`HTML5`, `Pug`],
    },
    {
        name: `CSS`,
        desc: `While some have struggled with CSS, as have I, I have a strong background in CSS. It's almost like magic.`,
        image: `fab fa-css3-alt`,
        level: 65,
        subsets: [`CSS3`, `Bootstrap`, `TailWind`],
    },
    {
        name: `JavaScript`,
        desc: `JavaSript has been an area I've been improving over the last several months. I feel strongly about my ability to solve problems programatically using JavaScript.`,
        image: `fab fa-js-square`,
        subsets: [`ES5, 6, 7`, `JQuery`, `React`, `Vue.js`]
    },
    {
        name: `Backend`,
        desc: `Though, I think of myself as more of a frontend developer, I do have a background in some backend technologies.`,
        level: 32,
        image: `fas fa-server`,
        subsets: [`Node.js`, `MongoDB`, `MySQL`, `Python`]
    }
];

const skillBuilder = (parent) => {
    skills.forEach((e) =>{
        let skill = document.createElement('div');
        skill.setAttribute('class', 'skill');

        let skillTop = document.createElement('div');
        skillTop.setAttribute('class','skill-top');

        let skillImg = document.createElement('i');
        skillImg.setAttribute('class', e.image);
        skillTop.appendChild(skillImg);

        let skillTitle = document.createElement('h1');
        let skillTitleText = document.createTextNode(e.name);
        skillTitle.appendChild(skillTitleText);

        let skillBody = document.createElement('p');
        let skillBodyText = document.createTextNode(e.desc);
        skillBody.appendChild(skillBodyText);

        let skillSubsets = document.createElement('div');
        skillSubsets.setAttribute('class', 'skill-subsets');
        e.subsets.forEach((f) =>{
            let skillSubsetSkill = document.createElement('small');
            let skillSubsetSkillText = document.createTextNode(f);
            skillSubsetSkill.appendChild(skillSubsetSkillText);
            skillSubsets.appendChild(skillSubsetSkill);
        });
        skill.appendChild(skillTop);
        skill.appendChild(skillTitle);
        skill.appendChild(skillBody);
        skill.appendChild(skillSubsets);
        parent.appendChild(skill);
    });
}

export {skillBuilder}