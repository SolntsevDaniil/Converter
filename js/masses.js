/* ---------- Start of the program ---------- */

// Declaration of the strict mode
'use strict';

// Page load ending event
window.addEventListener('DOMContentLoaded', function() {

	// Object with methods and properties
	var mass = {

		// Grams input
		grams: document.getElementById('grams'),

		// Kilograms input
		kilograms: document.getElementById('kilograms'),

		// Pounds input
		pounds: document.getElementById('pounds'),

		// Ounces input
		ounces: document.getElementById('ounces'),

		// Stones input
		stones: document.getElementById('stones'),



		// From grams to the other measures
		gramsCount: function() {
			this.grams.addEventListener('input', function() {
				var num = parseFloat(this.value);
				mass.kilograms.value = num / 1000;
				mass.pounds.value = num * 0.0022046
				mass.ounces.value = num * 0.035274;
				mass.stones.value = num * 0.00015747;
			});
		},

		// From kilograms to the other measures
		kilogramsCount: function() {
			this.kilograms.addEventListener('input', function() {

				// From String to the Number
				var num = parseFloat(this.value);

				// Formulas
				mass.grams.value = num * 1000;
				mass.pounds.value = num * 2.2046;
				mass.ounces.value = num * 35.274;
				mass.stones.value = num * 0.1574;
			});
		},

		// From pounds to the other measures
		poundsCount: function() {
			this.pounds.addEventListener('input', function() {

				// From String to the Number
				var num = parseFloat(this.value);

				// Formulas
				mass.grams.value = num / 0.0022046;
				mass.kilograms.value = num / 2.2046;
				mass.ounces.value = num * 16;
				mass.stones.value = num * 0.071429;
			});
		},

		// From ounces to the other measures
		ouncesCount: function() {
			this.ounces.addEventListener('input', function() {

				// From String to the Number
				var num = parseFloat(this.value);

				// Formulas
				mass.grams.value = num / 0.035274;
				mass.kilograms.value = num / 35.274;
				mass.pounds.value = num * 0.0625;
				mass.stones.value = num * 0.0044643;
			});
		},

		// From stones to the other measures
		stonesCount: function() {
			this.stones.addEventListener('input', function() {

				// From String to the Number
				var num = parseFloat(this.value);

				// Formulas
				mass.grams.value = num / 0.00015747;
				mass.kilograms.value = num / 0.15747;
				mass.pounds.value = num * 14;
				mass.ounces.value = num * 224;
			});
		}
	};

	// Calling of the methods
	mass.gramsCount();
	mass.kilogramsCount();
	mass.poundsCount();
	mass.ouncesCount();
	mass.stonesCount();
});


/* ---------- End of the program ---------- */