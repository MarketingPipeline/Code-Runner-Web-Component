## Code Editor

### How to disable ALL Code Editor / Ace Editor

To disable ALL / ANY instances of Ace Editor being loaded set the variable ```CodeRunner_DisableAceEditor``` to anything.

```html
<script>
 let CodeRunner_DisableAceEditor= "true";
</script>
```



## Plugin Developement 

### How to create a plugin

You can implement your own plugins / JavaScript to work with the Code Runner web component. 


Here is a brief example of how you can handle your own functions / implement new compilers & way more into the web component! 

```js

```

To view the source code of a plugin - see here.



### Load Code Editor For Plugin

If you are developing a non-terminal based plugin, you will need to set / load the Ace Editor to each Code Runner component with your custom compiler / plugin-name attribute.

``` CreateAceEditorForPlugin(element, language)```

You can find all valid language modes for the Ace Editor here [here](dsad)

<b>Note</b>: Your custom-compiler attribute / plugin name must NOT contain ```shell``` or ```terminal```.
