//your JS code here. If required.
// let parent=document.body;
// let element=document.CreatElement("h3")
// element.innerText="DOM load success";
// body.append(element)
// console.log()
window.addEventListener('DOMContentLoaded', function () {
  // Create a text node with the desired message
  const textNode = document.createTextNode('DOM load success');
  
  // Select the body element
  const body = document.body;
  
  // Check if body already has child elements (for safety)
  if (!body.hasChildNodes()) {
    // Append the text node to the body
    body.appendChild(textNode);
  }
});