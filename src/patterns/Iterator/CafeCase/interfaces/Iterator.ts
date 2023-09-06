import { MenuItem } from "../client/MenuItem";

export interface Iterator {
    hasNext(): boolean;
    next(): MenuItem;
}