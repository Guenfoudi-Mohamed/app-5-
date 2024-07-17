// start app_05
function animationCubs(){
    const cubes = document.querySelector("body #section .cubes");
    const cube = document.querySelectorAll("body #section .cubes .cube");
    setInterval(function(){
        let cubesChildElementCount = 0;  
        console.log(document.querySelector('body').offsetWidth);
        if(document.body.offsetWidth <= 900){
            cubesChildElementCount = 9;
        }else{
            cubesChildElementCount = 49;
        }
        let NumRanElement = Math.floor(Math.random() * cubesChildElementCount);
        console.log(NumRanElement);
        cube[NumRanElement].classList.add('start');
        setTimeout(function(){
            cube[NumRanElement].classList.toggle('start');
        },1000);
    },500);
}
animationCubs();
