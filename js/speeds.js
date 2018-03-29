/* ---------- Start of the program ---------- */


// Declaration of the strict mode
'use strict';

// Page load ending event
window.addEventListener('DOMContentLoaded', function() {

	// Object with methods and properties
	var speeds = {

		// Inputs
		mph: document.getElementById('mph'),
		kph: document.getElementById('kph'),

		// Formulas - from one measure to other measure
		mphCount: function() {
			this.mph.addEventListener('input', function() {
				var num = parseFloat(this.value);
				speeds.kph.value = num / 1000;
			});		
		},
		
		kphCount: function() {
			this.kph.addEventListener('input', function() {
				var num = parseFloat(this.value);
				speeds.mph.value = num * 1000;
			});
		}
	};

	// Counting methods calling
	speeds.mphCount();
	speeds.kphCount();
});


/* ---------- End of the program ---------- */