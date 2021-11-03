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


// function filter(element) {

//   var value = $(element).val().toLowerCase();




//   $(".govuk-checkboxes > div").each(function() {

//     if ($(this).text().toLowerCase().search(value) > -1) {
//           $(this).show();
//      }  else {
//         $(this).hide();
//       }

//       // alert($(':checkbox:checked').attr('id'));

//   });


// }

function isEmpty(el) {
  return !$.trim(el.html())
}

var journeyPath = $('#journeyPath').html();

if (journeyPath == 'new') {
  // alert('new journey')
  $('#onlineFormRadio').val('yes~add-a-member-of-staff')
  $('#addMemberOfStaff').attr('action', 'member-data-new-incomplete')
  $('#addJobDetails').attr('action', 'member-data-new-incomplete')
  $('#addEmploymentDetails').attr('action', 'member-data-new-incomplete')
  $('#startVacancyJourney').attr('href', 'senior-leader-and-management-vacancies')

  // $('.search-check-boxes input[type="checkbox"]').trigger('click')

  $('.search-check-boxes input[type="checkbox"]').each(function () {
    if ($(this).is(":checked")) {
      $(this).trigger('click')
    }
  });

  $('.filter-feedback.old').each(function () {
    if ($(this).is(":visible")) {
      $('.filter-feedback.old').remove()
      $('.filter-feedback-container').hide()
    }
  });

}


if (journeyPath == 'returning') {

  if ($(".type-of-vacancy.0").is(':empty')) {
    $(".type-of-vacancy.0").text('2')
  }
  if ($(".type-of-vacancy.1").is(':empty')) {
    $(".type-of-vacancy.1").text('7')
  }
  if ($(".type-of-vacancy.2").is(':empty')) {
    $(".type-of-vacancy.2").text('Yes')
  }


  if ($(".subject-header-check-answers.0").is(':empty')) {
    $(".subject-header-check-answers.0").text('Archaeology')
    $(".subject-text-check-answers.0").text('Archaeology')
    $(".subject-answer.0").text('10')
    $(".subject-answer-2.0").text('9')
    $(".difficulty-check-answers.0").text('A lack of teaching experience or skills')
  }

  if ($(".subject-header-check-answers.1").is(':empty')) {
    $(".subject-header-check-answers.1").text('Geography')
    $(".subject-text-check-answers.1").text('Geography')
    $(".subject-answer.1").text('7')
    $(".subject-answer-2.1").text('5')
    $(".difficulty-check-answers.1").text('No applicants')
  }

  if ($(".difficulty-recruiting").is(':empty')) {
    $(".difficulty-recruiting").text('Yes')
  }

  if ($(".how-many-apprentices").is(':empty')) {
    $(".how-many-apprentices").text('2')
  }

  if ($(".staff-councelling").is(':empty')) {
    $(".staff-councelling").text('Yes')
  }

  if ($(".councelling-available").is(':empty')) {
    $(".councelling-available").text('Outside of working hours')
  }

}


$("#searchSubject").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  // var valueChecked = $('input[name="organisation"]:checked').length;

  $(".govuk-checkboxes.search-check-boxes div").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });

  if ($('.academic-subjects .govuk-checkboxes__item:visible').length === 0) {
    $('.academic-legend').hide();
    $('.academic-legend').parent().parent().css('margin-bottom', 0);
  }
  else {
    $('.academic-legend').show();
    $('.academic-legend').parent().parent().css('margin-bottom', '30px');
  }

  if ($('.vocational-programmes .govuk-checkboxes__item:visible').length === 0) {
    $('.vocational-legend').hide();
    $('.vocational-legend').parent().parent().css('margin-bottom', 0);
  }
  else {
    $('.vocational-legend').show();
    $('.vocational-legend').parent().parent().css('margin-bottom', '30px');
  }

  if ($('.other-programmes .govuk-checkboxes__item:visible').length === 0) {
    $('.other-legend').hide();
    $('.other-legend').parent().parent().css('margin-bottom', 0);
  }
  else {
    $('.other-legend').show();
    $('.other-legend').parent().parent().css('margin-bottom', '30px');
  }

  if ($('.academic-subjects .govuk-checkboxes__item:visible').length === 0 && $('.vocational-programmes .govuk-checkboxes__item:visible').length === 0 && $('.other-programmes .govuk-checkboxes__item:visible').length === 0) {
    $('.no-results-text').show();
  }
  else {
    $('.no-results-text').hide();
  }

});




var $filterCheckboxes = $('.govuk-checkboxes.search-check-boxes input[type="checkbox"]');

