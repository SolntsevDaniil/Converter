/* ---------- Start of the program ---------- */


// Declaration of the strict mode
'use strict';

// Page load ending event
window.addEventListener('DOMContentLoaded', function() {

	// Object with methods and properties
	var masses = {

		// Inputs
		grams: document.getElementById('grams'),
		kilograms: document.getElementById('kilograms'),
		pounds: document.getElementById('pounds'),
		ounces: document.getElementById('ounces'),
		stones: document.getElementById('stones'),

		// Formulas - from one measure to other measure
		gramsCount: function() {
			this.grams.addEventListener('input', function() {

				// From String to the Number
				var num = parseFloat(this.value);

				// Counting
				masses.kilograms.value = num / 1000;
				masses.pounds.value = num * 0.0022046
				masses.ounces.value = num * 0.035274;
				masses.stones.value = num * 0.00015747;
			});
		},

		kilogramsCount: function() {
			this.kilograms.addEventListener('input', function() {

				var num = parseFloat(this.value);

				masses.grams.value = num * 1000;
				masses.pounds.value = num * 2.2046;
				masses.ounces.value = num * 35.274;
				masses.stones.value = num * 0.1574;
			});
		},

		poundsCount: function() {
			this.pounds.addEventListener('input', function() {

				var num = parseFloat(this.value);

				masses.grams.value = num / 0.0022046;
				masses.kilograms.value = num / 2.2046;
				masses.ounces.value = num * 16;
				masses.stones.value = num * 0.071429;
			});
		},

		ouncesCount: function() {
			this.ounces.addEventListener('input', function() {

				var num = parseFloat(this.value);

				masses.grams.value = num / 0.035274;
				masses.kilograms.value = num / 35.274;
				masses.pounds.value = num * 0.0625;
				masses.stones.value = num * 0.0044643;
			});
		},

		stonesCount: function() {
			this.stones.addEventListener('input', function() {

				var num = parseFloat(this.value);

				masses.grams.value = num / 0.00015747;
				masses.kilograms.value = num / 0.15747;
				masses.pounds.value = num * 14;
				masses.ounces.value = num * 224;
			});
		}
	};

	// Counting methods calling
	masses.gramsCount();
	masses.kilogramsCount();
	masses.poundsCount();
	masses.ouncesCount();
	masses.stonesCount();
});


/* ---------- End of the program ---------- */