let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre'];

class Dia {
    constructor(fecha,mes,anio){
        this.fecha = fecha;
        this.mes = mes;
        this.anio = anio;
        this.actividades=null;
    }
    tieneActividades(){
        
    }
}
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function completarCalendario(){
    let mes = new Date().getMonth();
    let cantidadDiasMesPasado=new Date(new Date().getFullYear(),mes,1).getDay();
    
    let cantidadDiasMesActual= new Date(new Date().getFullYear(),mes+1,0).getDate();
    let fechaMesAnterior = new Date(new Date().getFullYear(),mes,0).getDate() - cantidadDiasMesPasado + 1;
    let fechaActual = 1;
    let fechaMesSiguiente = 1;
    console.log(cantidadDiasMesPasado);

    asignarTextoElemento(".mes", meses[mes]);
    const calendario = document.querySelector('.calendario');
    for(let i = 0; i<6;i++){
        const week = document.createElement('div');
        week.classList.add("semana");
        calendario.appendChild(week);
        for(let j = 0; j<7;j++){
            const dia = document.createElement('div');
            dia.classList.add("dia");
            week.appendChild(dia);
            const fecha = document.createElement('p');
            switch(i){
                case 0:
                    if(cantidadDiasMesPasado>0){
                        fecha.innerHTML= fechaMesAnterior;
                        fechaMesAnterior++;
                        cantidadDiasMesPasado--;
                    }else{
                        fecha.innerHTML= fechaActual;
                        fechaActual++;
                    }
                    break;
                case 1:
                case 2:
                case 3:
                    fecha.innerHTML= fechaActual;
                    fechaActual++;
                    break;  
                case 4:
                case 5:
                    if(fechaActual<=cantidadDiasMesActual){
                        fecha.innerHTML= fechaActual;
                        fechaActual++;
                    }else{
                        fecha.innerHTML= fechaMesSiguiente;
                        fechaMesSiguiente++;
                    }
                    break;
            }
            fecha.classList.add("fecha");
            dia.appendChild(fecha);
        }
    }
    
    
    
}



completarCalendario();