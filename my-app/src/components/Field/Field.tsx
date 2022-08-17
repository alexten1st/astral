import React from "react";
import { useSelector } from "react-redux";
import { Field as FieldType } from "../../utils/redux/reducers/formReducer";
import { Condition } from "../../utils/redux/reducers/formReducer";
import "./Field.css";
type Props = {
  id:string
  type: string;
  title: string;
  variancy: string[];
  conditionHide: Condition;
  conditionNotEditable: Condition;
  DefaultValue: string;
  value: string;
  onChange:(event:any)=>void
};
const Field: React.FC<Props> = (props: Props) => {
  const fields: FieldType[] = useSelector((state: any) => state.formReducer);
  const isEditable = () => {
    if (props.conditionNotEditable.hasOwnProperty("condition")) {
      const influentValue = fields.find(
        (el) => el.id === props.conditionNotEditable.id!
      )!.Value;
      return props.conditionNotEditable.condition!(influentValue);
    }
    return false;
  };
  const isHide = () => {
    if (props.conditionNotEditable.hasOwnProperty("condition")) {
      const influentValue = fields.find(
        (el) => el.id === props.conditionNotEditable.id!
      )!.Value;
      return props.conditionNotEditable.condition!(influentValue);
    }
    return false;
  };
  return (
    <div className={isHide() ? "form-group hide" : "form-group"}>
      <label>{props.title}</label>
      {props.type === "select" ? (
        <>
          <select onChange={props.onChange} id={props.id}>
            {props.variancy.map((variant, ind) => (
              <option key={ind} value={variant === props.value ? props.value: undefined}>
                {variant}
              </option>
            ))}
          </select>
        </>
      ) : props.type === "checkbox" ? (
        <>
          <div className="variant-container">
            {props.variancy.map((variant, ind) => (
              <div>
                <input
                  type="checkbox"
                  key={ind}
                  onChange={props.onChange}
                  id={props.id}
                />
                <label>{variant}</label>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <input
            type={props.type}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder={props.value}
            onChange={props.onChange}
            id={props.id}
          />
        </>
      )}
    </div>
  );
};
export default Field;
