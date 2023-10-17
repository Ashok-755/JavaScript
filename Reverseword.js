function printWords(str) {

	
	let word;
	
	
	let lines = str.split("\n");
	for (let i = 0; i < lines.length; i++) {
		let words = lines[i].split(" ");
		
		for (let j = 0; j < words.length; j++) {
			word = words[j].split("").reverse().join("");
			process.stdout.write(word + " ");
		}
	}
}


let s = "Welcome to my world";
printWords(s);
