import axios from "axios";
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getJson, updateJson } from "../itemActions";
import Component from "./Component";
import ElementAdderComponent from "./ElementAdderComponent";

function RedactorComponent({jsonLayout, editableElement, updateJson, getJson}) {

    useEffect(() => {
        axios.get('http://localhost:5000/testProps').then((resp) => {
            const resp_data = resp.data
            updateJson({
                'componentName': 'ElementAdderComponent',
                'props': {
                    'path': ''
                }
            })
            //updateJson(resp_data)
        })
    }, [])



    return (  
        <div className="flex flex-row h-screen w-screen bg-gray-300">
            <div className="componentsLibrary w-1/4 bg-gray-100">
                <h1>Библиотека компонентов</h1>
                {/*<ElementAdderComponent /> */}
            </div>
            <div className="templateRedactor flex flex-col justify-around items-center w-1/2 bg-gray-200 px-4 py-4">
                {/*<Component componentName={'SberForm'} props={testProps} /> */}
                <Component {...jsonLayout}/>

            </div>
            <div className="templateProps flex flex-col w-1/4 bg-gray-100">
                <div className="elementProps h-1/2 bg-slate-300">
                    <h1>Свойства элемента</h1>
                </div>
                <div className="layoutScheme h-1/2 bg-slate-400">
                    <h1>Схема формы</h1>
                </div>
            </div>
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
        getJson: () => dispatch(getJson())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedactorComponent);