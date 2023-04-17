function TextAreaComponent({labelText, placeholder}) {
    return (  
        <div className="textAreaComponent flex flex-col w-full  text-black">
            <label>{labelText}</label>
            <textarea className="min-w-400 min-h-200 w-full resize-none rounded-md px-2 py-2" placeholder={placeholder}></textarea>
        </div>
    );
}

export const TextAreaComponentJson = {
    'componentName': 'TextAreaComponent',
    'props': {
        'labelText': '',
        'placeholder': '',
        'path': ''
    }
}

export default TextAreaComponent;