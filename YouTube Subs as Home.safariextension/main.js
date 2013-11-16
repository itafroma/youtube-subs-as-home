/**
 * @file
 * Makes clicking the YouTube logo take you to My Subscriptions instead of 
 * What to Watch.
 */

(function () {
  var feedSubscriptions = '/feed/subscriptions';

  /**
   * Change the YouTube logo to link to subscriptions.
   */
  document.getElementById('logo-container').href = feedSubscriptions;

  /**
   * Redirect from / to /feed/subscriptions.
   */
  if (window.location.pathname == '/') {
     window.location.pathname = feedSubscriptions;
  }
}());
