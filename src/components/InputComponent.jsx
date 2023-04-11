function InputComponent({labelText, placeholder}) {
    return ( 
    <div className="flex flex-col w-150 text-black">
        <label>{labelText}</label>
        <input type="text" placeholder={placeholder} className="rounded px-1 py-1"/>
    </div> 
    );
}

export default InputComponent;