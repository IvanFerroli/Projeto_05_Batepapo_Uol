// const messages = axios.get('http://meuservidor.com/lalala');
// promessa.then(processarResposta);

// function processarResposta(resposta) {
// 	console.log(resposta.data);
// }
function toggle() {
    mainToggle = document.querySelector(".main-page")
    entryToggle = document.querySelector(".entry-screen")
    mainToggle.classList.toggle("hidden")
    entryToggle.classList.toggle("hidden")
}