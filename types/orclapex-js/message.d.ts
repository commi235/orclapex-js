
declare namespace apex.message {
  // We do not represent Message Type as an enum since these values are defined in the JS file.
  let TYPE: {
    /**
     * Identifies a success message
     */
    SUCCESS : string;
    /**
     * Identifies an error message
     */
    ERROR : string;
  }

  interface ThemeHookOptions {
    /**
     * Callback function that will be called prior to the default show page notification functionality.
     *     Optionally return false from the callback to completely override default show functionality.
     *     Callback passes the following parameters:
     *     <ul>
     *         <li>pMsgType: Identifies the message type. Use {@link apex.message.TYPE} to identify whether showing an error or success message.</li>
     *         <li>pElement$: jQuery object containing the element being shown.</li>
     *     </ul>
     */
    beforeShow? : Function;
    /**
     * Callback function that will be called prior to the default hide page notification functionality.
     *     Optionally return false from the callback to completely override default hide functionality.
     *     Callback passes the following parameters:
     *     <ul>
     *         <li>pMsgType: Identifies the message type. Use {@link apex.message.TYPE} to identify whether showing an error or success message.</li>
     *         <li>pElement$: jQuery object containing the element being hidden.</li>
     *     </ul>
     */
    beforeHide? : Function;
    /**
     * jQuery selector to identify the close buttons in notifications, defaults to that used by Universal Theme (“button.t-Button—closeAlert”).
     *     May be required by custom themes if you still want to have APEX handle the hide logic,
     *     and where messaging contains a close notification button with a different class.
     */
    closeNotificationSelector? : string;
  }

  /**
   * Allows a theme to influence some behavior offered by the apex.message API.
   * Call this function from theme page initialization code.
   * @param {ThemeHookOptions} pOptions An object that contains the properties specified by {@link apex.message.ThemeHookOptions}
   */
  function setThemeHooks( pOptions : ThemeHookOptions ) : void;

  interface Message {
    /**
     * Type of Message
     */
    type? : string;
    /**
     * Possible values are: “inline”, “page” or [ “inline”, “page” ].
     */
    location? : string | Array<string>;
    /**
     * Item reference where an ‘inline’ error should display.
     * Required when location = “inline”.
     */
    pageItem? : string;
    /**
     * The error message.
     */
    message? : string;
    /**
     * Pass true so that the message will be escaped by showErrors.
     * Pass false if the message is already escaped and does not need to be escaped by showErrors.
     * Default to true.
     */
    unsafe? : boolean;
  }


  /**
   * In order to navigate to items (page items or column items) that have an error (or anything else that can be in an
   * error state), the error item must be visible before it is focused. Any region type that can possibly hide its
   * contents should add a visibility check function using this method. Each function added is called for any region
   * or item that needs to be made visible. This function is for APEX region plug-in developers.
   * @param {Function} pFunction A function that is called with an element ID. The function should ensure that the
   *                             element is visible if the element is managed or controlled by the region type that
   *                             added the function.
   */
  function addVisibilityCheck( pFunction : Function ) : void;

  /**
   * Displays an alert dialog with the given message and OK button. The callback function passed as the pCallback
   * parameter is called when the dialog is closed. The dialog displays using the jQuery UI ‘Dialog’ widget.
   *
   * There are some differences between this function and a browser’s built-in alert function:
   * - The dialog style will be consistent with the rest of the app.
   * - The dialog can be moved.
   * - The call to apex.message.alert does not block. Any code defined following the call to apex.message.alert will
   *   run before the user presses OK. Therefore code to run after the user closes the dialog must be done from within
   *   the callback, as shown in the example.
   *
   * Note: If either of the following 2 pre-requisites are not met, the function falls back to using the browser’s
   * built-in confirm:
   * - jQuery UI dialog widget code must be loaded on the page.
   * - The browser must be running in ‘Standards’ mode. This is because if it is running in ‘Quirks’ mode (as is the
   *   case with some older themes), this can cause issues with display position, where the dialog positions itself in
   *   the vertical center of the page, rather than the center of the visible viewport.
   *
   * @param {String} pMessage     The message to display in the alert dialog
   * @param {Function} pCallback  Callback function called when dialog is closed.
   */
  function alert( pMessage : string, pCallback : Function ) : void;

