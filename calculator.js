function calculate1() 
{
	
	round2score = document.getElementById('round[2][score]').value;
	round2rating = document.getElementById('round[2][rating]').value;
	round2slope = document.getElementById('round[2][slope]').value;
	document.getElementById("round[2][handicap]").value = String(round2score - round2rating) * (113/round2slope);

}

function calculate2() 
{
	
	round3score = document.getElementById('round[3][score]').value;
	round3rating = document.getElementById('round[3][rating]').value;
	round3slope = document.getElementById('round[3][slope]').value;
	document.getElementById("round[3][handicap]").value = String(round3score - round3rating) * (113/round3slope);

}
function calculate3() 
{
	
	round4score = document.getElementById('round[4][score]').value;
	round4rating = document.getElementById('round[4][rating]').value;
	round4slope = document.getElementById('round[4][slope]').value;
	document.getElementById("round[4][handicap]").value = String(round4score - round4rating) * (113/round4slope);

}
function calculate4() 
{
	
	round5score = document.getElementById('round[5][score]').value;
	round5rating = document.getElementById('round[5][rating]').value;
	round5slope = document.getElementById('round[5][slope]').value;
	document.getElementById("round[5][handicap]").value = String(round5score - round5rating) * (113/round5slope);

}
