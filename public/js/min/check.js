/*!live-0.0.0.js 2016-06-15*/
function Check_HK(){Check_Info=$.extend(!0,{},iInfo),Check_Sys=$.extend(!0,{},_SysConfig),setInterval(function(){var a=!0;for(var b in Check_Info)Check_Info[b]!=iInfo[b]&&"IsPublishing"!=b&&(a=!1);for(var b in _SysConfig)_SysConfig[b]!=Check_Sys[b]&&(a=!1);0==a&&(location.href="/"+iRoomID)},1e3)}var Check_Info,Check_Sys,Check_Interval;