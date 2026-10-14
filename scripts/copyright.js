/*
Copyright 2026 Thomas Garafano. Content and code are separately licensed. Content is licensed under CC BY-NC-ND 4.0 license. HTML, CSS, and JS Code are licensed under the GNU AGPL Version 3 or any later version.

Content SPDX-License-Identifier: CC-BY-NC-ND-4.0
HTML, CSS, and JS Code SPDX-License-Identifier: AGPL-3.0-or-later
*/

function AGPLv3() {
  var AGPLv3 = document.getElementById("AGPLv3");
  var CCBYNCND40 = document.getElementById("CC-BY-NC-ND-4-0");
  var AGPLv3Button = document.getElementById("AGPLv3Button")
  var CCBYNCND40Button = document.getElementById("CCBYNCND40Button");

  if (AGPLv3.style.display === "none") {
    AGPLv3.style.display = "block";
    AGPLv3Button.style.backgroundColor = "#7A2626";
    AGPLv3Button.style.borderColor = "#e23933";

    CCBYNCND40.style.display = "none";
    CCBYNCND40Button.style.backgroundColor = "#090c15";
    CCBYNCND40Button.style.borderColor = "#51191B";
  }
  else {
    AGPLv3.style.display = "none";
    AGPLv3Button.style.backgroundColor = "#090c15";
    AGPLv3Button.style.borderColor = "#51191B";
  }
}

function CCBYNCND40() {
  var AGPLv3 = document.getElementById("AGPLv3");
  var CCBYNCND40 = document.getElementById("CC-BY-NC-ND-4-0");
  if (CCBYNCND40.style.display === "none") {
    CCBYNCND40.style.display = "block";
    CCBYNCND40Button.style.backgroundColor = "#7A2626";
    CCBYNCND40Button.style.borderColor = "#e23933";

    AGPLv3.style.display = "none";
    AGPLv3Button.style.backgroundColor = "#090c15";
    AGPLv3Button.style.borderColor = "#51191B";
  }
  else {
    CCBYNCND40.style.display = "none";
    CCBYNCND40Button.style.backgroundColor = "#090c15";
    CCBYNCND40Button.style.borderColor = "#51191B";
  }
}
