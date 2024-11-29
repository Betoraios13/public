const header = document.querySelector('.we_header');
const body = document.body;
let lastValue = window.scrollY;
let subindo = false;
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () =>{
    const currentValue = window.scrollY;
    if(currentValue > lastValue){
        //decendo
        if(subindo == true){
            header.style.animation = 'exitHeaderfixo 1s';
            header.style.top = `-${headerHeight}vw`;
            subindo = false;
        }
    }else if(currentValue < lastValue){
        //subindo
        if(subindo == false){
            header.classList.add('we_header_fix');
            body.style.marginTop = `${7}vw`;
            header.style.animation = 'enterHeaderfixo 1s';
            header.style.top = '0vw';
            subindo = true;
        }
    }
    lastValue = currentValue;
    if(scrollY == 0){
        subindo = false;
        header.style.animation = 'none';
        header.style.top = `-${headerHeight}vw`;
        header.classList.remove('we_header_fix');
        body.style.marginTop = '0vw';
    }
});