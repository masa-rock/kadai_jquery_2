$(document).ready(function(){
  
  let push_num = [];
  let result ="";
  let num_1 = "";
  var receive_num="";
  var len_array ="";
  
  
  // 数字ボタン操作
  $('.com').on('click',function(){
    receive_num = $(this).text();
    len_array = push_num.length;
    $(".com_cal").prop("disabled",false);
    // 0,00の初回入力防止
    if (len_array == 0 && (receive_num == 0 || receive_num == 00)){
      $(".calculator_display").text(0);
    }else{
      push_num.push(receive_num);
      num_1 = push_num.join('');
      $(".calculator_display").text(num_1);
    }
  });
  
  // 四則演算ボタン操作　
  $('.com_cal').on('click',function(){
    len_array = push_num.length;
    if (len_array == 0){
      $(".calculator_display").text(0);
    }else{
      push_num.push($(this).text());
      num_1 = push_num.join('');
      $(".calculator_display").text(num_1);
      $('.com_cal').prop("disabled",true);
    }
  });
  
  // ACボタン操作
  $('.com_ac').on('click',function(){
    push_num = [];
    num_1 = "";
    $(".calculator_display").text(0);
    $(".com_cal").prop("disabled",false);
  });
  
  // equalボタン操作
  $('.com_equal').on('click',function() {
      result = eval(num_1);
      $(".calculator_display").text(result);
      push_num = [result];
      $(".com_cal").prop("disabled",false);
  });
});


// ○+△-□ができるようにする
// ++,*-など連続がないようにする。
