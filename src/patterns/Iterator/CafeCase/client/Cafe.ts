import { DinerMenu } from "../aggregate/DinerMenu";
import { PancakeHouseMenu } from "../aggregate/PancakeHouseMenu";
import { Iterator } from "../interfaces/Iterator";
import { Menu } from "../interfaces/Menu";

export class Cafe {
  private pancakeHouseMenu: Menu;
  private dinerMenu: Menu;

  constructor(pancakeHouseMenu: Menu, dinerMenu: Menu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerMenu = dinerMenu;
  }

  printMenu(iterator: Iterator): void {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(menuItem.toString());
    }
  }
}

const pancakeHouseMenu = new PancakeHouseMenu();
const dinerMenu = new DinerMenu();
const cafe = new Cafe(pancakeHouseMenu, dinerMenu);

cafe.printMenu(pancakeHouseMenu.createIterator());
cafe.printMenu(dinerMenu.createIterator());