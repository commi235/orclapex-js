/**
 * This namespace stores all debug functions of Oracle Application Express.
 */
declare namespace apex.debug {
  // We do not represent LOG_LEVEL as an enum since these values are defined in the JS file.
  let LOG_LEVEL : {
    /**
     * Logging is off. Value: 0
     */
    OFF : number;
    /**
     * Error logging level. Value: 1
     */
    ERROR : number;
    /**
     * Warning logging level. Value: 2
     */
    WARN : number;
    /**
     * Information logging level. Value: 4
     */
    INFO : number;
    /**
     * Application tracing logging level. Value: 6
     */
    APP_TRACE : number;
    /**
     * Engine tracing logging level. Value: 9
     */
    ENGINE_TRACE : number;
  }

  /**
   * Method that returns the debug log level. The debug log level is synchronized with hidden item "#pdebug".
   *
   * @returns { number }
   */
  function getLevel() : number;

  /**
   * Method that sets the debug log level. Log messages at or below the specified level are written to the console
   * log. It is rarely necessary to call this function because the debug log level is synchronized with the hidden
   * item `#pdebug` that comes from the server.
   *
   * @param pLevel A number from 1 to 9 where level 1 is most important and level 9 is least important.
   *   Can be one of the `LOG_LEVEL` constants. Any other value such as 0 will turn off debug logging.
   */
  function setLevel( pLevel : number ) : void;

  /**
   * Log an error message. The error function always writes the error regardless of the log level from the server or
   * set with `apex.debug.setLevel`. Messages are written using the browsers built-in console logging if available. If
   * supported `console.trace` is called. Older browsers may not support the console object or all of its features.
   *
   * @param message Any number of parameters logged to the console.
   */
  function error( ...message : any[] ) : void;

  /**
   * Log an informational message. Similar toapex.debug.message with the level set to `INFO`.
   *
   * @param message - Any number of parameters logged to the console.
   */
  function info( ...message : any[] ) : void;

  /**
   * Log a message. Similar to `apex.debug.message` with the level set to the highest level.
   *
   * @param message - Any number of parameters logged to the console.
   */
  function log( ...message: any[] ) : void;

  /**
   * Log a message at the given debug log level. The log level set from the server or with `apex.debug.setLevel`
   * controls if the message is actually written. If the set log level is >= pLevel then the message is written.
   * Messages are written using the browsers built-in console logging if available. Older browsers may not support the
   * console object or all of its features.
   *
   * @param pLevel - A number from 1 to 9 where level 1 is most important and level 9 is least important. Can be one
   *                 of the `LOG_LEVEL` constants. Any other value such as 0 will turn off debug logging.
   * @param message - Any number of parameters logged to the console.
   */
  function message( pLevel : number, ...message : any[] ) : void;

  /**
   * Log a trace message. Similar to `apex.debug.message` with the level set to `APP_TRACE`.
   *
   * @param message - Any number of parameters logged to the console.
   */
  function trace( ...message : any[] ) : void;

  /**
   * Log a warning message. Similar to `apex.debug.message` with the level set to `WARN`.
   *
   * @param message - Any number of parameters logged to the console.
   */
  function warn( ...message : any[] ) : void;
}
