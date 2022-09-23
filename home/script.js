var _support=[".mp3",".m4a",".mav",".ogg",".mp4"];

//event
{
	let a=document.getElementById("to_top");
	let b=document.getElementById("search_icon");
	let c=document.getElementById("a1");
	let d=document.getElementById("a2");
	let e=document.getElementById("a3");
	let f=document.getElementById("music");
	let g=document.getElementById("a4");
	let h=document.getElementById("search_input");
	let i=document.getElementById("darkMode");
	let j=document.getElementById("musicPlayer_btn");
	let k=document.getElementById("musicPlayer_filename");
	let l=document.getElementById("musicPlayer_volume");
	let m=document.getElementById("musicPlayer_file");
	var is_stop=1;
	var is_darkMode=0;
	window.onload=function(){
		//load
		$("[href$='.exe'],[href$='.zip']").attr("target","_self");
		$(".main>div").addClass("m");
		console.log(".main div added class m");
		$(".bottom div").addClass("fa");
		$(".bottom div").addClass("fa-3x");
		console.log(".bottom div added class fa,fa-3x");
		$(".top_left a").attr("target","_self");
		console.log(".top_left a reset target _self");
		$(".load").hide();
		console.log(".load out of screen");
		$(".main").slideDown("",function(){
			$(".main div").slideDown();
		});
		$(".top").fadeIn();
		$(".bottom").fadeIn();
		$(".top").css("display","flex");
		console.log("element all displayed");
		$(".musicPlayer .fa").addClass("fa-2x");
		document.getElementById("backgroundMusic").volume=0.5;
		get();
		console.log("window loaded");

		a.onclick=function(){
			console.log("#to_top clicked");
			document.documentElement.scrollTop=0;
		}
		b.onclick=function(){
			console.log("#search_icon clicked");
			search();
		}
		c.onclick=function(){
			console.log("#a1 clicked");
			auto_search("a1");
		}
		d.onclick=function(){
			console.log("#a2 clicked");
			auto_search("a2");
		}
		e.onclick=function(){
			console.log("#a3 clicked");
			auto_search("photoshop");
		}
		f.onclick=function(){
			console.log("#music clicked");
			let target=document.getElementById("backgroundMusic");
			let font=f.classList;
			if(is_stop){
				f.title="停止音乐";
				let file="../music/"+random(1,3)+".mp3";
				console.log("music file:"+file);
				target.src=file;
				console.log("vidio src fixed");
				font.remove("fa-music");
				font.add("fa-stop-circle-o");
				console.log("#music set class fa-stop");
				is_stop=0;
			}
			else{
				f.title="播放音乐";
				target.src="";
				console.log("music stoped");
				font.remove("fa-stop-circle-o");
				font.add("fa-music");
				console.log("#music set class fa-music");
				is_stop=1;
			}
		}
		g.onclick=function(){
			console.log("#a4 clicked");
			auto_search("Premiere");
		}
		h.onfocus=function(){
			console.log("search_input focused");
			h.onkeypress=function(){
				if(event.keyCode==13){
					console.log("Enter key pressed");
					search();
				}
			}
		}
		i.onclick=function(){
			console.log("#darkMode clicked");
			if(is_darkMode){
				i.classList.remove("fa-sun-o");
				i.classList.add("fa-moon-o");
				i.title="打开深夜模式";
				is_darkMode=0;
				document.documentElement.classList.remove("darkMode");
				document.querySelector("#background_front img").src="../background.png";
				console.log("closed darkMode");
			}
			else{
				i.classList.remove("fa-moon-o");
				i.classList.add("fa-sun-o");
				i.title="关闭深夜模式";
				is_darkMode=1;
				document.documentElement.classList.add("darkMode");
				document.querySelector("#background_front img").src="../darkMode_background.png";
				console.log("opened darkMode");
			}
		}
		j.onclick=function(){
			console.log("musicPlayer_btn clicked");
			document.getElementById("musicPlayer_volume").value=document.getElementById("musicPlayer").volume*100;
			if(k.value.indexOf(".")==-1) openMp3(k.value,m.files[0].name);
			else openMp3(k.value,"");
		}
		k.onfocus=function(){
			console.log("musicPlayer_filename focused");
			k.onkeypress=function(){
				if(event.keyCode==13){
					console.log("Enter key pressed");
					document.getElementById("musicPlayer_volume").value=document.getElementById("musicPlayer").volume*100;
					if(k.value.indexOf(".")==-1) openMp3(k.value,m.files[0].name);
					else openMp3(k.value,"");
				}
			}
		}
		l.oninput=function(){
			console.log("musicPlayer_volume inputed");
			document.getElementById("musicPlayer").volume=l.value/100;
		}
		m.onchange=function(){
			console.log("musicPlayer_file changed");
			k.value=getObjectURL(m.files[0]);
		}
		window.onscroll=function(){
			let to_top=document.documentElement.scrollTop;
			//to_top btn
			if(to_top>500){
				$("#to_top").fadeIn();
				console.log("window scrolled; #to_top faded in");
			}
			else{
				$("#to_top").fadeOut();
				console.log("window scrolled; #to_top faded out");
			}
			//background
			let speed1=0.2;
			let width1=1624;
			let value1=(to_top*speed1)%width1;
			document.getElementById("background_back_front").style.left=value1*-1*speed1+"px";
			document.getElementById("background_back_back").style.left=value1*-1*speed1+width1+"px";
		}
	}
}

