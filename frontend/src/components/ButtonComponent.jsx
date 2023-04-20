function ButtonComponent({buttonLabel, buttonText, onClick}) {
    return ( 
        <div className="flex flex-col max-w-xs" onClick={onClick}>
            <label className="">{buttonLabel}</label>
            <button className="bg-white rounded-lg px-5 py-2 text-black">{buttonText}</button>
        </div>
    );
}

export const ButtonComponentJson = {
    'componentName': 'ButtonComponent',
    'props': {
        'buttonLabel': '',
        'buttonText': '',
        'path': ''
    }
}

export default ButtonComponent;