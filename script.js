// start app_05
function animationCubs(){
    const cubes = document.querySelector("body #section .cubes");
    const cube = document.querySelectorAll("body #section .cubes .cube");
    setInterval(function(){
        let NumRanElement = Math.floor(Math.random() * cubes.childElementCount);
        cube[NumRanElement].classList.add('start');
        setTimeout(function(){
            cube[NumRanElement].classList.toggle('start');
        },1000);
    },500);
}
animationCubs();