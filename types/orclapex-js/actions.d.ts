

/**
 * The apex.actions namespace contains global functions related to the Oracle Application Express actions facility.
 * The methods and properties of the global actions context are also available in the apex.actions namespace but are documented with the actions interface.
 */
declare namespace apex.actions {

  // TODO: Vsit Interface and add here
  interface actions{

  }

  /**
   * Create a new {@link actions} interface object that is scoped to the given DOM element context.
   * Any action buttons or other UI elements must be within the given pContext.
   * Focus must be within pContext for keyboard shortcuts defined in this context to be recognized.
   * A global context at document.body is created automatically and is accessed from apex.actions.
   * The global context type name is "global".
   * @param pTypeName Type name of the actions context
   * @param pContext DOM Element context that actions are scoped within.
   * @returns The actions interface object that was created.
   */
  function createContext( pTypeName : string, pContext : HTMLElement ) : actions;

  /**
   * Return the actions interface for a given context.
   * The pTypeName is optional but if given must match the type name used when the context was created.
   * This is not often needed because the actions object returned from createContext should be saved by any widget/component that created the context.
   * @param pTypeName The type name of the actions context.
   * @param pContext DOM element context that actions are scoped within.
   * @returns The actions interface or undefined if there is no actions defined for pContext.
   */
  function findContext( pTypeName : string | null, pContext : HTMLElement ) : actions | undefined;

  /**
   * Return an array of all the actions context instances for a given type.
   * @param pTypeName The type name of the actions context.
   * @returns An array of action instances.
   */
  function getContextsForType( pTypeName : string ) : Array<actions>;

  /**
   * Return an array of all the actions context type names.
   * @returns An array of context type names.
   */
  function getContextTypes() : Array<string>;

  /**
   * returns the current key caps. See {@link apex.actions.setKeyCaps}.
   */
  function getKeyCaps() : Object;

  /**
   * Remove an actions context that was created with {@link apex.actions.createContext}.
   * @param pTypeName Type name of the actions context
   * @param pContext DOM Element context that actions are scoped within.
   */
  function removeContext( pTypeName : string, pContext : HTMLElement ) : void;

  /**
   * Different types of keyboards for different types of operating systems or different languages can have different symbols printed on the keys.
   * The shortcuts must be defined according to actions.shortcutName.
   * This static method lets you set keyboard layout specific names or symbols to display for key names.
   * Note: This affects how shortcuts are displayed not how they are defined.
   * @param pKeyCaps An object that maps the shortcutName key name such as "Ctrl" or "A" to the desired word or character. Pass in null to clear all the key cap mappings.
   */
  function setKeyCaps( pKeyCaps : Object | null ) : void;

  /**
   * Get or set the type of shortcut key support. The default is "sequence".
   * Note: The shortcut key support setting does not affect what shortcuts can be defined for actions but only how what the user types is recognized.
   * @param pShortcutType One of "off", "single", "sequence". If not specified the current value is returned.
   * @returns When no arguments are given returns the current setting otherwise returns nothing.
   */
  function shortcutSupport( pShortcutType? : string ) : string | undefined;

}
