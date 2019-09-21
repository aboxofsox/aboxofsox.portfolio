import * as $ from '../js/modules/binds.module.js';
import * as Animate from '../js/modules/animations.module.js';
import * as Projects from '../js/modules/projects.module.js';
import * as Skills from '../js/modules/skill.module.js';

window.addEventListener('load', () =>{
    Animate.fadeIn($.$('body'), 0);
    Animate.fadeIn($.$('header-text-'), 500);
    Projects.buildProjects($.$('projects-'));
    Skills.skillBuilder($.$('skills-'));
    Animate.fadeIn($.$('about-'));
    Animate.fadeIn($.$('projects-'));

});

window.addEventListener('scroll',() =>{
    Animate.scrollDir(document.body, $.$('header-text- h3'));
    
});
