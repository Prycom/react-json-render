import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getJson, updateJson } from "../itemActions";
import Component from "./Component";
import Dropdown from "./Dropdown";
import ElementPropertiesComponent from "./ElementPropertiesComponent";

function renameComponentNames(obj, changableKey, oldValue, newValue) {
    for (let [key, value] of Object.entries(obj)) {
      if (typeof value === 'object') {
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            renameComponentNames(value[i], changableKey, oldValue, newValue); // recursive call
          }
        } else {
          renameComponentNames(value, changableKey, oldValue, newValue); // recursive call
        }
      } else {
        if(key === changableKey){
            console.log(1);
            if(obj[key] === oldValue) obj[key] = newValue
        }
      }
    }
    return obj
  }

function RedactorComponent({jsonLayout, updateJson}) {

    const [isEditing, setIsEditing] = useState('')

    useEffect(() => {
        updateJson({
            'componentName': 'ElementAdderComponent',
            'props': {
                'path': ''
            }
        })
    }, [])

    useEffect(() => {
        let jsonCopy = structuredClone(jsonLayout)
        if(Object.keys(jsonCopy).length !== 0)
        {    
            if(isEditing === 'View'){
                renameComponentNames(jsonCopy, 'componentName', 'ElementAdderComponent', 'EmptyComponent')
            }else if( isEditing === 'Edit'){
                renameComponentNames(jsonCopy, 'componentName', 'EmptyComponent', 'ElementAdderComponent')
            }
            updateJson(jsonCopy)
        }
    }, [isEditing])



    return (  
        <div className="flex flex-row h-screen w-screen bg-gray-300">
            <div className="componentsLibrary w-1/4 bg-gray-100">
                <h1>JSON layout</h1>
                <textarea className="flex h-full w-full px-4 py-4 resize-none" value={JSON.stringify(jsonLayout)} disabled={true}></textarea>
            </div>
            <div className="templateRedactor flex flex-col justify-around items-center w-1/2 bg-gray-200 px-4 py-4">
                <Dropdown label={'Режим'} options={['Edit', 'View']} onChange={(e) => {setIsEditing(e.target.value)}}/>
                <Component {...jsonLayout}/>

            </div>
            <div className="templateProps flex flex-col w-1/4 bg-gray-100">
                <div className="elementProps h-1/2 bg-slate-300">
                    <h1>Свойства элемента</h1>
                    <ElementPropertiesComponent />
                </div>
                <div className="layoutScheme h-1/2 bg-slate-400">
                    <h1>Схема формы</h1>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        jsonLayout: state.jsonLayout,
        editableElement: state.editableElement
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateJson: (json) => dispatch(updateJson(json)),
        getJson: () => dispatch(getJson())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedactorComponent);