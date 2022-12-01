import {Price} from "./Price";

export interface Item {
  name: string;
  description: string;
  price: Price;
  stockStatus: string;
}
