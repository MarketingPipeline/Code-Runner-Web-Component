# Code-Runner-Web-Component


<div align="center"> 

![ezgif-5-d9d9221610](https://user-images.githubusercontent.com/86180097/191913312-754d00aa-0a0a-4812-bed3-774ebdfb66a7.png)



A web component that allows you to run high level programming languages on your website via the public [Piston API](https://github.com/engineer-man/piston#Public-API) <br>
  <small> <b><i>Show your support!</i> </b></small>
  <br>
   <a href="https://github.com/MarketingPipeline/Code-Runner-Web-Component">
    <img title="Star on GitHub" src="https://img.shields.io/github/stars/MarketingPipeline/Code-Runner-Web-Component.svg?style=social&label=Star">
  </a>
  <a href="https://github.com/MarketingPipeline/Code-Runner-Web-Component/fork">
    <img title="Fork on GitHub" src="https://img.shields.io/github/forks/MarketingPipeline/Code-Runner-Web-Component.svg?style=social&label=Fork">
  </a>

</div>





## Example and usage

You can view a demo of the Code Runner web component in use [here.](https://marketingpipeline.github.io/Code-Runner-Web-Component/demo.html)


How to use <b><i>Code Runner</b></i>:

Set a <code>language</code> attribute to a [supported programming language](#supported-languages) & <code>version</code> attribute to the programming version you prefer to use - example below


```html
<code-runner language="python" version="3"></code-runner>
```    




   include this [script](https://github.com/MarketingPipeline/Code-Runner-Web-Component/blob/main/dist/code-runner-wc.min.js) in your HTML document.
         
    <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Code-Runner-Web-Component/dist/code-runner-wc.min.js" defer></script> 




<br>


How to use <b><i>Code Runner</b></i> with <b>Pre-Defined Code</b>:

You can pre-define a code example to run, simply by inserting the code inside of a <code>code-runner</code> element like so - 

```html
<code-runner language="python" version="3">print('hello world')</code-runner>
```    


    
    
### Options



<table>
<tr>
<th>Attribute</th>
<th>Meaning</th>
<th>Default</th>
<th>Required</th>
</tr>
<tr>
<td>language</td>
 <td> The programming language to execute code with</b></td>
<td><code>Undefined</code></td>
<td>Yes</td>
</tr>


<tr>
<td>version</td>
              <td>The programming language version to use</code></td>
<td><code>Undefined</code></td>
<td>Yes</td>
</tr>
 





</table>


## Supported Languages

`awk`,
`bash`,
`befunge93`,
`brachylog`,
`brainfuck`,
`bqn`,
`c`,
`c++`,
`cjam`,
`clojure`,
`cobol`,
`coffeescript`,
`cow`,
`crystal`,
`csharp`,
`csharp.net`,
`d`,
`dart`,
`dash`,
`dragon`,
`elixir`,
`emacs`,
`emojicode`,
`erlang`,
`file`,
`forte`,
`forth`,
`fortran`,
`freebasic`,
`fsharp.net`,
`fsi`,
`go`,
`golfscript`,
`groovy`,
`haskell`,
`husk`,
`iverilog`,
`japt`,
`java`,
`javascript`,
`jelly`,
`julia`,
`kotlin`,
`lisp`,
`llvm_ir`,
`lolcode`,
`lua`,
`matl`,
`nasm`,
`nasm64`,
`nim`,
`ocaml`,
`octave`,
`osabie`,
`paradoc`,
`pascal`,
`perl`,
`php`,
`ponylang`,
`powershell`,
`prolog`,
`pure`,
`pyth`,
`python`,
`python2`,
`racket`,
`raku`,
`retina`,
`rockstar`,
`rscript`,
`ruby`,
`rust`,
`scala`,
`smalltalk`,
`sqlite3`,
`swift`,
`typescript`,
`basic`,
`basic.net`,
`vlang`,
`vyxal`,
`yeethon`,
`zig`,

<br>





## Contributing ![GitHub](https://img.shields.io/github/contributors/MarketingPipeline/Code-Runner-Web-Component)

Want to improve this? Create a pull request with detailed changes / improvements! If approved you will be added to the list of contributors of this awesome project!


See also the list of
[contributors](https://github.com/MarketingPipeline/Code-Runner-Web-Component/graphs/contributors) who
participate in this project.

## License ![GitHub](https://img.shields.io/github/license/MarketingPipeline/Code-Runner-Web-Component)

This project is licensed under the GPL-3.0 License - see the
[LICENSE.md](https://github.com/MarketingPipeline/Code-Runner-Web-Component/blob/main/LICENSE) file for
details.
