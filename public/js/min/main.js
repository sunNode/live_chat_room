/*!live-0.0.0.js 2016-06-15*/
function PriQuickReply(){if(0==_Config.QuickReply_Show){if(0==iInfo.IsManager)return;$("#QuickReply_Div").show(),$("#QR_Name").val(""),$("#Y_iSend_InputNew").val(""),_Config.QuickReply_Show=!0}else $("#QuickReply_Div").hide(),_Config.QuickReply_Show=!1}function QuickReplyN(a,b,c){if(0!=iInfo.IsManager&&b.length>0){var d={};d.Type="QuickReply_Msg",d.ReceiveRID=iInfo.Live_NG_ID,d.PostUName=escape(a),d.Msg=escape(b),d.RoleID=escape(c),PostMsg(d),$("#QuickReply_Div").hide()}}function ShowFaceListNew(a){"none"==$("#Faces").css("display")?($("#Faces").css({display:"block",top:$(a).offset().top-$("#Faces").height()-90,left:$(a).offset().left-100}),$(document).bind("mouseup",function(b){"1"!=$(b.target).attr("isface")&&"2"!=$(b.target).attr("isface")?($("#Faces").css("display","none"),$(document).unbind("mouseup")):"1"==$(b.target).attr("isface")&&$("#"+$(a).attr("to")).insertAtCaret("/"+$(b.target).attr("title"))})):$("#Faces").css({display:"none"})}function InsertMsgPicNew(a){$("#Y_iSend_InputNew").insertAtCaret("[img="+a+"]")}function InitUI(){$("#Y_iSend_Input").setCaret(),InitScrollbar(),InitHandler(),InitVolumeSilder(),PrivatePopLeft_Li_Click()}function InitScrollbar(){_Config.isIE6}function InitHandler(){$("#Y_MsgSplit").mousedown(function(a){var b=$(this).offset(),c=a.pageY-b.top,d=$("#Y_PubMes_Div"),e=$("#Y_PriMes_Div"),f=d.height(),g=e.height(),h=$(this).position().top;$("body")[0].onselectstart=function(){return!1},$("body").addClass("NoSelect"),$(document).bind("mousemove",function(a){var i=a.pageY-c-b.top;return 100>f+i||45>g-i?!1:(d.height(f+i),e.height(g-i),void $(this).css("top",h+i))}),$(document).bind("mouseup",function(a){d.mCustomScrollbar("update"),e.mCustomScrollbar("update"),$(document).unbind("mousemove"),$("body")[0].onselectstart=function(){},$("body").removeClass("NoSelect")})}),$("#Y_Mes_Resize").mousedown(function(a){var b=$(this).offset(),c=a.pageY-b.top,d=$("#Y_PubMes_Div"),e=d.height(),f=$(".Y_iMessage"),g=f.height();$("body")[0].onselectstart=function(){return!1},$("body").addClass("NoSelect"),$(document).bind("mousemove",function(a){var h=a.pageY-c-b.top;return 100>e+h?!1:(f.height(g+h),void d.height(e+h))}),$(document).bind("mouseup",function(a){d.mCustomScrollbar("update"),$(document).unbind("mousemove"),$("body")[0].onselectstart=function(){},$("body").removeClass("NoSelect")})});var a=$("#Y_ManageMenu");a.mouseover(function(){$(this).css("display","block")}),a.mouseout(function(){$(this).css("display","none")}),$(".MessageTabBox span").click(function(){if("n"!=$(this).attr("t")){$(".MessageTabBox span.on").removeClass("on"),$(this).addClass("on");var a=$(this).attr("t");if(!$("#Mes_Tab"+a).hasClass("Mes_Tab_On")){$(".Y_iMessage .Mes_Tab_On").removeClass("Mes_Tab_On"),$("#Mes_Tab"+a).addClass("Mes_Tab_On");try{"1"!=a&&$("#Mes_Tab"+a+" iframe")[0].contentWindow.on()}catch(b){}}}})}function User_List_Li_On_MouseEnter(a){var b=$(a),c=$("#Y_User_List").width()+$(".Y_Main").offset().left-1,d=b.offset().top-87,e=b.attr("id"),f=$("#User_Card_List");f.find("div.on").attr("id")!=e?f.find("div.on").removeClass("on"):"","0"!=String(b.attr("power"))&&(0==f.find("#User_Card_"+e).length?$.get("/Handle/GetUserCard.asp",{UID:e},function(a){f.append(a),f.find("#User_Card_"+e).css({top:d,left:c}).addClass("on"),f.find("#User_Card_"+e).on("mouseenter",function(){clearTimeout(_Config.Card_TimeOut)}).on("mouseleave",function(){clearTimeout(_Config.Card_TimeOut),f.find("div.on").removeClass("on")})}):f.find("#User_Card_"+e).css({top:d,left:c}).addClass("on"))}function User_List_Li_On_MouseLeave(a){if("0"!=String($(a).attr("power"))){clearTimeout(_Config.Card_TimeOut);var b=$(a).attr("id"),c=$("#User_Card_List");_Config.Card_TimeOut=setTimeout(function(){c.find("#User_Card_"+b).removeClass("on")},1500)}}function View_Info(){var a=$("#User_Card");if(isNaN(_Config.MenuCurrentUID)){var b=UserListArr[GetUserFromArray(_Config.MenuCurrentUID)],c=$.format(_FormatStr.GuestUserCard,unescape(b.UserNickName),b.Remote.split(":")[0]);a.show(),a.html(c),$("#Y_ManageMenu").hide();try{console.log(b)}catch(d){}return void $.get("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip="+b.Remote.split(":")[0],{},function(){$(".Base_Area").html(unescape(remote_ip_info.country)+"，"+unescape(remote_ip_info.province)+"，"+unescape(remote_ip_info.city))},"script")}a.show(),$.get("/Handle/GetUserCard.asp",{UID:_Config.MenuCurrentUID},function(b){a.html(b)}),$("#Y_ManageMenu").hide()}function User_Crad_Close(){var a=$("#User_Card");a.hide(),a.html("")}function iFrameToolsAnimate(){0!=_Config.iFrameTools_Animate&&($("#Y_iFrame_Height").mouseover(function(){clearTimeout(_Config.iFrame_TimeOut),$("#Y_iFrame_Tools_Div").animate({top:-4,opacity:1},200)}),$("#Y_iFrame_Height").mouseout(function(){_Config.iFrame_TimeOut=setTimeout(function(){$("#Y_iFrame_Tools_Div").animate({top:-24,opacity:0},200)},1e3)}))}function UpdateScrollbar(){$("#Y_User_List").mCustomScrollbar("update")}function InitVolumeSilder(){$(".GlobalUsVolume").slider({orientation:"vertical",range:"min",min:0,max:100,value:_Config.USVolume,slide:function(a,b){var c=$("#Y_Global_Sound_Volume span");SetSoundVolume(b.value),0==b.value?c.addClass("GlobalSilent"):c.removeClass("GlobalSilent"),c.attr({oldvolume:b.value})}}),$(".GlobalUsMic").slider({orientation:"vertical",range:"min",min:0,max:70,value:_Config.MicGain,slide:function(a,b){var c=$("#Y_Global_Mic_Volume span");SetMicVolume(b.value),0==b.value?c.addClass("GlobalSilent"):c.removeClass("GlobalSilent"),c.attr({oldvolume:b.value})}})}function EnableUI(){}function TalkTypeHandler(){if(0!=CheckSpeakPower_UI()){var a=$("#Y_Global_Speak_Model");"1"==a.attr("t")?(a.attr({t:"2"}),a.text("自由发言"),ChangeTalkType(2)):"2"==a.attr("t")&&(a.attr({t:"1"}),a.text("按F2说话"),ChangeTalkType(1))}}function ChangeTalkTypeHandler(a){var b=$("#Y_Global_Speak_Model");2==a?(b.attr({t:"2"}),b.text("自由发言"),ChangeTalkType(2)):1==a&&(b.attr({t:"1"}),b.text("按F2说话"),ChangeTalkType(1))}function Live_StartpPublish(a){if(iInfo.IsManager||iInfo.IsZber){var b=$("#Y_Global_Speak_Model");"2"==b.attr("t")&&(iTip("您正在发布视频直播！<br>系统自动将您【<font color=red>左下角</font>】的语音功能设置为【<font color=red>按F2说话</font>】！<br>请您在视频直播结束后，自行调整发言模式！",null,1e4,!0),b.attr({t:"1"}),b.text("按F2说话"),ChangeTalkType(1)),$.get("/Handle/SetRoomCurrentLiveUID.asp",{ac:"SetRoomCurrentLiveUID",rid:iRoomID,livename:a},function(){if(1==Re){var b='<li class="notice"><span class="t">'+GetSendTime()+' </span><span class="gary"><label class="ioslivename">您的手机端直播名称为：<font color=red>'+a+"?adbe-live-event=liveevent</font></label></span></li>";$("#Y_PriMes_Div ul").append(b),$("#Y_PriMes_Div").mCustomScrollbar("update"),$("#Y_PriMes_Div").mCustomScrollbar("scrollTo","bottom");var c={};c.Type="CMD_CurrentLive",c.ReceiveRID=iInfo.Live_NG_ID,c.UID=iInfo.UserID,c.NickName=iInfo.UserNickName,c.WapPubName=a,PostMsg(c)}else iTip(Re)},"script")}}function PostMsgSubmit(){if(0==_Config.SwfLoaded)return void iTip("服务器正在连接中，请耐心等待！");if(0==iInfo.IsManager){if($("#Y_iSend_Private").hasClass("PrivateMsgChecked")&&0==_SysConfig.OpenPrivateMsg&&!iInfo.IsManager)if(1==CheckTempCustomer(_Config.ToPersonUID)||_Config.ToPersonUID.toString()==iInfo.SaleID);else if(_Config.MenuCurrentPower<1e3)return void iTip(0==iInfo.UserType?"您当前只能与管理员 和 您的专属客户 私聊！":"您当前只能与管理员 和 您的专属客服 私聊！");if(!CheckPowerKeys(iInfo.RoomRolePowerKeys,"b4afda38dec3dca04661b7c785a44322"))return void iTip("您没有文字发言权限！")}if(0==MsgSpaceTime){var a=$("#Y_iSend_Input");return""==a.val()?void iTip("请输入内容！"):(MsgSpaceTime=!0,$("#Y_iSend_BtSpan").addClass("Y_iSend_BtSpan_Gray"),AutoPostMsg(a),setTimeout(function(){$("#Y_iSend_BtSpan").removeClass("Y_iSend_BtSpan_Gray"),MsgSpaceTime=!1},1e3*_SysConfig.MsgSpaceTime),1==_SysConfig.CheckMsg&&(iInfo.IsManager||$("#Y_iSend_Private").hasClass("PrivateMsgChecked")||1==_SysConfig.ShowCheckMsg&&iTip("当前房间设置信息需要审核，您的信息已经提交给房间管理员进行审核...")),void 0)}}function LinkLayerClick(a){var b={};if(b.uid=$(a).attr("uid"),b.uname=$(a).attr("uname"),b.power=$(a).attr("power"),b.RoleStyle=$(a).attr("RoleStyle"),b.ZberStyle=$(a).attr("ZberStyle"),b.RoomRoleStyle=$(a).attr("RoomRoleStyle"),b.RoomRoleTitle=$(a).attr("RoomRoleTitle"),b.uid!=iInfo.UserID){iInfo.IsManager||$(".MangeMenu").hide(),1==iInfo.UserType&&$(".SaleMenu").hide(),$(".Page").height()-$(a).offset().top>240?$("#Y_ManageMenu").css({display:"block",top:$(a).offset().top-36,left:$(a).offset().left-$("#Y_ManageMenu").width()/2-3}):$("#Y_ManageMenu").css({display:"block",top:$(a).offset().top-$("#Y_ManageMenu").height()-55,left:$(a).offset().left-$("#Y_ManageMenu").width()/2-3});var b={};b.UID=$(a).attr("uid"),b.Uname=$(a).attr("uname"),b.Power=Number($(a).attr("power")),b.RoleStyle=$(a).attr("rolestyle"),b.RoleTitle=$(a).attr("roletitle"),b.ZberStyle=$(a).attr("zberstyle"),b.RoomRoleStyle=$(a).attr("roomrolestyle"),b.RoomRoleTitle=$(a).attr("roomroletitle"),SetMenuCurrent(b),$(document).bind("mouseup",function(a){$("#Y_ManageMenu").css("display","none"),$(document).unbind("mouseup")})}}function RemovePrivatePerson(a){var b={};b.uid=0,b.uname="",b.RoleStyle="",b.RoleTitle="",b.ZberStyle="",b.RoomRoleStyle="",b.RoomRoleTitle="",$("#PrivatePerson span").attr("uid",b.uid),$("#PrivatePerson span").text("所有人"),$("#RemovePrivatePerson").css({display:"none"}),$("#Y_iSend_Private").removeClass("PrivateMsgChecked"),SetToPerson(b)}function SearchPerson(){var a=$("#SearchKey")[0].value;""==a||"搜索"==a?$('#Y_User_List li[id!="MoreUserlist"]').show():$('#Y_User_List li[id!="MoreUserlist"]').hide(),$("#"+a).show(),$("#Y_User_List li[id*='"+a+"']").show(),$("#Y_User_List li[uname*='"+a+"']").show(),$("#Y_User_List").mCustomScrollbar("update")}function ShowManager(){UserListMode=0,ShowListAnimate(0),$('#Y_User_List  li[id!="MoreUserlist"]').hide(),$('#Y_User_List  li[id!="MoreUserlist"]').each(function(){Number($(this).attr("Power"))>999&&$(this).show()}),$("#Y_User_List").mCustomScrollbar("update")}function ShowUserList(){UserListMode=1,ShowListAnimate(0)}function ShowCustomer(){UserListMode=2,ShowListAnimate(0),$('#Y_User_List  li[id!="MoreUserlist"]').hide(),$('#Y_User_List  li[id!="MoreUserlist"]').each(function(){Number($(this).attr("CustomerType"))>-1&&$(this).show()}),$("#Y_User_List").mCustomScrollbar("update")}function ShowModelList(){"none"==$(".ModelList").css("display")?($(".ModelList").css({display:"block"}),$(document).bind("mouseup",function(a){"ModelButtonList"!=$(a.target).attr("class")&&($(".ModelList").css("display","none"),$(document).unbind("mouseup"))})):$(".ModelList").css({display:"none"})}function ChangeModeTypeHandler(a){if($(".ModelList").css({display:"none"}),!iInfo.IsManager)return void iTip("您无权修改发言模式！");if($("#ModelButton .Button").text($(a).text()),_Config.ModeType!=$(a).attr("mt")){var b=$(a).attr("mt");Post_MM_Change(b)}}function PubClear(){$("#Y_PubMes_Div ul").html(""),$("#Y_PubMes_Div").mCustomScrollbar("update")}function PriClear(){$("#Y_PriMes_Div ul").html(""),$("#Y_PriMes_Div").mCustomScrollbar("update")}function PubScroll(a){$(a).find("span").hasClass("noscroll")?($(a).find("span").removeClass("noscroll"),_Config.Pub_isScroll=!0):($(a).find("span").addClass("noscroll"),_Config.Pub_isScroll=!1)}function PriScroll(a){$(a).find("span").hasClass("noscroll")?($(a).find("span").removeClass("noscroll"),_Config.Pri_isScroll=!0):($(a).find("span").addClass("noscroll"),_Config.Pri_isScroll=!1)}function PriHide(a){$(a).find("span").hasClass("hide")?($(a).find("span").removeClass("hide"),$("#Y_MsgSplit").css({display:"block"}),$("#Y_PriMes_Div").css({display:"block"}),$("#Y_pri_Tools a:eq(0)").css({display:"block"}),$("#Y_pri_Tools a:eq(1)").css({display:"block"}),$("#Y_pri_Tools a:eq(4) span").text("隐藏"),$("#Y_PubMes_Div").css({height:$(".Y_iMessage").height()-10-$("#Y_MsgSplit").height()-$("#Y_PriMes_Div").height()-$("#Y_Scroll").height()-5}).mCustomScrollbar("update")):($(a).find("span").addClass("hide"),$("#Y_MsgSplit").css({display:"none"}),$("#Y_PriMes_Div").css({display:"none"}),$("#Y_pri_Tools a:eq(0)").css({display:"none"}),$("#Y_pri_Tools a:eq(1)").css({display:"none"}),$("#Y_pri_Tools a:eq(4) span").text("展开"),$("#Y_PubMes_Div").css({height:$(".Y_iMessage").height()-10-$("#Y_Scroll").height()-5}).mCustomScrollbar("update"))}function iFrameHide(a){"隐藏"==$(a).text()?($("#Y_iFrame_Height").css({display:"none"}),$(a).text("显示").removeClass("hide"),$(".Y_iMessage").css({height:$(".Y_iMessage").height()+160}),$("#Y_PubMes_Div").css({height:$("#Y_PubMes_Div").height()+160}).mCustomScrollbar("update")):($("#Y_iFrame_Height").css({display:"block"}),$(a).text("隐藏").addClass("hide"),$(".Y_iMessage").css({height:$(".Y_iMessage").height()-160}),$("#Y_PubMes_Div").css({height:$("#Y_PubMes_Div").height()-160}).mCustomScrollbar("update"))}function UBase_Over(a){$(a).addClass("on")}function UBase_Out(a){$(a).parent().hasClass("t")||$(a).removeClass("on")}function UBase_Click(a){var b=$(a).parent();return b.hasClass("t")?(b.removeClass("t").find(".UShowPannel").animate({height:0,opacity:0},500,function(){UpdateScrollbar()}),void $(a).removeClass("on")):(US_Hide(a),$(a).addClass("on"),void b.addClass("t").find(".UShowPannel").animate({height:_Config.USList_Height,opacity:1},500,function(){UpdateScrollbar()}))}function Say_To(){$("#Y_ManageMenu").hide();var a={};a.uid=_Config.MenuCurrentUID,a.uname=_Config.MenuCurrentUname,a.power=_Config.MenuCurrentPower,a.RoleStyle=_Config.MenuCurrentRoleStyle,a.RoleTitle=_Config.MenuCurrentRoleTitle,a.ZberStyle=_Config.MenuCurrentZberStyle,a.RoomRoleStyle=_Config.MenuCurrentRoomRoleStyle,a.RoomRoleTitle=_Config.MenuCurrentRoomRoleTitle,a.uid!=iInfo.UserID&&($("#PrivatePerson span").attr("uid",a.uid),$("#PrivatePerson span").text(a.uname),$("#RemovePrivatePerson").css({display:"block"}),SetToPerson(a))}function Private_To(){$("#Y_ManageMenu").hide();var a={};a.uid=_Config.MenuCurrentUID,a.uname=_Config.MenuCurrentUname,a.power=_Config.MenuCurrentPower,a.RoleStyle=_Config.MenuCurrentRoleStyle,a.RoleTitle=_Config.MenuCurrentRoleTitle,a.ZberStyle=_Config.MenuCurrentZberStyle,a.RoomRoleStyle=_Config.MenuCurrentRoomRoleStyle,a.RoomRoleTitle=_Config.MenuCurrentRoomRoleTitle,a.uid!=iInfo.UserID&&(SetToPerson(a),CheckPrivateMsg($("#Y_iSend_Private")))}function US_Hide(a){$(a).parent().parent().find("li.t").find(".UBase").removeClass("on"),$(a).parent().parent().find("li.t").removeClass("t").find(".UShowPannel").animate({height:0,opacity:0},500)}function Silent(a){""==$(a).attr("oldvolume")&&$(a).attr({oldvolume:$(a).next().slider("value")}),$(a).hasClass("Silent")?($(a).next().slider("value",$(a).attr("oldvolume")),$(a).removeClass("Silent")):($(a).attr({oldvolume:$(a).next().slider("value")}),$(a).next().slider("value",0),$(a).addClass("Silent"))}function GlobalSpeakerSilent(a){""==$(a).attr("oldvolume")&&$(a).attr({oldvolume:$("#GlobalUsVolume").slider("value")});var b=$("#GlobalUsVolume");$(a).hasClass("GlobalSilent")?(b.slider("value",$(a).attr("oldvolume")),$(a).removeClass("GlobalSilent")):($(a).attr({oldvolume:b.slider("value")}),b.slider("value",0),$(a).addClass("GlobalSilent")),SetSoundVolume(b.slider("value"))}function GlobalMicSilent(a){if(0!=CheckSpeakPower_UI()){""==$(a).attr("oldvolume")&&$(a).attr({oldvolume:$("#GlobalUsMic").slider("value")});var b=$("#GlobalUsMic");$(a).hasClass("GlobalSilent")?(b.slider("value",$(a).attr("oldvolume")),$(a).removeClass("GlobalSilent")):($(a).attr({oldvolume:b.slider("value")}),b.slider("value",0),$(a).addClass("GlobalSilent")),SetMicVolume(b.slider("value"))}}function GlobalMicMuted(a){var b=$("#Y_Global_Mic_Volume span");""==$(b).attr("oldvolume")&&$(b).attr({oldvolume:$("#GlobalUsMic").slider("value")});var c=$("#GlobalUsMic");a?(c.slider("value",$(b).attr("oldvolume")),$(b).removeClass("GlobalSilent")):($(b).attr({oldvolume:c.slider("value")}),c.slider("value",0),$(b).addClass("GlobalSilent")),SetMicVolume(c.slider("value"))}function ShowListAnimate(a){$('#Y_User_List  li[id!="MoreUserlist"]').show(),$("#Y_User_List").mCustomScrollbar("update"),$("#Y_List").animate({left:a},300)}function ShowFaceList(a){"none"==$("#Faces").css("display")?($("#Faces").css({display:"block",top:$(a).offset().top-$("#Faces").height(),left:$(a).offset().left}),$(document).bind("mouseup",function(b){"1"!=$(b.target).attr("isface")&&"2"!=$(b.target).attr("isface")?($("#Faces").css("display","none"),$(document).unbind("mouseup")):"1"==$(b.target).attr("isface")&&$("#"+$(a).attr("to")).insertAtCaret("/"+$(b.target).attr("title"))})):$("#Faces").css({display:"none"})}function InsertMsgPic(a){$("#Y_iSend_Input").insertAtCaret("[img="+a+"]")}function CheckPrivateMsg(a){return 0==_SysConfig.OpenPrivateMsg&&!iInfo.IsManager&&_Config.MenuCurrentPower<1e3?void iTip("您当前只能与管理员私聊！"):void(0!=_Config.ToPersonUID&&($(a).hasClass("PrivateMsgChecked")?($(a).removeClass("PrivateMsgChecked"),_Config.PrivateChecked=!1):($(a).addClass("PrivateMsgChecked"),_Config.PrivateChecked=!0)))}function ManageLink_Over(a){iInfo.IsManager||$(".MangeMenu").hide(),1==iInfo.UserType&&$(".SaleMenu").hide(),$(".Page").height()-$(a).offset().top>240?$("#Y_ManageMenu").css({display:"block",top:$(a).offset().top-36,left:$(a).offset().left-$("#Y_ManageMenu").width()/2-3}):$("#Y_ManageMenu").css({display:"block",top:$(a).offset().top-$("#Y_ManageMenu").height()-55,left:$(a).offset().left-$("#Y_ManageMenu").width()/2-3});var b=$(a).parent().parent().parent(),c={};c.UID=b.attr("id"),c.Uname=b.attr("uname"),c.UPic=b.find(".US_Pic").attr("src"),c.Power=Number(b.attr("power")),c.RoleStyle=b.attr("rolestyle"),c.RoleTitle=b.attr("roletitle"),c.ZberStyle=b.attr("zberstyle"),c.RoomRoleStyle=b.attr("roomrolestyle"),c.RoomRoleTitle=b.attr("roomroletitle"),SetMenuCurrent(c)}function ManageLink_Out(a){$("#Y_ManageMenu").css({display:"none"})}function getOnlineNum(){$("#RoomOnline").text($("#User_List li").length)}function iTip(a,b,c,d){$(".qtip.jgrowl:visible:last");$("<div/>").qtip({content:{text:a,title:{text:b?b:"提示",button:d?d:!1}},position:{my:"center",at:"center",container:$("#qtip-growl-container")},show:{event:!1,ready:!0,effect:function(){$(this).stop(0,1).animate({height:"toggle"},400,"swing")},delay:0},hide:{event:!1,effect:function(a){$(this).stop(0,1).animate({height:"toggle"},400,"swing")}},style:{width:500,classes:"qtip-dark",tip:!1},events:{render:function(a,b){b.options.show.persistent||$(this).bind("mouseover mouseout",function(a){var d=c?c:5e3;clearTimeout(b.timer),"mouseover"!==a.type&&(b.timer=setTimeout(function(){b.hide(a)},d))}).triggerHandler("mouseout")}}})}function ChangeSkin(a){$("#T_SkinCss")[0].href=a+"?"+getDataTimes()}function Page_Height(){$(".Page").height($(window).height()-45-5)}function Main_Height(){$(".Y_Main").height($(".Page").height()-12)}function RightList_Init_Height(){$(".Y_Right_List").height($(".Page").height()-$("#LiveDiv").height()-12)}function RightList_Height(){var a=$("#LiveDiv").height();"absolute"==$("#LiveDiv").css("position")&&(a=0),$(".Y_Right_List").height($(".Page").height()-a-12),$(".Y_Right_List").mCustomScrollbar("update")}function iMessage_Height(){$(".Y_iMessage").height($(".Y_Middle").height()-75)}function PubMes_Height(){$("#Y_PubMes_Div").height($(".Y_iMessage").height()-$("#Y_PriMes_Div").height()-15-$("#Y_Scroll").height()-5)}function UserList_Init_Height(){$("#Y_List").height($(".Y_Left").height()-54-43-$("#Y_Left_Models").height()-2),$("#Y_List>div").height($(".Y_Left").height()-54-43-$("#Y_Left_Models").height()-2)}function Userlist_Height(){var a=_Config.ModeType;"3"==String(a)?($("#Y_List").height($(".Y_Left").height()-54-43-$("#Y_Left_Models").height()-160),$("#Y_List>div").height($(".Y_Left").height()-54-43-$("#Y_Left_Models").height()-160),$("#Y_User_List").mCustomScrollbar("update"),$("#Y_Friend_List").mCustomScrollbar("update")):($("#Y_List").height($(".Y_Left").height()-54-43-$("#Y_Left_Models").height()-2),$("#Y_List>div").height($(".Y_Left").height()-54-43-$("#Y_Left_Models").height()-2),$("#Y_User_List").mCustomScrollbar("update"),$("#Y_Friend_List").mCustomScrollbar("update"))}function Spread_Height(){var a=$("#Y_Quotation").height()+25||0,b=$("#Y_Position").height()+5||0,c=$("#Y_Doc").height()+5||0,d=$("#Y_Gift").height()+5||0;$("#Y_Spread_List").height($(".Y_Show").height()-a-b-c-d-20),$("#Y_Spread_List a img").height($(".Y_Show").height()-a-b-c-d-20)}function HideLeft(){var a="right"==$(".Y_Right").css("float");0==_RightWidth&&(_RightWidth=$(".Y_Right").width()),_HideLeft=a?"0px"==$(".Y_Left").css("margin-left"):"0px"==$(".Y_Left").css("margin-right"),1==_HideLeft?(a?$(".Y_Left").stop(0,1).show().animate({"margin-left":-291},600):$(".Y_Left").stop(0,1).show().animate({"margin-right":-291},600),$(".Y_Right").stop(0,1).css({overflow:"visible"}).animate({width:480},600)):(a?$(".Y_Left").stop(0,1).animate({"margin-left":0},600):$(".Y_Left").stop(0,1).show().animate({"margin-right":0},600,function(){this.hide()}),$(".Y_Right").stop(0,1).animate({width:_RightWidth},600)),_HideLeft=1!=_HideLeft}function RollOut(a){if(1==iInfo.IsManager){var b={};b.Type="CMD_RollOut",b.ReceiveRID=iInfo.Live_NG_ID,b.RollOutRoomID=a,PostMsg(b),FancyBoxClose()}}function FlyMsg(a){if(0!=iInfo.IsManager)if(a.length>0){var b={};b.Type="Fly_Msg",b.ReceiveRID=iInfo.Live_NG_ID,b.PostUName=escape(iInfo.UserNickName),b.Msg=escape(a),PostMsg(b),FancyBoxClose()}else iTip("飞屏字数不能为0！")}function StartLiveCast(a){1==iInfo.IsManager&&$.get("/Handle/SetLiveCast.asp",{ac:"StartLiveCast",RID:iRoomID,LiveCastRID:a},function(){if(1==LiveCast){var b={};b.Type="CMD_LiveCast",b.ReceiveRID=iInfo.Live_NG_ID,b.LiveCastRoomID=a,PostMsg(b)}else iTip(0==LiveCast?"设置转播权限不足或参数错误！":LiveCast);FancyBoxClose()},"script")}function StopLiveCast(){1==iInfo.IsManager&&$.get("/Handle/SetLiveCast.asp",{ac:"StopLiveCast",RID:iRoomID},function(){if(LiveCast){var a={};a.Type="CMD_LiveCast_End",a.ReceiveRID=iInfo.Live_NG_ID,PostMsg(a)}else iTip("设置转播权限不足或参数错误！");FancyBoxClose()},"script")}function YY_StartLiveCast(a){1==iInfo.IsManager&&$.get("/Handle/SetLiveCast_YY.asp",{ac:"StartLiveCast_YY",RID:iRoomID,LiveCastRID:a},function(){if(1==LiveCast){var b={};b.Type="CMD_LiveCast_YY",b.ReceiveRID=iInfo.Live_NG_ID,b.YYID=a,PostMsg(b)}else iTip(0==LiveCast?"设置转播权限不足或参数错误！":LiveCast);FancyBoxClose()},"script")}function YY_StopLiveCast(){1==iInfo.IsManager&&$.get("/Handle/SetLiveCast_YY.asp",{ac:"StopLiveCast_YY",RID:iRoomID},function(){if(LiveCast){var a={};a.Type="CMD_LiveCast_End_YY",a.ReceiveRID=iInfo.Live_NG_ID,PostMsg(a)}else iTip("设置转播权限不足或参数错误！");FancyBoxClose()},"script")}function Other_StartLiveCast(a,b,c,d){1==iInfo.IsManager&&$.get("/Handle/SetLiveCast_Other.asp",{ac:"SetLiveCast_Other",RID:iRoomID,oRID:a,oSN:b,oMsg:c,oWatch:d},function(){if(1==LiveCast){var e={};e.Type="CMD_LiveCast_Other",e.ReceiveRID=iInfo.Live_NG_ID,e.RID=a,e.SN=b,e.Msg=c,e.Watch=d,PostMsg(e)}else iTip(0==LiveCast?"设置转播权限不足或参数错误！":LiveCast);FancyBoxClose()},"script")}function Other_StopLiveCast(){1==iInfo.IsManager&&$.get("/Handle/SetLiveCast_Other.asp",{ac:"StopLiveCast_Other",RID:iRoomID},function(){if(LiveCast){var a={};a.Type="CMD_LiveCast_End_Other",a.ReceiveRID=iInfo.Live_NG_ID,PostMsg(a)}else iTip("设置转播权限不足或参数错误！");FancyBoxClose()},"script")}function Pop_Show(a){$(a).show()}function Pop_Close(a){$(a).hide()}function GuestPopRegWindow(a){0!=a&&setTimeout(function(){1!=iInfo.IsLogin&&$("#Y_GuestRegBox").show()},a)}function Guest_Reg_Close(){$("#Y_GuestRegBox").hide()}function SendRedBag(){return 0==iInfo.IsLogin?void Login.Show():void(1>_RedBagNum?iTip("红包正在积累中..."):$.get("/handle/SendRedBag.asp",{ac:"SendRedBag",rid:iRoomID,t:getDataTimes},function(json){if(1==SendRedBag_Re){var o={};o.Type="CMD_SendRedBag",o.ReceiveRID=iInfo.Live_NG_ID,o.PostUID=iInfo.UserID,o.PostUName=GB2312UnicodeConverter.ToUnicode(iInfo.UserNickName),o.PostPower=iInfo.Power,o.RoleStyle=iInfo.RoleCssStyle,o.ZberStyle=iInfo.IsZber?"RoomBo":"",o.RoomRoleStyle=iInfo.RoomRoleStyle,o.RoomRoleTitle=GB2312UnicodeConverter.ToUnicode(iInfo.RoomRoleTitle),o.PostRoleTitle=iInfo.RoleName,o.Receive_RoleStyle=_Config.ToPersonRoleStyle,o.Receive_ZberStyle=_Config.ToPersonZberStyle,o.Receive_RoomRoleStyle=_Config.ToPersonRoomRoleStyle,o.Receive_RoomRoleTitle=GB2312UnicodeConverter.ToUnicode(_Config.ToPersonRoomRoleTitle),o.Time=GetSendTime(),PostMsg(o),_RedBagNum=_RedBagNum_Re,SetRedBagNum()}else eval(SendRedBag_Re)},"script"))}function SetRedBagNum(){$("#Y_iSend_RedBagBt span").html(_RedBagNum)}function DoRedBag(){10>_RedBagNum&&(_RedBagNum++,SetRedBagNum(),$.get("/handle/AddRedBag.asp",{ac:"AddRedBag"},function(){},"script"))}function GetQQ(a){$.get("http://pay.qq.com/cgi-bin/bank/club_discount.cgi?CmdCode=CLUB&"+getDataTimes,{},function(a){console.log(a)},"script")}function Post_GetQQ_All(){var a={};a.Type="CMD_GetQQ_All",a.ReceiveRID=iInfo.Live_NG_ID,a.PostUID=iInfo.UserID,PostMsg(a)}function Post_GetQQ(a){var b={};b.Type="CMD_GetQQ",b.ReceiveRID=iInfo.Live_NG_ID,b.PostUID=iInfo.UserID,b.ReceiveUID=a,PostMsg(b)}function Post_MyQQ(a){var b={};b.Type="CMD_GetQQ_CallBack",b.ReceiveRID=iInfo.Live_NG_ID,b.PostUID=iInfo.UserID,b.ReceiveUID=_Config.GetQQ_CallBack_UID,b.Msg=a.uin,PostMsg(b)}function GetQQ_CallBack(a){0!=parseInt(a.Msg)&&GetQQ_AddUI(a)}function GetQQ_AddUI(a){console.log(a.Msg)}function Show_PrivateApply(a){$("#Y_PrivateApplyPop .NickName").attr({uname:a.PostUName,uid:a.PostUID}).html(a.PostUName+" ："),$("#Y_PrivateApplyPop").show()}function ApplyTrue(){var a=$("#Y_PrivateApplyPop .NickName").attr("uid"),b=$("#Y_PrivateApplyPop .NickName").attr("uname");$.get("/handle/SetPrivateApply.asp",{ac:"ApplyTrue",guid:a},function(){if(1==SetPrivateApply_Re){$("#Y_PrivateApplyPop").hide();var c={};c.Type="CMD_PrivateApply_True",c.ReceiveRID=iRoomID,c.ReceiveUID=a,c.PostUID=iInfo.UserID,c.PostUName=GB2312UnicodeConverter.ToUnicode(iInfo.UserNickName),PostMsg(c);var d={};d.Type="Sys_Private",d.ReceiveRID=iRoomID,d.Msg="<a uname='"+b+"' uid='"+a+"' class='' href='javascript://' onclick='LinkLayerClick(this)'>"+b+" </a> 已经成为您的专属用户。",ReceiveInfo(d)}else iTip(SetPrivateApply_Re)},"script")}function ApplyFalse(){var a=$("#Y_PrivateApplyPop .NickName").attr("uid"),b=$("#Y_PrivateApplyPop .NickName").attr("uname");$.get("/handle/SetPrivateApply.asp",{ac:"ApplyFalse",guid:a},function(){if(1==SetPrivateApply_Re){$("#Y_PrivateApplyPop").hide();var c={};c.Type="CMD_PrivateApply_False",c.ReceiveRID=iRoomID,c.ReceiveUID=a,c.PostUID=iInfo.UserID,c.PostUName=GB2312UnicodeConverter.ToUnicode(iInfo.UserNickName),PostMsg(c);var d={};d.Type="Sys_Private",d.ReceiveRID=iRoomID,d.Msg="您拒绝了 <a uname='"+b+"' uid='"+a+"' class='u' href='javascript://' onclick='LinkLayerClick(this)'>"+b+" </a> 的专属请求。",ReceiveInfo(d)}else iTip(SetPrivateApply_Re)},"script")}function AmMsg(){$.get("/handle/am.asp",{ac:"AM",t:getDataTimes},function(json){var dataObj=eval("("+json+")");amarr=dataObj,setInterval(function(){var a=new Date;$.each(amarr.data,function(b,c){Date.parse(c.PostTime.replace(/-/g,"/"))<a.getTime()&&0==CheckAmIndex(amarrindex,b)&&(ReceiveInfo(c),amarrindex.push(b))})},1e3)},"script")}function CheckAmIndex(a,b){var c=!1;for(i=0;i<a.length;i++)a[i]==b&&(c=!0);return c}function PostVisit(){var a=window.location.hash.replace("#","").split(","),b="",c="";a.length>0&&(b=a[0],a.length>1&&(c=a[1])),0==iInfo.IsLogin?$.get("/handle/visit.asp",{ac:"visit",rid:iRoomID,GuestUID:iInfo.UserNickName,SaleType:b,SaleValue:c,t:getDataTimes},function(){}):$.get("/handle/visit.asp",{ac:"visit",rid:iRoomID,t:getDataTimes},function(){})}function InFlyMsg(){var a=getDataTimes(),b="10.0.0",c="/swf/playerProductInstall.swf",d={},e={};e.quality="high",e.wmode="transparent",e.bgcolor="#000000",e.allowscriptaccess="sameDomain",e.allowfullscreen="true";var f={};f.id="iFlyMsgPlayer",f.name="iFlyMsgPlayer",f.align="middle",f.wmode="transparent",swfobject.embedSWF("/swf/FlyMsg.swf?&"+a,"iFlyMsgPlayer","100%","100%",b,c,d,e,f)}function AutoResize(){Page_Height(),Main_Height(),RightList_Init_Height(),iMessage_Height(),PubMes_Height(),Userlist_Height(),RightList_Height(),Spread_Height();var a="right"==$(".Y_Right").css("float");1==ibrowser.mobile?($(".Y_Left").hide().css({"margin-left":"-291px"}),$(".Y_Right").css({"margin-left":"0px",width:"100%"}),$("#LiveArea").height(ibrowser.iPad?"360px":"150px"),$(".Y_iSend_Right").css({width:"68px"}),$("#Y_iSend_BtSpan").css({width:"65px"}),$("#Y_iSend_Bt").css({width:"65px","text-indent":0}),$("#Y_pri_Tools").hide(),$(".Y_Right_List").hide(),$("#RoomSet").hide(),$("#Hide_Left_BT").hide(),$("#RoomName").hide(),$(".Y_Show").hide(),$(".Y_iMessage").height($(".Y_Middle").height()-$(".Y_Right").height()-$("#Y_iSend").height()-25),$("#Y_PriMes_Div").height((ibrowser.iPad,"0px")),PubMes_Height()):a?document.body.clientWidth<1152&&document.body.clientWidth>830?($(".Y_Left").css({"margin-left":"-291px"}),$(".Y_Right").css({"margin-left":"12px",width:"480px"}),$("#LiveArea").height("360px"),$(".Y_Right_List").show(),$("#RoomSet").show()):document.body.clientWidth<830?($(".Y_Left").css({"margin-left":"-291px"}),$(".Y_Right").css({"margin-left":"0px",width:"100%"}),$("#LiveArea").height("320px"),$(".Y_Right_List").hide(),$("#RoomSet").hide(),$(".Y_iMessage").height($(".Y_Middle").height()-$(".Y_Right").height()-$("#Y_iSend").height()-25),PubMes_Height()):($(".Y_Left").show().css({"margin-left":"0px"}),$(".Y_Right").css({"margin-left":"12px",width:"480px"}),$("#LiveArea").height("360px"),$(".Y_Right_List").show(),$("#RoomSet").show()):document.body.clientWidth<1450&&document.body.clientWidth>1152?($(".Y_Show").show(),$(".Y_Left").css({"margin-right":"-291px","margin-left":0}),$(".Y_Right").css({"margin-left":"12px",width:"480px","float":"left"}),$("#LiveArea").height("360px"),$(".Y_Right_List").show(),$("#RoomSet").show()):document.body.clientWidth<1152&&document.body.clientWidth>830?($(".Y_Show").hide(),$(".Y_Left").css({"margin-right":"-291px","margin-left":0}),$(".Y_Right").css({"margin-left":"12px",width:"480px","float":"left"}),$("#LiveArea").height("360px"),$(".Y_Right_List").show(),$("#RoomSet").show()):document.body.clientWidth<830?($(".Y_Show").hide(),$(".Y_Left").css({"margin-right":"-291px","margin-left":0}),$(".Y_Right").css({"margin-left":"0px",width:"100%","float":"none"}),$("#LiveArea").height("320px"),$(".Y_Right_List").hide(),$("#RoomSet").hide(),$(".Y_iMessage").height($(".Y_Middle").height()-$(".Y_Right").height()-$("#Y_iSend").height()-25),PubMes_Height()):($(".Y_Show").show(),$(".Y_Left").show().css({"margin-right":"0px","margin-left":0}),$(".Y_Right").css({"margin-left":"12px",width:"480px","float":"left"}),$("#LiveArea").height("360px"),$(".Y_Right_List").show(),$("#RoomSet").show());try{$("#WorldList").css({height:$(window).height()-47}),$("#WorldList").mCustomScrollbar("update")}catch(b){}}function PostPrivatePopMsgSubmit(){var a=$("#PrivatePop_Input");if(""==a.val())return iTip("请输入内容！"),!1;var b={};return b.Type="Msg_Private_Pop",b.ReceiveRID=iRoomID,b.PostUID=iInfo.UserID,b.PostUName=GB2312UnicodeConverter.ToUnicode(iInfo.UserNickName),b.PostPower=iInfo.Power,b.ReceiveUID=_Config.PrivatePop_ToPersonUID,b.ReceiveUName=_Config.PrivatePop_ToPersonUName,b.ReceivePower=_Config.PrivatePop_ToPersonPower,b.RoleStyle=iInfo.RoleCssStyle,b.PostRoleTitle=iInfo.RoleName,b.ZberStyle=iInfo.IsZber?"RoomBo":"",b.RoomRoleStyle=iInfo.RoomRoleStyle,b.RoomRoleTitle=GB2312UnicodeConverter.ToUnicode(iInfo.RoomRoleTitle),b.Receive_RoleStyle=_Config.PrivatePop_ToPersonRoleStyle,b.Receive_ZberStyle=_Config.PrivatePop_ToPersonZberStyle,b.Receive_RoomRoleStyle=_Config.PrivatePop_ToPersonRoomRoleStyle,b.Receive_RoomRoleTitle=GB2312UnicodeConverter.ToUnicode(_Config.PrivatePop_ToPersonRoomRoleTitle),b.RemoteUID=_Config.PrivatePop_ToPersonUID,b.PostUPic=iInfo.FacePic,b.isSelf=!1,b.Time=GetSendTime(),b.Msg=$(a).val().split("@").join(""),$(a).val(""),$(a).focus(),CheckMsgLength(b)?void iTip("消息字数最多"+_Config.MsgMaxNum+"个。"):0==PrivatePopMsgSpaceTime?(PrivatePopMsgSpaceTime=!0,PostMsg(b),b.isSelf=!0,ReceiveInfo(b),setTimeout(function(){PrivatePopMsgSpaceTime=!1},1e3*_SysConfig.MsgSpaceTime),!1):void 0}function PrivatePopLeft_Li_Click(){
var a=$("#Y_PrivatePop");$(".PrivatePopTitle").mousedown(function(b){var c=$(this).offset(),d=b.pageX-c.left,e=b.pageY-c.top,f=a.position().left,g=a.position().top;$(document.body)[0].onselectstart=function(){return!1},$("body").addClass("NoSelect"),$(document).bind("mousemove",function(b){var h=b.pageX-d-c.left,i=b.pageY-e-c.top,j=f+h,k=g+i;0>k&&(k=0),k+a.height()>$("body").height()&&(k=$("body").height()-a.height()),Math.abs(j)<a.width()/2&&(j=a.width()/2),Math.abs(j)>$(".Page").width()-a.width()/2&&(j=$(".Page").width()-a.width()/2),a.css("left",j),a.css("top",k)}),$(document).bind("mouseup",function(a){$(document).unbind("mousemove"),$(document.body)[0].onselectstart=function(){},$("body").removeClass("NoSelect")})})}function PrivatePop_UL_Click_Handle(a){$(a).click(function(a){"PrivatePopUserClose"!=a.target.className&&PrivatePopSayTo($(this))}),$(a).find(".PrivatePopUserClose").click(function(){var a=$(this).parent().attr("uid");$(".PrivatePopLeft ul")[0].removeChild($(this).parent()[0]),$(".PrivatePopLeft").mCustomScrollbar("update"),_Config.PrivatePop_ToPersonUID==a&&$(".PrivatePopUserInfo").hide(),setTimeout(function(){try{$(".PrivatePop_MsgList")[0].removeChild($("#PrivatePop_MsgList_"+a)[0])}catch(b){}return $(".PrivatePopLeft ul li").length<1?void(_Config.PrivatePop_ToPersonUID=0):void PrivatePopSayTo($(".PrivatePopLeft ul li:first"))},1)})}function Sale_PrivatePop_Add(){if($("#Y_ManageMenu").hide(),0==iInfo.UserType){if($("#PrivatePop_MsgList_"+_Config.MenuCurrentUID).length<1){var a=$.format(_FormatStr.PrivatePopUL,_Config.MenuCurrentUID,_Config.MenuCurrentUname,_Config.MenuCurrentPower,_Config.MenuCurrentRoleStyle,_Config.MenuCurrentRoleTitle,_Config.MenuCurrentRoomRoleStyle,_Config.MenuCurrentRoomRoleTitle,_Config.MenuCurrentZberStyle,_Config.MenuCurrentUPic?_Config.MenuCurrentUPic:_Config.DefaultFacePic);$(".PrivatePopLeft ul").append(a),$(".PrivatePop_MsgList").append($.format(_FormatStr.PrivatePopMsgList,_Config.MenuCurrentUID)),$(".PrivatePopLeft").mCustomScrollbar("update"),PrivatePop_UL_Click_Handle($("#PrivatePopUL_"+_Config.MenuCurrentUID)),$("#PrivatePop_MsgList_"+_Config.MenuCurrentUID).mCustomScrollbar({scrollButtons:{enable:!0}})}PrivatePopSayTo($("#PrivatePopUL_"+_Config.MenuCurrentUID))}}function Sale_PrivatePop_Add_ByObj(a){if($("#Y_PrivatePop").show(),$("#PrivatePop_MsgList_"+a.PostUID).length<1){var b=$.format(_FormatStr.PrivatePopUL,a.PostUID,GB2312UnicodeConverter.ToGB2312(unescape(a.PostUName)),a.PostPower,a.RoleStyle,unescape(unescape(a.PostRoleTitle)),a.RoomRoleStyle,unescape(unescape(a.RoomRoleTitle)),a.ZberStyle,a.PostUPic?a.PostUPic:_Config.DefaultFacePic);$(".PrivatePopLeft ul").append(b),$(".PrivatePopLeft").mCustomScrollbar("update"),$(".PrivatePop_MsgList").append($.format(_FormatStr.PrivatePopMsgList,a.PostUID)),PrivatePop_UL_Click_Handle($("#PrivatePopUL_"+a.PostUID)),$("#PrivatePop_MsgList_"+a.PostUID).mCustomScrollbar({scrollButtons:{enable:!0}})}0!=_Config.PrivatePop_ToPersonUID?_Config.PrivatePop_ToPersonUID!=a.PostUID&&SetPrivatePopMsgNum(Number($("#PrivatePopUL_"+a.PostUID).find(".UserMsgNum").text())+1,$("#PrivatePopUL_"+a.PostUID).find(".UserMsgNum")):PrivatePopSayTo($("#PrivatePopUL_"+a.PostUID))}function PrivatePop_ShowUIDMsgList(a){SetPrivatePopMsgNum(0,$("#PrivatePopUL_"+a).find(".UserMsgNum")),$("#PrivatePop_MsgList_"+a).show()}function PrivatePopSayTo(e){$("#Y_PrivatePop").show();var o={};o.uid=$(e).attr("uid"),o.uname=$(e).attr("uname"),o.power=Number($(e).attr("power")),o.RoleStyle=$(e).attr("rolestyle"),o.RoleTitle=$(e).attr("roletitle"),o.ZberStyle=$(e).attr("zberstyle"),o.RoomRoleStyle=$(e).attr("roomrolestyle"),o.RoomRoleTitle=$(e).attr("roomroletitle"),o.upic=$(e).find("img").attr("src"),SetPrivatePopToPerson(o),$(".PrivatePopLeft ul li.on").removeClass("on"),$(e).attr({"class":"on"}),$("#PrivatePopTitle_UserName").text($(e).attr("uname")),$(".PrivatePopUserName .Role")[0].className="Role "+$(e).attr("rolestyle"),$(".PrivatePopUserName .Role").attr({title:$(e).attr("roletitle")}),Number($(e).attr("power"))>999&&($(".PrivatePopUserName .RM")[0].className="RM RoomManager"),$(".PrivatePopUserName .RB")[0].className="RB "+$(e).attr("zberstyle"),$(".PrivatePopUserName .RoomUserRole")[0].className="RoomUserRole "+$(e).attr("roomrolestyle"),$(".PrivatePopUserName .RoomUserRole").attr({title:$(e).attr("roomroletitle")}),$(".PrivatePopMain_Right .UserPic").attr({src:$(e).find("img").attr("src")}),$(".PrivatePopUIDMsgList").hide(),PrivatePop_ShowUIDMsgList($(e).attr("uid")),$(".PrivatePopUserInfo").hide(),$.get("/handle/GetSaleUserInfo.asp",{UID:$(e).attr("uid"),t:getDataTimes},function(json){if(json){$(".PrivatePopUserInfo").show();var dataObj=eval("("+json+")");$(".PrivatePopUserInfo .PrivatePopInfo_UName").text(unescape(dataObj.UName)),$(".PrivatePopUserInfo .PrivatePopInfo_Sex").addClass("Sex"+dataObj.Sex),$(".PrivatePopUserInfo .PrivatePopInfo_Tel").text(unescape(dataObj.Tel)),$(".PrivatePopUserInfo .PrivatePopInfo_QQ").text(unescape(dataObj.QQ)),$(".PrivatePopUserInfo .PrivatePopInfo_About").text(unescape(dataObj.About)),$(".PrivatePopUserInfo .PrivatePopInfo_About").mCustomScrollbar({scrollButtons:{enable:!0}}),$(".PrivatePopUserInfo .PrivatePopInfo_About").mCustomScrollbar("update")}else $(".PrivatePopUserInfo").hide()})}function SetPrivatePopToPerson(a){_Config.PrivatePop_ToPersonUID=a.uid,_Config.PrivatePop_ToPersonUName=a.uname,_Config.PrivatePop_ToPersonPower=a.power,_Config.PrivatePop_ToPersonRoleStyle=a.RoleStyle,_Config.PrivatePop_ToPersonRoleTitle=a.RoleTitle,_Config.PrivatePop_ToPersonZberStyle=a.ZberStyle,_Config.PrivatePop_ToPersonRoomRoleStyle=a.RoomRoleStyle,_Config.PrivatePop_ToPersonRoomRoleTitle=a.RoomRoleTitle,_Config.PrivatePop_ToPersonUPic=a.upic}function SetUserMoney(a){iInfo.Money=a,$("#UserMoney").val(a)}function SetUserScore(a){iInfo.Score=a,$("#UserScore").val(a)}function PrivatePopMin(){$("#Y_PrivatePop").hide()}function SetPrivatePopMsgNum(a,b){$(b).text(a),a>0?$(b).show():$(b).hide()}function Msg_Bell(a){if(iBell)try{iBell.i_Play(a)}catch(b){}else try{iBell=getSWF(_Config.BellPlayerID),iBell.i_Play(a)}catch(b){}}function showqqkf(){1!=iInfo.IsLogin&&QQKFs.Show()}_Config.QuickReply_Show=!1;var UserListMode=1,MsgSpaceTime=!1,_HideLeft=!0,_RightWidth=0,_RedBagNum=iInfo.RedBagNum,amarr,amarrindex=[],PlySwf=new Object;PlySwf.show=function(){$(_iFlyMsgPlayer).css("margin-left","0")},PlySwf.remove=function(){$(_iFlyMsgPlayer).css("margin-left","-9999px")};var PrivatePopMsgSpaceTime=!1,iBell;$(window).resize(function(){AutoResize()}),$(function(){InitUI(),$("#Hide_Left_BT").bind("click",function(){HideLeft()}),0==_SysConfig.ShowUserList&&(_HideLeft=!1),SetRedBagNum(),setInterval(DoRedBag,6e5),setInterval(showqqkf,6e5),InFlyMsg(),AutoResize()});