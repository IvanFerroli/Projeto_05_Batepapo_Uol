// const messages = axios.get('http://meuservidor.com/lalala');
// promessa.then(processarResposta);

// function processarResposta(resposta) {
// 	console.log(resposta.data);
// }
function startApp() {
    getMessages();
}
startApp();
function getMessages(){
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
    promise.then(loadMessages);
    console.log("Aqui eu faço o get")
    // promise.then(console.log(resposta));
}
function loadMessages(answer){
    console.log(answer.data[3])
    for(i = 0; i <= answer.data.length; i++){
        var messagesContainer = document.querySelector("main")
        let type = answer.data[i].type;
        let time = answer.data[i].time;
        let from = answer.data[i].from;
        let to = answer.data[i].to;
        let text = answer.data[i].text;
        console.log(type, time, from, to, text)
        var message = `
            <div class="msg ${type}">
                <div class="message-inner-container">
                    <span class="time">(${time})</span>
                    <span class="message-span">
                        de <span class="from">${from}</span> para <span class="to">${to}: </span>${text}
                    </span>
                </div>
            </div>
        `
        messagesContainer.innerHTML += message;

    }

        // from: "João",
		// to: "Todos",
		// text: "entra na sala...",
		// type: "status",
		// time: "08:01:17"

        // from: "João",
		// to: "Todos",
		// text: "Bom dia",
		// type: "message",
		// time: "08:02:50"
    
    //         <div class="message public-message">
    //             <div class="message-inner-container">
    //                 <span class="time">(23:22:00)</span><span class="message-span"><span class="user-span">Rubicão</span> para <span class="user-span">Todos:</span> Bom dia arrombados! </span>
    //             </div>
    //        </div>
    //        <div class="message private-message">
    //             <div class="message-inner-container">
    //                 <span class="time">(23:22:00)</span><span class="message-span"><span class="user-span">Rubicão</span> para <span class="user-span">Mariazinha:</span> Vai tomar no cu também. Seu pai chora no banho</span>
    //             </div>
    //         </div>
    //         <div class="message entering-message">
    //             <div class="message-inner-container">
    //                 <span class="time">(23:22:00)</span><span class="message-span"><span class="user-span">Mariazinha</span> sai na sala...</span>
    //             </div>
    //        </div>

    // function buscarDados() {
    //     const resposta = axios.get("https://rickandmortyapi.com/api/character/118");
    //     resposta.then(renderizarPersonagem);
    //   }
    // function renderizarPersonagem(personagem) {
    //     var elementoImagem = document.querySelector(".imagem-do-personagem");
    //     var elementoNome = document.querySelector(".nome");
    //     var elementoEspecie = document.querySelector(".especie");
      
    //     elementoImagem.src = personagem.data.image;
    //     elementoNome.innerHTML = personagem.data.name;
    //     elementoEspecie.innerHTML = personagem.data.species;
    //   }
}
function toggle() {
    mainToggle = document.querySelector(".main-page")
    entryToggle = document.querySelector(".entry-screen")
    mainToggle.classList.toggle("hidden")
    entryToggle.classList.toggle("hidden")
}