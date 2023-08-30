require('colors'); // Importar y habilitar la biblioteca 'colors'

// Función para analizar el medio de transporte (aceptando minúsculas y mayúsculas)
function analizarMedioTransporte(medio) {
    // Convertir el medio proporcionado a minúsculas para hacer la comparación
    const medioLowerCase = medio.toLowerCase();

    // Lista de medios de transporte válidos
    const mediosValidos = ['avion', 'flota', 'carro', 'bicicleta'];

    // Objeto con descripciones de condiciones para cada medio
    const descripciones = {
        avion: 'RECUERDA TENER DINERO PARA EL PASAJE ',
        flota: 'RECUERDA TENER DINERO PARA EL PASAJE',
        carro: 'RECUERDA LLEVAR ROPA APORPIADA',
        bicicleta:'RECUERDA LLEVAR ROPA APORPIADA',
    };

    // Verificar si el medio de transporte está en la lista de válidos
    if (mediosValidos.includes(medioLowerCase)) {
        console.log('********************************************************'.red)
        console.log(`            SI VIAJAS EN ${medioLowerCase}`.bgMagenta);
        console.log('********************************************************'.red)
        console.log(descripciones[medioLowerCase].bgMagenta);
        console.log('========================================================='.red)
    } else {
        console.log('MEDIO DE TRANSPORTE NO RECONOCIDO.'.magenta);
    }
}

function facturaproducto(precioBase, descuentoPorcentaje, cantidad) {
    // Verificar que el descuento esté en el rango válido (0-100)
    if (descuentoPorcentaje < 0 || descuentoPorcentaje > 100) {
        return "El descuento debe estar entre 0 y 100 por ciento.";
    }

    // Calcular el descuento
    const descuento = precioBase * (descuentoPorcentaje / 100);

    // Calcular el precio después del descuento
    const precioConDescuento = precioBase - descuento;

    // Calcular el precio total por la cantidad
    const precioTotal = precioConDescuento * cantidad;

    return {
        precioTotal,
        descuento
    };
}

// Exportar las funciones en un objeto
module.exports = {
    analizarMedioTransporte,
    facturaproducto
};
