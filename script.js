let count = 1;
const btnMobile =document.getElementById('btn-mobile');
function toggleMenu(event){
    if (event.type == 'touchstart') event.preventDefault();
        const nav2 = document.getElementById('conteiner');
        nav2.classList.toggle('active'); 
        const active = nav2.classList.contains('active');
        event.currentTarget.setAttribute('arial-expended', active);
        if(active){
            event.currentTarget.setAttribute('aria-label' , 'Fechar menu')
        } else{
            event.currentTarget.setAttribute('aria-label' , 'Abrir menu')
        }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function loading() {
    document.getElementsByClassName('box-pre')[0].style.display = "none";    
    document.getElementsByClassName('content')[0].style.display = "block"; 
}


