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

function usernameCheck(username,alertInfoArr){
	var status = true;
	var blank = /\s/;	//匹配空白符正则表达式的模式变量

	if( username.length<1 || username.length>10 ){
		status = false;
		alertInfoArr.push("用户名长度出错：请输入1~10个字符");
	}else if( blank.test(username) ){
		status = false;
		alertInfoArr.push("用户名格式出错：用户名不能有空白符");
	}

	return status;
}

function genderCheck(gender,alertInfoArr){
	var status = true;

	if( !gender ){
		status = false;
		alertInfoArr.push("性别选择出错：未选择");
	}

	return status;
}

function emailCheck(address,alertInfoArr){
	var status = true;
	var blank = /\s/;	//匹配空白符正则表达式的模式变量

	if( address.length == 0 ){
		status = false;
		alertInfoArr.push("电子邮箱地址出错：未填写");
	}else if( blank.test(address) ){
		status = false;
		alertInfoArr.push("电子邮箱地址出错：地址中不能有空白符");
	}

	return status;
}

function passwordCheck(password,alertInfoArr){
	var status = true;

	if( password.length<1 || password.length>16 ){
		status = false;
		alertInfoArr.push("密码长度出错：请输入长度为1~16的密码");
	}

	return status;	
}

function rePasswordCheck(password,rePassword,alertInfoArr){
	var status = true;

	if( rePassword != password ){
		status = false;
		alertInfoArr.push("确认密码出错：与密码不一致");
	}

	return status;
}

function vfcodeCheck(vfcode,alertInfoArr){
	var status = true;

	if( vfcode.length == 0 ){
		status = false;
		alertInfoArr.push("验证码出错：未填写");
	}

	return status;
}