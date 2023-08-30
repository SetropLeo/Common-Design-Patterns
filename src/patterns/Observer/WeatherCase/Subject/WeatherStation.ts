import { Observer } from "../interfaces/Observer";
import { Subject } from "../interfaces/Subject";

export class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;
  private windSpeed: number = 0;
  private pressure: number = 0;

  public registerObserver(obs: Observer): void {
    this.observers.push(obs);
  }

  public removeObserver(obs: Observer): void {
    const index: number = this.observers.indexOf(obs);

    if (index >= 0) this.observers.splice(index, 1);
  }

  public notifyObservers(): void {
    this.observers.forEach((obs: Observer) => {
      obs.update(this.temperature, this.windSpeed, this.pressure);
    });
  }

  public setValue(temp: number, windSpeed: number, pressure: number): void {
    this.temperature = temp;
    this.windSpeed = windSpeed;
    this.pressure = pressure;
    this.notifyObservers();
  }
}
