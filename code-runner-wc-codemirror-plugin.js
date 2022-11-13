
window.addEventListener('load', (event) => {
  const web_compontents = document.querySelectorAll('[code-runner-component]');

web_compontents.forEach((web_compontent) => addCodeMirror(web_compontent));

function addCodeMirror(button) {
	
	console.log(button)
// Remove the content editable version editor
	// turn into text area
button.querySelector('[contenteditable]').outerHTML = button.querySelector('[contenteditable]').outerHTML.replaceAll('div', 'textarea')
	
	// remove content editable attribute
	button.querySelector("#codetorun").removeAttribute("contenteditable");

	
	// iniate the editor. 
let editor = CodeMirror.fromTextArea(button.querySelector("#codetorun"), {
    mode: "python",
    lineNumbers: true,
});
  
editor.save()

}

});
