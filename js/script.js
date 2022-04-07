// This file contains the JS functions for index.html

'use strict';
/**
 * This function calculates the area of a trapezoid.
 */
function calculate () {
  // input makes value a float
  let height = parseFloat(document.getElementById('height').value)
  let baseA = parseFloat(document.getElementById('base-a').value)
  let baseB = parseFloat(document.getElementById('base-b').value)

  // process (formula for area)
  let area = (baseA + baseB) / 2 * height

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²'
}