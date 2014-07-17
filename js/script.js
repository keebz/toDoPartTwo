$(function(){
  var currentList;
  $("form#toDoForm").submit(function(event){
    event.preventDefault();
    var location = $("input#whatLocation").val();
    $("ul#listLocation").append("<li>" + location + "</li>");

    var doWork = {places: location, work:[]};


    $("ul#listLocation li").last().click(function(){
      currentList = doWork;
      $("#taskInput").show();
      $("h1#customLocation").text(doWork.places);
      $("ul#listWork").empty();

      $(".place").text(doWork.places);

      currentList.work.forEach(function(job){
        $("ul#listWork").append("<li>"+job+"</li>");
      });
    });
  });

  $("form#taskPerLocation").submit(function(event){
    event.preventDefault();

    var task = $("input#toDo").val();
    currentList.work.push(task);
    $("ul#listWork").empty();
    currentList.work.forEach(function(job){
        $("ul#listWork").append("<li>"+job+"</li>");
            // $(".work").empty();
      });

$("input#whatLocation").val("");
$("input#toDo").val("");

  });
})
