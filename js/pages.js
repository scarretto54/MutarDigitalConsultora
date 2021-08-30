
// MODELO Page
class PageModel {

}

// VIEW PAGE
class PageView {

  agregarHome(padre) {
    //<!-- Home-->
    $(navbarResponsive).removeClass('show');
    $(appPage).attr('Class', 'page');
    $(padre).html(`
        
              <div id="videoUno" class="homeVideo">
                <video class="homeVideo__video" height="400px" src="./img/videoInstitucional.mp4" autoplay muted loop ></video>
              </div>
              <div id="videoDos" class="homeVideo">
                <video class="homeVideo__video"  height="380px" src="./img/institucionalMutarMobile.mp4" autoplay muted loop ></video>
              </div>
        
    `).attr('Class', 'page__main');
    }
  agregarQueHacemos(padre) {
      //<!-- queHacemos-->
      $(navbarResponsive).removeClass('show');
      $(appPage).attr('Class', 'pageDos');
      $(padre).html(`
      
          <section class="section">
              <div class="section__titulo">
              <h1 class="section__h1"><strong>¿Que hacemos?</strong></h1>
              <hr>
              </div>
              <br>
              <div id="queHacemosCajaTexto">
              <p class="section__p">
              Somos una Agencia de Diseño y Marketing Digital en Córdoba, Argentina.
              Nuestra misión es crear marcas con propósito a través de una estrategia y comunicación eficaz para trasmitir la visión de tu marca.
              </p>
              <p class="section__p">
              Las redes sociales son una vidriera para mostrar nuestra marca y llegar a nuestro público. Allá lejos quedaron las épocas donde éramos simples receptores de anuncios en la televisión y los medios gráficos. Hoy todxs somos creadores de contenido, porque participamos, respondemos, damos nuestra opinión y compartimos lo que consideramos de valor.
              Es un ida y vuelta.
              </p>
              <br>
              <p class="section__p">
              ¿Que te ofrecemos?
              </p>
              <ul>
                  <li>Gestión de redes sociales</li>
                  <li>Publicidad digital</li>
                  <li>Diseño gráfico y Branding</li>
                  <li>Consultorías y capacitaciones</li>
              </ul>
              </div>
          </section>
          
      `).attr('Class', 'pageDos__main');
    }    
      agregarServicios(padre) {
    //<!-- Servicios-->
    $(navbarResponsive).removeClass('show');
    $(appPage).attr('Class', 'pageTres');
    $(padre).html(`
    
     <section class="section">
         <div class="section__titulo">
         <h1 class="section__h1"><strong>Servicios y Soluciones</strong></h1>
         <hr>
         </div>
       <div class="container py-4" id="hanging-icons">
         <div class="row g-5 py-5">
           <div class="col-md-3 d-flex align-items-start">
             <div>
               <h2 class="table__th">Gestión de redes sociales</h2>
               <p class="table__td">Tu negocio tiene que estar allí, donde el público lo busca. Facebook, Instagram, LinkedIn, Twitter.  Implementamos tu sitio web y potenciamos tu presencia online.</p>
               <button type="button" class="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#serviciosModal" >
                 <strong>Solicitar Servicio</strong>
               </button>                 
             </div>
           </div>
           <div class="col-md-3 d-flex align-items-start">
             <div>
               <h2 class="table__th">Publicidad digital</h2>
               <p class="table__td">Utilizamos las herramientas más poderosas de pauta digital como FacebookAds y GoogleAds para que tus clientes te encuentren en el momento exacto en el que te están buscando.</p>
               <button type="button" class="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#serviciosModal" >
                 <strong>Solicitar Servicio</strong>
               </button>
                       </div>
           </div>
           <div class="col-md-3 d-flex align-items-start">
             <div>
               <h2 class="table__th">Diseño gráfico y Branding</h2>
               <p class="table__td">Utilizamos las herramientas más poderosas de pauta digital como FacebookAds y GoogleAds para que tus clientes te encuentren en el momento exacto en el que te están buscando.</p>
               <button type="button" class="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#serviciosModal" >
                 <strong>Solicitar Servicio</strong>
               </button>
             </div>
           </div>
           <div class="col-md-3 d-flex align-items-start">
             <div>
               <h2 class="table__th">Consultorías y capacitaciones</h2>
               <p class="table__td">Hoy todxs somos creadores de contenido, porque participamos, respondemos, damos nuestra opinión y compartimos lo que consideramos de valor. Fidelizá clientes estando actualizado.</p>
               <button type="button" class="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#serviciosModal">
                 <strong>Solicitar Servicio</strong>
               </button>
             </div>
           </div>
         </div>
       </div>
    
     </section>
    
    `).attr('Class', 'pageTres__main');
    }
  agregarNuestroEquipo(padre) {
    //<!-- nuestroEquipo-->
    $(navbarResponsive).removeClass('show');
    $(appPage).attr('Class', 'pageCuatro');
    $(padre).html(`
        
            <section class="section mainCuatro">
              <div class="mainCuatro__titulo">
              <div class="section__titulo">
              <h1 class="section__h1"><strong>Nuestro equipo</strong></h1>
              <hr>
              </div>
              <br>
              <br>
              </div>
              <div class="mainCuatro__videoUno">
              <video class="equipoVideo" src="./img/camila.mp4" autoplay muted loop style="pointer-events: none;"></video>
              </div>
              <div class="mainCuatro__textoUno">
              <p class="equipoTexto">Soy Cami, encargada de mantener el barco a flote 🌊. Mi área de especialidad es comunicación, estrategia y publicidad digital. Amante de la naturaleza en todas sus formas, me encantaría que todo el año fuera verano ☀️ y para lxs que me conocen, dicen que soy una fundamentalista del mate a morir (puede ser…🙄).
              Me apasiona aprender y llegar al fondo del asunto a la hora de resolver los problemas. Para mí la clave para crecer es rodearnos de personas con los mismos valores, pero que a su vez, nos doten de las cualidades que nos faltan 🤜🤛 Queremos recorrer este camino con personas que les apasione lo que hacen ❤️ ¿Sos un@ de ellas?</p>
              <br>
            </div>
              <div class="mainCuatro__videoDos">
              <video class="equipoVideo" src="./img/gaston.mp4" autoplay muted loop></video>
              </div>
              <div class="mainCuatro__textoDos">
              <p class="equipoTexto">Gastón por acá, el encargado de que las cosas salgan cuando las papas queman. Soy diseñador gráfico, fotógrafo y amante de la edición ✒️
                Adicto a YouTube y defensor del terere en invierno. Soy manija hasta los últimos detalles, pensando que siempre puede quedar mejor ✨
                Creo que lo fundamental para crecer es tener una mirada crítica, conociendo los objetivos de cada proyecto, pero siempre con una mente abierta a recibir opiniones 👂
                Estamos buscando desafíos y personas que quieran superarlos con nosotrxs ⚡💪🤟
                </p>
                <br>
              </div>
            </section>
        
    `).attr('Class', 'pageTres__main');
    }
  agregarContactoForm(padre) {
    //<!-- ContactoForm-->
    $(navbarResponsive).removeClass('show');
    $(appPage).attr('class', 'pageCinco');
    $(padre).html(`        
          <section class="section">
            <div class="mainCinco__tituloDos">
              <br>
              <h1 class="section__h1"><strong> Contactanos</strong></h1>
              <hr>
            </div>
            <div style="margin: 10px 40px 10px 40px;">
            <form>
              <div class="row g-3">
              <div class="col-md-2">
                <label for="validationCustom01" class="form-label form_fieldset__format"><strong>Nombre</strong></label>
                <input type="text" class="form-control" id="validationCustom01"  required  value="Nombre">
                <div class="valid-feedback">
                  Correcto!
                </div>
              </div>
              <div class="col-md-2">
                <label for="validationCustom02" class="form-label form_fieldset__format"><strong>Apellido</strong></label>
                <input type="text" class="form-control" id="validationCustom02" required value="Apellido">
                <div class="valid-feedback">
                  Correcto!
                </div>
              </div>
              <div class="col-md-2">
                <label for="validationCustom04" class="form-label form_fieldset__format">Servicio</label>
                <select class="form-select form_fieldset__format" id="validationCustom04" required>
                  <option selected disabled value="">Elije una opción...</option>
                  <option value="R">Gestión de redes sociales</option>
                  <option value="P">Publicidad digital</option>
                  <option value="D">Diseño gráfico y Branding</option>
                  <option value="C">Consultorías y capacitaciones</option>
                </select>
              </div>
            </div>
            <div class="row g-3">
              <div class="col-md-3">
                <label for="validationCustomEmail" class="form-label form_fieldset__format">E-mail</label>
                <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"" placeholder="nombre@ejemplo.com" required>
              </div>
                <div class="col-md-3">
                  <label for="validationCustomNumber" class="form-label form_fieldset__format">Teléfono</label>
                  <input type="number" class="form-control" id="validationCustomNumber" aria-describedby="inputGroupPrepend"" placeholder="Teléfono">
                </div>
              </div>
              <div class="row">   
                <div class="col-md-2 form-check">              
                  <label class="form-check-label form_fieldset__format" for="flexRadioDefault1">
                    <strong> Empresas </strong>
                    <input class="form-check-input form_fieldset__format" type="radio" name="tipo" id="Empresas">
                  </label>
                </div>   
                <div class="col-md-3 form-check">              
                  <label class="form-check-label form_fieldset__format" for="flexRadioDefault1">
                    <strong> Emprendedores/Pyme </strong>
                    <input class="form-check-input form_fieldset__format" type="radio" name="tipo" id="Emprendedores/Pyme">
                  </label>
                </div>
                  <div class="form-check">
                    <input class="form-check-input form_fieldset__format" type="checkbox" value="" id="invalidCheck" required>
                    <label class="form-check-label form_fieldset__format" for="invalidCheck">
                      ¿Desea recibir nuestro Newsletter?
                    </label>
                    <div class="invalid-feedback form_fieldset__format">
                      Te lo estaremos enviando.
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <label for="validationTextarea" class="form-label form_fieldset__format"><strong>Consultas</strong></label>
                  <textarea class="form-control" placeholder="Dejanos tu consulta" rows="2" ></textarea>
                </div>
    
                <div class="col-12">
                  <br>
                  <button class="btn btn-secondary" type="submit"><strong> Contactar</strong></button>
                </div>
             </form>
            </div>
          </section>        
    `).attr('Class', 'pageDos__main');
    }
}

