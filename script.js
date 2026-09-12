function firstNonRepeatedChar(str) {
	if(!str||str.length===0){
		return null;
	}
	let map=new Map();
	for(let i=0;i<str.length;i++){
		let ch=str[i];
		if(map.has(ch)){
			map.set(ch,map.get(ch)+1);
		}
		else{
			map.set(ch,1);
		}
	}
	for(let i=0;i<str.length;i++){
		if(map.get(str[i])===1){
			return str[i];
		}
	}
	return null;
}
 const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 