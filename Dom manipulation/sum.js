function add(event)
{
    event.preventDefault();
    const numb1 = document.querySelector("#num1").value;
    const numb2 = document.querySelector("#num2").value;
    const sum = parseFloat(numb1) + parseFloat(numb2);
    const result = document.querySelector("#ans");
    result.textContent = sum;
}