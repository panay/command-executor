import { IStreamLogger } from '../../core/handlers/stream-logger.interface';

export class ConsoleLogger implements IStreamLogger {
  private static instance: ConsoleLogger;

  private constructor() {}

  public static getInstance() {
    if (!ConsoleLogger.instance) {
      ConsoleLogger.instance = new ConsoleLogger();
    }

    return ConsoleLogger;
  }

  log(...args: any[]): void {
    console.log('LOG :: ', ...args);
  }
  err(...args: any[]): void {
    console.log('ERR :: ', ...args);
  }
  end(): void {
    console.log('FINISH');
  }

}