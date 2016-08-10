
// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(num1,num2){
  return num1 - num2;
};
var divide=function(num1,num2){
	return num1/num2;
};
var remainder=function(num1, num2){
	return num1%num2;
};
var multiply = function(num1, num2){
	return num1*num2;
};
//front-end
$(document).ready(function(){
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    debugger;
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var result=subtract(number1,number2);
    $("#output").text(result);

  });
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var result=divide(number1,number2);
    $("#output").text(result);
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var result=multiply(number1,number2);
    $("#output").text(result);
  });
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var result=add(number1,number2);
    $("#output").text(result);
  });
});
