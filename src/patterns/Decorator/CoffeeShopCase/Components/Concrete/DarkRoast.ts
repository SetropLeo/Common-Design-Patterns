import { Beverage } from "../Abstract/Beverage";

export class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "Dark Roast Coffee";
  }

  public cost(): number {
    return 0.99;
  }
}
