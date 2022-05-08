
var currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime);


var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));

$.each(timeBlock, function (i, hour) {
  var hourId = parseInt($(this).attr("id"));
  if (hourId === now) {
    $(this).next().addClass("present");
  } else if (hourId < now) {
    $(this).next().addClass("past");
  } else if (hourId > now) {
    $(this).next().addClass("future");
  }
});

