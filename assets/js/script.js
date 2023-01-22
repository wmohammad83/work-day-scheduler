// =========================================================================
// MOMENT JS SETTING THE DATE
// =========================================================================
var today = moment();
$("#currentDay").text(today.format("dddd Do MMMM YYYY LT"));

// =========================================================================
// SELECTING THE CONTAINER
// =========================================================================

var hour = today.format();

console.log(hour);

{
  /* <div class="row time-block">
        <div class="col-md-1 hour">9am</div>
        <textarea class="col-md-10 description past"></textarea>
        <button class="col-md-1 saveBtn"><i class="fa fa-save"></i></button>
</div> */
}

var planner = $("#planner");

function dayPlanner(start, end) {
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
    colum.text(i);

    // textarea
    var txt = $("<textarea>");

    txt.attr("class", "col-md-10 description");

    if (eventTime.isBefore(hour)) {
      console.log("hello this is from the funtion");
      txt.attr("class", "past col-md-10 description");
    }
    if (eventTime.isSame(hour)) {
      txt.attr("class", "present col-md-10 description");
      console.log("time is the same");
    }
    if (eventTime.isAfter(hour)) {
      txt.attr("class", "future col-md-10 description");
    }

    var btn = $("<button>");
    btn.attr("class", "col-md-1 saveBtn");

    var fa = $("<i>");
    fa.attr("class", "fa fa-save");

    btn.append(fa);

    timeblock.append(colum);
    timeblock.append(txt);
    timeblock.append(btn);
    planner.append(timeblock);
  }
}

dayPlanner(9, 22);

var beginningTime = moment({
  h: 8,
});
var endTime = moment({
  h: 9,
});

console.log(beginningTime.isBefore(beginningTime));
