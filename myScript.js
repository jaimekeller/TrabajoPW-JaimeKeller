
function realizarPedido() {
    var nombre = document.getElementById("nombre_pedido").value;
    var direccion = document.getElementById("direccion").value;
    var cantidad = document.getElementById("cantidad").value;
    var restaurante = document.getElementById('restaurante').value;
    var hamburguesa = document.getElementById('hamburguesa').value;

    if (nombre && direccion && cantidad > 0 && restaurante && hamburguesa) {
      alert("Pedido realizado de " + restaurante + "\n" + "\nNombre: " + nombre + "\nDirección: " + direccion + "\nCantidad: " + cantidad);
      
    } else {
      alert("Por favor complete todos los campos.");
    }
  }

var pedidoBtn = document.getElementById("pedido-btn");
pedidoBtn.addEventListener("click", realizarPedido);
