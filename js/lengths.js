/* ---------- Start of the program ---------- */


// WARNING! A lot of shitcode inside!
// Declaration of the strict mode
'use strict';

// Page load ending event
window.addEventListener('DOMContentLoaded', function() {
	
	// Object with propeties and methods
	var lengths = {

		// Inputs
		cantimeters: document.getElementById('cantimeters'),
		meters: document.getElementById('meters'),
		inches: document.getElementById('inches'),
		feet: document.getElementById('feet'),
		kilometers: document.getElementById('kilometers'),
		yards: document.getElementById('yards'),
		miles: document.getElementById('miles'),

		// Fromulas - from one measure to other measure
		cantimetersCount: function() {
			this.cantimeters.addEventListener('input', function() {

				var num = parseFloat(this.value);

				lengths.meters.value = num / 100;
				lengths.inches.value = num * 0.39370;
				lengths.feet.value = num * 0.032808;
				lengths.kilometers.value = num / 100000;
				lengths.yards.value = num * 0.010936;
				lengths.miles.value = num * 0.0000062137;
			});
		},

		metersCount: function() {
			this.meters.addEventListener('input', function() {
				
				var num = parseFloat(this.value);

				lengths.cantimeters.value = num / 0.01;
				lengths.inches.value = num * 39.370;
				lengths.feet.value = num * 3.2808;
				lengths.kilometers.value = num / 1000;
				lengths.yards.value = num * 1.0936;
				lengths.miles.value = num * 0.00062137;
			});
		},

		inchesCount: function() {
			this.inches.addEventListener('input', function() {
				
				var num = parseFloat(this.value);

				lengths.cantimeters.value = num / 0.39370;
				lengths.meters.value = num / 39.370;
				lengths.feet.value = num * 0.083333;
				lengths.kilometers.value = num / 39370;
				lengths.yards.value = num * 0.027778;
				lengths.miles.value = num * 0.000015783;
			});
		},

		feetCount: function() {
			this.feet.addEventListener('input', function() {
				
				var num = parseFloat(this.value);

				lengths.cantimeters.value = num / 0.032808;
				lengths.meters.value = num / 3.2808;
				lengths.inches.value = num * 12;
				lengths.kilometers.value = num / 3280.8;
				lengths.yards.value = num * 0.33333;
				lengths.miles.value = num * 0.00018939;
			});
		},

		kilometersCount: function() {
			this.kilometers.addEventListener('input', function() {
				
				var num = parseFloat(this.value);

				lengths.cantimeters.value = num * 100000;
				lengths.meters.value = num * 1000;
				lengths.inches.value = num * 39370;
				lengths.feet.value = num * 3280.8;
				lengths.yards.value = num * 1093.6;
				lengths.miles.value = num * 0.62137;
			});
		},

		yardsCount: function() {
			this.yards.addEventListener('input', function() {
				
				var num = parseFloat(this.value);

				lengths.cantimeters.value = num / 0.010936;
				lengths.meters.value = num / 1.0936;
				lengths.inches.value = num * 36;
				lengths.feet.value = num * 3;
				lengths.kilometers.value = num / 1093.6;
				lengths.miles.value = num * 0.00056818;
			});
		},

		milesCount: function() {
			this.miles.addEventListener('input', function() {
				
				var num = parseFloat(this.value);

				lengths.cantimeters.value = num / 0.0000062137;
				lengths.meters.value = num / 0.00062137;
				lengths.inches.value = num * 63360;
				lengths.feet.value = num * 5280;
				lengths.kilometers.value = num / 0.62137;
				lengths.yards.value = num * 1760;
			});
		}
	};

	// Counting methods calling
	lengths.cantimetersCount();
	lengths.metersCount();
	lengths.inchesCount();
	lengths.feetCount();
	lengths.kilometersCount();
	lengths.yardsCount();
	lengths.milesCount();
});


/* ---------- End of the program ---------- */