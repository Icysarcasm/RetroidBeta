gdjs.ColorCode = {};
gdjs.ColorCode.localVariables = [];
gdjs.ColorCode.GDPlayer_95951Objects1= [];
gdjs.ColorCode.GDPlayer_95951Objects2= [];
gdjs.ColorCode.GDPlayer_95951Objects3= [];
gdjs.ColorCode.GDPlayer_95951Objects4= [];
gdjs.ColorCode.GDPlayer_95951Objects5= [];
gdjs.ColorCode.GDPlayer_95952Objects1= [];
gdjs.ColorCode.GDPlayer_95952Objects2= [];
gdjs.ColorCode.GDPlayer_95952Objects3= [];
gdjs.ColorCode.GDPlayer_95952Objects4= [];
gdjs.ColorCode.GDPlayer_95952Objects5= [];
gdjs.ColorCode.GDBackObjects1= [];
gdjs.ColorCode.GDBackObjects2= [];
gdjs.ColorCode.GDBackObjects3= [];
gdjs.ColorCode.GDBackObjects4= [];
gdjs.ColorCode.GDBackObjects5= [];
gdjs.ColorCode.GDSelector_9595BGObjects1= [];
gdjs.ColorCode.GDSelector_9595BGObjects2= [];
gdjs.ColorCode.GDSelector_9595BGObjects3= [];
gdjs.ColorCode.GDSelector_9595BGObjects4= [];
gdjs.ColorCode.GDSelector_9595BGObjects5= [];
gdjs.ColorCode.GDPlayer1_9595TextObjects1= [];
gdjs.ColorCode.GDPlayer1_9595TextObjects2= [];
gdjs.ColorCode.GDPlayer1_9595TextObjects3= [];
gdjs.ColorCode.GDPlayer1_9595TextObjects4= [];
gdjs.ColorCode.GDPlayer1_9595TextObjects5= [];
gdjs.ColorCode.GDP1BGObjects1= [];
gdjs.ColorCode.GDP1BGObjects2= [];
gdjs.ColorCode.GDP1BGObjects3= [];
gdjs.ColorCode.GDP1BGObjects4= [];
gdjs.ColorCode.GDP1BGObjects5= [];
gdjs.ColorCode.GDPlayer2_9595TextObjects1= [];
gdjs.ColorCode.GDPlayer2_9595TextObjects2= [];
gdjs.ColorCode.GDPlayer2_9595TextObjects3= [];
gdjs.ColorCode.GDPlayer2_9595TextObjects4= [];
gdjs.ColorCode.GDPlayer2_9595TextObjects5= [];
gdjs.ColorCode.GDP2BGObjects1= [];
gdjs.ColorCode.GDP2BGObjects2= [];
gdjs.ColorCode.GDP2BGObjects3= [];
gdjs.ColorCode.GDP2BGObjects4= [];
gdjs.ColorCode.GDP2BGObjects5= [];
gdjs.ColorCode.GDdebug1Objects1= [];
gdjs.ColorCode.GDdebug1Objects2= [];
gdjs.ColorCode.GDdebug1Objects3= [];
gdjs.ColorCode.GDdebug1Objects4= [];
gdjs.ColorCode.GDdebug1Objects5= [];
gdjs.ColorCode.GDdebug2Objects1= [];
gdjs.ColorCode.GDdebug2Objects2= [];
gdjs.ColorCode.GDdebug2Objects3= [];
gdjs.ColorCode.GDdebug2Objects4= [];
gdjs.ColorCode.GDdebug2Objects5= [];
gdjs.ColorCode.GDRedObjects1= [];
gdjs.ColorCode.GDRedObjects2= [];
gdjs.ColorCode.GDRedObjects3= [];
gdjs.ColorCode.GDRedObjects4= [];
gdjs.ColorCode.GDRedObjects5= [];
gdjs.ColorCode.GDBlueObjects1= [];
gdjs.ColorCode.GDBlueObjects2= [];
gdjs.ColorCode.GDBlueObjects3= [];
gdjs.ColorCode.GDBlueObjects4= [];
gdjs.ColorCode.GDBlueObjects5= [];
gdjs.ColorCode.GDGreenObjects1= [];
gdjs.ColorCode.GDGreenObjects2= [];
gdjs.ColorCode.GDGreenObjects3= [];
gdjs.ColorCode.GDGreenObjects4= [];
gdjs.ColorCode.GDGreenObjects5= [];
gdjs.ColorCode.GDYellowObjects1= [];
gdjs.ColorCode.GDYellowObjects2= [];
gdjs.ColorCode.GDYellowObjects3= [];
gdjs.ColorCode.GDYellowObjects4= [];
gdjs.ColorCode.GDYellowObjects5= [];
gdjs.ColorCode.GDPurpleObjects1= [];
gdjs.ColorCode.GDPurpleObjects2= [];
gdjs.ColorCode.GDPurpleObjects3= [];
gdjs.ColorCode.GDPurpleObjects4= [];
gdjs.ColorCode.GDPurpleObjects5= [];
gdjs.ColorCode.GDCyanObjects1= [];
gdjs.ColorCode.GDCyanObjects2= [];
gdjs.ColorCode.GDCyanObjects3= [];
gdjs.ColorCode.GDCyanObjects4= [];
gdjs.ColorCode.GDCyanObjects5= [];
gdjs.ColorCode.GDCustomObjects1= [];
gdjs.ColorCode.GDCustomObjects2= [];
gdjs.ColorCode.GDCustomObjects3= [];
gdjs.ColorCode.GDCustomObjects4= [];
gdjs.ColorCode.GDCustomObjects5= [];
gdjs.ColorCode.GDCRTCoverObjects1= [];
gdjs.ColorCode.GDCRTCoverObjects2= [];
gdjs.ColorCode.GDCRTCoverObjects3= [];
gdjs.ColorCode.GDCRTCoverObjects4= [];
gdjs.ColorCode.GDCRTCoverObjects5= [];
gdjs.ColorCode.GDLineLightJoystickObjects1= [];
gdjs.ColorCode.GDLineLightJoystickObjects2= [];
gdjs.ColorCode.GDLineLightJoystickObjects3= [];
gdjs.ColorCode.GDLineLightJoystickObjects4= [];
gdjs.ColorCode.GDLineLightJoystickObjects5= [];


