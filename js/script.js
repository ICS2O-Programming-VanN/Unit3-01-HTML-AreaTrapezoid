// This file contains the JS functions for index.html

'use strict';
/**
 * This function calculates the area of a trapezoid.
 */
function calculate () {
  // Variables
  // Value is made into Float
  let height = parseFloat(document.getElementById('height').value) // Stores value from user
  let baseA = parseFloat(document.getElementById('base-a').value) // Stores value from user
  let baseB = parseFloat(document.getElementById('base-b').value) // Stores value from user

  // Process (calculates area)
  let area = (baseA + baseB) / 2 * height

  // Outputs Area
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²'
}