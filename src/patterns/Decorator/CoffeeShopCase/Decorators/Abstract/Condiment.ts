import { Beverage } from "../../Components/Abstract/Beverage";

export abstract class CondimentDecorator extends Beverage {
  public abstract getDescription(): string;
}
