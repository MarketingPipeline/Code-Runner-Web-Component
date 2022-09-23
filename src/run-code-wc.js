
class CodeRunner extends HTMLElement {
  constructor() {
    super();
   
  }
  
  connectedCallback() {
    
    // will be used to set language type to use and names of languages 
    const name = this.getAttribute('name');
    
    this.innerHTML = `<div data-scriptor-btn>
  
<pre style="padding: 0px; --bg:rgb(58, 54, 54); --text:rgb(255, 255, 255); --border:rgba(0,0,0,0.3); --code:rgb(255, 255, 255); --code-bg:rgba(39, 40, 35, 1); --title:rgb(255, 255, 255); --button-text:wheat; --button-border:rgba(0,0,0,0.18);"><div class="code-knack-playground " data-lang="cpp" data-options=""><div class="code-knack-pane"><div class="code-knack-title">CPP</div>

<div class="code-knack-ctrl">

<button class="ck-button run-button" run-code-button><img src="./lib/code-knack/images/icon-play-dark.svg"><span >run</span></button>

<button class="ck-button copy-button"><img src="./lib/code-knack/images/icon-copy-dark.svg"><span>copy</span></button></div>
  
</div><div id="codetorun" class="code-knack-text" contenteditable style="/* display: none; */">#include "cstdio"
int main() {
    printf("Hello World\n");
    return 0;
}
        </div><div id="output_section" class="code-knack-output text-output"><div class="code-knack-output-title">Output</div><pre class="code-knack-output-content" id="result">Hello<br></pre></div></div></pre>
      </div>
    `;
  }
}

window.customElements.define('run-code', CodeRunner);



// Function To Call API to run code inside the web-component

   // gets data from API and sets the content of #result div
async function getData(html_element) {
  result = html_element
  
  // display the output block
  const result_section =  result.querySelector("#output_section")
   result_section.style.display = "block";
  
  result.innerText = "Loading....";

  try {
    const res = await fetch("https://emkc.org/api/v2/piston/execute", {
  method: 'POST',
  body:  JSON.stringify({
            "language": "python",
            "version": "3",
            "files": [
                {
                    "content": result.querySelector("#codetorun").innerText
                }
            ]
        }
    ),

});
    const jsonResult = await res.json();
    result.innerText = JSON.stringify(jsonResult.run.output)
  } catch (error) {
    console.log(error)
    result.innerText= error.message;
  }
}



 /// Handle all button clicks for WC

const web_compontents = document.querySelectorAll('[data-scriptor-btn]');

 web_compontents.forEach((web_compontent) => web_compontent.querySelector('[ run-code-button]').addEventListener('click', (e) => handleClick(web_compontent)));

function handleClick(button){
  getData(button)
}
