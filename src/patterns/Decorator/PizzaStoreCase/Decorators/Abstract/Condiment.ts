import { Pizza } from "../../Components/Abstract/Pizza";

export abstract class CondimentDecorator extends Pizza {
  public pizza: Pizza;
  public abstract getDescription(): string;
}
