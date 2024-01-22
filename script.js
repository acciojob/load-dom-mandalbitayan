//your JS code here. If required.
function createelement(){
   // let createh2=document.createElement("h3")
   // console.log(createh2)
   const body=document.getElementsByTagName("body")
   body.textContent="DOM load success";
	console.log(body.textContent)
   // body[0].appendChild(createh2);
}
createelement()
