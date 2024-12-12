const text = document.getElementById("toggle");

function toggleText()
{
    text.textContent = text.textContent === "ON"?"OFF":"ON";
}

function login(event)
{
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const message = document.querySelector("#msg");
    message.textContent = username;
}

