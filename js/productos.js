//CARRITO DE COMPRAS "KIOSKITO PELUQUERO"

//CLASE CONSTRUCTORA
class Productos {
    constructor(codigo, marca, nombre, precio) {
        this.codigo = parseInt(codigo);
        this.marca = marca,
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    sumarIva() {
        this.precio = this.precio *1.21;
        return this.precio *1.21;
    }
}
//OBJETOS , PRODUCTOS Y ARRAY
const productosPelu = [];
productosPelu.push(new Productos(1, "Loreal", "Shampoo", 2000));
productosPelu.push(new Productos(2, "Schwarzkof", "Acondicionador", 2500));
productosPelu.push(new Productos(3, "Nano titanium", "Planchita", 13000));
productosPelu.push(new Productos(4, "Jessamy", "Lima", 300));
productosPelu.push(new Productos(5, "Wahl", "Tijera", 1200));

//ARRAY CON FOR...OF
for (const producto of productosPelu) {
    producto.sumarIva();
}



let totalCompra = 0;
let costoEnvio = 500;

const evaluarEnvioGratis = () => totalCompra >= 3000;


alert("¡Bienvenido a Kioskito Peluquero!");

let producto = prompt("Si desea algunos de nuetros producto\nElija la opcion que desee comprar..\n1-Shampoo\n2-Acondicionador\n3-Planchita\n4-Lima\n5-Tijera\n(presione aceptar para seguir comprando o ingrese 'fin' para salir)");

//WHILE Y SWITCH
while (producto != "fin") {

    switch (producto) {
        case "1":
            totalCompra = totalCompra + productosPelu[0].precio;
            alert("El precio del "  + productosPelu[0].nombre +" " +productosPelu[0].marca +" + IVA es de $ "+ productosPelu[0].precio + ", el total de su compra es $ " + totalCompra);
            break;
        case "2":
            totalCompra =  totalCompra + productosPelu[1].precio;
            alert("El precio del "  + productosPelu[1].nombre +" " +productosPelu[1].marca +" + IVA es de $ "+ productosPelu[1].precio + " , el total de su compra es $ " + totalCompra);
            break;
        case "3":
            totalCompra =  totalCompra + productosPelu[2].precio;
            alert("El precio de la "  + productosPelu[2].nombre +" " +productosPelu[2].marca +" + IVA es de $ "+ productosPelu[2].precio + ", el total de su compra es $ " + totalCompra);
            break;
        case "4":
            totalCompra =  totalCompra + productosPelu[3].precio;
            alert("El precio de la "  + productosPelu[3].nombre +" " +productosPelu[3].marca +" + IVA es de $ "+ productosPelu[3].precio + ", el total de su compra es $ " + totalCompra);
            break;
        case "5":
            totalCompra =  totalCompra + productosPelu[4].precio;
            alert("El precio de la "  + productosPelu[4].nombre +" " +productosPelu[4].marca +" + IVA es de $ "+ productosPelu[4].precio + ", el total de su compra es $ " + totalCompra);
            break;

        default:
            alert("opción inválida");
            break;

    }

    producto = prompt("Si usted desea seguir a comprando..\n ingrese otra opcion:\n1-Shampoo\n2-Acondicionador\n.3-Planchita\n4-Lima\n5-Tijera\n(luego presione aceptar para seguir comprando o ingrese 'fin' para terminar la compra)");
}

//CONDICION Y FUNCION
if (envios() == false) {
    totalCompra = totalCompra + costoEnvio;
}

function envios() {
    if (totalCompra >= 3000) {
        alert("En una compra igual o mayor a $3000,El envio corre por nuestra cuenta");
        return true;
    } else {
        alert("En una compra menor a $3000, se incluye el costo de envio , el mismo sera de $500");
        return false;
    }
}
alert("El total de su compra es $ " + totalCompra);
alert("¡Gracias por elegirnos!");

