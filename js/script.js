$(function(){
  $("form#toDoForm").submit(function(event){
    event.preventDefault();
    var task = $("input#toDo").val();
    $("ul#listWork").append("<li>" + task + "</li>");

    $("li").last().click(function(){
      $(this).css("text-decoration","line-through");
    })
    $("li").last().dblclick(function(){
      $(this).remove();
    })
    $("input#toDo").val("");

  })
})
