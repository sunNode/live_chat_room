/*!live-0.0.0.js 2016-06-15*/
!function(){window.CHAT={logout:function(){location.reload()},submit:function(){var a=$("#gundonggonggao").val();if(""!=a){var b={gonggao:a};this.socket.emit("fabugonggao",b)}return!1},handansubmit:function(){if(""!=content){var a={dkqs:$("#dkqs").val(),kcdw:$("#kcdw").val(),pcdw:$("#pcdw").val(),zsdw:$("#zsdw").val(),zydw:$("#zydw").val(),bz:$("#bz").val(),hduser:$("#username").text(),hdtime:$("#hdtime").val()};this.socket.emit("fabuhandan",a)}return!1},init:function(){this.socket=io.connect("ws://139.196.203.21:3000")}}}();