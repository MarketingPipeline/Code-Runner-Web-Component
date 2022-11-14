
import { runCode, setEngine, setOptions } from "https://cdn.skypack.dev/client-side-python-runner@1.7.1";
window.addEventListener('load', (event) => {
    
const web_compontents = document.querySelectorAll('code-runner');
setEngine('pyodide');
web_compontents.forEach((web_compontent) => t(web_compontent));    

 function t(b){   
     if (b.hasAttribute("custom-compiler") === true){
         console.log(b.getAttribute("custom-compiler"))
         if (b.getAttribute("custom-compiler") == "python-shell"){
             // render the terminal 
             
               // store pre-defined code to run
   let preDefinedCode =  b.querySelector("#codetorun").innerHTML 
   

   // clear text from html 
   b.querySelector("#codetorun").innerHTML = ""
   b.querySelector("#codetorun").className = '';
     
     
     b.querySelector('.code-knack-title').innerHTML = "Python Shell" 
     b.querySelector("#codetorun").removeAttribute("contenteditable")
     
var term = $(b.querySelector("#codetorun")).terminal(async function(command) {
    try {
 await runCode(command)
} catch (error) {
    
  term.error(`Error: ${error.message}`);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}

  
    
   
}, {
    greetings: 'Interactive Python shell\n',
    name: 'Python',
    prompt: '> ' // same as linux exec
});

// PHP to string magic method
$.fn.__toString = function() {
    return `#<jQuery(${this.length})>`;
};

$.terminal.syntax('php')

// OR import { runCode, setEngine, setOptions } from 'https://cdn.jsdelivr.net/npm/client-side-python-runner@latest';

setOptions({ output: term.echo });

           
             
                 

   }
             
                     

             
             
             
         }
         
     }
   
    
                  
});   



 let create = (info) => {
            return new Promise(function(resolve, reject) {
                let gfgData = document.createElement('script');
                gfgData.src = info;
                gfgData.async = false;
                gfgData.onload = () => {
                    resolve(info);
                };
                gfgData.onerror = () => {
                    reject(info);
                };
                document.body.appendChild(gfgData);
            });
        };
        let gfgScript = ['https://code.jquery.com/jquery-3.1.1.min.js', 
                         'https://cdn.terminal.jcubic.pl/wcwidth.js', 
                         'https://unpkg.com/jquery.terminal/js/jquery.terminal.js',
                        'https://unpkg.com/js-polyfills/keyboard.js',
                        'https://unpkg.com/jquery.terminal/js/unix_formatting.js',
                        'https://unpkg.com/prismjs@1.8.1/prism.js', 'https://unpkg.com/jquery.terminal/js/less.js', 'https://unpkg.com/jquery.terminal/js/prism.js', 'https://unpkg.com/uniter@2.12.1/dist/uniter.js', 'https://unpkg.com/prismjs@1.8.1/components/prism-php.js'];
        let promiseData = [];
        gfgScript.forEach(function(info) {
            promiseData.push(create(info));
        });
        Promise.all(promiseData).then(function() {
            console.log('The required scripts are loaded successfully!');
        }).catch(function(gfgData) {
            console.log(gfgData + ' failed to load!');
        });
