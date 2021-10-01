/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


// Back button code
$('#backLink').click(function (event) {
  event.preventDefault()
  history.back(1)
});
//********************** */