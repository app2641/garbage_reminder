/**
 * main.js
 * Copyright (c) 2016 app2641
 */

var initLibraries = function () {
  if (typeof Slack === 'undefined') Slack = loadSlackClient();
  if (typeof Sheet === 'undefined') Sheet = loadSheet();
}

var init = function () {
  initLibraries();

  var sheet = new Sheet();
  var slack = new Slack();

  return {
    sheet: sheet,
    slack: slack
  };
};

function postTodaySchedule () {
  var reminder = init();

  today_garbage = reminder.sheet.getTodayGarbage();
  if (today_garbage != '') {
    var msg = '@channel 今日は'+today_garbage+'の日です';
    reminder.slack.post(msg);
  }
};

function postTomorrowSchedule () {
  var reminder = init();

  tomorrow_garbage = reminder.sheet.getTomorrowGarbage();
  if (tomorrow_garbage != '') {
    var msg = '@channel 明日は'+tomorrow_garbage+'の日です';
    reminder.slack.post(msg);
  }
};

