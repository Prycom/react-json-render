import componentsDict from "../utils";
  
function Component({componentName, props}){
    const SpecificComponent = componentsDict[componentName]
    return <SpecificComponent {...props} />
}

export default Component;