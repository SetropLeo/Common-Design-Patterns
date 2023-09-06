import { MenuItem } from "../client/MenuItem";
import { Iterator } from "../interfaces/Iterator";
import { Menu } from "../interfaces/Menu";
import { PancakeHouseMenuIterator } from "../iterators/PancakeHouseMenuIterator";

export class PancakeHouseMenu implements Menu {
  static MAX_ITEMS: number = 6;
  numberOfItems: number = 0;
  menuItems: MenuItem[] = [];

  constructor() {
    this.setInitialItems();
  }

  public createIterator(): Iterator {
    return new PancakeHouseMenuIterator(this.menuItems);
  }

  public addItem(name: string, description: string, price: number): void {
    const menuItem = new MenuItem(name, description, price);

    if (this.numberOfItems < PancakeHouseMenu.MAX_ITEMS) {
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
      "K&B's Pancake Breakfast",
      "Pancakes with scrambled eggs, and toast",
      2.99
    );
    this.addItem(
      "Regular Pancake Breakfast",
      "Pancakes with fried eggs, sausage",
      2.99
    );
    this.addItem(
      "Blueberry Pancakes",
      "Pancakes made with fresh blueberries, and blueberry syrup",
      3.49
    );
    this.addItem(
      "Waffles",
      "Waffles, with your choice of blueberries or strawberries",
      3.59
    );
  }
}
