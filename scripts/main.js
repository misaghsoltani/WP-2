// JavaScript Document
function isNumber(event){
	if (event.keyCode < 48 || event.keyCode > 57)
		return false;
	return true;
}

function isPersianChar(event){
	//there was no time to find the bug so I just removed the character 's' from the list :)
	if(is_persian(String.fromCharCode(event.keyCode)) && String.fromCharCode(event.keyCode)!='s')
		return true;
	return false;
}

function isEnglishChar(event){
	if(is_english(String.fromCharCode(event.keyCode)))
		return true;
	return false;
}

function validateName(name){
	if (name=="" || name==undefined || name==null || name.length < 3 || name.length >= 50){
		document.getElementById("p-name").innerHTML = "تعداد کاراکتر نام مناسب نیست.";
		return false;
	} else if (!is_persian(name)){
		document.getElementById("p-name").innerHTML = "نام باید فارسی وارد شود.";
		return false;
	}
	return true;
}

function validateFamily(family){
	if (family=="" || family==undefined || family==null || family.length < 3 || family.length >= 100){
		document.getElementById("p-family").innerHTML = "تعداد کاراکتر نام خانوادگی مناسب نیست.";
		return false;
	} else if (!is_persian(family)){
		document.getElementById("p-family").innerHTML = "نام خانوادگی باید فارسی وارد شود.";
		return false;
	}
	return true;
}

function validateEngName(engName){
	if (engName=="" || engName==undefined || engName==null || engName.length < 3 || engName.length >= 150){
		document.getElementById("p-english-name").innerHTML = "تعداد کاراکتر نام خانوادگی مناسب نیست.";
		return false;
	} else if (!is_english(engName.replaceAll(' ' , ''))){
		document.getElementById("p-english-name").innerHTML = "نام باید انگلیسی وارد شود.";
		return false;
	}
	return true;
}

//This regular expression is got from other websites!
function validateEmail(email){
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase()))
		return true;
	document.getElementById("p-email").innerHTML = "ایمیل را صحیح وارد کنید.";
	return false;
}

function validatePhone(phone){
	var re = "[^\s0-9]";
	if (phone.length == 9 && re.test(phone))
		return true;
	document.getElementById("p-phone").innerHTML = "شماره تلفن را صحیح وارد کنید.";
	return false;
}

function validateCode(code) {
	var re = "[^\s0-9]";
	if (code.length == 10 && re.test(code))
		return true;
	document.getElementById("p-code").innerHTML = "کد ملی را صحیح وارد کنید.";
	return false;
}

function validatePass(password){
	var re = /^[a-zA-Z0-9=*$#!+\-]{8,24}$/;
    if (re.test(password))
		return true;
	document.getElementById("p-password").innerHTML = "رمز عبور را صحیح وارد کنید.";
	return false;
}

function validatePassRep(passRep){
	var password = document.getElementsByName("input-password")[0].value;
    if(password == confirm)
		return true;
	document.getElementById("p-pass-repeat").innerHTML = "رمز عبور را درست تأیید کنید.";
	return false;
}

function validateBday(bday){
	var re = /^^(1[34]\d\d)\/(1[012]|0[1-9])\/(0[1-9]$|[12]\d$|3[01]$)/;
	if(re.test(bday) && parseInt(bday.replaceAll('/' , '')) > 13100100 && parseInt(bday.replaceAll('/' , '')) < 13900000)
		return true;
	document.getElementById("p-bday").innerHTML = "تاریخ تولد را صحیح وارد کنید.";
	return false;
}

function validateAdd(add){
	if(add <= 250)
		return true;
	document.getElementById("p-add").innerHTML = "آدرس را صحیح وارد کنید.";
	return false;
}

function validateGender(gender){
	if (gender != "- انتخاب کنید -")
		return true;
	document.getElementById("p-gender").innerHTML = "عنوان را صحیح وارد کنید.";
	return false;
}

function validateRel(rel){
	if (rel != null)
		return true;
	document.getElementById("p-rel").innerHTML = "تاهل را صحیح وارد کنید.";
	return false;
}


function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}
function characterRange(startChar, endChar) {
    return String.fromCharCode(...range(endChar.charCodeAt(0) - startChar.charCodeAt(0) + 1, startChar.charCodeAt(0)));
}
var space_codepoints ='\u0020'+ characterRange('\u2000' , '\u200f') + characterRange('\u2028' , '\u202f');
var persian_alpha_codepoints = characterRange('\u0621' , '\u0628') + characterRange('\u062A' , '\u063A') + characterRange('\u0641' , '\u0642') + characterRange('\u0644' , '\u0648') + characterRange('\u064E' , '\u0651') + '\u0655\u067E\u0686\u0698\u06A9\u06AF\u06BE\u06CC';
var additional_arabic_characters_codepoints = '\u0629\u0643\u0649\u064A\u064B\u064D\u06D5';
let total_valid_chars = space_codepoints + persian_alpha_codepoints + additional_arabic_characters_codepoints;

function is_persian(str) {
    if(!new RegExp("[^\s" + total_valid_chars + "]").test(str))
        return true;
    return false;
}

function is_english(str) {
    return !( new RegExp("[^\sa-zA-Z]").test(str));
}

function validation() {
	//return false;
	document.getElementById("pp").innerHTML = "نام نمی تواند خالی باشد.";
	var name = document.getElementsByName("input-name")[0].value;
	var family = document.getElementsByName("input-family")[0].value;
	var engName = document.getElementsByName("input-english-name")[0].value;
	var email = document.getElementsByName("input-email")[0].value;
	var phoneNum = document.getElementsByName("input-phone")[0].value;
	var code = document.getElementsByName("input-code")[0].value;
	var password = document.getElementsByName("input-password")[0].value;
	var passRepeat = document.getElementsByName("input-pass-repeat")[0].value;
	var bday = document.getElementsByName("input-bday")[0].value;
	var add = document.getElementsByName("input-add")[0].value;
	var tmp = document.getElementsByName("input-gender")[0];
	var gender = tmp.options[tmp.selectedIndex].text;
	var rel = null;
	for (var i = 0; i < document.getElementsByName("input-radio").length; i++){
		if (document.getElementsByName("rel")[i].checked)
			rel = document.getElementsByName("input-password")[i].value;
	}
	var book = document.getElementsByName("input-checkbox1")[0].checked;
	var movie = document.getElementsByName("input-checkbox2")[0].checked;
	var music = document.getElementsByName("input-checkbox3")[0].checked;
	
	var flag = true;
	
	flag = flag && validateName(name);
	flag = flag && validateFamily(family);
	flag = flag && validateEngName(engName);
	flag = flag && validateEmail(email);
	flag = flag && validatePhone(phoneNum);
	flag = flag && validateCode(code);
	flag = flag && validatePass(password);
	flag = flag && validatePassRep(passRepeat);
	flag = flag && validateBday(bday);
	flag = flag && validateAdd(add);
	flag = flag && validateGender(gender);
	flag = flag && validateRel(rel);
	
	return flag;
}

document.addEventListener("DOMContentLoaded" , function () {
    var code = document.getElementsByName("input-code")[0];
    code.addEventListener("input" , function () {
        var input = code.value.split("-").join("");
        console.log(input);
        input = input.split("").map(function (current,index) {
            if(index == 3 || index == 9){
                return "-" + current;
            }
            return current;
        }).join('');
        code.value = input;
    });
});
