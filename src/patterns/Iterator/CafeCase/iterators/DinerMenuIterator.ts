import { MenuItem } from "../client/MenuItem";
import { Iterator } from "../interfaces/Iterator";

export class DinerMenuIterator implements Iterator {
  private list: MenuItem[] = [];
  private position: number = 0;

  constructor(list: MenuItem[]) {
    this.list = list;
  }

  hasNext(): boolean {
    return this.position < this.list.length;
  }

  next(): MenuItem {
    const menuItem: MenuItem = this.list[this.position];
    this.position++;
    return menuItem;
  }
}
