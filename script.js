// Cargar OpenSeadragon y mostrar la imagen
var viewer = OpenSeadragon({
  id: "visor-imagen",
  prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.2/images/",
  tileSources: {
    type: "image",
    url: "https://drive.google.com/uc?id=1brEyUHHrDD1lAenZUN1g8WESUfCH76sL"
  }
  
 
});