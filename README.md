# alura-amigo-secreto-challenge
Challenge del amigo secreto de Alura

Amigo Secreto 🎁
Este es un simple proyecto de una página web para organizar un juego de amigo secreto. Permite a los usuarios agregar nombres de amigos a una lista y, con solo un clic, elegir a un amigo secreto al azar. Es una herramienta ideal para reuniones con amigos, fiestas de oficina o cualquier evento en el que quieras añadir un elemento de sorpresa.

Características ✨
Añadir Amigos: Permite ingresar nombres a una lista de participantes.

Validación de Nombres: Evita que se añadan nombres duplicados o que contengan números.

Sorteo Aleatorio: Elige un amigo secreto de la lista de forma aleatoria.

Interfaz Simple: Diseño minimalista y fácil de usar.

Cómo Usar 🚀
Añade Nombres: Escribe el nombre de cada amigo en el campo de texto y haz clic en el botón "Añadir".

Ver la Lista: Los nombres que agregues aparecerán en la lista.

Sortear Amigo Secreto: Una vez que todos los nombres estén en la lista, haz clic en el botón "Sortear amigo secreto".

Descubre tu Amigo: La aplicación mostrará un mensaje con el nombre del amigo secreto elegido al azar.

Tecnologías Utilizadas 💻
HTML: Para la estructura y el contenido de la página.

CSS: Para dar estilo a la interfaz (usando un archivo style.css).

JavaScript: Para la lógica del programa, como añadir nombres, validaciones y el sorteo.

Las Funciones y su Propósito 🧠
adicionarAmigo(): Su tarea es agregar un nombre a la lista. Se ejecuta cada vez que el usuario hace clic en el botón "Añadir".

mostrarAmigos(): Su tarea es mostrar los nombres de los amigos en la lista visible de la página. Se llama después de que un nuevo amigo es añadido.

elegirAmigoSecreto(): Su tarea es sortear un nombre al azar y mostrar el resultado. Se activa con el botón "Sortear amigo secreto".

La clave del éxito es que cada función cumpla su rol y que se llamen entre sí en el momento correcto.


Antes: El botón tenía el onclick="sortearAmigo()" pero la función se llamaba elegirAmigoSecreto().

Ahora: Se ajustó el onclick en el HTML para que llame a la función correcta, uniendo así la acción del usuario con la lógica del código.
