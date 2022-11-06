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

var dt = new Date(); 
    var ndt = new Date();
    
    ndt.setDate(dt.getDate());
    ndt.setFullYear(dt.getFullYear());

    
    var diaSemana = ndt.getDay();
    var dia = ndt.getDate();
    var mes = ndt.getMonth();
    var ano = ndt.getFullYear();

    var meses = new Array ("Janeiro","Fervereiro","Março","Abril","Maio","Junho","Julho", "Agosto", "Setembro","Novembro","Dezembro");

    var semanas = new Array ("Domingo", "Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado");


    document.getElementById("dia").innerHTML = semanas[diaSemana] +", ";
    document.getElementById("date").innerHTML = dia + " ";
    document.getElementById("month").innerHTML = meses[mes] +" de ";
    document.getElementById("Year").innerHTML = ano;

