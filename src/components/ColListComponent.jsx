import Component from "./Component";

function ColListComponent({innerComponents}) {
    const innerObjects = []
    innerComponents ? innerComponents.forEach(element => {
        innerObjects.push(<Component componentName={element.componentName} props={element.props} />)
    }) : console.log('Inner components empty');

    return ( 
        <div className=" flex flex-col h-full justify-around items-center px-3 py-3">
            {innerObjects}
        </div>
    );
}

export default ColListComponent;