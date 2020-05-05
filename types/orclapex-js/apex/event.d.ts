
declare namespace apex.event {

  /**
   * 
   * @param {jQuery} pSelector              Selector for the element upon which the event will be triggered
   * @param {string} pEvent                 The name of the event
   * @param {string | Array | Object} pData Optional additional parameters to pass along to the event handler
   * 
   * @returns {boolean} true if the event is cancelled
   */
  function trigger( pSelector : any, pEvent : string, pData? : string | Array<any> | Object ) : boolean;

}
