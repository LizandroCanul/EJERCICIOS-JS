let calificacion = prompt("Ingresa tu calificacion");

if( calificacion < 4){
    document.write("Muy deficiente");
}
else if( calificacion == 4 && calificacion < 6){
    document.write("Insuficiente");
}
else if(calificacion == 6 ){
    document.write("Suficiente");
}
else if( calificacion == 7){
    document.write("Bien");
}
else if( calificacion >= 8 &&  calificacion < 10){
    document.write("Notable");
}
else if( calificacion == 10){
    document.write("Sobresaliente");
}
else{
    document.write("Ingresa una calificacion valida");
}