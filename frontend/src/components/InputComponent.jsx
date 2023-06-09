import { useState } from "react";

function InputComponent({labelText, placeholder, value, onChange}) {
    const [val, setVal] = useState(value)

    function handleChange(event) { // return data from input if call
        setVal(event.target.value)
        typeof(onChange) === 'function' ? onChange({'labelText': labelText ,'value': event.target.value}) : console.log('No input callback')
    } 

    return ( 
    <div className="flex flex-col w-150 text-black">
        <label>{labelText}</label>
        <input type="text" placeholder={placeholder} 
            value={val} onChange={handleChange} 
            className="rounded px-1 py-1"/>
            
    </div> 
    );
}

export const InputComponentJson = {
    'componentName': 'InputComponent',
    'props': {
        'labelText': '',
        'placeholder': '',
        'value': '',
        'path': ''
    }
}

export default InputComponent;