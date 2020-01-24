window.addEventListener('load', () =>{
    const pills = document.querySelectorAll('.pill');
    
    pills.forEach(pill =>{
        if(pill.textContent == 'React') {
            pill.style.background = 'var(--red)';
            pill.style.color = 'white';
        }
        if(pill.textContent == 'HTML5') {
            pill.style.background = 'var(--red)';
            pill.style.color = 'white';
        }
        if(pill.textContent == 'Node.js') {
            pill.style.background = 'var(--red)';
            pill.style.color = 'white';
        }
        if(pill.textContent == 'Adobe XD') {
            pill.style.background = 'var(--red)';
            pill.style.color = 'white';
        }
        if(pill.textContent == 'Figma') {
            pill.style.background = 'var(--red)';
            pill.style.color = 'white';
        }
        if(pill.textContent == 'CSS3') {
            pill.style.background = 'var(--red)';
            pill.style.color = 'white';
        }
    });
});
