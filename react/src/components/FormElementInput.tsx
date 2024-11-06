import parse from "html-react-parser";
import { IFormElementInputOption } from "../models/IFormElementInputOption";
import { IFormElementInput } from "../models/IFormElementInput";

const InputBlockByType = (
  id: string,
  options: IFormElementInputOption[],
  required: boolean,
  __typename: string
) => {
  // TODO: Would probably move this to it's own functional component
  switch (__typename) {
    case "SelectInput":
      return (
        <div>
          <select name={id} id={`${id}-select`}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          {required && "*"}
        </div>
      );
    default:
      return <div>Unknown Input Type</div>;
  }
};

export default function FormElementInput(props: IFormElementInput) {
  return (
    <div id={props.id}>
      {props.label && <p>{parse(props.label)}</p>}
      {InputBlockByType(
        props.id,
        props.options,
        props.required,
        props.__typename
      )}
    </div>
  );
}
