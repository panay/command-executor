export interface IStreamLogger {
  log(...args: any[]): void;
  err(...args: any[]): void;
  end(): void;
}