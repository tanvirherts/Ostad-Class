async function deleteItem(id) {
    let URL = `https://crud.teamrabbil.com/api/v1/DeleteProduct/${id}`;
    let res = await axios.get(URL);
    window.location.reload();
}