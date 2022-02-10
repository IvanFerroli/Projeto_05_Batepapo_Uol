const entryInput = document.querySelector(".entry").value;
const messagesContainer = document.querySelector("main");

function startApp() {
  setInterval(getMessages, 3000);
}
startApp();

function getMessages() {
  const promise = axios.get(
    "https://mock-api.driven.com.br/api/v4/uol/messages"
  );

  promise.then(loadMessages);
}

function scrollIntoView() {
    const toView = document.querySelector('main').lastElementChild;
    toView.scrollIntoView();
}

function loadMessages(answer) {
    for (i = 0; i <= answer.data.length; i++) {
        let type = answer.data[i].type;
        let time = answer.data[i].time;
        let from = answer.data[i].from;
        let to = answer.data[i].to;
        let text = answer.data[i].text;

        var message = `
            <div class="msg ${type}">
                <div class="message-inner-container">
                    <span class="time">(${time})</span>
                    <span class="message-span">
                        de <span class="from">${from}</span> para <span class="to">${to}: </span>${text}
                    </span>
                </div>
            </div>
                    `;
            messagesContainer.innerHTML += message;
            scrollIntoView();
    }
}
        
function enterParticipantName() {
    const entryInput = document.querySelector(".entry input")
    // if (entryInput != "") {
    //     enterParticipants();
    // }else {
    //     alert("Por favor, digite um nome válido");
    // }
    toggle();
}

// function enterParticipants() {
//     const participantNamePost = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants", {nome: entryInput});
  
//     participantNamePost.then(toggle);
//     participantNamePost.catch(alert("Já existe um usuário com este nome. Por favor, informe outro."));
// }

function toggle() {
    mainToggle = document.querySelector(".main-page");
    entryToggle = document.querySelector(".entry-screen");
    mainToggle.classList.toggle("hidden");
    entryToggle.classList.toggle("hidden");
}