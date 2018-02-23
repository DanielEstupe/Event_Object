# Event Object

Un evento, en Javascript, realiza una petición a causa de acción o proceso ejecutado en lado del cliente, al cual, se puede devolver información a través de un conjunto de instrucciones llamado Manejador de Eventos.

Un evento puede ser presionar una tecla, presionar un botón, redimensionar la página, mover el mouse hacia un elemento, etc. Por lo tanto, la manipulación de eventos será útil para diseñar una página web dinámica.

Los navegadores más actuales cuentan con un objeto que será de utilidad para obtener más información acerca de la acción que se ha producido, y es el objeto Event. Navegadores como Chrome, Firefox, Opera y otros, proporcionan este objeto como un parámetro que se obtiene automáticamente con solo definir una variable en los argumentos de un manejador de eventos.

Esta variable puede ser definida con el nombre que se desee y permitido por la sintaxis de Javascript, únicamente se debe prevenir que no se envien datos a dicha variable porque, de lo contrario, el navegador no tendrá espacio en memoria para asignar el objeto.

```
window.onclick = function( e ) {
  console.log(e.type);
}
```

La variable argumento e es el espacio reservado para que el navegador asigne el objeto Event.
