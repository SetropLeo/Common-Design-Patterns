import { Observer } from "./interfaces/Observer";
import { Subject } from "./interfaces/Subject";

export class SimpleSubject implements Subject {
  private observers: Observer[] = [];
  private value: number = 0;

  public registerObserver(obs: Observer): void {
    this.observers.push(obs);
  }

  public removeObserver(obs: Observer): void {
    const index: number = this.observers.indexOf(obs);

    if (index >= 0) this.observers.splice(index, 1);
  }

  public notifyObservers(): void {
    this.observers.forEach((obs: Observer) => {
      obs.update(this.value);
    });
  }

  public setValue(value: number): void {
    this.value = value;
    this.notifyObservers();
  }
}
