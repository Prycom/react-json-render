import { useState } from "react";
import { connect } from "react-redux";
import { updateEditableElement, updateJson } from "../itemActions";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

function ElementPropertiesComponent ({editableElement, jsonLayout, updateJson, updateEditableElement}){

    var keys = []
    let propsInputs = []
    if(editableElement['props']){
        keys = Object.keys(editableElement['props'])
    }
    const [changedProps, setChangedProps] = useState({})

    const handleChildChange = (val) => {
        const key = val['labelText']
        const value =  val['value']
        let newObj = structuredClone(changedProps)
        newObj[key] = value
        setChangedProps(newObj)
    }

    keys.forEach(element => {
      if(!['path', 'innerComponents'].includes(element)){
        propsInputs.push((<InputComponent labelText={element} value={''} onChange={handleChildChange}/>))
      }
    })

    const saveChanges = (e) => {
        //console.log(editableElement)
        //console.log(changedProps)
        
        if(editableElement['props']){    
            const pathToElement = editableElement['props']['path']
            const pathArr = pathToElement.split('.')

            let newJsonLayout = structuredClone(jsonLayout)
            var obj = newJsonLayout
            for (let i = 0; i < pathArr.length - 1; i++) {
                obj = obj[pathArr[i]]
            }
            if(pathArr.length !== 1)obj = obj[pathArr[pathArr.length - 1]]
            obj = obj['props']
            obj = { ...obj, ...changedProps }
            
            //newJsonLayout['props'] = obj

            var obj3 = newJsonLayout
            for (let i = 0; i < pathArr.length - 1; i++) {
                obj3 = obj3[pathArr[i]]
            }
            if(pathArr.length !== 1)obj3 = obj3[pathArr[pathArr.length - 1]]
            console.log(obj3)

            obj3['props'] = obj

            //console.log(newJsonLayout)
            updateJson(newJsonLayout)

            let obj2 = structuredClone(newJsonLayout)
            for (let i = 0; i < pathArr.length - 1; i++) {
                obj2 = obj2[pathArr[i]]
            }
            updateEditableElement({})
        }
        setChangedProps({})
    }

    return (
        <div className="flex flex-col h-full justify-around items-center px-3 py-10">
            <div className="flex flex-col h-full justify-center items-center px-3 py-3">
                {
                    keys.map((element) => {
                        if(!['path', 'innerComponents'].includes(element)){
                            return (<InputComponent labelText={element} onChange={handleChildChange}/>)
                        }
                    })
                }
            </div>
            
            <ButtonComponent buttonText={'Сохранить изменения'} onClick={saveChanges}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        jsonLayout: state.jsonLayout,
        editableElement: state.editableElement
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateJson: (json) => dispatch(updateJson(json)),
        updateEditableElement: (json) => dispatch(updateEditableElement(json))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ElementPropertiesComponent)