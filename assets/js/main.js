/* javascript */

$("h1").hide();
$(".clickme").click(function(eventObject){
  console.log("hello!", eventObject);
});

let username = "";

$("form").submit(function(e){
  e.preventDefault();
  username = $(".username").val();
  console.log(username);
});