// CONTROLLER PRODUCTO
class PageController {
  //CONSTRUCTOR DEL CONTROLADOR ASOCIANDO UN MODELO Y VISTA
  constructor(pageModel, pageView) {
    this.pageModel = pageModel;
    this.pageView = pageView;
  }

  //MÊTODO PARA GENERAR CONSTROLAR LA VISTA, EL MODELO Y EL EVENTO AL AGREGAR UN PRODUCTO
  home(app) {
    this.pageView.agregarHome(app);
  }
  queHacemos(app) {
    this.pageView.agregarQueHacemos(app);
  }
  servicios(app) {
    this.pageView.agregarServicios(app);
  }
  nuestroEquipo(app) {
    this.pageView.agregarNuestroEquipo(app);
  }
  contactoForm(app) {
    this.pageView.agregarContactoForm(app);
  }
}

//COMPONENTE A EMPLEAR CUANDO NO SE ENCUENTRA LA PAGINA SOLICITADA
const ErrorComponent = (padre) => {
  $(padre).html(`
        <div id="videoUno" class="homeVideo">
          <video class="homeVideo__video" height="400px" src="./img/videoInstitucional.mp4" autoplay muted loop ></video>
        </div>
        <div id="videoDos" class="homeVideo">
          <video class="homeVideo__video"  height="380px" src="./img/institucionalMutarMobile.mp4" autoplay muted loop ></video>
        </div>
  </main>
`);
};
