import InputComponent, { InputComponentJson } from "./components/InputComponent"
import ButtonComponent, { ButtonComponentJson } from "./components/ButtonComponent"
import RowListComponent, { RowListComponentJson } from "./components/RowListComponent";
import ColListComponent, { ColListComponentJson } from "./components/ColListComponent";
import SberForm, { SberFormJson } from "./components/SberForm";
import SelectComponent, { SelectComponentJson } from "./components/SelectComponent";
import TextAreaComponent, { TextAreaComponentJson } from "./components/TextAreaComponent";
import ElementAdderComponent, { ElementAdderComponentJson } from "./components/ElementAdderComponent";

const componentsDict = {
    'InputComponent': InputComponent,
    'ButtonComponent': ButtonComponent,
    'RowListComponent': RowListComponent,
    'ColListComponent': ColListComponent,
    'SberForm': SberForm,
    'SelectComponent': SelectComponent,
    'TextAreaComponent': TextAreaComponent,
    'ElementAdderComponent': ElementAdderComponent,
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

export const applyJsonChange = (data, mods) => {
    for (var path in mods) {
      var k = data;
      var steps = path.split('.');
      var last = steps.pop();
      steps.forEach(e => (k[e] = k[e] || {}) && (k = k[e]));
      k[last] = mods[path];
    }
    return data
  }

export default componentsDict;