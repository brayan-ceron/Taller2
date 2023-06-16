//Creacion de la maquina
class MaquinaExpendedora{
    constructor(){
        this.p1 =new producto('10','papa margarita',1700)
        this.p2 =new producto('20','Jugo Hit',2400)
        this.p3 =new producto('30','Chocolatina',700)
        this.p4 =new producto('40','Galletas',1000)
    }
    darProducto1(){
        //retorna el producto 1
        return this.p1;
    }
    darProducto2(){
        //retorna el producto 2
        return this.p2;
    }
    darProducto3(){
        //retorna el producto 3
        return this.p3;
    }
    darProducto4(){
        //retorna el producto 4
        return this.p4;
    }

    AbastecerProducto1(pUnidades){
        //Invocar a el metodo abastecer de la clase producto
        this.p1.Abastecer(pUnidades)
    }
    AbastecerProducto2(pUnidades){
        //Invocar a el metodo abastecer de la clase producto
        this.p2.Abastecer(pUnidades)
    }
    AbastecerProducto3(pUnidades){
        //Invocar a el metodo abastecer de la clase producto
        this.p3.Abastecer(pUnidades)
    }
    AbastecerProducto4(pUnidades){
        //Invocar a el metodo abastecer de la clase producto
        this.p4.Abastecer(pUnidades)
    }
    VenderProducto1(){
        //Vender unidades del producto 1
        if(this.p1.darCantidadDisponible()>0){
            //Verifica si hay unidades disponibles del producto y si es asi se vende una unidad
            this.p1.Vender()
        }
        else{
            //si no hay unidades se envia mensaje de alerta
            alert("No hay unidaes del producto")
        }
    }
    VenderProducto2(){
        //Vender unidades del producto 1
        if(this.p2.darCantidadDisponible()>0){
            //Verifica si hay unidades disponibles del producto y si es asi se vende una unidad
            this.p2.Vender()
        }
        else{
            //si no hay unidades se envia mensaje de alerta
            alert("No hay unidaes del producto")
        }
    }
    VenderProducto3(){
        //Vender unidades del producto 1
        if(this.p3.darCantidadDisponible()>0){
            //Verifica si hay unidades disponibles del producto y si es asi se vende una unidad
            this.p3.Vender()
        }
        else{
            //si no hay unidades se envia mensaje de alerta
            alert("No hay unidaes del producto")
        }
    }
    VenderProducto4(){
        //Vender unidades del producto 1
        if(this.p4.darCantidadDisponible()>0){
            //Verifica si hay unidades disponibles del producto y si es asi se vende una unidad
            this.p4.Vender()
        }
        else{
            //si no hay unidades se envia mensaje de alerta
            alert("No hay unidaes del producto")
        }
    }
    darCantidadTotalVentas(){

        let cantidadTotal= this.p1.darcantidadVendidas()+
        this.p2.darcantidadVendidas()+
        this.p3.darcantidadVendidas()+
        this.p4.darcantidadVendidas()
        return cantidadTotal;
    }
    DarValorVentas(){
        let ValorVentas= this.p1.darcantidadVendidas()* this.p1.darPrecio()+
        this.p2.darcantidadVendidas()* this.p2.darPrecio()+
        this.p3.darcantidadVendidas()* this.p3.darPrecio()+
        this.p4.darcantidadVendidas()* this.p4.darPrecio();
        return ValorVentas;

    }
}
//Creacion de la clase producto
class producto{
constructor(id, nomnbre, precio){
    //crear el constructor de la clase
    this.nomnbre = nomnbre;
    this.precio= precio;
    this.CantidadUnidadesDisponibles =0;
    this.CantidadUnidadesVendidas =0;

}
daridentificador(){
    //Metodo que retorna el id del producto
	return this.id;
}
darNombre(){
    //metodo que retorna ek nombre del producto
    return this.nomnbre;
}
darPrecio(){
    //metodo que retorna ek nombre del producto
    return this.precio;
}
darCantidadDisponible(){
    //metodo que retorna ek nombre del producto
    return this.CantidadUnidadesDisponibles;
}
darcantidadVendidas(){
    //metodo que retorna ek nombre del producto
    return this.CantidadUnidadesVendidas;
}
Abastecer(pUnidades){
    //Metodso que abastece un producto
    this.CantidadUnidadesDisponibles =  this.CantidadUnidadesDisponibles + pUnidades;

}
Vender(){
//Metodo que vende un producto
    this.CantidadUnidadesDisponibles= this.CantidadUnidadesDisponibles - 1
    this.CantidadUnidadesVendidas= this.CantidadUnidadesVendidas + 1
}
}
let m = new MaquinaExpendedora();
function Abastecer_papas(){
    let cant= prompt("Ingrese el número de unidaes que abastecera el producto")
    m.AbastecerProducto1(parseInt(cant));
    let disponible =m.darProducto1().darCantidadDisponible()
    document.getElementById('disp_papa').innerHTML ='Disponible: '+ disponible
}

