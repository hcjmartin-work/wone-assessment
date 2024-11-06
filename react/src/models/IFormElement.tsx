import { IFormElementInput } from "./IFormElementInput";

export interface IFormElement {
  id: string;
  titleHtml?: string;
  subtitleHtml?: string;
  typeName?: string;
  input?: IFormElementInput;
}
