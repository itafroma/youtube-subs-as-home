/**
 * @file
 * Makes clicking the YouTube logo take you to My Subscriptions instead of 
 * What to Watch.
 */

(function () {
  var feedSubscriptions = '/feed/subscriptions';
  var feedHighlights = '/feed/highlights';
   
  /**
   * Change the YouTube logo to link to subscriptions.
   */
  document.getElementById('logo-container').href = feedSubscriptions;

  /**
   * Link the What to Watch menu item to the correct URL instead of /
   */
  document
    .getElementById('guide-main')
    .querySelectorAll('[data-channel-id=highlights]')[0].href = feedHighlights;

  /**
   * Redirect from / to /feed/subscriptions.
   */
  if (window.location.pathname == '/') {
     window.location.pathname = feedSubscriptions;
  }
}());
