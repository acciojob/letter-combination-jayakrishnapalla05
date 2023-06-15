function letterCombinations(input) {
  //Complete the function
	let table = {
    "2" : "abc",
    "3" : "def",
    "4" : "ghi",
    "5" : "jkl",
    "6" : "mno",
    "7" : "pqrs",
    "8" : "tuv",
    "9" : "wxyz"
}

 let solution=[];
 function solve(currentIndex, calcString){
			
		if(input.length<=currentIndex){
			solution.push(calcString);
			return ;
		}
		
	let currChar=input[currentIndex];
	for(let i=0; i<table[currChar].length; i++)
	{
		solve(currentIndex+1, calcString+table[currChar][i] );	
	}
  }
	solve(0,"");
	console.log(solution);
	
}

module.exports = letterCombinations;
