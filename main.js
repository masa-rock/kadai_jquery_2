$(document).ready(function(){
  
  let push_num = [];
  let result ="";
  let num_1 = "";
  var num_top="";
  var len_array ="";
  
  
  $('.com').on('click',function(){
    push_num.push($(this).text());
    num_1 = push_num.join('');
    num_top = push_num[0];
    len_array = push_num.length;
    if (len_array == 1 && (num_top == 0 || num_top == 00 ||  $(this).hasClass("com_cal"))){
      $(".calculator_display").text(0);
      push_num = [];
    }else{
      $(".calculator_display").text(num_1);
    }
  });
  
  // || className == "com_cal"
  // 四則演算ボタン操作
  
  
  // ACボタン操作
  $('.com_ac').on('click',function(){
    push_num = [];
    num_1 = "";
    $(".calculator_display").text(0);
  });
  
  // equalボタン操作
  $('.com_equal').on('click',function() {
      result = eval(num_1);
      $(".calculator_display").text(result);
      push_num = [result];
  });
});


// ○+△-□ができるようにする
// ++,*-など連続がないようにする。
