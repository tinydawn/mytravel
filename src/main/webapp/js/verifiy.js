//===============表单校验BEGIN=====================


//=======具体的校验函数BEGIN======
/**
 * 用户名校验：4-16位 字符数字和下划线
 * @return 校验通过返回true,否则返回false.
 */
function checkUsername() {
    //获取用户名
    var userName = $("#username").val();
    //定义正则表达式
    var uPattern = /^[a-zA-Z0-9_]{4,16}$/;
    //判断结果，并作出相应的处理
    // TODO: 2020/5/11 这里可以将处理效果做的更好。
    var flag = uPattern.test(userName);
    if(flag){
        $("#username").css("border", "");
    }else {
        $("#username").css("border", "1px solid red");
    }

    return flag;
}


/**
 * 用户密码校验：必须为6-18字母，数字，特殊符号的
 * @return 校验通过返回true,否则返回false.
 */
function checkPassword() {
    var pwd = $("#password").val();
    //定义正则表达式
    var uPattern =/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{6,18}$/;

    //判断结果，并作出相应的处理
    // TODO: 2020/5/11 这里可以将处理效果做的更好。
    var flag = uPattern.test(pwd);
    if(flag){
        $("#password").css("border", "");
    }else {
        $("#password").css("border", "1px solid red");
    }

    return flag;
}

/**
 * 校验email，符合email的规则
 * @return 校验通过返回true,否则返回false.
 */

function checkEmail() {
    var email = $("#email").val();

    var ePattern =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    var flag = ePattern.test(email);
    if(flag) {
        $("#email").css("border", "");
    }else {
        $("#email").css("border", "1px solid red");
    }

    return flag;

}


/**
 * 姓名非空校验
 * @return 如果姓名不为空，返回true. 如果姓名为空返回false
 */

function  nameIsNull() {
    var nameVal = $("#name").val();
    var flag = false;
    if (nameVal !== null && nameVal !== undefined && nameVal !== "") {
        flag=true;
        $("#name").css("border", "");
    }else {
        flag=false;
        $("#name").css("border","1px solid red");
    }

    return flag;
}

/**
 * 手机号格式校验
 * @return  如果输入手机号符合格式要求，返回true.否则返回false
 */

function checkPhoneNum() {
    var phoneVal = $("#telephone").val();
    var pPattern = /^1[3456789]\d{9}$/;

    var flag = pPattern.test(phoneVal);
    if(flag){
        $("#telephone").css("border", "");
    }else {
        $("#telephone").css("border", "1px solid red");
    }

    return flag;
}


/**
 * 出生日期非空校验
 * @return 如果出生日期是空，则返回false.否则返回true
 */
function  birthdayIsNull() {
    var birthdayVal = $("#birthday").val();
    var flag=false;
    if(birthdayVal!==null && birthdayVal!==undefined && birthdayVal!==""){
        flag=true;
        $("#birthday").css("border", "");
    }else {
        flag=false;
        $("#birthday").css("border", "1px solid red");
    }
    return flag;
}


/**
 * 验证码非空校验
 * @return 如果验证码是空，则返回false.否则返回true
 */
function  verificationCodeIsNull() {
    var verificationCodeVal = $("#check").val();
    var flag=false;
    if(verificationCodeVal!==null && verificationCodeVal!==undefined && verificationCodeVal!==""){
        flag=true;
        $("#check").css("border", "");
    }else {
        flag=false;
        $("#check").css("border", "1px solid red");
    }
    return flag;
}



function canSubmit() {
    var flag = checkUsername()
        && checkPassword()
        && checkEmail()
        && nameIsNull()
        && checkPhoneNum()
        && birthdayIsNull()
        && verificationCodeIsNull();
     console.log($("#registerForm").serialize());
    if(flag) {
        $.post("registUserServlet",$("#registerForm").serialize(),function(data){

        });
    }

    return false;
}
//=======具体的校验函数END============


/**
 * 绑定函数，为各个表单项，绑定校验函数
 */
function bindFunction() {
    $("#username").blur(checkUsername);
    $("#password").blur(checkPassword);
    $("#email").blur(checkEmail);
    $("#name").blur(nameIsNull);
    $("#telephone").blur(checkPhoneNum);
    $("#birthday").blur(birthdayIsNull);
    $("#check").blur(verificationCodeIsNull);

    $("#registerForm").submit(canSubmit);

}


//================表单校验END==================

//主函数
$(function(){
    bindFunction();
});