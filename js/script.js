/* ---------- Start of the program ---------- */

// Declaration of the strict mode
'use strict';

// Page load ending event
window.addEventListener('DOMContentLoaded', function() {

	// Object with methods and properties
	var temperatures = {

		// Fahrenheit input
		fahrenheit: document.getElementById('fahrenheit'),

		// Celsius input
		celsius: document.getElementById('celsius'),

		// Kelvin input
		kelvin: document.getElementById('kelvin'),

		// From fahrenheit to other measures method
		fahrenheitCount: function() {
			this.fahrenheit.addEventListener('input', function() {

				// From String to the Number
				var num = parseFloat(this.value);

				// Formulas
				temperatures.celsius.value = (num - 32) / 1.8;
				temperatures.kelvin.value = ((num - 32) / 1.8) + 273.15;
			});
		},

		// From celsius to other measures method
		celsiusCount: function() {
			this.celsius.addEventListener('input', function() {

				// From String to the Number
				var num = parseFloat(this.value);

				// Formulas
				temperatures.fahrenheit.value = (num * 1.8) + 32;
				temperatures.kelvin.value = num + 273.15;
			});
		},

		// From kelvin to other measures method
		kelvinCount: function() {
			this.kelvin.addEventListener('input', function() {

				// From String to the Number
				var num = parseFloat(this.value);

				// Formulas
				temperatures.celsius.value = num - 273.15;
				temperatures.fahrenheit.value = ((num - 273.15) * 1.8) + 32;
			});
		}
	};


	// Calling of the methods
	temperatures.fahrenheitCount();
	temperatures.celsiusCount();
	temperatures.kelvinCount();
});