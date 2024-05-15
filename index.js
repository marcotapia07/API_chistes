let boton = document.getElementById('boton-cambiar-cita');
let chiste = document.getElementById('chiste');

console.log(chiste);

function cambiarChiste() {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=single')
        .then(response => response.json())
        .then(data => {
            fetch(`https://api.mymemory.translated.net/get?q=${data.joke}&langpair=en|es`)
                .then(response => response.json())
                .then(data => chiste.innerText = data.responseData.translatedText);
        });
}

cambiarChiste();

boton.addEventListener('click', cambiarChiste);