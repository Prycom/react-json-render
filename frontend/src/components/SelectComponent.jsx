import axios from "axios";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

function SelectComponent({labelText, options, urlToData}) {

    const [variants, setVariants] = useState([])

    useEffect(() => {
        if(!options){
            axios.get(urlToData).then((resp) => {
                const resp_data = resp.data
                setVariants(resp_data)
            })
        }else{
            setVariants(options)
        }
    }, [])

    return (  
        <div>
            <Dropdown options={variants} label={labelText}/>
        </div>
    );
}

export const SelectComponentJson = {
    'componentName': 'SelectComponent',
    'props': {
        'labelText': '',
        'options': [

        ],
        'urlToData': '',
        'path': ''
    }
}

export default SelectComponent;