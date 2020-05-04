/**
 * This namespace is used for text and message localization related functions of Oracle Application Express.
 */
declare namespace apex.lang {

  interface Message {
    [key : string] : string
  }

  /**
   * <p>Add messages for use by {@link apex.lang.getMessage} and the format functions.
   * Can be called multiple times. Additional messages are merged.
   * It is generally not necessary to call this function, because it is
   * automatically called with all the application text messages that have `Used in JavaScript` set to Yes.</p>
   *
   * @param {Message} pMessages An object whose properties are message keys, and the values are localized message text.
   */
  function addMessages( pMessages : Message ) : void;

  /**
   * Remove all messages. This method is rarely needed.
   * Many Oracle Application Express components rely on client-side messages, so if you clear the messages you need to add any needed messages again.
   */
  function clearMessages() : void;

  /**
   * Formats a message.
   * Same as {@link apex.lang.formatMessage} except the message pattern is given directly.
   * It is already localized or isn't supposed to be. It is not a key.
   * The replacement arguments are HTML escaped.
   * @param {string} pPattern The message pattern.
   * @param {...*} pValues Any number of replacement values, one for each message parameter %0 to %9.
   *   Non string arguments are converted to strings.
   * @returns {string} The formatted message text.
   */
  function format( pPattern : string, ...pValues : any[] ) : string;

  /**
   * <p>Format a message. Parameters in the message, %0 to %9, are replaced with the corresponding function argument.
   * Use %% to include a single %. The replacement arguments are HTML escaped.
   *
   * @param {string} pKey    The message key. The key is used to lookup the localized message text as if with getMessage.
   * @param {...*}   pValues Any number of replacement values, one for each message parameter %0 to %9.
   *   Non string arguments are converted to strings.
   * @returns {string} The localized and formatted message text. If the key is not found then the key is returned.
   */
  function formatMessage( pKey : string, ...replacementValue : any[]) : string;

  /**
   * <p>Same as {@link apex.lang.formatMessage} except the replacement arguments are not HTML escaped.
   * They must be known to be safe or will be used in a context that is safe.</p>
   *
   * @param {string} pKey The message key. The key is used to lookup the localized message text as if with getMessage.
   * @param {...*} pValues Any number of replacement values, one for each message parameter %0 to %9.
   *   Non string arguments are converted to strings.
   * @returns {string} The localized and formatted message text. If the key is not found then the key is returned.
   */
  function formatMessageNoEscape( pKey : string, ...replacementValue : any[] ) : string;

  /**
   * <p>Same as {@link apex.lang.format}, except the replacement arguments are not HTML escaped.
   * They must be known to be safe or are used in a context that is safe.</p>
   *
   * @param {string} pPattern The message pattern.
   * @param {...*} pValues Any number of replacement values, one for each message parameter %0 to %9.
   *   Non string arguments are converted to strings.
   * @returns {string} The formatted message text.
   */
  function formatNoEscape( pPattern : string, ...replacementValue: any[] ) : string;

  /**
   * <p>Return the message associated with the given key.
   * The key is looked up in the messages added with {@link apex.lang.addMessages}.</p>
   *
   * @param {string} pKey The message key.
   * @returns {string} The localized message text. If the key is not found then the key is returned.
   */
  function getMessage( pKey : string ) : string;

  /**
   * <p>Return true if pKey exists in the messages added with {@link apex.lang.addMessages}.</p>
   *
   * @param {string} pKey The message key.
   * @returns {boolean} true if the given message exists and false otherwise.
   */
  function hasMessage( pKey : string ) : boolean;
  
}
