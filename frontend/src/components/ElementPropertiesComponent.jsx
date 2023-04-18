import { connect } from "react-redux";
import { updateEditableElement, updateJson } from "../itemActions";

function ElementPropertiesComponent ({editableElement}){

    return (
        <div className="flex flex-col justify-around">
            {
                
            }
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