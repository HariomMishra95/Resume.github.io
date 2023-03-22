var progressbar=document.querySelectorAll('.skill-progress>div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll());
function initialBar(){
    for(let bar of progressBars){
        bar.style.width=0+'%';
    }
}
initialBar();
function fillBars(){
    for (let bar of progressBars){
        let targetwidth=bar.getAttribute('data-bar-width');
        let currentwidth=0;
        let interval=setInterval(function(){
            if(currentwidth=targetwidth){
                clearInterval(interval);
                return;
            }
            currentwidth++;
            bar.style.width=currentwidth+'%';
        },5);
    }
}
function checkScroll(){
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone&&coordinates.top<=window.innerHeight){
        animationDone=true;
        console.log("hay");
        fillBars();
    }else if(coordinates.top>window.innerHeight){
        animationDone=false;
        initialBar();
    }
}