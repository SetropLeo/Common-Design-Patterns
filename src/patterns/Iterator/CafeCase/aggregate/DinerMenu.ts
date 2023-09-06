import { MenuItem } from "../client/MenuItem";
import { Iterator } from "../interfaces/Iterator";
import { Menu } from "../interfaces/Menu";
import { DinerMenuIterator } from "../iterators/DinerMenuIterator";

export class DinerMenu implements Menu {
  static MAX_ITEMS: number = 6;
  numberOfItems: number = 0;
  menuItems: MenuItem[] = [];

  constructor() {
    this.setInitialItems();
  }

  public createIterator(): Iterator {
    return new DinerMenuIterator(this.menuItems);
  }

  public addItem(name: string, description: string, price: number): void {
    const menuItem = new MenuItem(name, description, price);

    if (this.numberOfItems < DinerMenu.MAX_ITEMS) {
      this.menuItems.push(menuItem);
      this.numberOfItems++;
    } else {
      console.log("Sorry, menu is full! Can't add item to menu");
    }
  }

  public getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  private setInitialItems(): void {
    this.addItem(
      "Vegetarian BLT",
      "(Fakin') Bacon with lettuce & tomato on whole wheat",
      2.99
    );
    this.addItem("BLT", "Bacon with lettuce & tomato on whole wheat", 2.99);
    this.addItem(
      "Soup of the day",
      "Soup of the day, with a side of potato salad",
      3.29
    );
    this.addItem(
      "Hotdog",
      "A hot dog, with saurkraut, relish, onions, topped with cheese",
      3.05
    );
    this.addItem(
      "Steamed Veggies and Brown Rice",
      "Steamed vegetables over brown rice",
      3.99
    );
    this.addItem(
      "Pasta",
      "Spaghetti with Marinara Sauce, and a slice of sourdough bread",
      3.89
    );
  }
}
