function day(){
	var a=document.getElementById('date').value;
	var b=document.getElementById('month').value;
	var c=document.getElementById('year').value;
	var o=document.getElementById('output');
	var arr=['sunday','monday','tuesday','wednesday','thrusday','friday','saturday'];
	var time=new Date(a+b+c);
	var day=arr[time.getDay()];

	if(a=='' || a<=0 || a>=32){
		alert('please enter date');
	}
	else if(b==''){
		alert('please enter month');
	}
	else if(c==''){
		alert('please enter year');
	}
	else{
		o.innerHTML='The day on '+ a+' ' + b+' ' + c + ' was '+day;
	}
}