const fadeIn = (element, time) =>{
    setTimeout(() =>{
        element.style.opacity = 1;
    }, time)
}
const fadeOut = (element, time) =>{
    setTimeout(() =>{
        element.style.opacity = 0;
    }, time);
}
const scrollMagic = (parent, child) =>{
    let vpW, vpH;

    if(typeof window.innerWidth !=- 'undefined'){
        vpW = window.innerWidth,
        vpH = window.innerHeight;
    }

    else if(typeof document.documentElement != 'undefined' &&
        typeof document.documentElement.clientWidth != 'undefined' &&
        typeof document.documentElement.clientWidth != 0){
            vpW = document.documentElement.clientWidth,
            vpH = document.documentElement.clientHeight;
    }
    else {
        vpW = document.getElementsByTagName('body')[0].clientWidth,
        vpH = document.getElementsByTagName('body')[0].clientHeight;
    }

    return [vpW, vpH];
}
const slideIn = (element) =>{
    element.style.transform = 'translateX(0) translateY(0)';
    element.style.opacity = 1;
}
const isTop = (element) =>{
    let bounding = element.getBoundingClientRect();

    if(bounding.top <= 0){
            return true;
    } else {
        return false;
    }
    if(bounding.top > 0){
        return false;
    }
}

const colorTrans = (element) =>{
    element.style.backgroundColor = '#0D0D0D';
}

let pos = 0;
let rem = 10;
const scrollDir = (element, child) =>{
    

    if((element.getBoundingClientRect()).top > pos){
        
        //console.log('scrolling up');
    } else {
        //console.log('scrolling down');
    }
    pos = (element.getBoundingClientRect()).top;
}

export {fadeIn, fadeOut, slideIn, isTop, scrollDir, colorTrans}