/**
 * The `apex.widget` namespace stores all the general purpose widget related functions of Oracle Application Express.
 */
declare namespace apex.widget {

  export interface Widget {
    interactiveGrid(pName: string): InteractiveGrid
  }

  interface InteractiveGrid {
    invoke(pAction: string): void
  }

  /**
   * Shows a wait popup. A wait popup consists of an overlay div that keeps the user from clicking on any part of the page along with a visual "spinner" animation of some kind.
   * It does not keep the user from interacting with the page using the keyboard.
   * This is intended to be used just prior to submitting the page such that the page (and hence this popup) will soon be replaced with a new page.
   * If you do need to close the popup, use the "remove" function of the returned object.
   * See {@link apex.util.showSpinner} and {@link apex.util.delayLinger} for a low level solution more suitable for ajax requests or other long running processes.
   * This function is rarely needed because it is automatically called in {@link apex.page.submit} based on the showWait option. Also typically ajax operations don't require an overlay to disable clicking.
   * 
   * @param {string} pContent HTML code for a wait indicator. If it is not provided, the default CSS animation wait indicator will be displayed.
   * @returns {Object} Object with a no argument function "remove" that closes the popup.
   */
  function waitPopup( pContent? : string ) : Object;

}
