import Component from "./Component";

function RowListComponent({innerComponents}) {
    const innerObjects = []
    innerComponents ? innerComponents.forEach(element => {
        innerObjects.push(<Component componentName={element.componentName} props={element.props} />)
    }) : console.log('Inner components empty');

    const justify = (innerObjects.length == 1 ? "justify-around" : "justify-between")

    const className = "flex flex-row px-3 py-3 w-full " + justify

    return ( 
        <div className={className}>
            {innerObjects}
        </div>
    );
}

export default RowListComponent;