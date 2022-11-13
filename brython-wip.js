/// Handle all button clicks for WC
window.addEventListener('load', (event) => {
const web_compontents = document.querySelectorAll('[code-runner-component]');

web_compontents.forEach((web_compontent) => web_compontent.querySelector('[ code-runner-button]').addEventListener('click', (e) => handleClick(web_compontent)));

function handleClick(button) {

       renderMarkdown(button)
    
}





function renderMarkdown(html_element){
 
  	const result_section = html_element.querySelector("#output_section")
	result_section.style.display = "block";
  html_element.querySelector("#result").innerHTML =''
html_element.querySelector("#output_section").innerHTML += `

<script type="text/python">

from browser import document, window 
import traceback
import sys

class CustomStdout:
    def write(self, txt):
        document['result'].html += f'<li>{txt}</li>'


sys.stdout = CustomStdout()


print('hello')

</script>

`
 brython() 
}



document.querySelectorAll("code-runner").forEach((el) => {
  if (el.getAttribute("language").toLowerCase() === "latex") {
  loadJavaScriptFile('https://cdn.jsdelivr.net/npm/katex@0.10.0-rc.1/dist/katex.js')
  }
  
    if (el.getAttribute("language").toLowerCase() === "md" || "markdown") {
  loadJavaScriptFile('https://cdnjs.cloudflare.com/ajax/libs/showdown/1.8.7/showdown.min.js')
  }
    

})



function loadJavaScriptFile(url){
  
    /// Add Markdown Parser To Document
var script = document.createElement('script');
script.src = url;

document.head.appendChild(script); //or something of the likes  
  
  
  
  
  // On Error Loading Markdown Parser
script.onerror = function () {
 
  console.error("Markdown Tag: Error while performing function LoadMarkdownParser - There was an error loading the Markdown Parser")
  
}

  
  /// Markdown Parser Load Successful 
script.onload = function () {
 
  // Append this CSS

// https://cdn.jsdelivr.net/npm/katex@0.10.0-rc.1/dist/katex.css 
  
};
}
  
});
