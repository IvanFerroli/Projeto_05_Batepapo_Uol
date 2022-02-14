const messagesContainer = document.querySelector("main");
var entryInput = null;
var name = null;

function getEventToTriggerStartApp() {

    var userInput = document.getElementById("entry-input");
    userInput.addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {

            event.preventDefault();
            document.getElementById("entry-button").click();

        }
    });
}

function startApp() {
    enterParticipantName();
    setInterval(getMessages, 3000);
}

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
    var entryInput = document.querySelector("#entry-input");
    var name = entryInput.value
    for (i = 0; i <= answer.data.length; i++) {
        let type = answer.data[i].type;
        let time = answer.data[i].time;
        let from = answer.data[i].from;
        let to = answer.data[i].to;
        let text = answer.data[i].text;

        if(to == "Todos" || to == name || from == name){

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
}
        
function enterParticipantName() {
    var entryInput = document.querySelector("#entry-input");
    var name = entryInput.value
    console.log(name);
    if (name != null) {

        enterParticipants();    
        
    }else {
        
        alert("Por favor, digite um nome válido");
        
    }
    
    setInterval(console.log(name), 1000);
    // toggle();
}

function toggle() {
    mainToggle = document.querySelector(".main-page");
    entryToggle = document.querySelector(".entry-screen");
    mainToggle.classList.toggle("hidden");
    entryToggle.classList.toggle("hidden");
    console.log(participantPostObject.data.status);
}

function postErrors() {

    // switch (new Date().getDay()) {
    //     case 0:
    //       day = "Sunday";
    //       break;
    //     case 1:
    //       day = "Monday";
    //       break;
    //     case 2:
    //        day = "Tuesday";
    //       break;
    //     case 3:
    //       day = "Wednesday";
    //       break;
    //     case 4:
    //       day = "Thursday";
    //       break;
    //     case 5:
    //       day = "Friday";
    //       break;
    //     case 6:
    //       day = "Saturday";
    //   }

    console.log(participantPostObject.data.status);

}

function enterParticipants() {
    
    var entryInput = document.querySelector("#entry-input");
    var name = entryInput.value
    var participantPostObject = {

        name:   name

    }
    
    const participantNamePost = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants", participantPostObject);

    participantNamePost.catch(postErrors);
    
    participantNamePost.then(callSendStatusAndToggle);
}

function callSendStatusAndToggle() {
    console.log("callSendStatusAndToggle sendo chamada");
    setInterval(participantStatus, 5000);
    toggle();
}

function participantStatus(){

    var entryInput = document.querySelector("#entry-input");
    var name = entryInput.value
    var participantPostObject = {

        name:   name

    }
    
    const participantStatusPost = axios.post("https://mock-api.driven.com.br/api/v4/uol/status", participantPostObject);
    participantStatusPost.then(
        // console.log("Status: Online")
        console.log(participantPost.data.status)
        );
    
}

function sendMessage() {
    alert('O envio com enter tá funfando coroi')
    let from = document.querySelector("#entry-input").value;
    let to = "Todos";
    let text = document.querySelector("#message-input").value;
    let type = "message";
    
    let messagePostObject = {
        from: `${from}`,
        to: `${to}`,
        text: `${text}`,
        type: `${type}`
    };

    const messagePost = axios.post('https://mock-api.driven.com.br/api/v4/uol/messages', messagePostObject);

    messagePost.then(console.log("Mensagem enviada"));
    messagePost.catch(postErrors);
}

function getEventToTriggerSendMessages() {

    var messageInput = document.getElementById("message-input");
    messageInput.addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {

            event.preventDefault();
            document.getElementById("send-button").click();

        }
    });
}
