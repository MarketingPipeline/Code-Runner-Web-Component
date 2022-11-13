# Plugins 

You can now use plug-ins / extensions with the Code-Runner web component that bring extra features - you can find a list of all the plugins & their features below!

## Compiler Plugins

> These plugins / extensions add extra compiler support

- Markdown (adds support to render Markdown)
- Latex (add support to render Latex)


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

You can create your own plugins / extensions for the Code-Runner web component!

Feel free to share any plugins / extensions with the community by adding it to the repo via a pull request - be sure to follow these's steps below 

- Create a folder like so - <code>src/plugins/YOUR-PLUGIN-NAME.js</code>!
- Add your code / plugin in the folder like so - <code>src/plugins/YOUR-PLUGIN-FOLDER-NAME/code-runner-YOUR-PLUGIN-NAME.js</code>!
- Add a README.md inside of the folder that describes how to use your plugin.
- Add it to this list!

For a demo on how to make your own plugin / extension - see the following plugins / code used as examples. 

Editor Plugin Example - 


Compiler Plugin Example -