$filterCheckboxes.on('change', function () {

  if ($(this).is(':checked')) {
    var checkboxValue = $(this).val();
    $('.filter-feedback-container').show();
    $('.filter-feedback').show();
    $('<a href="#" class="filter-feedback"> <span class="filter-name"> <span class="close"></span>' + checkboxValue + '</span>  </a>').appendTo('#firstFilter');
  }
  else {
    var value = $(this).val();
    if ($('#firstFilter').has('.filter-name:contains("' + value + '")')) {
      $('.filter-name:contains("' + value + '")').parent().remove();
    }
  }

  $('.filter-feedback').on('click', function () {
    var filterValue = $(this).children().text();
    $(this).remove(); // remove the button
    if ($('.govuk-checkboxes :checkbox').has('label:contains("' + filterValue + '")')) {
      $('label:contains("' + filterValue + '")').trigger('click');
    }
  });

  if (!$('.govuk-checkboxes :checkbox').is(':checked')) {
    $('.filter-feedback-container').hide();
  }

});

$('.filter-feedback.old').click(function () {
  var filterValue = $(this).children().text();
  $(this).remove(); // remove the button
  if ($('.govuk-checkboxes :checkbox').has('label:contains("' + filterValue + '")')) {
    $('label:contains("' + filterValue + '")').trigger('click');
  }
});

$('#typeFilter :checkbox').click(function () {
  $('.search-check-boxes').parent().parent().hide()


  $('#typeFilter :checkbox:checked').each(function () {
    $('.' + $(this).val()).parent().parent().show()
  })

  if (!$('#typeFilter :checkbox').is(':checked')) {
    $('.search-check-boxes').parent().parent().show()
  }
});




// $('#subjectListHidden li').each(function(){

//   var listText = $(this).text();

//   // if (isEmpty($(this))) {
//     // e.preventDefault()
//   // //   // $('.govuk-checkboxes').trigger('click');
//   // //   $('input[value=Archaeology]').attr('checked', true);
//   // //   $('input[value=Geography]').attr('checked', true);
//   // }

//   if ($('.govuk-checkboxes :checkbox').has('label:contains("'+listText+'")')) {
//     $('label:contains("'+listText+'")').trigger('click');

//   }



// });


$(".aca-label").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().hide()
  }
});
if ($('.aca-checkboxes').children(':visible').length == 0) {
  $('.aca-checkboxes').parent().parent().hide()
}

$(".voc-label").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().hide()
  }
});
if ($('.voc-checkboxes').children(':visible').length == 0) {
  $('.voc-checkboxes').parent().parent().hide()
}

$(".other-label").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().hide()
  }
});
if ($('.other-checkboxes').children(':visible').length == 0) {
  $('.other-checkboxes').parent().parent().hide()
}




$(".aca-h3").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().hide()
  }
});
if ($('.aca-group').children('.question-group:visible').length == 0) {
  $('.aca-group').hide()
}

$(".voc-h3").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().hide()
  }
});
if ($('.voc-group').children('.question-group:visible').length == 0) {
  $('.voc-group').hide()
}

$(".other-h3").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().hide()
  }
});
if ($('.other-group').children('.question-group:visible').length == 0) {
  $('.other-group').hide()
}



$(".aca-h3-v2").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().parent().parent().hide()
  }
});
if ($('.aca-reasons-group').children('.aca-reasons:visible').length == 0) {
  $('.aca-reasons-group').hide()
}

$(".voc-h3-v2").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().parent().parent().hide()
  }
});
if ($('.voc-reasons-group').children('.voc-reasons:visible').length == 0) {
  $('.voc-reasons-group').hide()
}

$(".other-h3-v2").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().parent().parent().hide()
  }
});
if ($('.other-reasons-group').children('.other-reasons:visible').length == 0) {
  $('.other-reasons-group').hide()
}



// $(".type-of-vacancy").each(function () {
//   if (!isEmpty($(this))) {
//     $('#typesOfVacancyIncomplete').show()
//     $('#typesOfVacancyComplete').hide()
//   }
// });

// if ($('.type-of-vacancy-group dd').length == 0) {
//   $('#typesOfVacancyIncomplete').show()
//   $('#typesOfVacancyComplete').hide()
// } 





$(".subject-header-check-answers").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().hide()
  }
});

// if ($("#aca-vacancy-0").val(' ')) {
//   // $("#aca-vacancy-0").val('10')
//   alert('hi')
// }

if (!$('#aca-vacancy-0').val()) {
  $('#aca-vacancy-0').val('10')
}

if (!$('#aca-vacancy-filled-0').val()) {
  $('#aca-vacancy-filled-0').val('9')
}

if (!$('#aca-vacancy-1').val()) {
  $('#aca-vacancy-1').val('7')
}

if (!$('#aca-vacancy-filled-1').val()) {
  $('#aca-vacancy-filled-1').val('5')
}

function getMonthNameDateString(dt) {
  monthNamelist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNamelist[dt.getMonth()];
};

var monthNumber = $('#monthReformat').html()
var date = new Date(monthNumber); // date object
var mName = getMonthNameDateString(date); // get month from specific date string
$('#monthReformat').text(mName);

var monthNumberEmp = $('#monthReformatEmp').html()
var date = new Date(monthNumberEmp); // date object
var mName2 = getMonthNameDateString(date); // get month from specific date string
$('#monthReformatEmp').text(mName2);


