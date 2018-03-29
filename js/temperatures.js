/* ---------- Start of the program ---------- */


// Declaration of the strict mode
'use strict';

// Page load ending event
window.addEventListener('DOMContentLoaded', function() {

	// Object with methods and properties
	var temperatures = {

		// Inputs
		fahrenheit: document.getElementById('fahrenheit'),
		celsius: document.getElementById('celsius'),
		kelvin: document.getElementById('kelvin'),

		// Formulas - from one measure to other measure
		fahrenheitCount: function() {
			this.fahrenheit.addEventListener('input', function() {

				// From String to the Number
				var num = parseFloat(this.value);

				// Formulas
				temperatures.celsius.value = (num - 32) / 1.8;
				temperatures.kelvin.value = ((num - 32) / 1.8) + 273.15;
			});
		},

		celsiusCount: function() {
			this.celsius.addEventListener('input', function() {

				var num = parseFloat(this.value);

				temperatures.fahrenheit.value = (num * 1.8) + 32;
				temperatures.kelvin.value = num + 273.15;
			});
		},

		kelvinCount: function() {
			this.kelvin.addEventListener('input', function() {

				var num = parseFloat(this.value);

				temperatures.celsius.value = num - 273.15;
				temperatures.fahrenheit.value = ((num - 273.15) * 1.8) + 32;
			});
		}
	};

	// Counting methods calling
	temperatures.fahrenheitCount();
	temperatures.celsiusCount();
	temperatures.kelvinCount();
});


/* ---------- End of the program ---------- */