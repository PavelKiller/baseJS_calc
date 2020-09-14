var calculate_ex = function(cur_dat, prev_dat, sgn){
	var result = ''
	if (prev_dat == ''){
		return result;
	}
	else{
		switch(sgn){
			case '+':
				console.log(parseFloat(cur_dat)+parseFloat(prev_dat));
				result = (parseFloat(cur_dat)+parseFloat(prev_dat)).toFixed(2);
				break;
			case 'x':
				result = (parseFloat(prev_dat)*parseFloat(cur_dat)).toFixed(2);
				break;
			case '/':
				result = (parseFloat(prev_dat)/parseFloat(cur_dat)).toFixed(2);
				break;
			case '-':
				result = (parseFloat(prev_dat)-parseFloat(cur_dat)).toFixed(2);
				break;
		}
	}
	if(result.toString().split('').slice(-3).join('') == ".00"){
		result = result.toString().split('').slice(0,-3).join('');
	}
	else if(result.toString().split('').slice(-1) == "0"){
		result = result.toString().split('').slice(0,-1).join('');
	}
	return result;
}
