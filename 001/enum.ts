enum E {
    X,
    Y,
    Z,
  }
   
  function f(obj: { Y: number }) {
    return obj.Y;
  }
   
  // Works, since 'E' has a property named 'X' which is a number.
  console.log(f(E));

  enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
  }
   
  /**
   * This is equivalent to:
   * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
   */
  type LogLevelStrings = keyof typeof LogLevel;
   
  function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
      console.log("Log level key is:", key);
      console.log("Log level value is:", num);
      console.log("Log level message is:", message);
    }
  }
  printImportant("WARN", "This is a message");
  
  enum Enum {
    A,
  }
   
  let a = Enum.A;
  let nameOfA = Enum[a]; // "A"
  console.log(nameOfA)

  export {}