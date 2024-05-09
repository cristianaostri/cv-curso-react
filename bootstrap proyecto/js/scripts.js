// scripts.js

// Función para mostrar texto personalizado en un elemento HTML según la imagen seleccionada
function showTextForImage(imageId) {
    var text = "";
    switch (imageId) {
      case 'producto1':
        text = "Café Amargo";
        break;
      case 'producto2':
        text = " Café Dulce";
        break;
      case 'producto3':
        text = "Natural";
        break;
      default:
        text = "Texto predeterminado";
    }
    showText('product-description', text);
  }
  
  // Función para mostrar texto en un elemento HTML
  function showText(elementId, text) {
    var element = document.getElementById(elementId);
    if (element) {
      element.textContent = text;
    }
  }
  