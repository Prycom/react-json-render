import Component from "./Component";

function ColListComponent({innerComponents}) {
    const innerObjects = []
    
    if(innerComponents){
        innerComponents.forEach(element => {
            innerObjects.push(<Component componentName={element.componentName} props={element.props} />)})
    }

    return ( 
        <div className=" flex flex-col h-full justify-around items-center px-3 py-3 bg-blue-300">
            {innerObjects}
        </div>
    );
}

export const ColListComponentJson = {
    'componentName': 'ColListComponent',
    'props': {
        'innerComponents': [
            
        ],
        'path': ''
    }
}

export default ColListComponent;