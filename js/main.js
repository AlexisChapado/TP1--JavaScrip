function calcular () {

    //sacar los valotres del formulario

    const NOMBRE = document.getElementById('nombre').value;
    const APELLIDO = document.getElementById('apellido').value;
    const DNI = document.getElementById('dni').value;
    const EDAD = document.getElementById('edad').value;
    const VALORAUTO = document.getElementById('valorAuto').value;
    const COBERTURA = document.getElementById('cobertura').value;


    //Variable del costo inicial del seguro

    let costoInicial = 4000; 

        

    // Ajuste por el valor de Vehiculo

    if (VALORAUTO <= 3000000) {
        costoInicial += 5000;
    } else if (VALORAUTO <= 7000000) {
        costoInicial += 10000;
    } else if (VALORAUTO >= 10000000){
        costoInicial += 15000;
    } else {
        costoInicial += 20000;
    }


    // Ajuste segun el tipo de cobertura

    if (COBERTURA === 'basica') {
        costoInicial += 1000;
    } else if (COBERTURA === 'estandar'){
        costoInicial += 7000;
    } else if (COBERTURA === 'premium') {
        costoInicial += 13000
    }


    //Mostrar resultado 

    document.getElementById('resultado').innerText =
    `Nombre: ${NOMBRE} ${APELLIDO}\nDNI: ${DNI}\nEl costo total de su seguro es: $${costoInicial}`;


    

}
