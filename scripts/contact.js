/*
Copyright 2026 Thomas Garafano. Content and code are separately licensed. Content is licensed under CC BY-NC-ND 4.0 license. HTML, CSS, and JS Code are licensed under the GNU AGPL Version 3 or any later version.

Content SPDX-License-Identifier: CC-BY-NC-ND-4.0
HTML, CSS, and JS Code SPDX-License-Identifier: AGPL-3.0-or-later
*/

/* The following code has been provided by EmailJS Pte Ltd and is not subject to my licensing. */
(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "jZp171HZQMtsAHtH9",
  });
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('contact_service', 'contact_form', this)
      .then(() => {
          console.log('SUCCESS!');
      }, (error) => {
          console.log('FAILED...', error);
      });
  });
}


