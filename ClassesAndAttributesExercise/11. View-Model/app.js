class Textbox {
    constructor(selector, regex){
        this._value = ''
        // property _elements containing the set of elements matching the selector
        this._elements  = Array.from(document.querySelectorAll(selector));
        // property _invalidSymbols - a regex used for validating the textbox value
        this._invalidSymbols = regex;
    }

    // property value (has getters and setters) 
    get value(){
        return this._value
    }

    set value(v){
        this._value = v;
        this._elements.forEach(e => e.value = v)
    }

    // getter elements for the _elements property – return as NodeList
    get elements(){
        return this._elements
    }

    // method isValid() - if the _invalidSymbols regex can be matched in any of the _elements values  return false, otherwise, return true.
    isValid(){
        return !this._invalidSymbols.test(this._value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
