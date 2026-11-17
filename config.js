/* ════════════════════════════════════════════════════════════
CONFIGURACIÓN DEL EVENTO · Edita SOLO este archivo por cliente
════════════════════════════════════════════════════════════ */
const CONFIG = {
  textos: {
    tituloPagina: "Nayeli & Israel | Encuentra tu Mesa",
    titulo: "Nayeli & Israel",
    instrucciones: "Ingresa tu nombre y apellido para conocer tu mesa: ",
    placeholder: "Ej. Nayeli Landell",
    botonBuscar: "Buscar Mesa",
    botonRegresar: "Buscar nuevo invitado",
    bienvenida: "¡Qué alegría contar con tu presencia!",
    bienvenidaMesa: "¡Disfruta la fiesta!",
    bienvenidaAnfitriona: "¡Hoy es tu noche!",
    alertaVacio: "Por favor escribe un nombre",
    errorNombre: "No encontramos ese nombre exacto en la lista 😢",
    errorHint: "Por favor, verifica la ortografía.",
    mensajeMesa: '¡Hola {nombre}!<br>Tu lugar es la: <strong>Mesa {mesa}</strong>',
    mensajeAnfitriona: '¡Hola {nombre}! <br> ¡Felicidades por tu boda! <br> Tu lugar es la: <strong>Mesa de {mesa}</strong><br><span class="extra-anfitriona">{extraAnfitriona}</span>',
    mensajeAnfitrionaNumero: '¡Hola {nombre}! <br> ¡Felicidades por tu boda! <br> Tu lugar es la: <strong>Mesa {mesa}</strong><br><span class="extra-anfitriona">{extraAnfitriona}</span>',
    mensajeNinos: '¡Hola {nombre}!<br>Tu lugar es la: <strong>Mesa de {mesa}</strong><br><br><span class="aviso-ninos">{avisoNinos}</span>',
    extraAnfitriona: '✨ ¡Disfruta al máximo tu fiesta! ✨',
    avisoNinos: 'Pregunta por el servicio de niñeras',
  },
  especiales: {
    anfitriones: ["Israel Jimenez Lorant", "Nayeli Landell Rivera"],
    mesasNinos: ["ninos", "niños"],
  },
  datos: {
    urlInvitados: "https://api.jsonbin.io/v3/b/6af49eedffd5d16053b9e406/latest",
  },
  tema: {
    colores: {
      primario: "#6B6B3A",
      acento: "#D4A017",
      instrucciones: "#C8622D",
      fondo: "#F7F5EE",
      tarjeta: "rgba(255, 255, 255, 0.85)",
      bordeTarjeta: "rgba(155, 155, 74, 0.15)",
      texto: "#3D3D1A",
      borde: "#E2DFD0",
      inputFondo: "#FFFFFF",
      separador: "#EEEBE0",
      sugerenciasHover: "rgba(155, 155, 74, 0.15)",
      error: "#C94C6E",
      errorHint: "#C8622D",
      aviso: "#6B2D5B",
    },
    fuentes: {
      titulo: { nombre: "Cinzel", pesos: "400;500" },
      texto: { nombre: "Inter", pesos: "300;400;600" },
    },
    imagenes: {
      fondo: "imagenes/fondo-app.jpg?v=1",
      croquis: "imagenes/croquis-{mesa}.jpg",
      croquisGeneral: "imagenes/croquis-general.jpg",
    },
    fondos: {
      landing: "linear-gradient(135deg, #6B6B3A 0%, #D4A017 100%)",
      mesas: "url('imagenes/fondo-app.jpg') center/cover no-repeat fixed",
      album: "#F7F5EE"
    }
  },
  album: {
    habilitado: true,
    titulo: "Álbum de Fotos",
    instrucciones: "Comparte los momentos de esta noche especial",
    placeholderNombre: "Tu nombre (opcional)",
    textoSubir: "📤 Subir fotos",
    textoVacio: "¡Sé el primero en subir una foto!",
    cloudinary: {
      cloudName: "isclyhb1",
      uploadPreset: "Template",
    },
    firebase: {
      apiKey: "AIzaSyBdr5SN4orzTn9l968Is4Egdkob-d1dKd8",
      authDomain: "albumtemplate-db590.firebaseapp.com",
      databaseURL: "https://albumtemplate-db590-default-rtdb.firebaseio.com",
      projectId: "albumtemplate-db590",
      storageBucket: "albumtemplate-db590.firebasestorage.app",
      messagingSenderId: "229817008014",
      appId: "1:229817008014:web:a64541cfd8dd34f07aaedf"
    }
  }
};
