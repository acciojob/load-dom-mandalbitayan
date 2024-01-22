//your JS code here. If required.
function createelement(){
   let createh2=document.createElement("h3")
   console.log(createh2)
   createh2.innerText="DOM load success";
   let body=document.getElementsByTagName("body")
   body[0].appendChild(createh2);
}
createelement()
