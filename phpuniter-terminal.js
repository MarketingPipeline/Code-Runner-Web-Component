/**!
 * @license Code-Runner-Web-Component - a web component to run / compile code in the browser! 
 * PLUGIN-NAME: UNITER-TERMINAL
 * DESCRIPTION:
 * PLUGIN-VERSION: 1.0.0
 * MORE INFO CAN BE FOUND AT https://github.com/MarketingPipeline/Scriptor.js/
 */



 function isFileAlreadyLoaded(url, type) {
    if (!url) url = "http://xxx.co.uk/xxx/script.js";
         if(type == "css"){
          type = "link" 
         }
    var scripts = document.getElementsByTagName(type);

    for (var i = scripts.length; i--;) {
        if(type == "link"){
           if (scripts[i].href == url) return true;
        } else{
          if (scripts[i].src == url) return true;
        }
    }
    return false;
}
  

window.addEventListener('load', (event) => {
    
  // this will work in IE 10, 11 and Safari/Chrome/Firefox/Edge
// add ES6 poly-fill for the Promise, if needed (or rewrite to use a callback)

 
let fetchStyle = function(url) {
  return new Promise((resolve, reject) => {
   
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.onload = () => resolve();
    link.onerror = () => reject();
    link.href = url;

    let headScript = document.querySelector('script');
    headScript.parentNode.insertBefore(link, headScript);
  });
};

async function loadPHPTerminal(){
try {
  const PHP_Terminal_CSS_Files = ["https://unpkg.com/jquery.terminal/css/jquery.terminal.css", "https://unpkg.com/prismjs/themes/prism-coy.css"]
  
  for (const file in PHP_Terminal_CSS_Files){
      // ensure these files aren't loaded already in DOM...
    if (isFileAlreadyLoaded(PHP_Terminal_CSS_Files[file], "css") === false){
            await fetchStyle(PHP_Terminal_CSS_Files[file])//
           } // else{
            // CSS file already loaded in document
         //  }
  }

 
  
  
renderPHPTerminals()
} catch (error) {

  renderPHP_Plugin_Failed()
 console.log("Code Runner Error: Failed to load all resources for plugin - PHP Terminal")
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
}
 
  loadPHPTerminal()




const web_compontents = document.querySelectorAll('code-runner');

function renderPHP_Plugin_Failed(){
  
  web_compontents.forEach((web_compontent) => PHP_TermLoadError(web_compontent)); 
  
  function PHP_TermLoadError(element){
     if (element.hasAttribute("custom-compiler") === true){
       
         if (element.getAttribute("custom-compiler") == "python-shell"){
 element.querySelector("#codetorun").innerHTML = "Error: Code Runner Failed To Load Resources For PHP Shell / Terminal"
  }
     }
    
  }
  
}


function renderPHPTerminals(){
    


web_compontents.forEach((web_compontent) => t(web_compontent));    

 function t(b){   
     if (b.hasAttribute("custom-compiler") === true){
         console.log(b.getAttribute("custom-compiler"))
         if (b.getAttribute("custom-compiler") == "python-shell"){
             // render the terminal 
             
               // store pre-defined code to run
   let preDefinedCode =  b.querySelector("#codetorun").innerHTML 
   

   // clear text from html 
   b.querySelector("#codetorun").innerHTML = "";
           // hide elements that are not needed
   b.querySelector("#codetorun").className = '';
   b.querySelector('[code-runner-button]').style.display = "none";
    
  b.querySelector('[code-runner-button]').style.display = "none";
           
 b.querySelector('[code-runner-copy-button]').style.display = "none";
     b.querySelector('.code-knack-title').innerHTML = "PHP Shell" 
     b.querySelector("#codetorun").removeAttribute("contenteditable")
     
var term = $(b.querySelector("#codetorun")).terminal(function(command) {
    console.log(command)
    php.execute('<?php ' + command);
}, {
    greetings: 'Interactive PHP shell\n',
    name: 'php',
    prompt: 'php > ' // same as linux exec
});

// PHP to string magic method
$.fn.__toString = function() {
    return `#<jQuery(${this.length})>`;
};

$.terminal.syntax('php')

var php = uniter.createEngine('PHP');
php.getStdout().on('data', function (text) {
    term.echo(text);
});
php.getStderr().on('data', function(text) {
    term.error(text);
});

php.expose(term, 'term');
php.expose($, 'jQuery');
 php.execute('<?php ' +  preDefinedCode);

   }
                     

             
             
             
         }
         
     }
   
    
}

  
       let PHP_Terminal_Files = ['https://code.jquery.com/jquery-3.1.1.min.js', 
                         'https://cdn.terminal.jcubic.pl/wcwidth.js', 
                         'https://unpkg.com/jquery.terminal/js/jquery.terminal.js',
                        'https://unpkg.com/js-polyfills/keyboard.js',
                        'https://unpkg.com/jquery.terminal/js/unix_formatting.js',
                        'https://unpkg.com/prismjs@1.8.1/prism.js', 'https://unpkg.com/jquery.terminal/js/less.js', 'https://unpkg.com/jquery.terminal/js/prism.js', 'https://unpkg.com/uniter@2.12.1/dist/uniter.js', 'https://unpkg.com/prismjs@1.8.1/components/prism-php.js'];
        let PHP_Terminal_Data = [];
        PHP_Terminal_Files.forEach(function(info) {
        // ensure these files aren't loaded already in DOM...
           if (isFileAlreadyLoaded(info, "script") === false){
            PHP_Terminal_Data.push(create(info));
           }
        });
        Promise.all(PHP_Terminal_Data).then(function() {
            console.log('The required scripts are loaded successfully!');
        }).catch(function(gfgData) {
            console.log(gfgData + ' failed to load!');
        });
  
}); 
   
