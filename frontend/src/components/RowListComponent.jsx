import Component from "./Component";

function RowListComponent({innerComponents}) {
    const innerObjects = []
    innerComponents ? innerComponents.forEach(element => {
        innerObjects.push(<Component componentName={element.componentName} props={element.props} />)
    }) : console.log('Inner components empty');

    const justify = (innerObjects.length == 1 ? "justify-around" : "justify-between")

    const className = "flex flex-row px-3 py-3 w-full bg-pink-300 " + justify

    return ( 
        <div className={className}>
            {innerObjects}
        </div>
    );
}

export const RowListComponentJson = {
    'componentName': 'RowListComponent',
    'props': {
        'innerComponents': [
            
        ],
        'path': ''
    }
}

export default RowListComponent;