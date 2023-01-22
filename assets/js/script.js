// =========================================================================
// MOMENT JS SETTING THE DATE
// =========================================================================
var today = moment();
$("#currentDay").text(today.format("dddd Do MMMM YYYY LT"));

// =========================================================================
// SELECTING THE CONTAINER
// =========================================================================


// console.log(hour);
var planner = $("#planner");

function dayPlanner(start, end) {


    var hour = today.hour();

  for (var i = start; i <= end; i++) {
    var eventTime = moment({
      h: i,
    });

    // new block
    var timeblock = $("<div>");
    timeblock.attr("class", "row time-block");

    // colum
    var colum = $("<div>");
    colum.attr("class", "col-md-1 hour");
    colum.attr("id", "hour-" + i);
    colum.text(i + ":00");

    // textarea
    var txt = $("<textarea>");
    txt.attr("class", "col-md-10 description");
    txt.attr("id", "task-" + i);


    if(hour > i){
        txt.addClass("past")
    } else if(hour === i) {
        txt.addClass("present")
    } else{
        txt.addClass("future")
    }

    // Button
    var btn = $("<button>");
    btn.attr("class", "col-md-1 saveBtn");
    btn.attr("id", "btn-" + i);
    var fa = $("<i>");
    fa.attr("class", "fa fa-save");
    btn.append(fa);



    timeblock.append(colum);
    timeblock.append(txt);
    timeblock.append(btn);
    planner.append(timeblock);

    $(document).on("click", "#btn-" + i, function () {
      var plannerTask = $(this).siblings("textarea").val();
      var taskHour = $(this).siblings("textarea").attr("id").split("-")[1];

      localStorage.setItem("task-" + taskHour, plannerTask);
    });
    var hourTask = localStorage.getItem("task-" + i);
    $("#task-" + i).append(hourTask);
  }
}

dayPlanner(9, 17);

