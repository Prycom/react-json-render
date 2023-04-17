import { useState } from "react";

function InputComponent({labelText, placeholder, value}) {
    const [val, setVal] = useState(value)
    return ( 
    <div className="flex flex-col w-150 text-black">
        <label>{labelText}</label>
        <input type="text" placeholder={placeholder} 
            value={val} onChange={e=>{setVal(e.target.value)}} 
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