# Plugins 

You can easily include plug-ins / extensions with the Code-Runner web component that adds extra features - you can find a list of all the plugins & their features below!

## Compiler Plugins

> These plugins / extensions add extra compiler support
fgf

<!-- HTML Code: Place this code in the document's body (between the 'body' tags) where the table should appear -->
<table class="GeneratedTable">
  <thead>
    <tr>
      <th>Plugin Name</th>
      <th>Description</th>
      <th>Compiler</th>
       <th>Language</th>
      <th>README</th>
      <th>Demo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>cr-showdown</td>
      <td>cr-katex</td>
      <td>cr-uniter</td>
      <td>cr-skulpt</td>
       <td>Cell</td>
         <td>Cell</td>
    </tr>
    <tr>
      <td>cr</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
       <td>Cell</td>
         <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>  
       <td>Cell</td>
         <td>Cell</td>
    </tr>
    
  </tbody>
</table>
<!-- Codes by Quackit.com -->


- Showdown (adds support to render Markdown via Showdown.js)
- Katex (add support to render Latex via Katex)


To use a compiler plugin - you must set the HTML attribute <code>custom-compiler</code> to a valid plugin / compiler name - example below. 


```html
<code-runner custom-compiler="showdown" language="Markdown"># Like this</code-runner>
```


<b>Note</b>: language attribute can be set to anything!

  
and include this script with your prefered compiler plugin in your HTML document.

```html
/plugins/code-runner-COMPILER-PLUGIN-NAME-HERE
```  
  
## Terminal Plugins

> These plugins / extensions allow you to compile code inside of a terminal / shell based enviroment (Command-line) .


<!-- HTML Code: Place this code in the document's body (between the 'body' tags) where the table should appear -->
<table class="GeneratedTable">
  <thead>
    <tr>
      <th>Plugin Name</th>
      <th>Description</th>
      <th>Compiler</th>
       <th>Language</th>
      <th>README</th>
      <th>Demo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>cr-skulpt-terminal</td>
      <td>Compile Python2 inside of a terminal / shell.</td>
      <td>cr-uniter</td>
      <td>cr-skulpt</td>
       <td>Cell</td>
         <td>Cell</td>
    </tr>
    <tr>
      <td>cr-uniter-terminal</td>
      <td>Compile PHP inside of a terminal / shell</td>
      <td>Cell</td>
      <td>Cell</td>
       <td>Cell</td>
         <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>  
       <td>Cell</td>
         <td>Cell</td>
    </tr>
    
  </tbody>
</table>

To use a terminal plugin - view the corresponding README file to see the usage. 




## Editor Plugins 

> These plugins / extensions improve the text area / text editor of the web-component

- Ace Editor Plugin (adds Ace Editor to the Code-Runner)

- Code Mirror Plugin (adds Code Mirror to the Code-Runner)

To use a editor plugin simply include a script in your HTML document like so - 

```html
/plugins/code-runner-EDITOR-PLUGIN-NAME-HERE
```


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
