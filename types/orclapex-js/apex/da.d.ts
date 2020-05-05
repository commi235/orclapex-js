/**
 * This namespace holds all Dynamic Action functions in Oracle Application Express, useful for Dynamic Action plug-in developers.
 */
declare namespace apex.da {

  /**
   * For Dynamic Action plug-in developers that write plug-ins that perform Ajax calls, call this function when an Ajax error occurs.
   * Doing so handles both displaying the error message appropriately, and also resuming execution of actions in a dynamic action.
   * It is typically passed as a callback to the error option passed in the pOptions parameter of the {@link apex.server} Ajax APIs.
   * @param {object} pjqXHR               The jqXHR object passed directly from the apex.server error callback.
   * @param {string} pTextStatus          The text status of the error, passed directly from the apex.server error callback.
   * @param {string} pErrorThrown         Text describing the actual error, passed directly from the apex.server error callback.
   * @param {function} pResumeCallback    Reference to callback function available from the this.resumeCallback property,
   *                                      handles resuming execution of the dynamic action.
   */
  function handleAjaxErrors( pjqXHR : object, pTextStatus : string , pErrorThrown : string , pResumeCallback : Function ) : void;

  /**
   * 
   * @param {function} pCallback          Reference to callback function available from the this.resumeCallback
   *                                      property, handles resuming execution of the dynamic action.
   * @param {boolean}  pErrorOccurred     Indicate to the framework whether an error has occurred. If an error
   *                                      has occurred and the action's <em>Stop Execution on Error</em> attribute
   *                                      is checked, execution of the dynamic action will be stopped.
   */
  function resume(pCallback : Function, pErrorOccurred : boolean ) : void;
  
}
