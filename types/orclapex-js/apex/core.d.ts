
/// <reference types="jquery"/>
/// <reference types="./actions" />
/// <reference types="./da" />
/// <reference types="./debug" />
/// <reference types="./event" />
/// <reference types="./item"/>
/// <reference types="./lang"/>
/// <reference types="./message"/>
/// <reference types="./navigation"/>
/// <reference types="./page"/>
/// <reference types="./region" />
/// <reference types="./server"/>
/// <reference types="./widget"/>

/**
 * The apex namespace is the top level Oracle Application Express namespace and contains a number of sub namespaces, and a few common functions and properties.
 * The apex namespace also contains information on Application Express specific events.
 */
declare namespace apex {
  /**
   * This namespace property stores the current page context.
   * The current page context is different depending on whether the page is a Desktop, or jQuery Mobile page.
   * For Desktop, this is set to the HTML document (same as apex.jQuery(document)).
   * For jQuery Mobile, where pages are actually represented as DIV elements in the Browser DOM and multiple page DIVs can be loaded in the Browser DOM at one time, this is set to the DIV element representing the current page.
   * This is used to set the context for your jQuery selectors, to ensure that the selector is executing within the context of the correct page.
   */
  const gPagecontext$ : JQuery;
  const gParentPageContext$ : JQuery

  /**
   * This namespace property holds the jQuery function that APEX uses.
   * Ideally there is just one copy of jQuery on a page but it is possible to have multiple copies and even different versions of jQuery on a page.
   * This is sometimes necessary when using third party plugins that only work with an older version of jQuery.
   * Use this property in place of global variables $ or jQuery to ensure you are using the same jQuery library that Application Express is using.
   */
  const jQuery : JQueryStatic;

  /**
   * Show confirm dialog and submit page or cancel based on user's choice.
   * @see page.confirm
   * @param {string} pMessage Confirmation message to display
   * @param {string | page.SubmitOptions} pOptions If string will set the REQUEST value. If Object see interface {@link page.SubmitOptions} for properties. 
   */
  function confirm( pMessage : string, pOptions : string | page.SubmitOptions ) : void;

  /**
   * Submit the page.
   * @see page.submit
   * @param {string | page.SubmitOptions} pOptions If string will set the REQUEST value. If Object see interface {@link page.SubmitOptions} for properties.
   * @returns {boolean | undefined} If the submitIfEnter option is specified, a Boolean value is returned.
   *                           If the ENTER key is not pressed, true is returned and if the ENTER key is pressed, false is returned.
   *                           If submitIfEnter is not specified, undefined is returned.
   */
  function submit( pOptions : string | page.SubmitOptions ) : boolean | undefined;

  /**
   * This API returns an Application Express item object, which can then be used to access item related functions and
   * properties.
   *
   * @param {HTMLElement} pNd - Application Express item name or DOM node. This parameter can refer to either a page
   *                            item or column item.
   * @returns {item.ItemObject} The item interface for the given item name.
   *                            If there is no such item on the page the returned item interface node property will be false.
   */
  function item( pNd: HTMLElement | string ) : item.ItemObject;

  /**
   * This API returns an Application Express region object for the given region id. The returned region object can then
   * be used to access region related functions and properties.
   *
   * @param {string} pRegionId - Region id or region static id. It is a best practice to give a region a Static ID if it
   *                             is going to be used from JavaScript otherwise an internally generated id is used. The
   *                             region id is substituted in the region template using the #REGION_STATIC_ID# string.
   *                             The region id can be found by viewing the page source in the browser.
   * @returns {region.Region | null} The region interface or null if there is no element with the given pRegionId.
   */
  function region( pRegionId : string ) : region.Region | null;

  /**
   * Determine if the user is or has been interacting with this web app using touch since the browser session began. Note: it is possible for the user to touch for the first time after this function is called.
   * It is rare to need know this information since the app should be designed to work for both touch and non-touch environments.
   * @returns {boolean} true if the has been using touch to interact with the web app and false otherwise.
   */
  function userHasTouched() : boolean;
  
  // TODO: Add Events as specified in Documentation at https://apex.oracle.com/jsapi
  //       Research how to include this in here.

}
