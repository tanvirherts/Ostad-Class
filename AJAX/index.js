async function sendDataToBackend() {
    const body = {
        Img:"",
        ProductCode: document.querySelector("#productCode").value,
        ProductName: document.querySelector("#productName").value,
        Qty: document.querySelector("#productQuantity").value,
        TotalPrice: "",
        UnitPrice: document.querySelector("#unitPrice").value,
    }
    console.log(body)
    let response = await fetch("https://crud.teamrabbil.com/api/v1/CreateProduct", {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(body)
    })
    const data = await response.json()
    console.log(JSON.stringify(data));
}