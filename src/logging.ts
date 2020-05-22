const logLvString: string = process.env.LOG_LEVEL || "error";

export const LOG_LEVELS = {
  error: 4,
  warn: 3,
  info: 2,
  debug: 1,
};

class LoggingClass {
  private mLogLevel: number = 4;

  constructor() {
    let logLvStr = logLvString as keyof typeof LOG_LEVELS;

    if (LOG_LEVELS[logLvStr]) {
      this.mLogLevel = LOG_LEVELS[logLvStr];
    } else {
      console.warn(
        "Log level not supported. Please set LOG_LEVEL to one of error, warn, info and debug"
      );
    }
  }

  public log(data: any, level: number = LOG_LEVELS.error) {
    if(level >= this.mLogLevel) {
      console.log(data);
    }
  }

  public error(data: any) { return this.log(data, LOG_LEVELS.error)}
  public warn(data: any) { return this.log(data, LOG_LEVELS.warn)}
  public info(data: any) { return this.log(data, LOG_LEVELS.info)}
  public debug(data: any) { return this.log(data, LOG_LEVELS.debug)}
}

const Logging = new LoggingClass();
export { Logging };
