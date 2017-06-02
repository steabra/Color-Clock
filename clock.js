function startTime() {
	
	var today = new Date();
	var hour = today.getHours();
	var mins = today.getMinutes();
	var secs = today.getSeconds();

	changeBackground(hour, mins, secs);

	mins = checkTime(mins);
	secs = checkTime(secs);

	document.getElementById('clock').innerHTML = hour+":"+mins+":"+secs;
	setTimeout(function() {
		startTime();
	}, 500);

}

function changeBackground(hour, mins, secs) {
	/* 
	 * For smooth color change, 
	 * work out total minutes and 
	 * change hue based on minutes passed. 
	 */
	 var totalMins = (hour * 60) + mins;
	 var hue = totalMins * 0.25;

	 /* For saturation we'll just add 20 to keep itt in the mid ranges. */
	 var sat = mins + 20;

	 /* And the same for lightness. */
	 var light = secs + 15;

	 document.body.style.backgroundColor = "hsl(" + hue + ", " + sat + "%, " + light + "%)";
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}