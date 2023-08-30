export interface Observer {
  update(temp: number, windSpeed: number, pressure: number): void;
}
