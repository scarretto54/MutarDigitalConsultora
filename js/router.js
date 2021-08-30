// LISTA DE RUTAS (ASOCIAR A CADA ACCION)
const routes = [
  {path: "/home", action: "home"},
  {path: "/quehacemos", action: "quehacemos"},
  {path: "/servicios", action: "servicios"},
  {path: "/nuestroequipo", action: "nuestroequipo"},
  {path: "/contactoform", action: "contactoform"},
];

// OBTENER LA RUTA ACTUAL (USAMOS EL OBJETO LOCATION Y SU PROPIEDAD HASH).
// SI "" || '/'  ENTONCES parseLocation = '/'
const parseLocation = () => location.hash.slice(1).toLowerCase() || "/";

// BUSCAMOS LA ACCIÓN EN EL ARRAY routes
// QUE CORRESPONDE A LA RUTA CON FIND
const findActionByPath = (path, routes) => routes.find((r) => r.path == path || undefined);

const router = (customPath) => {
  console.log("ejecuto router()");
  //OBTENER RUTA ACTUAL
  let path = parseLocation();
  if (customPath) path = customPath;
  const divContenido = "#app";

  const {action = "error"} = findActionByPath(path, routes) || {};

  // LLAMAMOS AL MÈTODO CORRESPONDIENTE PARA LA ACCIÒN ENCONTRADA
  switch (action) {
    case "home":
      app.home(divContenido);
      break;
    case "quehacemos":
      app.queHacemos(divContenido);
      break;
    case "servicios":
      app.servicios(divContenido);
      break;
    case "nuestroequipo":
      app.nuestroEquipo(divContenido);
      break;      
    case "contactoform":
      app.contactoForm(divContenido);
      break;      
    default:
      ErrorComponent(divContenido);
      break;
  }
};
