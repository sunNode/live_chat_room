
$(window).resize(function() {
		$(".main").height($(window).height() - 66);
		$(".middle-top").height($(".main").height() - 245)
		$(".r-rgt-top").height($(".main").height() - 183)
})
function Rmain_Height() {
	 $(".main").height($(window).height() - 66);
}
function Middle_Height() {
	$(".middle-top").height($(".main").height() - 245)
}
function Middle_Height1() {
	$("#msmelist").height($(".main").height() - 245)
}
function Rgttop_Height() {
	$(".r-rgt-top").height($(".main").height() - 183)
}
function Rgttop_Height1() {
	$("#usermessage").height($(".main").height() - 183)
}
