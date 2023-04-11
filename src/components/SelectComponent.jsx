import axios from "axios";
import { useEffect, useState } from "react";

const Dropdown = ({ label, value, options, onChange }) => {
    return (
        <label className='dropdown-select text-black'>
            <h1>{label}</h1>
            <select value={value} onChange={onChange}>
                  {Array.from(options).map((opt) => (
                    <option key={opt} value={opt} onClick={onChange}>{opt}</option>
                  ))}
              </select>
        </label>
    );
  };

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

export default SelectComponent;