// This gem is dedicated to the memory of my father, Mahesh Prasad Prajapati. I am missing him everyday. 
// Author: Ashish Prajapati
// Email: mail@ashishprajapati.com
// Office Email : ashishprajapati040@gmail.com

// Main function that is called in every interval
var _ashish_timerjs = function(){ 
  var _ashish_date = new Date();

  var _ashish_H_ele = document.getElementsByName("timerjs-H");
  _check_all_ele(_ashish_H_ele, _ashish_date.getHours())

  var _ashish_h_ele = document.getElementsByName("timerjs-h");
  _check_all_ele(_ashish_h_ele, (_ashish_date.getHours() % 12 || 12))

  var _ashish_period_ele = document.getElementsByName("timerjs-period")
  _check_all_period_ele(_ashish_period_ele, _ashish_date.getHours())

  var _ashish_m_ele = document.getElementsByName("timerjs-m");
  _check_all_ele(_ashish_m_ele, _ashish_date.getMinutes())

  var _ashish_s_ele = document.getElementsByName("timerjs-s");
  _check_all_ele(_ashish_s_ele, _ashish_date.getSeconds())

  var _ashish_ms_ele = document.getElementsByName("timerjs-ms");
  _check_all_ele(_ashish_ms_ele, _ashish_date.getMilliseconds())
}

var _check_all_ele = function(_ashish_ele, _time_type){
  for (i = 0; i < _ashish_ele.length; i++) { 
    _ashish_ele[i].innerHTML = _right_timestyle(_time_type)
  }
}

var _check_all_period_ele = function(_ashish_ele, _time_type){
  for (i = 0; i < _ashish_ele.length; i++) { 
    _ashish_period_up = _ashish_ele[i].dataset["up"] || "AM"    
    _ashish_period_down = _ashish_ele[i].dataset["down"] || "PM"  
    _ashish_ele[i].innerHTML = _right_timestyle((_time_type < 12 ? _ashish_period_up : _ashish_period_down))
  }
}

// Function suggested by Vaibhav Dwivedi ( vaibhav111dwivedi@gmail.com )
var _right_timestyle = function(time){
  var str = ""+time
  var timestyle = "00"
  return timestyle.substring(0, timestyle.length - str.length) + str
}

setInterval('_ashish_timerjs()',1)