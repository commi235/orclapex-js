
declare namespace apex.page {

  interface ParameterSet {
    [key : string] : string | number
  }

  interface SubmitOptions {
    /**
     * The REQUEST value.
     */
    request? : string,
    /**
     * Object containing name/value pairs of items to set prior to submission
     */
    set? : ParameterSet,
    /**
     * If true, a 'Wait Indicator' spinner is displayed. Default is false.
     */
    showWait? : boolean,
    /**
     * Pass the keydown or keypress Event in to only submit if ENTER key has been pressed.
     * If omitted or null, no check will be performed.
     */
    submitIfEnter? : JQuery.Event,
    /**
     * Override the reload on submit setting of the page.
     * A: always
     * S: success
     */
    reloadOnSubmit? : string,
    /**
     * 
     */
    ignoreChange? : boolean,
    /**
     * If true, check validity of page items and models before submitting the page.
     * If anything not valid then show an alert dialog and don't submit the page.
     * The default is false.
     */
    validate? : boolean
  }



  /**
   * Display confirmation message and submit page or cancel submit based on user's choice.
   * @param pMessage Confirmation message to display
   * @param pOptions If string will set the REQUEST value. If Object see interface {@link SubmitOptions} for properties.
   */
  function confirm( pMessage : string, pOptions? : string | SubmitOptions ) : void;

  /**
   * Submit the page.
   * @see page.submit
   * @param {string | SubmitOptions} pOptions If string will set the REQUEST value. If Object see interface {@link page.SubmitOptions} for properties.
   * @returns {boolean | undefined} If the submitIfEnter option is specified, a Boolean value is returned.
   *                                If the ENTER key is not pressed, true is returned and if the ENTER key is pressed, false is returned.
   *                                If submitIfEnter is not specified, undefined is returned.
   */
  function submit( pOptions : string | SubmitOptions ) : boolean | undefined;

  /**
   * Check if any page items or submittable Application Express models on the page are invalid.
   * Any errors are shown inline using the {@link apex.message.showErrors} function.
   * @returns {boolean} true if page is valid, otherwise false.
   */
  function validate() : boolean;

  /**
   * Return true if any page items or Application Express models on this page have changed since last being sent to the server.
   * Items that are disabled or are configured to ignore changes are not included in the check.
   * This will call the pExtraIsChanged function set in {@link apex.page.warnOnUnsavedChanges} if one was supplied and only if no other changes are found first.
   * @returns {boolean} true if there are any changes, otherwise false.
   */
  function isChanged() : boolean;

  /**
   * Initialize a handler that checks for unsaved changes anytime the page is about to unload.
   * This is safe to call multiple times.
   * The pMessage and pExtraIsChanged parameters override any previous values.
   * This function is called automatically when the page attribute Warn on Unsaved Changes is set to yes.
   * The main reason to call this manually is to customize the parameters.
   * @param {string} pMessage Message to display when there are unsaved changes.
   *   If the message is not given, a default message is used.
   *   <p class="important">Note: Most browsers do not show this message.</p>
   * @param {function} pExtraIsChanged Optional additional function to be called, checking if there are any unsaved changes.
   *   It should return true if there are unsaved changes, and false otherwise.
   *   It is only called if there are no changes to any models or page items.
   *   This is useful if there are non-standard state-full inputs on the page that are not Application Express items
   *   and do not keep their state in an Application Express model. It allows writing a custom function to detect
   *   if those non-standard inputs have changed.
   */
  function warnOnUnsavedChanges(pMessage? : string, pExtraIsChanged? : Function) : void;

  /**
   * Call to remove the handler that checks for unsaved changes.
   * This is useful to do before any kind of cancel operation where the user is intentionally choosing to lose the changes.
   * It is not normally necessary to call this function because the declarative attribute Warn on Unsaved Changes with value Do Not Check will do it automatically.
   * Adding the class js-ignoreChange to a link (anchor element) or button will cause this function to be called before the link or button action.
   */
  function cancelWarnOnUnsavedChanges() : void;
}
