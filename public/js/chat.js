var socket = io.connect("http://localhost:3000");
socket.on("connect", function () {
    console.log("user is connecting to server");

    //Ask username
    var username = prompt("What is your name?");
    if (!username) {
        username = prompt("What is your name?");
    } else {
        // Notify to server
        socket.emit("adduser", username);
    }
});

socket.on("update_message", function (data) {
    $("#conversation").append(
        $("<li><b>" + data.sender + ":</b>" + data.message + "</li>")
    );
});

//Send message event
$("#chat-form").submit(function (e) {
    e.preventDefault();
    var messageInput = $("#message");
    //Get message
    var message = messageInput.val();
    messageInput.val("");
    if (message.trim().length !== 0) {
        socket.emit("send_message", message);
    }
});
