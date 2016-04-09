/**
 * Sheet
 * Copyright (c) 2016 app2641
 */


loadSheet = function () {
  var Sheet = function () {
    var s_id = '{GARBAGE_SPREADSHEET_ID}';
    this.sheet = SpreadsheetApp.openById(s_id);
  };

  Sheet.prototype.getTodayGarbage = function () {
    return this.sheet.getRange('A5').getValue();
  };

  Sheet.prototype.getTomorrowGarbage = function () {
    return this.sheet.getRange('B5').getValue();
  };

  return Sheet;
};

if (typeof exports !== 'undefined') {
  exports.Sheet = loadSheet();
}
