export interface LogItemOption {
  readonly TimeStamp: string;
  readonly LogMarker: string;
  readonly CurrentThread: string;
  readonly Logger: string;
  readonly LogLevel: string;
}

export interface LogItem {
  timeStamp: any;
  readonly logMarker: string;
  readonly currentThread: string;
  readonly logger: string;
  readonly logLevel: string;
}

export interface LogOption {
  readonly Server: string;
  readonly LogFileName: string;
  readonly LogItems: Array<LogItemOption>;
}

export class Log {
  readonly server: string;
  readonly logFileName: string;
  readonly logItems: Array<LogItem>;

  constructor(logOption: LogOption) {
    this.server = logOption.Server;
    this.logFileName = logOption.LogFileName;

    this.logItems = logOption.LogItems.map((logItemOption: LogItemOption) => {
        return {
          timeStamp: logItemOption.TimeStamp,
          logMarker: logItemOption.LogMarker,
          currentThread: logItemOption.CurrentThread,
          logger: logItemOption.Logger,
          logLevel: logItemOption.LogLevel
        };
      }
    );
  }
}