function Abastecer_hit(){
    let cant= prompt("Ingrese el número de unidaes que abastecera el producto")
    m.AbastecerProducto2(parseInt(cant));
    let disponible =m.darProducto2().darCantidadDisponible();
    document.getElementById('disp_hit').innerHTML ='Disponible: '+ disponible
}
function Abastecer_chocolatina(){
    let cant= prompt("Ingrese el número de unidaes que abastecera el producto")
    m.AbastecerProducto3(parseInt(cant));
    let disponible =m.darProducto3().darCantidadDisponible();
    document.getElementById('disp_chocolatina').innerHTML ='Disponible: '+ disponible   
}
function Abastecer_galleta(){
    let cant= prompt("Ingrese el número de unidaes que abastecera el producto")
    m.AbastecerProducto4(parseInt(cant));
    let disponible =m.darProducto4().darCantidadDisponible();
    document.getElementById('disp_galleta').innerHTML ='Disponible: '+ disponible 
}

function comprar_papas(){
    let cant_disp;
    cant_disp= m.darProducto1().darCantidadDisponible();
    if(cant_disp <=0){
        //si no hay disponibilidada del producto
        alert('El producto se encuentra agotado')
    }
    else{
        //si hay disponibilidada del producto
        m.VenderProducto1();
        let disponibilidad=m.darProducto1().darCantidadDisponible();
        document.getElementById('disp_papa').innerHTML='Disponible: '+disponibilidad;

    }

}
function comprar_hit(){
    let cant_disp;
    cant_disp= m.darProducto2().darCantidadDisponible();
    if(cant_disp <=0){
        //si no hay disponibilidada del producto
        alert('El producto se encuentra agotado')
    }
    else{
        //si hay disponibilidada del producto
        m.VenderProducto2();
        let disponibilidad=m.darProducto2().darCantidadDisponible();
        document.getElementById('disp_hit').innerHTML='Disponible: '+disponibilidad;

    }

}
function comprar_chocolatina(){
    let cant_disp;
    cant_disp= m.darProducto3().darCantidadDisponible();
    if(cant_disp <=0){
        //si no hay disponibilidada del producto
        alert('El producto se encuentra agotado')
    }
    else{
        //si hay disponibilidada del producto
        m.VenderProducto3();
        let disponibilidad=m.darProducto3().darCantidadDisponible();
        document.getElementById('disp_chocolatina').innerHTML='Disponible: '+disponibilidad;

    }

}
function comprar_galleta(){
    let cant_disp;
    cant_disp= m.darProducto4().darCantidadDisponible();
    if(cant_disp <=0){
        //si no hay disponibilidada del producto
        alert('El producto se encuentra agotado')
    }
    else{
        //si hay disponibilidada del producto
        m.VenderProducto4();
        let disponibilidad=m.darProducto4().darCantidadDisponible();
        document.getElementById('disp_galleta').innerHTML='Disponible: '+disponibilidad;

    }

}
function cantidad_ventas(){
    //genera un alert con la cantidad de ventas
    alert("La cantidad de ventas  de la maquina es: "+m.darCantidadTotalVentas())
}
function total_ventas(){
    //genera un alert con el total de las ventas
    alert("la cantidad de ventas totales es:  "+m.DarValorVentas())
}
function unidades_vendidas(){
    let vend_papa =m.darProducto1().darcantidadVendidas()
    let vend_hit =m.darProducto2().darcantidadVendidas()
    let vend_chocolatina =m.darProducto3().darcantidadVendidas()
    let vend_galleta =m.darProducto4().darcantidadVendidas()

	alert("La cantidad de unidades vendidas por producto es:\n Papa: " + vend_papa
		+ "\n Jugo Hit :" + vend_hit
		+ "\n Chocolatina jet: " + vend_chocolatina
		+ "\n Galletas: " + vend_galleta
		)
}