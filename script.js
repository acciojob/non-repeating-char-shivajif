function firstNonRepeatedChar(str) {
	if(!str||str.length===0){
		return null;
	}
	let map=new Map();
	for(let i=0;i<str.length();i++){
		if(map.has(i)){
			map.set(i,map.get(i)+1);
		}
		else{
			map.set(i,1);
		}
	}
	for(let i=0;i<str.length;i++){
		if(map.get(i)===1){
			return i;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 