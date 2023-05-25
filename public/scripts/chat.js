const socket=io('http://localhost:3000')



socket.on('connection')
socket.on('message',(data)=>//4
{
    getHardResponse(data);
})

function sendmessage(userText)//1
{
    socket.emit('message',userText);
}

// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}





//function to get live time inside chatbox
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
 
   

   
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
//this function is resposible for the welcome message and the time update 
function firstBotMessage() {
    let firstMessage = "Hello may i have your name sir"
    document.getElementById("botStarterMessage").innerHTML =
     '<p class="botText"><span>' + firstMessage + '</span></p>';
    

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
//bta5od el el user katabo fel textbox wt7aded el response bta3o wt7ot 
//el response fvariable tany 
//wet7ot el variable el a5er f variable tany 3shan yt3mlo display


function getHardResponse(userText) {
    let botResponse=userText ;
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

}
//Gets the text from the input box and processes it
//el el user byda5alo wmomken validation
function getResponse() {
    

     userText= $("#textInput").val();

    //not to respond if the user didn't enter anything 
    if (userText == "") {
        return;
    }
    sendmessage(userText);

    //el btb3t el message fel chat
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});




