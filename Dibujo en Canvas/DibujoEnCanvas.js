var estado = 0;          // estado del click
var colorLinea = "blue";    // color a la linea

var teclas =
  {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH:39
  };

var area = document.getElementById('dibujito');
var papel = area.getContext("2d");
var x=250;                      // guardar coordenada en X
var y=250;                      // guardar coordenada en Y
document.addEventListener("keyup",dibujarTeclado);
document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse

// dibujo del borde
dibujarLinea("black", 0, 0, 500, 0, papel)
dibujarLinea("black", 500, 0, 500, 500, papel)
dibujarLinea("black", 500, 500, 0, 500, papel)
dibujarLinea("black", 0, 500, 0, 0, papel)

// Funcion para mousemove
function dibujarMouse(evento){
  if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mousedown
function presionarMouse(evento){
  estado = 1;         //click presionado
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mouseup
function soltarMouse(evento){
  estado = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color;          // Estilo de trazo (color)
  lienzo.lineWidth = 2;                // Ancho de la linea
  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estio de trazo
  lienzo.closePath();                  // Cierra el dibujo
}

function dibujarTeclado(evento)
{
  var colorcito = "red";
  var movimiento= 10;
  switch (evento.keyCode)
  {
  case teclas.UP:
    dibujarLinea(colorcito, x, y, x, y-movimiento, papel);
    y=y-movimiento;
  break;

  case teclas.DOWN:
    dibujarLinea(colorcito, x, y, x, y+movimiento, papel);
    y=y+movimiento;
  break;

  case teclas.LEFT:
    dibujarLinea(colorcito, x, y, x-movimiento, y, papel);
    x=x-movimiento;
  break;

  case teclas.RIGTH:
    dibujarLinea(colorcito, x, y, x+movimiento, y, papel);
    x=x+movimiento;
  break;

  default:
  break;
  }
}
