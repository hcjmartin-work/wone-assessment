import { IFormElementInputOption } from "./IFormElementInputOption";

export interface IFormElementInput {
  id: string;
  label: string;
  options: IFormElementInputOption[];
  required: boolean;
  __typename: string;
}
