

window.addEventListener('scroll', () =>{
    let y = window.scrollY;
    const scrollBtn = document.querySelector('.btn-scroll');
    const nav = document.querySelector('.navigation');

    if(y > 5)
    {
        scrollBtn.style.opacity = 1;
        scrollBtn.style.pointerEvents = 'auto';
    }
    else {
        scrollBtn.style.opacity = 0;
        scrollBtn.style.pointerEvents = 'none';
    }
});