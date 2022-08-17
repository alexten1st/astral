import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Field from "../Field/Field";
import { Field as FieldType } from "../../utils/redux/reducers/formReducer";
import { selectItemAC } from "../../utils/redux/actionCreators";
const Profile = () => {
  const fields: FieldType[] = useSelector((state: any) => state.formReducer);
  const dispatch = useDispatch();
  const onChange = (event:any)=> {
    dispatch(selectItemAC({id:event.target.id, value:event.target.value}))
  }
  
  return (
    <form>
      {fields!.map((field: FieldType) => (
        <Field
          id={field.id}
          key={field.id}
          type={field.type}
          title={field.title}
          variancy={field.variancy}
          conditionHide={field.conditionHide}
          conditionNotEditable={field.conditionNotEditable}
          DefaultValue={field.DefaultValue}
          value={field.Value}
          onChange={onChange}
        />
      ))}
    </form>
  );
};
export default Profile;
