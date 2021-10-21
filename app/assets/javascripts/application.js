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


$("#searchSubject").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  // var valueChecked = $('input[name="organisation"]:checked').length;

  $(".govuk-checkboxes div").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });

  if ($('.academic-subjects .govuk-checkboxes__item:visible').length===0){
    $('.academic-legend').hide();
    $('.academic-legend').parent().parent().css('margin-bottom', 0);
  }
  else {
    $('.academic-legend').show();
    $('.academic-legend').parent().parent().css('margin-bottom', '30px');
  }
  
  if ($('.vocational-programmes .govuk-checkboxes__item:visible').length===0){
    $('.vocational-legend').hide();
    $('.vocational-legend').parent().parent().css('margin-bottom', 0);
  }
  else {
    $('.vocational-legend').show();
    $('.vocational-legend').parent().parent().css('margin-bottom', '30px');
  }
  
  if ($('.other-programmes .govuk-checkboxes__item:visible').length===0){
    $('.other-legend').hide();
    $('.other-legend').parent().parent().css('margin-bottom', 0);
  }
  else {
    $('.other-legend').show();
    $('.other-legend').parent().parent().css('margin-bottom', '30px');
  }
  
  if ($('.academic-subjects .govuk-checkboxes__item:visible').length===0 && $('.vocational-programmes .govuk-checkboxes__item:visible').length===0 && $('.other-programmes .govuk-checkboxes__item:visible').length===0) {
    $('.no-results-text').show();
  }
  else {
    $('.no-results-text').hide();
  }
   
});




var $filterCheckboxes = $('.govuk-checkboxes input[type="checkbox"]');

$filterCheckboxes.on('change', function() {

  if ($(this).is(':checked')) {
    var checkboxValue = $(this).val();
    $('.filter-feedback-container').show();
    $('.filter-feedback').show();
    $('<a href="#" class="filter-feedback"> <span class="filter-name"> <span class="close"></span>'+ checkboxValue +'</span>  </a>').appendTo('#firstFilter');
  }
  else {
    var value = $(this).val();
    if ($('#firstFilter').has('.filter-name:contains("'+value+'")')) {
      $('.filter-name:contains("'+value+'")').parent().remove();
    }
  }

  $('.filter-feedback').on('click', function() {
    var filterValue = $(this).children().text();
    $(this).remove(); // remove the button
    if ($('.govuk-checkboxes :checkbox').has('label:contains("'+filterValue+'")')) {
      $('label:contains("'+filterValue+'")').trigger('click');
    }
  });

  if (!$('.govuk-checkboxes :checkbox').is(':checked')) {
    $('.filter-feedback-container').hide();
  }

});

$('.filter-feedback.old').click(function(){
  var filterValue = $(this).children().text();
    $(this).remove(); // remove the button
    if ($('.govuk-checkboxes :checkbox').has('label:contains("'+filterValue+'")')) {
      $('label:contains("'+filterValue+'")').trigger('click');
    }
});

function isEmpty( el ){
  return !$.trim(el.html())
}

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
if($('.aca-checkboxes').children(':visible').length == 0) {
  $('.aca-checkboxes').parent().parent().hide()
}

$(".voc-label").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().hide()
  } 
});
if($('.voc-checkboxes').children(':visible').length == 0) {
  $('.voc-checkboxes').parent().parent().hide()
}

$(".other-label").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().hide()
  } 
});
if($('.other-checkboxes').children(':visible').length == 0) {
  $('.other-checkboxes').parent().parent().hide()
}




$(".aca-h3").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().hide()
  } 
});
if($('.aca-group').children('.question-group:visible').length == 0) {
  $('.aca-group').hide()
}

$(".voc-h3").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().hide()
  } 
});
if($('.voc-group').children('.question-group:visible').length == 0) {
  $('.voc-group').hide()
}

$(".other-h3").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().hide()
  } 
});
if($('.other-group').children('.question-group:visible').length == 0) {
  $('.other-group').hide()
}



$(".aca-h3-v2").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().parent().parent().hide()
  } 
});
if($('.aca-reasons-group').children('.aca-reasons:visible').length == 0) {
  $('.aca-reasons-group').hide()
}

$(".voc-h3-v2").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().parent().parent().hide()
  } 
});
if($('.voc-reasons-group').children('.voc-reasons:visible').length == 0) {
  $('.voc-reasons-group').hide()
}

$(".other-h3-v2").each(function () {
  if (isEmpty($(this))) {
    $(this).parent().parent().parent().hide()
  } 
});
if($('.other-reasons-group').children('.other-reasons:visible').length == 0) {
  $('.other-reasons-group').hide()
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