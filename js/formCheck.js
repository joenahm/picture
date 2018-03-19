function getValue(obj){
	if( obj.attr("name") == "gender" ){
		return obj.filter(':checked').val();
	}else{
		return obj.val();
	}
}
function addAlertInfo(alertInfoArr){
	var infoStage = $('#alertModal').find('.modal-body');
	for( i in alertInfoArr ){
		infoStage.html(infoStage.html()+"<p>"+alertInfoArr[i]+"</p>");
	}
}
function showAlert(alertInfoArr){
	$('#alertModal').find('.modal-body').html("");
	addAlertInfo(alertInfoArr);
	$('#alertModal').modal("show");
};

function usernameCheck(username){
	var blank = /\s/;	//匹配空白符正则表达式的模式变量

	if( username.length<1 || username.length>10 ){
		return "用户名长度出错：请输入1~10个字符";
	}else if( blank.test(username) ){
		return "用户名格式出错：用户名不能有空白符";
	}else{
		return "";
	}
}

function genderCheck(gender){
	if( !gender ){
		return "性别选择出错：未选择";
	}else{
		return "";
	}
}

function emailCheck(address){
	var blank = /\s/;	//匹配空白符正则表达式的模式变量

	if( address.length == 0 ){
		return "电子邮箱地址出错：未填写";
	}else if( blank.test(address) ){
		return "电子邮箱地址出错：地址中不能有空白符";
	}else{
		return "";
	}
}

function passwordCheck(password){
	if( password.length<1 || password.length>16 ){
		return "密码长度出错：请输入长度为1~16的密码";
	}else{
		return "";
	}
}

function rePasswordCheck(password,rePassword){
	if( rePassword != password ){
		return "确认密码出错：与密码不一致";
	}else{
		return "";
	}
}

function vfcodeCheck(vfcode){
	if( vfcode.length == 0 ){
		return "验证码出错：未填写";
	}else{
		return "";
	}
}