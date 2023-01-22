// =========================================================================
// MOMENT JS SETTING THE DATE
// =========================================================================
var today = moment();
$("#currentDay").text(today.format("dddd Do MMMM YYYY"));

// =========================================================================
// SELECTING THE CONTAINER
// =========================================================================
var planner = $("#planner");
// =========================================================================
// FUNCTION WITH DYNAMIC START AND END TIME
// =========================================================================
function dayPlanner(start, end) {
  var hour = today.hour();
  // =========================================================================
  // FOR LOOP TO CREATE TIMEBLOCKS WITH THE BUTTONS AND SAVE FUNCTION
  // =========================================================================
  for (var i = start; i <= end; i++) {
    var eventTime = moment({
      h: i,
    });
    // =========================================================================
    // NEW TIMEBLOCK
    // =========================================================================
    var timeblock = $("<div>");
    timeblock.attr("class", "row time-block");
    // =========================================================================
    // NEW HOURBLOCK
    // =========================================================================
    var hourBlock = $("<div>");
    hourBlock.attr("class", "col-md-1 hour");
    hourBlock.attr("id", "hour-" + i);
    hourBlock.text(i + ":00");
    // =========================================================================
    // NEW TEXTAREA INPUT
    // =========================================================================
    var textInput = $("<textarea>");
    textInput.attr("class", "col-md-10 description");
    textInput.attr("id", "task-" + i);
    // =========================================================================
    // SET CLASSES ACCORDING TO CURRENT TIME
    // =========================================================================
    if (hour > i) {
      textInput.addClass("past");
    } else if (hour === i) {
      textInput.addClass("present");
    } else {
      textInput.addClass("future");
    }
    // =========================================================================
    // NEW SAVE BUTTON
    // =========================================================================
    var btn = $("<button>");
    btn.attr("class", "col-md-1 saveBtn");
    btn.attr("id", "btn-" + i);
    var fa = $("<i>");
    fa.attr("class", "fa fa-save");
    btn.append(fa);
    // =========================================================================
    // APPEND ELEMENTS TO TIMEBLOCK
    // =========================================================================
    timeblock.append(hourBlock);
    timeblock.append(textInput);
    timeblock.append(btn);
    planner.append(timeblock);
    // =========================================================================
    // EVENT HANDLER TO SAVE THE TASK TO LOCAL STORAGE
    // =========================================================================
    $(document).on("click", "#btn-" + i, function () {
      var plannerTask = $(this).siblings("textarea").val();
      var taskHour = $(this).siblings("textarea").attr("id").split("-")[1];
      localStorage.setItem("task-" + taskHour, plannerTask);
    });
    // =========================================================================
    // GET DATA FROM LOCAL STORAGE AND DISPLAY IN BROWSER
    // =========================================================================
    var hourTask = localStorage.getItem("task-" + i);
    $("#task-" + i).append(hourTask);
  }
}

// =========================================================================
// CALL THE PLANNER FUNCTION AND SET THE START AND END TIME OF THE PLANNER
// =========================================================================
dayPlanner(9, 17);
