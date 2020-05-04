
declare namespace apex.region {

  interface Region {
    /**
     * The jQuery Object for the region element.
     */
    element : JQuery;
    /**
     * Identifies the parent (master) region ID, if the region is the detail region of a master detail relationship.
     */
    parentRegionId : string;
    /**
     * Identifies the type of the region. Regions that don't implement a custom region interface have type "generic".
     */
    type : string;
    /**
     * For regions that are implemented with a jQuery UI style widget, this is the name of the widget.
     * For other widget implementations it is null. It is used internally by the region#call method.
     */
    widgetName : string;
    /**
     * 
     * @param {HTMLElement} pElement DOM element that may represent a column item.
     * @param {JQuery} pLoadingIndicator$ A loading indicator that can be inserted in to the DOM where desired and returned or ignored.
     * @returns {JQuery} loadingIndicator jQuery object or null if the region has no alternative for given element.
     */
    alternateLoadingIndicator( pElement : HTMLElement, pLoadingIndicator$ : JQuery ) : JQuery;
    /**
     * Calls a method on the widget associated with the region.
     * This method only applies to regions that are implemented with a jQuery UI style widget.
     * @param {string} pMethod The string name of the widget method.
     * @param {*} arguments Any number of arguments to be passed to the widget method.
     */
    call( pMethod : string, ...arguments : any ) : any;
    /**
     * Cause the region to take focus. Not all native or plug-in regions support taking focus.
     * It is up to the specific region to determine where focus will go.
     * Some regions manage focus such that there is a single tab stop (or limited number of tab stops) and they may put focus to where the user last had focus within the region.
     * The default implementation sets focus to the first element in the region that is capable of being tabbed to.
     */
    focus() : void;
    /**
     * Cause the region to get new data from the server or otherwise refresh itself. Not all regions support refresh. Exactly what happens depends on the type of region.
     * This function should be used in place of the legacy way of refreshing a region, which was to trigger the apexrefresh event on the region element.
     * The default implementation triggers the legacy apexrefresh event on the region element for backward compatibility with old regions that don't implement this interface.
     */
    refresh() : void;
    /**
     * Returns the widget associated with the region or null if the region isn't implemented with a widget.
     * Some advanced region types such as Calendar, Interactive Grid, or Tree are implemented using a widget.
     * This function provides access to the widget typically by returning a jQuery object for the widget element.
     * You can then call widget methods on the jQuery object. See also the region#call method.
     * @returns {JQuery | null} jQuery object or null if there is no widget associated with the region.
     */
    widget() : JQuery | null;

  }

  /**
   * <p>This function is only used by region plug-in developers. It provides a plug-in specific implementation for the region.</p>
   *
   * <p>Use this function to give a region plug-in a set of behaviors defined by <code class="prettyprint">pRegionImpl</code>.
   * The <code class="prettyprint">pRegionImpl</code> parameter can provide its own implementation for standard
   * methods (such as refresh, focus, widget) or omit them to get the default implementation. It can add its own methods as well.
   * It should include a <code class="prettyprint">type</code> string property that specifies the type of region. If the region is implemented
   * with a jQuery UI style widget (using widget factory) then it should provide an implementation for the
   * {@link Region.widget} method and define the {@link Region.widgetName} property so that the
   * {@link Region.call} method works.</p>
   *
   * @param {string} pRegionId Region id or region static id. It is a best practice to give a region a Static ID
   *   if it is going to be used from JavaScript otherwise an internally generated id is used. The region id is
   *   substituted in the region template using the #REGION_STATIC_ID# string.
   *   The region id can be found by viewing the page source in the browser.
   * @param {Region} pRegionImpl An object that provides the methods and properties for the region interface. It should provide
   *   a string type property. It can provide any additional methods that would be useful to developers.
   *   A default implementation is provided for any standard methods or properties omitted. See {@link region} for
   *   the properties and methods supported by the interface.
   */
  function create( pRegionId : string, pRegionImpl : Region ) : void;
}
