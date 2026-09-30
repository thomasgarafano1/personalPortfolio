/*
Copyright 2026 Thomas Garafano. Content and code are separately licensed. Content is licensed under CC BY-NC-ND 4.0 license. HTML, CSS, and JS Code are licensed under the GNU AGPL Version 3 or any later version.

Content SPDX-License-Identifier: CC-BY-NC-ND-4.0
HTML, CSS, and JS Code SPDX-License-Identifier: AGPL-3.0-or-later
*/

function resume() {
  var resume = document.getElementById("resume");
  if (resume.style.display === "block") {
    resume.style.display = "none";
  }
  else {
    resume.style.display = "block";
  }
}
