//your JS code here. If required.
function createelement(){
    const body=document.getElementsByTagName("body")
    let createh2=document.createElement("p")
    console.log(createh2)
    createh2.textContent="DOM load success";
    body[0].appendChild(createh2);
 }
 createelement()
