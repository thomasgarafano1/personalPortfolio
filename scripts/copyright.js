/*
Copyright 2026 Thomas Garafano. Content and code are separately licensed. Content is licensed under CC BY-NC-ND 4.0 license. HTML, CSS, and JS Code are licensed under the GNU AGPL Version 3 or any later version.

Content SPDX-License-Identifier: CC-BY-NC-ND-4.0
HTML, CSS, and JS Code SPDX-License-Identifier: AGPL-3.0-or-later
*/

function AGPLv3() {
  var AGPLv3 = document.getElementById("AGPLv3");
  var CCBYNCND40 = document.getElementById("CC-BY-NC-ND-4-0");
  if (AGPLv3.style.display === "none") {
    AGPLv3.style.display = "block";
    CCBYNCND40.style.display = "none";
  }
  else {
    AGPLv3.style.display = "none";
  }
}

function CCBYNCND40() {
  var AGPLv3 = document.getElementById("AGPLv3");
  var CCBYNCND40 = document.getElementById("CC-BY-NC-ND-4-0");
  if (CCBYNCND40.style.display === "none") {
    CCBYNCND40.style.display = "block";
    AGPLv3.style.display = "none";
  }
  else {
    CCBYNCND40.style.display = "none";
  }
}
