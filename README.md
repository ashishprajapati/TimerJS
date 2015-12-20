# TimerJS

TimerJS for realtime dynamic clock (https://github.com/ashishprajapati/TimerJS). This gem provide the way to show a dynamic clock on your html page. No bulk of code required to customized that, you can easily put your designs etc

## Installation

Add this line to your application's Gemfile:

    gem 'TimerJS'

And then execute:

    $ bundle

## Usage

Include timerjs in your manifest files:

    //= require timerjs
    
Html to use in your html.erb file:

### For Hour ( 24 )
    <span name="timerjs-H"></span>
### For Hour with period ( 12 )
    <span name="timerjs-h"></span> 
### For Time Period ( AM/PM or You can Customize)
    <span name="timerjs-period" data-up="AM" data-down="PM"></span>
### For Minutes 
    <span name="timerjs-m"></span>
### For Seconds
    <span name="timerjs-s"></span>
### For Milliseconds
    <span name="timerjs-ms"></span>

Example : 

        <span name="timerjs-h"></span> 
        <span name="timerjs-period" data-up="Morning" data-down="Night"></span> :
        <span name="timerjs-m"></span> :
        <span name="timerjs-s"></span> :
        <span name="timerjs-ms"></span>
    
Result :
       
       09 Night : 34 : 56 : 245