//get's function
{
	function age(){
		let a=new Date().getFullYear();
		let b=a-2012;
		document.getElementById("age").innerHTML=b+"岁";
		return "age:"+b;
	}

	function to_top(){
		return "to_top:"+document.documentElement.scrollTop;
	}

	function last_text(){
		let a=new Date().getFullYear();
		let b="Copyright © 2022-"+a+" 小天天";
		document.getElementById("last_text").innerHTML=b;
		return "last_text:"+b;
	}

	function support(){
		let a=_support.join(" ");
		document.getElementById("musicPlayer_support").innerHTML=a;
		return "support:"+a;
	}

	function darkMode(){
		return "darkMode:"+(is_darkMode?"ture":"false");
	}

	function music(){
		return "music:"+(is_stop?"false":"ture");
	}

	function musicPlayer_volume(){
		let a=document.getElementsByTagName("video")[1].volume*100;
		document.getElementById("musicPlayer_volume").value=a;
		return "musicPlayer_volume:"+a;
	}


	function get(){
		console.log(age());
		console.log(to_top());
		console.log(last_text());
		console.log(support());
		console.log(darkMode());
		console.log(music());
		console.log(musicPlayer_volume());
	}
}

let is_music_play=0;
function search(){
	console.log("search started");
	$(".search_icon_item").removeClass("fa-search");
	console.log(".search_icon_item removed class fa-search");
	$(".search_icon_item").addClass("fa-spinner");
	$(".search_icon_item").addClass("fa-pulse");
	console.log(".search_icon_item added class fa-spinner,fa-pulse");
	$(".main div").slideDown();
	console.log(".main div slided down");
	let input=document.getElementById("search_input").value.toUpperCase();
	let data=document.getElementsByTagName("span");
	let part=document.querySelectorAll(".m");
	let num=0;
	console.log("data got");
	if(input) console.log("data checked");
	else{
		console.log("data error");
		info("您的输入为空");
		$(".main div").slideDown();
		console.log(".main div slided down");
		document.getElementById("search_input").value="";
		console.log("#search_input value reset");
		$("#home").fadeOut();
		console.log("#home faded out");
		$(".search_icon_item").removeClass("fa-spinner");
		$(".search_icon_item").removeClass("fa-pulse");
		console.log(".search_icon_item removed class fa-spinner,fa-pulse");
		$(".search_icon_item").addClass("fa-search");
		console.log(".search_icon_item added class fa-search");
		console.log("search ended");
		return;
	}
	$(".m").addClass("out");
	console.log(".m added class out");
	for(let i=0;i<part.length;i++){
		let target=part[i].getElementsByTagName("span");
		for(let j=0;j<target.length;j++){
			let match=target[j].innerHTML.toUpperCase();
			if(match.indexOf(input)>-1||input.indexOf(match)>-1){
				part[i].classList.remove("out");
				num++;
				console.log("an div removed class out");
				break;
			}
		}
	}
	if(num){
		$(".out").slideUp();
		console.log(".out slided up");
		info("为您找到"+num+"条结果");
		console.log("total "+num+" div displayed");
		home();
		$("#home").fadeIn();
		console.log("#home faded in");
	}
	else{
		info("未找到任何信息");
		console.log("no div displayed");
		$(".main div").slideDown();
		console.log(".main div slided down");
		$("#home").fadeOut();
		console.log("#home faded out");
	}
	$(".search_icon_item").removeClass("fa-spinner");
	$(".search_icon_item").removeClass("fa-pulse");
	console.log(".search_icon_item removed class fa-spinner,fa-pulse");
	$(".search_icon_item").addClass("fa-search");
	console.log(".search_icon_item added class fa-search");
	console.log("search ended");
	return;
}

function auto_search(input){
	document.getElementById("search_input").value=input;
	search();
	return;
}

function info(a){
	$(".info p").html(a);
	console.log(".info p fixed");
	console.log(".info p:"+a);
	$(".info_box").fadeIn();
	console.log(".info slided down");
	document.getElementById("info_button").onclick=function(){
		console.log("#info_button clicked");
		$(".info_box").fadeOut();
		console.log(".info faded out");
	}
}

function home() {
	document.getElementById("home").onclick=function(){
		console.log("#home clicked");
		$(".main div").slideDown();
		console.log(".main div slided down");
		document.getElementById("search_input").value="";
		console.log("#search reset value");
		$("#home").fadeOut();
		console.log("#home faded out");
	}
}