gdjs.ColorCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "leavetime") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}}

}


};gdjs.ColorCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "leavetime") >= 30;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}}

}


};gdjs.ColorCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Slash");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ColorCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Slash"));
}
isConditionTrue_0 = isConditionTrue_1;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leavetime");
}
{ //Subevents
gdjs.ColorCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.ColorCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(10).getAsString());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(11).getAsString());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(12).getAsString());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(13).getAsString());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(14).getAsString());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}}

}


};gdjs.ColorCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ColorCode.GDBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player_1"), gdjs.ColorCode.GDPlayer_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player_2"), gdjs.ColorCode.GDPlayer_95952Objects2);
{for(var i = 0, len = gdjs.ColorCode.GDPlayer_95951Objects2.length ;i < len;++i) {
    gdjs.ColorCode.GDPlayer_95951Objects2[i].getBehavior("Tween").addObjectPositionYTween2("shift", 416, "easeInOutQuad", 0.1, false);
}
}{for(var i = 0, len = gdjs.ColorCode.GDPlayer_95952Objects2.length ;i < len;++i) {
    gdjs.ColorCode.GDPlayer_95952Objects2[i].getBehavior("Tween").addObjectPositionYTween2("shift", 480, "easeInOutQuad", 0.1, false);
}
}{for(var i = 0, len = gdjs.ColorCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDBackObjects2[i].getBehavior("Tween").addObjectPositionYTween2("shift", 544, "easeInOutQuad", 0.1, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ColorCode.GDBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player_1"), gdjs.ColorCode.GDPlayer_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player_2"), gdjs.ColorCode.GDPlayer_95952Objects2);
{for(var i = 0, len = gdjs.ColorCode.GDPlayer_95951Objects2.length ;i < len;++i) {
    gdjs.ColorCode.GDPlayer_95951Objects2[i].getBehavior("Tween").addObjectPositionYTween2("shift", 352, "easeInOutQuad", 0.1, false);
}
}{for(var i = 0, len = gdjs.ColorCode.GDPlayer_95952Objects2.length ;i < len;++i) {
    gdjs.ColorCode.GDPlayer_95952Objects2[i].getBehavior("Tween").addObjectPositionYTween2("shift", 416, "easeInOutQuad", 0.1, false);
}
}{for(var i = 0, len = gdjs.ColorCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDBackObjects2[i].getBehavior("Tween").addObjectPositionYTween2("shift", 480, "easeInOutQuad", 0.1, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ColorCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player_1"), gdjs.ColorCode.GDPlayer_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player_2"), gdjs.ColorCode.GDPlayer_95952Objects1);
{for(var i = 0, len = gdjs.ColorCode.GDPlayer_95951Objects1.length ;i < len;++i) {
    gdjs.ColorCode.GDPlayer_95951Objects1[i].getBehavior("Tween").addObjectPositionYTween2("shift", 288, "easeInOutQuad", 0.1, false);
}
}{for(var i = 0, len = gdjs.ColorCode.GDPlayer_95952Objects1.length ;i < len;++i) {
    gdjs.ColorCode.GDPlayer_95952Objects1[i].getBehavior("Tween").addObjectPositionYTween2("shift", 352, "easeInOutQuad", 0.1, false);
}
}{for(var i = 0, len = gdjs.ColorCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDBackObjects1[i].getBehavior("Tween").addObjectPositionYTween2("shift", 416, "easeInOutQuad", 0.1, false);
}
}}

}


};gdjs.ColorCode.eventsList5 = function(runtimeScene) {

{


gdjs.ColorCode.eventsList4(runtimeScene);
}


};gdjs.ColorCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ColorCode.GDBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Blue"), gdjs.ColorCode.GDBlueObjects2);
gdjs.copyArray(runtimeScene.getObjects("Custom"), gdjs.ColorCode.GDCustomObjects2);
gdjs.copyArray(runtimeScene.getObjects("Cyan"), gdjs.ColorCode.GDCyanObjects2);
gdjs.copyArray(runtimeScene.getObjects("Green"), gdjs.ColorCode.GDGreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player_1"), gdjs.ColorCode.GDPlayer_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player_2"), gdjs.ColorCode.GDPlayer_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("Purple"), gdjs.ColorCode.GDPurpleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Red"), gdjs.ColorCode.GDRedObjects2);
gdjs.copyArray(runtimeScene.getObjects("Yellow"), gdjs.ColorCode.GDYellowObjects2);
{for(var i = 0, len = gdjs.ColorCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDBackObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.ColorCode.GDPlayer_95951Objects2.length ;i < len;++i) {
    gdjs.ColorCode.GDPlayer_95951Objects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.ColorCode.GDPlayer_95952Objects2.length ;i < len;++i) {
    gdjs.ColorCode.GDPlayer_95952Objects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.ColorCode.GDRedObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDRedObjects2[i].getBehavior("Opacity").setOpacity(150);
}
}{for(var i = 0, len = gdjs.ColorCode.GDBlueObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDBlueObjects2[i].getBehavior("Opacity").setOpacity(150);
}
}{for(var i = 0, len = gdjs.ColorCode.GDGreenObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDGreenObjects2[i].getBehavior("Opacity").setOpacity(150);
}
}{for(var i = 0, len = gdjs.ColorCode.GDYellowObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDYellowObjects2[i].getBehavior("Opacity").setOpacity(150);
}
}{for(var i = 0, len = gdjs.ColorCode.GDPurpleObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDPurpleObjects2[i].getBehavior("Opacity").setOpacity(150);
}
}{for(var i = 0, len = gdjs.ColorCode.GDCyanObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDCyanObjects2[i].getBehavior("Opacity").setOpacity(150);
}
}{for(var i = 0, len = gdjs.ColorCode.GDCustomObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDCustomObjects2[i].getBehavior("Opacity").setOpacity(150);
}
}}

}


