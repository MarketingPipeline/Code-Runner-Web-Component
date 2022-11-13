# Plugins 

You can now use plug-ins / extensions with the Code-Runner web component that bring extra features - you can find a list of all the plugins & their features below!

## Compiler Plugins

> These plugins / extensions add extra compiler support

- Markdown (adds support to render Markdown)
- Brython (compile Python3 via Brython) 


To use a compiler plugin - you must set the HTML attribute <code>custom-compiler</code> - example below. 
  
```html
<code-runner custom-compiler language="markdown"># Like this</code-runner>
```
  
and include your prefered compiler plugin like so 

/plugins/code-runner-COMPILER-PLUGIN-NAME-HERE
  
  


## Editor Plugins 

> These plugins / extensions improve the text area / text editor of the web-component

- Ace Editor Plugin (adds Ace Editor to the Code-Runner)

- Code Mirror Plugin (adds Code Mirror to the Code-Runner)

To use a editor plugin simply include a script in your HTML document like so - 


/plugins/code-runner-EDITOR-PLUGIN-NAME-HERE


## Create your own!

You can create your own plugins / extensions for the Code-Runner web component! Feel free to share any plugins / extensions with the community by adding it to the repo to
the folder <code>src/plugins/code-runner-YOUR-PLUGIN-NAME.js</code>!

For a demo on how to make your own plugin / extension - see the following plugins / code used as examples. 