if (isEmpty($('.personal-detail'))) {
  $('.personal-detail.1').text('Johnny')
  $('.personal-detail.2').text('Custard')
  $('.personal-detail.3').text('17 March 1990')
  $('.personal-detail.4').text('Male')
  $('.personal-detail.5').text('Irish')
  $('.personal-detail.6').text('Yes')
}


$(".personal-detail").each(function () {
  if (isEmpty($(this))) {
    $('#personalDetailsNotStarted').show()
    $('#personalDetailsComplete').hide()
  }
  if (!isEmpty($(this))) {
    $('#personalDetailsComplete').show()
    $('#personalDetailsNotStarted').hide()
  }
});

if (isEmpty($('.job-role-detail'))) {
  $('.job-role-detail.1a').text('Manager')
  $('.job-role-detail.1b').text('Teacher')
  $('.job-role-detail.1c').text('Teaching Support')
  $('.job-role-detail.2').text('Teacher')
  $('.job-role-detail.3').text('Academic qualifications')
  $('.job-role-detail.4').text('Maths')
  $('.job-role-detail.5').text('Level 6 Bachelors degree, BTEC professional diplomas')
  $('.job-role-detail.6').text('Level 8 Doctorates, award, certificate diploma in strategic direction')
  $('.job-role-detail.7').text('Level 3 A Level or equivalent')
  $('.job-role-detail.8').text('Level 8 Doctor of Education (EdD)')
  $('.job-role-detail.9').text('Chartered teacher status (College of Teaching)')
  $('.job-role-detail.10').text('11 to 20 years')
  $('.job-role-detail.11').text('No')
}

$(".job-role-detail").each(function () {
  if (isEmpty($(this))) {
    $('#jobRoleNotStarted').show()
    $('#jobRoleComplete').hide()
  }
  if (!isEmpty($(this))) {
    $('#jobRoleComplete').show()
    $('#jobRoleNotStarted').hide()
  }
});


if (isEmpty($('.employment-detail'))) {
  $('.employment-detail.1').text('More than one')
  $('.employment-detail.2').text('Permanent')
  $('.employment-detail.3').text('20')
  $('.employment-detail.4').text('50%')
  $('.employment-detail.5').text('Annual salary')
  $('.employment-detail.6').text('31 August 2015')
  $('.employment-detail.7').text('4 to 10 years')
  $('.employment-detail.8').text('11 to 20 years')
  $('.employment-detail.9').text('Yes')
}

$(".employment-detail").each(function () {
  if (isEmpty($(this))) {
    $('#employmentNotStarted').show()
    $('#employmentComplete').hide()
  }
  if (!isEmpty($(this))) {
    $('#employmentComplete').show()
    $('#employmentNotStarted').hide()
  }
});

////////**********************************///////////

$(".type-of-vacancy").each(function () {
  if (isEmpty($(this))) {
    $('#typesOfVacancyIncomplete').show()
    $('#typesOfVacancyComplete').hide()
  }
});
if (!$(".type-of-vacancy-group dd").is(':empty')) {
  $('#typesOfVacancyIncomplete').hide()
  $('#typesOfVacancyComplete').show()
}



$('#varDetailsIncomplete').show()
// $('#varDetailsIncomplete').css('margin-bottom', '30px')
$('#varDetailsComplete').hide()

$(".var-details-group").each(function () {
  if ($(this).is(":visible")) {

    $(".subject-answer").each(function () {
      if (!isEmpty($(this))) {

        $('#varDetailsIncomplete').hide()
        $('#varDetailsComplete').show()

      }
    });

  }
});


if (!isEmpty($('.difficulty-recruiting'))) {
  $('#difficultiesIncomplete').hide()
  $('#difficultiesComplete').show()
}

if (isEmpty($('.difficulty-recruiting'))) {
  $('#difficultiesIncomplete').show()
  $('#difficultiesComplete').hide()
}


$('#whyWasItDifficultComplete').hide()
$('#whyWasItDifficultIncomplete').show()

$(".why-was-it-difficult-group dd").each(function () {
  if ($(this).is(":visible")) {

    $("dd p").each(function () {
      if (!isEmpty($(this))) {

        $('#whyWasItDifficultComplete').show()
        $('#whyWasItDifficultIncomplete').hide()

      }
    });

  }
});


if (!isEmpty($('.how-many-apprentices'))) {
  $('#apprenticesIncomplete').hide()
  $('#apprenticesComplete').show()
}

if (isEmpty($('.how-many-apprentices'))) {
  $('#apprenticesIncomplete').show()
  $('#apprenticesComplete').hide()
}


$('#staffCounsellingComplete').hide()
$('#staffCounsellingIncomplete').show()


$('.staff-councelling-group dd').each(function () {
  if (!isEmpty($(this))) {

    $('#staffCounsellingComplete').show()
    $('#staffCounsellingIncomplete').hide()

  }
});
