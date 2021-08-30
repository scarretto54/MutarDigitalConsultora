    const URLDOLAR = "https://api.bluelytics.com.ar/v2/latest"
    let dolarBlue = 0;
    $(document).ready(function(){ 
    $.get(URLDOLAR, function (respuesta, estado) {
        if(estado === "success"){
        dolarBlue = respuesta.blue.value_sell;
    }
    });
    });

    localStorage.clear()

    class Producto {
        constructor(id, nombre, precio) {
            this.id = id;
            this.nombre  = nombre.toUpperCase();
            this.precio  = parseFloat(precio);
        }
        sumaIva() {
            this.precio = (this.precio * 1.21 * dolarBlue).toFixed(0);
        }
        sumaIvarestaDescuento() {
            this.precio = ((this.precio *1.21 * dolarBlue) * 0.8).toFixed(0);
        }
    }

    class Cuotas {
        constructor(id, cantC, descC) {
            this.id = id;
            this.cantC = parseFloat(cantC);
            this.descC = descC.toUpperCase();
        }
    }

    
    sessionStorage.setItem('mjeOK', ' Su pago fue exitoso. Gracias por elegir Mutar Digital !! ');
    let mensaje =  sessionStorage.getItem('mjeOK');
       
        let total = 0;        
        const DOMtotal = document.querySelector('#total');
        DOMtotal.textContent = total;               
        const DOMimporte = document.querySelector('#importe');
        DOMimporte.textContent = DOMtotal.textContent;

        

        $("#valorServicio").change(function (seleccionProducto , total , codigoDescuento){

            // GENERA ARTICULOS

                const productos = [];
                        productos.push(new Producto ("1", "Gestión de redes sociales", 50)),
                        productos.push(new Producto ("2", "Publicidad digital", 30)),
                        productos.push(new Producto ("3", "Diseño gráfico y Branding"  , 20)),
                        productos.push(new Producto ("4", "Consultorías y capacitaciones", 40));


            // SELECCION ARTICULO    

            seleccionProducto = $("#valorServicio").val();
            codigoDescuento = $("#dto").val();



            // CALCULA PRECIO DE PRODUCTO SELECCIONADO

            if(codigoDescuento === "DESCUENTAZO"){
                for (const Producto of productos)
                    Producto.sumaIvarestaDescuento();
                    const buscarPrecio = productos.find(Producto => Producto.id === seleccionProducto);                     
                    
                            total = buscarPrecio.precio;
                            DOMtotal.textContent = total;

                }
                else{
                    for (const Producto of productos)
                    Producto.sumaIva();
                    const buscarPrecio = productos.find(Producto => Producto.id === seleccionProducto);
                    
                        
                                total = buscarPrecio.precio;
                                DOMtotal.textContent = total;                          
                };
        });

        $("#dtoCargar").click(function (seleccionProducto , total , codigoDescuento){

            // GENERA ARTICULOS

                const productos = [];
                        productos.push(new Producto ("1", "Gestión de redes sociales", 50)),
                        productos.push(new Producto ("2", "Publicidad digital", 30)),
                        productos.push(new Producto ("3", "Diseño gráfico y Branding"  , 20)),
                        productos.push(new Producto ("4", "Consultorías y capacitaciones", 40));


            // SELECCION ARTICULO    

            seleccionProducto = $("#valorServicio").val();
            codigoDescuento = $("#dto").val();


            // CALCULA PRECIO DE PRODUCTO SELECCIONADO

            if(codigoDescuento === "DESCUENTAZO"){
                for (const Producto of productos)
                    Producto.sumaIvarestaDescuento();
                    const buscarPrecio = productos.find(Producto => Producto.id === seleccionProducto);                     
                    
                            total = buscarPrecio.precio;
                            DOMtotal.textContent = total;

                            $("#dtoConfirm").prepend(`<span id="okD">Descuento Mutar del 20% otorgado.</span>`);
                            document.getElementById("dtoCargar").style.display="none"
                            document.getElementById("dto").style.display="none";

                }
                else{
                    for (const Producto of productos)
                    Producto.sumaIva();
                    const buscarPrecio = productos.find(Producto => Producto.id === seleccionProducto);
                    
                    
                        
                                total = buscarPrecio.precio;
                                DOMtotal.textContent = total; 
                };
        });

        // PASAR A MODULO DE PAGO     

        $("#quieroMutar").click(function (){
            if(document.querySelector('#valorServicio').value != "" && document.querySelector('#modalEmail').value != "" ){
                $("#checkPrice").fadeOut(0, function(){
                    $("#checkPago").fadeIn(0);
                });
                DOMimporte.textContent = DOMtotal.textContent;              
            }
            else{
                alert("Por favor indicanos tu email de contacto y seleciona un servicio.")
            }
        });

        $("#tipoTarjeta").change(function () {
            document.getElementById("tipoTarjeta").setAttribute("disabled", "");
            document.getElementById("marcaTarjeta").removeAttribute("disabled", "");
            document.getElementById("bancoTarjeta").removeAttribute("disabled", "");
            $(".ctan").remove();
        });

        $("#marcaTarjeta").change(function () {
           
            // GENERA CUOTAS

                const cuotasVisa = [];
                        cuotasVisa.push(new Cuotas ("cta1", 1 , "01")),
                        cuotasVisa.push(new Cuotas ("cta2", 3 , "03")),
                        cuotasVisa.push(new Cuotas ("cta3", 6 , "06")),
                        cuotasVisa.push(new Cuotas ("cta4", 12 , "12"));

                const cuotasMaster = [];
                        cuotasMaster.push(new Cuotas ("cta1", 1 , "01")),
                        cuotasMaster.push(new Cuotas ("cta2", 3 , "03")),
                        cuotasMaster.push(new Cuotas ("cta3", 6 , "06"));

            // CALCULA CANTIDAD DE CUOTAS
            
                if(document.querySelector('#tipoTarjeta').value === "2"  && document.querySelector('#marcaTarjeta').value != "2"){
                    for (const Cuotas of cuotasVisa) {  
                    $("#cuotasTarjeta").append(`<option class="ctan" value="${Cuotas.cantC}">${Cuotas.descC}</option>`);
                    }
                    document.getElementById("cuotasTarjeta").removeAttribute("disabled", "");
                    document.getElementById("marcaTarjeta").setAttribute("disabled", "");
                }
                else if(document.querySelector('#tipoTarjeta').value === "2"  && document.querySelector('#marcaTarjeta').value != "1"){
                    for (const Cuotas of cuotasMaster) {
                    $("#cuotasTarjeta").append(`<option class="ctan" value="${Cuotas.cantC}">${Cuotas.descC}</option>`);                
                    } 
                    document.getElementById("cuotasTarjeta").removeAttribute("disabled", "");
                    document.getElementById("marcaTarjeta").setAttribute("disabled", "");                    
                }
                else{
                    let ctasT = document.createElement("option");
                    ctasT.setAttribute("class", "ctan");
                    ctasT.setAttribute("value", 1 );
                    ctasT.innerHTML = `01`; 
                    document.getElementById("cuotasTarjeta").appendChild(ctasT); 

                    document.getElementById("cuotasTarjeta").removeAttribute("disabled", "");
                    document.getElementById("marcaTarjeta").setAttribute("disabled", "");
                }
        });

       // VOLVER A MODULO SELECCION ARTICULO

       $("#volver").click(function (){
        $("#checkPago").fadeOut(0, function(){
            $("#checkPrice").fadeIn(0);
        });

        document.getElementById("tipoTarjeta").removeAttribute("disabled", "");
        $('#tipoTarjeta').val("");
        $('#marcaTarjeta').val("");
        $('#cuotasTarjeta').val("");
        $('#bancoTarjeta').val("");
        $('#titularTarjeta').val("");
        $('#nroTarjeta').val("");
        $('#codTarjeta').val("");
        $('#vtoTarjeta').val("");
        document.getElementById("marcaTarjeta").setAttribute("disabled", "");
        document.getElementById("cuotasTarjeta").setAttribute("disabled", "");

    });

     // VACIAR MODAL

     function cerrarForm(){             
        $('#tipoTarjeta').val("");
        $('#marcaTarjeta').val("");
        $('#cuotasTarjeta').val("");
        $('#bancoTarjeta').val("");
        $('#titularTarjeta').val("");
        $('#nroTarjeta').val("");
        $('#codTarjeta').val("");
        $('#vtoTarjeta').val("");
        $('#valorServicio').val("");
        $('#modalEmail').val("");
        $('#dto').val("");
        document.getElementById("tipoTarjeta").removeAttribute("disabled", "");
        document.getElementById("marcaTarjeta").setAttribute("disabled", "");
        document.getElementById("cuotasTarjeta").setAttribute("disabled", "");
        document.getElementById("dtoCargar").style.display="unset";
        document.getElementById("dto").style.display="unset";
        $("#checkPago").fadeOut(0, function(){
           $("#checkPrice").fadeIn(0);
       });
        total = 0;
        importe = 0;
        const DOMtotal = document.querySelector('#total');
        DOMtotal.textContent = total;

        $("#okD").remove();
    };

     $(".btn-close").click(function(){
         cerrarForm()
        });

    // GUARDAR DATOS FORM


    class Venta {
        constructor(valorServicio, dto, modalEmail, tipoTarjeta, bancoTarjeta, marcaTarjeta, cuotasTarjeta, titularTarjeta, nroTarjeta, codTarjeta, vtoTarjeta, totalS) {            
            this.valorServicio = valorServicio;
            this.dto = dto;
            this.modalEmail = modalEmail;
            this.tipoTarjeta = tipoTarjeta;
            this.bancoTarjeta = bancoTarjeta;  
            this.marcaTarjeta = marcaTarjeta;
            this.cuotasTarjeta = cuotasTarjeta; 
            this.titularTarjeta = titularTarjeta.toUpperCase(); 
            this.nroTarjeta = nroTarjeta;
            this.codTarjeta = codTarjeta;
            this.vtoTarjeta =   vtoTarjeta;      
            this.totalS = totalS;
        }         
    }

    $("#saveForm").click(function (){
        
        sessionStorage.clear()
        let valorServicio = $('#valorServicio').val();
        let dto = $('#dto').val();        
        let modalEmail = $('#modalEmail').val();
        let tipoTarjeta = $('#tipoTarjeta').val();
        let bancoTarjeta = $('#bancoTarjeta').val();  
        let marcaTarjeta = $('#marcaTarjeta').val();
        let cuotasTarjeta = $('#cuotasTarjeta').val();
        let titularTarjeta = $('#titularTarjeta').val();
        let nroTarjeta = $('#nroTarjeta').val();
        let codTarjeta = $('#codTarjeta').val();
        let vtoTarjeta = $('#vtoTarjeta').val(); 
        let totalS = DOMtotal.textContent;

        const ventas = [];
        ventas.push(new Venta (valorServicio, dto, modalEmail, tipoTarjeta, bancoTarjeta, marcaTarjeta, cuotasTarjeta, titularTarjeta, nroTarjeta, codTarjeta, vtoTarjeta, totalS));
        
        const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

        // Almacenar producto por producto

        for (const Venta of ventas) {        
            guardarLocal(localStorage.length+1 , JSON.stringify(Venta));
        }

        // Almacenar Lista de Ventas
        const guardarLocalS = (clave, valor) => { sessionStorage.setItem(clave, valor) };
        guardarLocalS("listaVenta", JSON.stringify(localStorage));  

    });

    function enviarPresupuesto(){   
            cerrarForm();  
            $("#serviciosModal").modal('hide');
            $('body').removeClass('modal-open');
            $('#appPage').attr('Class', 'page');
            $('#app').html(`
            <section class="section">
            <div class="section__titulo">
            <h1 class="section__h1"><strong> Confirmacion de pago </strong></h1>
            <hr>
            </div>
            <br>
            <br>
            <div class="container">
            <h4 class="section__p"><strong>${mensaje}</strong></h4>
            <br>
            <br>
            <button type="button" class="btn btn-secondary"><a href="#/home"><strong>volver</strong></button>
            </div>
            </section>   
            `).attr('Class', 'page__main');  
    }




    
 