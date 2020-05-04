/**
 * The apex.server namespace contains all Ajax functions to communicate with the Oracle Application Express server.
 */
declare namespace apex.server {

  interface LoadScriptOptions {
    path : string,
    requirejs? : boolean,
    global? : string
  }

  /**
   * Given a text string, break it up in to an array of strings no greater than 8000 chars each if needed.
   * If the original text is less than 8000 chars, return it.
   * @param {string} Text string to split into an array of chunks no bigger than 8000 chars.
   * @returns {string | Array<string>}
   */
  function chunk( Text : string ) : string | Array<string>;

  function loadScript( pOptions : LoadScriptOptions, callback? : Function ) : JQueryXHR | void;
}
