/**
 * Slack
 * Copyright (c) 2016 app2641
 */

loadSlackClient = function () {
  var SlackClient = function () {
    this.hooks_url = '{GARBAGE_SLACK_HOOKS_URL}'
  };

  SlackClient.prototype.post = function (message) {
    var send_options = {
      method: 'post',
      payload: {'payload': JSON.stringify({text: message})}
    };

    UrlFetchApp.fetch(this.hooks_url, send_options);
  };

  return SlackClient;
};

if (typeof exports !== 'undefined') {
  exports.SlackClient = loadSlackClient();
}
