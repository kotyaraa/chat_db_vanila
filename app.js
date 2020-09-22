console.log("hello FETCH!!!");

fetch('./db.js')
.then((response)=>{
    return response.json()
})
.then(data => {
    const div = document.querySelector(".chat");
    const txtChat = document.createElement("p");
    txtChat.innerHTML = data[0].name
    div.appendChild(txtChat);
});