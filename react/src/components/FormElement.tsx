import parse from "html-react-parser";
import FormElementInput from "./FormElementInput";
import { IFormElementInput } from "../models/IFormElementInput";

export interface IFormElement {
  id: string;
  titleHtml?: string;
  subtitleHtml?: string;
  typeName?: string;
  input?: IFormElementInput;
}

export default function FormElement(props: IFormElement) {
  return (
    <div id={props.id}>
      {props.titleHtml && parse(props.titleHtml)}
      {props.subtitleHtml && parse(props.subtitleHtml)}
      {props.input && (
        <FormElementInput
          id={props.input.id}
          label={props.input.label}
          options={props.input.options}
          required={props.input.required}
          __typename={props.input.__typename}
        />
      )}
    </div>
  );
}
