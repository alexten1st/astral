import { initialFormState } from "../../../mockFormInitialState";
import { SELECT } from "../actionTypes";
export interface Condition {
  id?: string;
  condition?: (value: string) => boolean;
}
export interface Field {
  id: string;
  type: string;
  title: string;
  variancy: string[];
  conditionHide: Condition;
  conditionNotEditable: Condition;
  DefaultValue: string;
  Value: string;
}
function formReducer(
  state: Field[] = [...initialFormState],
  action: { type: string; payload: {id: string, value:"string"} }
) {
  switch (action.type) {
    case SELECT:
      return state.map((element) => {
        if (element.id === action.payload.id) {
          console.log(action.payload.value, "action.payload.value");
          
          return{...element, Value: action.payload.value}
        }
        return element
      });
    default:
      return state;
  }
}

export default formReducer;
