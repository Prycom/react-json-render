import { connect } from "react-redux";
import { updateEditableElement, updateJson } from "../itemActions";
import componentsDict, { componentsJsonDict } from "../utils";
import Dropdown from "./Dropdown";

function ElementAdderComponent({jsonLayout, updateJson, updateEditableElement, path}) {
    
    const componentsList = Object.keys(componentsDict)

    //create new choosed component + creating component adder if necessary
    const handleClick = (e) => {
        const newCompName = e.target.value
        const newComp = structuredClone(componentsJsonDict[newCompName])
        
        if(path == ''){
            let newJsonLayout = structuredClone(jsonLayout)
            if(newComp['props']['innerComponents']){
                const newPath = 'props.innerComponents.0'
                const newAdder = structuredClone(componentsJsonDict['ElementAdderComponent'])
                newAdder['props']['path'] = newPath
                newComp['props']['innerComponents'].push(newAdder)
            }
            newJsonLayout = newComp
            updateJson(newJsonLayout)
            updateEditableElement(newComp)
        }else{
            let newJsonLayout = structuredClone(jsonLayout)
            newComp['props']['path'] = path //новый компонент появляется по тому же пути что и старый 
            
            if(newComp['props']['innerComponents']){ //adding inner adder in new comps
                const newPath = path + '.props.innerComponents.0'
                let innerAdder = structuredClone(componentsJsonDict['ElementAdderComponent'])
                innerAdder['props']['path'] = newPath
                newComp['props']['innerComponents'].push(innerAdder)
            }

            // creating adder for this level
            const currentLevelAdder = structuredClone(componentsJsonDict['ElementAdderComponent'])
            let currentLevelAdderPath = ''
            const pathArr = path.split('.')
            for (let i = 0; i < pathArr.length; i++) { //calculate path for current level
                if(i == pathArr.length - 1){
                    var x = Number(pathArr[i])
                    x += 1
                    currentLevelAdderPath += x
                }else{
                    currentLevelAdderPath += pathArr[i] + '.'
                }
            }
            currentLevelAdder['props']['path'] = currentLevelAdderPath

            // replacing old adder with new component
            var obj2 = newJsonLayout
            for (let i = 0; i < pathArr.length - 1; i++) {
                obj2 = obj2[pathArr[i]]
            }
            obj2[pathArr[pathArr.length - 1]] = newComp

            // adding adder into current level
            let obj1 = newJsonLayout
            for (let i = 0; i < pathArr.length - 1; i++) {
                obj1 = obj1[pathArr[i]]
            }
            obj1.push(currentLevelAdder)
            
            // updating store
            updateJson(newJsonLayout)
            updateEditableElement(newComp)
        }

    }

    return (  
        <div className="flex justify-around bg-cyan-300 px-2 py-2 rounded max-w-250">
            <Dropdown label={'Добавить элемент'} options={componentsList} onChange={handleClick}/>
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
        updateEditableElement: (json) => dispatch(updateEditableElement(json))
    }
}

export const ElementAdderComponentJson = {
    'componentName': 'ElementAdderComponent',
    'props': {
        'path': ''
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ElementAdderComponent);