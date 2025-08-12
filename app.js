// Lista de amigos
let amigos = [];
function adicionarAmigo() {
    const inputAmigo = document.getElementById('nombreAmigo');
    const nombreDeAmigo = inputAmigo.value.trim();

    if (nombreDeAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Itera sobre cada carácter del nombre para ver si es un número.
    for (let i = 0; i < nombreDeAmigo.length; i++) {
        const caracter = nombreDeAmigo[i];
        if (isNaN(caracter) === false && caracter !== ' ') {
            alert("El nombre solo puede contener letras y espacios.");
            return;
        }
    }
    // Validación de duplicados
    if (amigos.includes(nombreDeAmigo)) {
        alert(`El nombre de ${nombreDeAmigo} ya está en tu lista.`);
        return;
    }

    amigos.push(nombreDeAmigo);
    
    inputAmigo.value = "";
    mostrarAmigos();
}

function mostrarAmigos() {
    const listaDeAmigos = document.getElementById('listadeAmigos');
    listaDeAmigos.innerHTML = ""; // Limpia la lista antes de volver a llenarla

    for (let i = 0; i < amigos.length; i++) {
        const nombre = amigos[i];
        const li = document.createElement('li');
        li.textContent = nombre;
        listaDeAmigos.appendChild(li);
    }
}

// Elección de amigo secreto de manera aleatoria
function elegirAmigoSecreto() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para elegir.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);//generación de orden aleatorio
    const amigoSecreto = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amigo secreto es: <strong>${amigoSecreto}</strong>`;
}