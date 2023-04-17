import InputComponent, { InputComponentJson } from "./components/InputComponent"
import ButtonComponent, { ButtonComponentJson } from "./components/ButtonComponent"
import RowListComponent, { RowListComponentJson } from "./components/RowListComponent";
import ColListComponent, { ColListComponentJson } from "./components/ColListComponent";
import SberForm, { SberFormJson } from "./components/SberForm";
import SelectComponent, { SelectComponentJson } from "./components/SelectComponent";
import TextAreaComponent, { TextAreaComponentJson } from "./components/TextAreaComponent";
import ElementAdderComponent, { ElementAdderComponentJson } from "./components/ElementAdderComponent";
import EmptyComponent from "./components/EmptyComponent";

const componentsDict = {
    'InputComponent': InputComponent,
    'ButtonComponent': ButtonComponent,
    'RowListComponent': RowListComponent,
    'ColListComponent': ColListComponent,
    'SberForm': SberForm,
    'SelectComponent': SelectComponent,
    'TextAreaComponent': TextAreaComponent,
    'ElementAdderComponent': ElementAdderComponent,
    'EmptyComponent': EmptyComponent
}

export const functionalComponentsDict = {
    'InputComponent': InputComponent,
    'ButtonComponent': ButtonComponent,
    'SelectComponent': SelectComponent,
    'TextAreaComponent': TextAreaComponent
}

export const componentsJsonDict = {
    'InputComponent': InputComponentJson,
    'ButtonComponent': ButtonComponentJson,
    'RowListComponent': RowListComponentJson,
    'ColListComponent': ColListComponentJson,
    'SberForm': SberFormJson,
    'SelectComponent': SelectComponentJson,
    'TextAreaComponent': TextAreaComponentJson,
    'ElementAdderComponent': ElementAdderComponentJson,

}



export default componentsDict;