  /**
   * This function clears all the errors currently displayed on the page.
   */
  function clearErrors() : void;

  /**
   * Displays a confirmation dialog with the given message and OK and Cancel buttons. The callback function passed as
   * the pCallback parameter is called when the dialog is closed, and passes true if OK was pressed and false
   * otherwise. The dialog displays using the jQuery UI ‘Dialog’ widget.
   *
   * There are some differences between this function and a browser’s built-in confirm function:
   * - The dialog style will be consistent with the rest of the app.
   * - The dialog can be moved.
   * - The call to apex.message.confirm does not block, and does not return true or false. Any code defined following
   *   the call to apex.message.confirm will run before the user presses OK or Cancel. Therefore acting on the user’s
   *   choice must be done from within the callback, as shown in the example.
   *
   * Note: If either of the following 2 pre-requisites are not met, the function falls back to using the browser’s
   * built-in confirm:
   * - jQuery UI dialog widget code must be loaded on the page.
   * - The browser must be running in ‘Standards’ mode. This is because if it is running in ‘Quirks’ mode (as is the
   *   case with some older themes), this can cause issues with display position, where the dialog positions itself in
   *   the vertical center of the page, rather than the center of the visible viewport.
   *
   * @param {string} pMessage     The message to display in the confirmation dialog
   * @param {function} pCallback  Callback function called when dialog is closed. Function passes the following
   *                              parameter:
   *                              - okPressed: True if OK was pressed, False otherwise (if Cancel pressed, or the
   *                                           dialog was closed by some other means).
   */
  function confirm( pMessage : string, pCallback : Function ) : void;

  /**
   * Hides the page-level success message.
   *
   * Tip: As a theme developer, you can influence or override what happens when hiding a page-level success message.
   * For more information, please refer to the apex.message.setThemeHooks function (specifically the beforeHide
   * callback function, where you would need to check for ‘pMsgType === apex.message.TYPE.SUCCESS’ to isolate when
   * hiding a page-level success message).
   */
  function hidePageSuccess() : void;

  /**
   * <p>This function displays all errors on the apex.message error stack. If you do not want to add to the stack,
   * you must first call clearErrors(). Errors will display using the current app’s theme’s templates. For page level
   * messages (where location = “page”), error messages use markup from the page template’s ‘Subtemplate > Notification’
   * attribute. For item level messages (where location = “inline”), error messages use markup from the item’s
   * label template’s ‘Error Display > Error Template’ attribute.</p>
   * <p>Note Theme Developers should bear in mind the following:
   * <ul>
   *     <li>To display errors for a theme correctly, it must define both of the template attributes described above.
   *     In addition, for inline errors the label template must reference the #ERROR_TEMPLATE# substitution string in
   *     either the ‘Before Item’ or ‘After Item’ attributes of your label templates.</li>
   *     <li>As a theme developer, you can influence or override what happens when showing page level errors. For more
   *     information, please refer to {@link apex.message.setThemeHooks}, (specifically the beforeShow
   *     callback function, where you would need to check for ‘pMsgType === apex.message.TYPE.ERROR’ to isolate when
   *     showing page level errors).</li>
   * </ul>
   * @param {Message | Array<Message>} pErrors An object, or array of objects with the properties as defined by {@link apex.message.Error}
   */
  function showErrors( pErrors : Message | Array<Message> ) : void;

  /**
   * Displays a page-level success message. This will clear any previous success messages displayed, and also assumes
   * there are no errors, so will clear any errors previously displayed. Success messages will display using the
   * current app’s theme’s template. Specifically for page success messages, the markup from the page template’s
   * ‘Subtemplate > Success Message’ attribute will be used.
   *
   * Tip: As a theme developer, you can influence or override what happens when showing a page-level success message.
   * For more information, please refer to the apex.message.setThemeHooks function (specifically the beforeShow
   * callback function, where you would need to check for ‘pMsgType === apex.message.TYPE.SUCCESS’ to isolate when
   * showing a page-level success message).
   *
   * @param {String} pMessage The success message to display.
   */
  function showPageSuccess( pMessage : string ) : void;

}