{


gdjs.ColorCode.eventsList5(runtimeScene);
}


};gdjs.ColorCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Blue"), gdjs.ColorCode.GDBlueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Custom"), gdjs.ColorCode.GDCustomObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cyan"), gdjs.ColorCode.GDCyanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Green"), gdjs.ColorCode.GDGreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Purple"), gdjs.ColorCode.GDPurpleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Red"), gdjs.ColorCode.GDRedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yellow"), gdjs.ColorCode.GDYellowObjects1);
{for(var i = 0, len = gdjs.ColorCode.GDRedObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDRedObjects1[i].getBehavior("Tween").addObjectPositionYTween2("shift", 416 - 64 * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "easeInOutQuad", 0.1, false);
}
}{for(var i = 0, len = gdjs.ColorCode.GDBlueObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDBlueObjects1[i].getBehavior("Tween").addObjectPositionYTween2("shift", 480 - 64 * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "easeInOutQuad", 0.1, false);
}
}{for(var i = 0, len = gdjs.ColorCode.GDGreenObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDGreenObjects1[i].getBehavior("Tween").addObjectPositionYTween2("shift", 544 - 64 * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "easeInOutQuad", 0.1, false);
}
}{for(var i = 0, len = gdjs.ColorCode.GDYellowObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDYellowObjects1[i].getBehavior("Tween").addObjectPositionYTween2("shift", 608 - 64 * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "easeInOutQuad", 0.1, false);
}
}{for(var i = 0, len = gdjs.ColorCode.GDPurpleObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDPurpleObjects1[i].getBehavior("Tween").addObjectPositionYTween2("shift", 672 - 64 * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "easeInOutQuad", 0.1, false);
}
}{for(var i = 0, len = gdjs.ColorCode.GDCyanObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDCyanObjects1[i].getBehavior("Tween").addObjectPositionYTween2("shift", 736 - 64 * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "easeInOutQuad", 0.1, false);
}
}{for(var i = 0, len = gdjs.ColorCode.GDCustomObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDCustomObjects1[i].getBehavior("Tween").addObjectPositionYTween2("shift", 800 - 64 * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "easeInOutQuad", 0.1, false);
}
}}

}


};gdjs.ColorCode.eventsList8 = function(runtimeScene) {

{


gdjs.ColorCode.eventsList7(runtimeScene);
}


};gdjs.ColorCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ColorCode.GDBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Blue"), gdjs.ColorCode.GDBlueObjects2);
gdjs.copyArray(runtimeScene.getObjects("Custom"), gdjs.ColorCode.GDCustomObjects2);
gdjs.copyArray(runtimeScene.getObjects("Cyan"), gdjs.ColorCode.GDCyanObjects2);
gdjs.copyArray(runtimeScene.getObjects("Green"), gdjs.ColorCode.GDGreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player_1"), gdjs.ColorCode.GDPlayer_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player_2"), gdjs.ColorCode.GDPlayer_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("Purple"), gdjs.ColorCode.GDPurpleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Red"), gdjs.ColorCode.GDRedObjects2);
gdjs.copyArray(runtimeScene.getObjects("Yellow"), gdjs.ColorCode.GDYellowObjects2);
{for(var i = 0, len = gdjs.ColorCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDBackObjects2[i].getBehavior("Opacity").setOpacity(150);
}
}{for(var i = 0, len = gdjs.ColorCode.GDPlayer_95951Objects2.length ;i < len;++i) {
    gdjs.ColorCode.GDPlayer_95951Objects2[i].getBehavior("Opacity").setOpacity(150);
}
}{for(var i = 0, len = gdjs.ColorCode.GDPlayer_95952Objects2.length ;i < len;++i) {
    gdjs.ColorCode.GDPlayer_95952Objects2[i].getBehavior("Opacity").setOpacity(150);
}
}{for(var i = 0, len = gdjs.ColorCode.GDRedObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDRedObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.ColorCode.GDBlueObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDBlueObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.ColorCode.GDGreenObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDGreenObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.ColorCode.GDYellowObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDYellowObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.ColorCode.GDPurpleObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDPurpleObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.ColorCode.GDCyanObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDCyanObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.ColorCode.GDCustomObjects2.length ;i < len;++i) {
    gdjs.ColorCode.GDCustomObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{


gdjs.ColorCode.eventsList8(runtimeScene);
}


};gdjs.ColorCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "joydelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "joydelay");
}}

}


};gdjs.ColorCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "joydelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 6);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "joydelay");
}}

}


};gdjs.ColorCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(2);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(2);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.ColorCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(3).setString(gdjs.evtsExt__PopUp__PromptResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


};gdjs.ColorCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("255;0;0");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("74;144;226");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("126;211;33");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("248;231;28");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("186;16;224");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("80;227;194");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__PopUp__Prompt.func(runtimeScene, "Custom Color? Format Like So:  (R;G;B)", "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}
{ //Subevents
gdjs.ColorCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.ColorCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtsExt__PopUp__PromptResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


};gdjs.ColorCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("255;0;0");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("74;144;226");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("126;211;33");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("248;231;28");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("186;16;224");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("80;227;194");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tapdelay") >= 0.5;
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__PopUp__Prompt.func(runtimeScene, "Custom Color? Format Like So:  (R;G;B)", "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}
{ //Subevents
gdjs.ColorCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.ColorCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ColorCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ColorCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.ColorCode.eventsList18 = function(runtimeScene) {

{


gdjs.ColorCode.eventsList12(runtimeScene);
}


{


gdjs.ColorCode.eventsList17(runtimeScene);
}


};gdjs.ColorCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}}

}


};gdjs.ColorCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "joydelay") >= 0.2;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ColorCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "joydelay") >= 0.2;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ColorCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(9).getAsString());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ColorCode.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ColorCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.ColorCode.eventsList21 = function(runtimeScene) {

{


gdjs.ColorCode.eventsList2(runtimeScene);
}


{


gdjs.ColorCode.eventsList3(runtimeScene);
}


{


gdjs.ColorCode.eventsList6(runtimeScene);
}


{


gdjs.ColorCode.eventsList9(runtimeScene);
}


{


gdjs.ColorCode.eventsList20(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(16).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("P2BG"), gdjs.ColorCode.GDP2BGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player2_Text"), gdjs.ColorCode.GDPlayer2_9595TextObjects1);
{for(var i = 0, len = gdjs.ColorCode.GDP2BGObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDP2BGObjects1[i].getBehavior("Tween").addObjectPositionYTween2("p2", 608, "easeInOutQuad", 0.1, false);
}
}{for(var i = 0, len = gdjs.ColorCode.GDPlayer2_9595TextObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDPlayer2_9595TextObjects1[i].getBehavior("Tween").addObjectPositionYTween2("p2", 640, "easeInOutQuad", 0.1, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("P2BG"), gdjs.ColorCode.GDP2BGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player2_Text"), gdjs.ColorCode.GDPlayer2_9595TextObjects1);
{for(var i = 0, len = gdjs.ColorCode.GDP2BGObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDP2BGObjects1[i].getBehavior("Tween").addObjectPositionYTween2("p2", 736, "easeInOutQuad", 0.1, false);
}
}{for(var i = 0, len = gdjs.ColorCode.GDPlayer2_9595TextObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDPlayer2_9595TextObjects1[i].getBehavior("Tween").addObjectPositionYTween2("p2", 757, "easeInOutQuad", 0.1, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(16).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tapdelay");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "joydelay");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("P1BG"), gdjs.ColorCode.GDP1BGObjects1);
gdjs.copyArray(runtimeScene.getObjects("P2BG"), gdjs.ColorCode.GDP2BGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player1_Text"), gdjs.ColorCode.GDPlayer1_9595TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player2_Text"), gdjs.ColorCode.GDPlayer2_9595TextObjects1);
{for(var i = 0, len = gdjs.ColorCode.GDP1BGObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDP1BGObjects1[i].getBehavior("Effect").setEffectStringParameter("Color", "newColor", runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}{for(var i = 0, len = gdjs.ColorCode.GDP2BGObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDP2BGObjects1[i].getBehavior("Effect").setEffectStringParameter("Color", "newColor", runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}
}{for(var i = 0, len = gdjs.ColorCode.GDPlayer1_9595TextObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDPlayer1_9595TextObjects1[i].setColor(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}{for(var i = 0, len = gdjs.ColorCode.GDPlayer2_9595TextObjects1.length ;i < len;++i) {
    gdjs.ColorCode.GDPlayer2_9595TextObjects1[i].setColor(runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}
}}

}


};

gdjs.ColorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ColorCode.GDPlayer_95951Objects1.length = 0;
gdjs.ColorCode.GDPlayer_95951Objects2.length = 0;
gdjs.ColorCode.GDPlayer_95951Objects3.length = 0;
gdjs.ColorCode.GDPlayer_95951Objects4.length = 0;
gdjs.ColorCode.GDPlayer_95951Objects5.length = 0;
gdjs.ColorCode.GDPlayer_95952Objects1.length = 0;
gdjs.ColorCode.GDPlayer_95952Objects2.length = 0;
gdjs.ColorCode.GDPlayer_95952Objects3.length = 0;
gdjs.ColorCode.GDPlayer_95952Objects4.length = 0;
gdjs.ColorCode.GDPlayer_95952Objects5.length = 0;
gdjs.ColorCode.GDBackObjects1.length = 0;
gdjs.ColorCode.GDBackObjects2.length = 0;
gdjs.ColorCode.GDBackObjects3.length = 0;
gdjs.ColorCode.GDBackObjects4.length = 0;
gdjs.ColorCode.GDBackObjects5.length = 0;
gdjs.ColorCode.GDSelector_9595BGObjects1.length = 0;
gdjs.ColorCode.GDSelector_9595BGObjects2.length = 0;
gdjs.ColorCode.GDSelector_9595BGObjects3.length = 0;
gdjs.ColorCode.GDSelector_9595BGObjects4.length = 0;
gdjs.ColorCode.GDSelector_9595BGObjects5.length = 0;
gdjs.ColorCode.GDPlayer1_9595TextObjects1.length = 0;
gdjs.ColorCode.GDPlayer1_9595TextObjects2.length = 0;
gdjs.ColorCode.GDPlayer1_9595TextObjects3.length = 0;
gdjs.ColorCode.GDPlayer1_9595TextObjects4.length = 0;
gdjs.ColorCode.GDPlayer1_9595TextObjects5.length = 0;
gdjs.ColorCode.GDP1BGObjects1.length = 0;
gdjs.ColorCode.GDP1BGObjects2.length = 0;
gdjs.ColorCode.GDP1BGObjects3.length = 0;
gdjs.ColorCode.GDP1BGObjects4.length = 0;
gdjs.ColorCode.GDP1BGObjects5.length = 0;
gdjs.ColorCode.GDPlayer2_9595TextObjects1.length = 0;
gdjs.ColorCode.GDPlayer2_9595TextObjects2.length = 0;
gdjs.ColorCode.GDPlayer2_9595TextObjects3.length = 0;
gdjs.ColorCode.GDPlayer2_9595TextObjects4.length = 0;
gdjs.ColorCode.GDPlayer2_9595TextObjects5.length = 0;
gdjs.ColorCode.GDP2BGObjects1.length = 0;
gdjs.ColorCode.GDP2BGObjects2.length = 0;
gdjs.ColorCode.GDP2BGObjects3.length = 0;
gdjs.ColorCode.GDP2BGObjects4.length = 0;
gdjs.ColorCode.GDP2BGObjects5.length = 0;
gdjs.ColorCode.GDdebug1Objects1.length = 0;
gdjs.ColorCode.GDdebug1Objects2.length = 0;
gdjs.ColorCode.GDdebug1Objects3.length = 0;
gdjs.ColorCode.GDdebug1Objects4.length = 0;
gdjs.ColorCode.GDdebug1Objects5.length = 0;
gdjs.ColorCode.GDdebug2Objects1.length = 0;
gdjs.ColorCode.GDdebug2Objects2.length = 0;
gdjs.ColorCode.GDdebug2Objects3.length = 0;
gdjs.ColorCode.GDdebug2Objects4.length = 0;
gdjs.ColorCode.GDdebug2Objects5.length = 0;
gdjs.ColorCode.GDRedObjects1.length = 0;
gdjs.ColorCode.GDRedObjects2.length = 0;
gdjs.ColorCode.GDRedObjects3.length = 0;
gdjs.ColorCode.GDRedObjects4.length = 0;
gdjs.ColorCode.GDRedObjects5.length = 0;
gdjs.ColorCode.GDBlueObjects1.length = 0;
gdjs.ColorCode.GDBlueObjects2.length = 0;
gdjs.ColorCode.GDBlueObjects3.length = 0;
gdjs.ColorCode.GDBlueObjects4.length = 0;
gdjs.ColorCode.GDBlueObjects5.length = 0;
gdjs.ColorCode.GDGreenObjects1.length = 0;
gdjs.ColorCode.GDGreenObjects2.length = 0;
gdjs.ColorCode.GDGreenObjects3.length = 0;
gdjs.ColorCode.GDGreenObjects4.length = 0;
gdjs.ColorCode.GDGreenObjects5.length = 0;
gdjs.ColorCode.GDYellowObjects1.length = 0;
gdjs.ColorCode.GDYellowObjects2.length = 0;
gdjs.ColorCode.GDYellowObjects3.length = 0;
gdjs.ColorCode.GDYellowObjects4.length = 0;
gdjs.ColorCode.GDYellowObjects5.length = 0;
gdjs.ColorCode.GDPurpleObjects1.length = 0;
gdjs.ColorCode.GDPurpleObjects2.length = 0;
gdjs.ColorCode.GDPurpleObjects3.length = 0;
gdjs.ColorCode.GDPurpleObjects4.length = 0;
gdjs.ColorCode.GDPurpleObjects5.length = 0;
gdjs.ColorCode.GDCyanObjects1.length = 0;
gdjs.ColorCode.GDCyanObjects2.length = 0;
gdjs.ColorCode.GDCyanObjects3.length = 0;
gdjs.ColorCode.GDCyanObjects4.length = 0;
gdjs.ColorCode.GDCyanObjects5.length = 0;
gdjs.ColorCode.GDCustomObjects1.length = 0;
gdjs.ColorCode.GDCustomObjects2.length = 0;
gdjs.ColorCode.GDCustomObjects3.length = 0;
gdjs.ColorCode.GDCustomObjects4.length = 0;
gdjs.ColorCode.GDCustomObjects5.length = 0;
gdjs.ColorCode.GDCRTCoverObjects1.length = 0;
gdjs.ColorCode.GDCRTCoverObjects2.length = 0;
gdjs.ColorCode.GDCRTCoverObjects3.length = 0;
gdjs.ColorCode.GDCRTCoverObjects4.length = 0;
gdjs.ColorCode.GDCRTCoverObjects5.length = 0;
gdjs.ColorCode.GDLineLightJoystickObjects1.length = 0;
gdjs.ColorCode.GDLineLightJoystickObjects2.length = 0;
gdjs.ColorCode.GDLineLightJoystickObjects3.length = 0;
gdjs.ColorCode.GDLineLightJoystickObjects4.length = 0;
gdjs.ColorCode.GDLineLightJoystickObjects5.length = 0;

gdjs.ColorCode.eventsList21(runtimeScene);
gdjs.ColorCode.GDPlayer_95951Objects1.length = 0;
gdjs.ColorCode.GDPlayer_95951Objects2.length = 0;
gdjs.ColorCode.GDPlayer_95951Objects3.length = 0;
gdjs.ColorCode.GDPlayer_95951Objects4.length = 0;
gdjs.ColorCode.GDPlayer_95951Objects5.length = 0;
gdjs.ColorCode.GDPlayer_95952Objects1.length = 0;
gdjs.ColorCode.GDPlayer_95952Objects2.length = 0;
gdjs.ColorCode.GDPlayer_95952Objects3.length = 0;
gdjs.ColorCode.GDPlayer_95952Objects4.length = 0;
gdjs.ColorCode.GDPlayer_95952Objects5.length = 0;
gdjs.ColorCode.GDBackObjects1.length = 0;
gdjs.ColorCode.GDBackObjects2.length = 0;
gdjs.ColorCode.GDBackObjects3.length = 0;
gdjs.ColorCode.GDBackObjects4.length = 0;
gdjs.ColorCode.GDBackObjects5.length = 0;
gdjs.ColorCode.GDSelector_9595BGObjects1.length = 0;
gdjs.ColorCode.GDSelector_9595BGObjects2.length = 0;
gdjs.ColorCode.GDSelector_9595BGObjects3.length = 0;
gdjs.ColorCode.GDSelector_9595BGObjects4.length = 0;
gdjs.ColorCode.GDSelector_9595BGObjects5.length = 0;
gdjs.ColorCode.GDPlayer1_9595TextObjects1.length = 0;
gdjs.ColorCode.GDPlayer1_9595TextObjects2.length = 0;
gdjs.ColorCode.GDPlayer1_9595TextObjects3.length = 0;
gdjs.ColorCode.GDPlayer1_9595TextObjects4.length = 0;
gdjs.ColorCode.GDPlayer1_9595TextObjects5.length = 0;
gdjs.ColorCode.GDP1BGObjects1.length = 0;
gdjs.ColorCode.GDP1BGObjects2.length = 0;
gdjs.ColorCode.GDP1BGObjects3.length = 0;
gdjs.ColorCode.GDP1BGObjects4.length = 0;
gdjs.ColorCode.GDP1BGObjects5.length = 0;
gdjs.ColorCode.GDPlayer2_9595TextObjects1.length = 0;
gdjs.ColorCode.GDPlayer2_9595TextObjects2.length = 0;
gdjs.ColorCode.GDPlayer2_9595TextObjects3.length = 0;
gdjs.ColorCode.GDPlayer2_9595TextObjects4.length = 0;
gdjs.ColorCode.GDPlayer2_9595TextObjects5.length = 0;
gdjs.ColorCode.GDP2BGObjects1.length = 0;
gdjs.ColorCode.GDP2BGObjects2.length = 0;
gdjs.ColorCode.GDP2BGObjects3.length = 0;
gdjs.ColorCode.GDP2BGObjects4.length = 0;
gdjs.ColorCode.GDP2BGObjects5.length = 0;
gdjs.ColorCode.GDdebug1Objects1.length = 0;
gdjs.ColorCode.GDdebug1Objects2.length = 0;
gdjs.ColorCode.GDdebug1Objects3.length = 0;
gdjs.ColorCode.GDdebug1Objects4.length = 0;
gdjs.ColorCode.GDdebug1Objects5.length = 0;
gdjs.ColorCode.GDdebug2Objects1.length = 0;
gdjs.ColorCode.GDdebug2Objects2.length = 0;
gdjs.ColorCode.GDdebug2Objects3.length = 0;
gdjs.ColorCode.GDdebug2Objects4.length = 0;
gdjs.ColorCode.GDdebug2Objects5.length = 0;
gdjs.ColorCode.GDRedObjects1.length = 0;
gdjs.ColorCode.GDRedObjects2.length = 0;
gdjs.ColorCode.GDRedObjects3.length = 0;
gdjs.ColorCode.GDRedObjects4.length = 0;
gdjs.ColorCode.GDRedObjects5.length = 0;
gdjs.ColorCode.GDBlueObjects1.length = 0;
gdjs.ColorCode.GDBlueObjects2.length = 0;
gdjs.ColorCode.GDBlueObjects3.length = 0;
gdjs.ColorCode.GDBlueObjects4.length = 0;
gdjs.ColorCode.GDBlueObjects5.length = 0;
gdjs.ColorCode.GDGreenObjects1.length = 0;
gdjs.ColorCode.GDGreenObjects2.length = 0;
gdjs.ColorCode.GDGreenObjects3.length = 0;
gdjs.ColorCode.GDGreenObjects4.length = 0;
gdjs.ColorCode.GDGreenObjects5.length = 0;
gdjs.ColorCode.GDYellowObjects1.length = 0;
gdjs.ColorCode.GDYellowObjects2.length = 0;
gdjs.ColorCode.GDYellowObjects3.length = 0;
gdjs.ColorCode.GDYellowObjects4.length = 0;
gdjs.ColorCode.GDYellowObjects5.length = 0;
gdjs.ColorCode.GDPurpleObjects1.length = 0;
gdjs.ColorCode.GDPurpleObjects2.length = 0;
gdjs.ColorCode.GDPurpleObjects3.length = 0;
gdjs.ColorCode.GDPurpleObjects4.length = 0;
gdjs.ColorCode.GDPurpleObjects5.length = 0;
gdjs.ColorCode.GDCyanObjects1.length = 0;
gdjs.ColorCode.GDCyanObjects2.length = 0;
gdjs.ColorCode.GDCyanObjects3.length = 0;
gdjs.ColorCode.GDCyanObjects4.length = 0;
gdjs.ColorCode.GDCyanObjects5.length = 0;
gdjs.ColorCode.GDCustomObjects1.length = 0;
gdjs.ColorCode.GDCustomObjects2.length = 0;
gdjs.ColorCode.GDCustomObjects3.length = 0;
gdjs.ColorCode.GDCustomObjects4.length = 0;
gdjs.ColorCode.GDCustomObjects5.length = 0;
gdjs.ColorCode.GDCRTCoverObjects1.length = 0;
gdjs.ColorCode.GDCRTCoverObjects2.length = 0;
gdjs.ColorCode.GDCRTCoverObjects3.length = 0;
gdjs.ColorCode.GDCRTCoverObjects4.length = 0;
gdjs.ColorCode.GDCRTCoverObjects5.length = 0;
gdjs.ColorCode.GDLineLightJoystickObjects1.length = 0;
gdjs.ColorCode.GDLineLightJoystickObjects2.length = 0;
gdjs.ColorCode.GDLineLightJoystickObjects3.length = 0;
gdjs.ColorCode.GDLineLightJoystickObjects4.length = 0;
gdjs.ColorCode.GDLineLightJoystickObjects5.length = 0;


return;

}

gdjs['ColorCode'] = gdjs.ColorCode;
