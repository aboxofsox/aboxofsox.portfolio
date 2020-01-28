window.addEventListener('load', () =>{
    console.log('loaded');
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(bar =>{
        if(bar.getAttribute('id') == 'html') {
            bar.style.width = '76%'
        }
        if(bar.getAttribute('id') == 'css') {
            bar.style.width = '68%'
        }
        if(bar.getAttribute('id') == 'js') {
            bar.style.width = '62%'
        }
    });
});