//musicPlayer
{
	let element=document.getElementById("musicPlayer");
	document.getElementById("musicPlayer_file").accept=_support.join(",");
	function cplayMp3(){
		if(is_music_play){
			play.classList.remove("fa-pause");
			play.classList.add("fa-play");
			console.log("play btn class fa-play");
			play.title="播放";
			element.pause();
			console.log("music paused");
			is_music_play=0;
		}
		else{
			document.getElementById("backgroundMusic").src="";
			document.getElementById("music").classList.remove("fa-stop-circle-o");
			document.getElementById("music").classList.add("fa-music");
			is_stop=1;
			console.log("#music set class fa-music");
			play.classList.remove("fa-play");
			play.classList.add("fa-pause");
			console.log("play btn class fa-pause");
			play.title="暂停";
			element.play();
			console.log("music played");
			is_music_play=1;
		}
	}

	function quit(){
		if(is_music_play) cplayMp3();
		$(".musicPlayer_box").fadeOut();
		console.log("musicPlayer faded out");
	}

	function openMp3(file,filename){
		if(file==""){
			console.log("filename empty");
			info("输入为空");
			return;
		}
		element.src=file;
		console.log("function openMp3 opened "+file);
		if(file.indexOf(".")==-1) file=filename;
		let char=file.indexOf("\\")>-1?"\\":"/";
		let arr=file.split(char);
		let af_arr=arr[arr.length-1].split(".");
		let af="."+af_arr[af_arr.length-1];
		let str=arr[arr.length-1].replace(af,"");
		$("#musicPlayer_filename_output").text(str);
		let close=document.getElementById("close");
		let play=document.getElementById("play");
		let stop=document.getElementById("stop");
		$(".musicPlayer_box").fadeIn();
		console.log("musicPlayer faded in");
		element.onerror=function(){
			console.log("element file error");
			quit();
			let is_support=0;
			for(let i=0;i<_support.length;i++) if(af==_support[i]){
				is_support=1;
				break;
			}
			if(af_arr.length==1){
				console.log("af_arr.length=1");
				info("错误文件格式");
				return;
			}
			if(is_support) info("无法找到 "+file);
			else info("不支持 "+af+" 格式的文件");
			return;
		}
		close.onclick=function(){
			console.log("close btn clicked");
			quit();
		}
		play.onclick=function(){
			console.log("play btn clicked");
			cplayMp3();
		}
		stop.onclick=function(){
			console.log("stop btn clicked");
			if(is_music_play) cplayMp3();
			element.load();
			console.log("music loaded");
		}
		document.onkeydown=function(){
			// console.log("key pressed");
			if(event.keyCode==37){
				console.log("left key pressed");
				element.currentTime-=15;
			}
			if(event.keyCode==39){
				console.log("right key pressed");
				element.currentTime+=15;
			}
			if(event.keyCode==32){
				console.log("space key pressed");
				cplayMp3();
			}
			if(event.keyCode==27){
				console.log("Esc key pressed");
				quit();
			}
		}
		cplayMp3();
		let value_duration;
		let value_currentTime;
		let value_duration_sec;
		let value_currentTime_sec;
		let text_value;
		let element_duration=document.getElementById("musicPlayer_duration_text");
		let element_currentTime=document.getElementById("musicPlayer_currentTime");
		setInterval(function(){
			value_duration=element.duration;
			value_currentTime=element.currentTime;
			value_duration_sec=~~(value_duration%60);
			if(value_duration_sec<10) value_duration_sec="0"+value_duration_sec;
			value_currentTime_sec=~~(value_currentTime%60);
			if(value_currentTime_sec<10) value_currentTime_sec="0"+value_currentTime_sec;
			text_value=~~(value_currentTime/60)+":"+value_currentTime_sec+"/"+~~(value_duration/60)+":"+value_duration_sec;
			element_duration.innerHTML=text_value;
			element_currentTime.style.width=(1/(value_duration/value_currentTime))*100+"%";
			if(element_currentTime.style.width=="100%"){
				console.log("music finished");
				play.classList.remove("fa-pause");
				play.classList.add("fa-play");
				is_music_play=0;
			}
		},500);
	}
}


function getObjectURL(file) { 
	var url = null; 
	if (window.createObjcectURL!= undefined) { 
		url = window.createOjcectURL(file);
	}
	else if (window.URL != undefined) {
		url = window.URL.createObjectURL(file);
	}
	else if (window.webkitURL != undefined) { 
		url = window.webkitURL.createObjectURL(file);
	} 
	return url; 
}

//time
{
	let sec=document.getElementById("sec");
	let date=document.getElementById("date");
	let time;

	function _sec(time){
		let m=time.getMinutes();
		let s=time.getSeconds();
		if(m<10) m="0"+m;
		if(s<10) s="0"+s;
		return time.getHours()+":"+m+":"+s;
	}
	function _date(time){
		return time.getFullYear()+"/"+(time.getMonth()+1)+"/"+time.getDate();
	}

	setInterval(function(){
		time=new Date();
		sec.innerHTML=_sec(time);
		date.innerHTML=_date(time);
	},500);
}