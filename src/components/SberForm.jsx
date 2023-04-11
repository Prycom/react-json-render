import Component from "./Component";

function SberForm({formName, innerComponents}) {
    const innerObjects = []
    innerComponents ? innerComponents.forEach(element => {
        innerObjects.push(<Component componentName={element.componentName} props={element.props} />)
    }) : console.log(innerComponents);
    
    return (  
        <div className="sberForm w-600 max-h-800 bg-[#009000] rounded-md px-4 py-4 text-white">
            <div>
                <h1>{formName}</h1>
            </div>
            {innerObjects}
        </div>
    );
}

export default SberForm;