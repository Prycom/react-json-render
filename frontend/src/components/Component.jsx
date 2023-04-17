import componentsDict from "../utils";
  
function Component({componentName, props}){
    if(componentName && props)
    {
        const SpecificComponent = componentsDict[componentName]
        return <SpecificComponent {...props} />
    }else{
        return <></>
    }
}

export default Component;