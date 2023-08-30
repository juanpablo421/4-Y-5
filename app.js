const colors = require('colors');
const { analizarMedioTransporte, facturaproducto } = require('./proy_modules/functions.js');

// funcion para buscar diferentes medios de transporte
const mediosDeTransporte = ['avion', 'flota', 'carro','bicicleta'];

// Llamada la función para cada medio de transporte
for (const medio of mediosDeTransporte) {
    analizarMedioTransporte(medio);
}

// Ejemplo de uso
const precioBaseProducto = 1000; // Precio base del producto
const descuentoProducto = 5;   // Descuento en porcentaje
const cantidadProducto = 1;      // Cantidad de productos

const { precioTotal, descuento } = facturaproducto(precioBaseProducto, descuentoProducto, cantidadProducto);

console.log('********************************************'.red);
console.log(colors.green(`EL PRECIO DEL PRODUCTO ES: ${precioBaseProducto}`));
console.log('********************************************'.blue);
console.log(colors.green(`EL DESCUENTO APLICADO ES: ${descuento}`));
console.log('********************************************'.black);
console.log(colors.green(`LA CANTIDAD DE PRODUCTOS SON: ${cantidadProducto}`));
console.log('********************************************'.cyan);
console.log(colors.green(`EL PRECIO TOTAL DE VENTA ES: ${precioTotal}`));
console.log('********************************************'.green);
