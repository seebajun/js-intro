document.addEventListener('DOMContentLoaded', () => {
  var precio = document.querySelector('#precio');
  var cantidad = document.querySelector('#cantidad');
  var color = document.querySelector('#color');
  var cantidadProducto = document.querySelector('#cantidadProducto');
  var total = document.querySelector('#total');
  var colorResultado = document.querySelector('#colorResultado');
  var botonCalcular = document.querySelector('#calcular');

  botonCalcular.addEventListener('click', () => {
    var colorValor = color.value;
    var totalValor = cantidad.value * precio.textContent;
    cantidadProducto.textContent = cantidad.value;
    total.textContent = '$' + totalValor;
    colorResultado.style.backgroundColor = colorValor;
  });
});