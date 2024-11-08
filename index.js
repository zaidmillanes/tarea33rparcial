let entrada = document.getElementById('entrada');
let resultado = document.getElementById('resultado');
const boton = document.getElementById('Calcular');

function calcularPrestamo(event) {
    event.preventDefault(); 
    
    const monto = parseFloat(entrada.value);
    if (isNaN(monto) || monto <= 0) { 
        resultado.textContent = "Por favor ingrese un monto válido.";
    } else {
        const porcentaje = monto * 0.3;
        resultado.textContent = `El monto es: ${porcentaje.toFixed(2)} €`; 
    }
}


boton.addEventListener("click", calcularPrestamo);
