const text = document.getElementById("toggle");

function toggleText()
{
    text.textContent = text.textContent === "ON"?"OFF":"ON";
}