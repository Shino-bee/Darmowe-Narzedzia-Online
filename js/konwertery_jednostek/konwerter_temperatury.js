export function temperature_converter(indexValueInTable, whichValue, value) {
  const temperatureUnitValues = {
    Celsius: 1,
    Fahrenheit: 32,
    kelvin: 273.15,
  };
  value = parseFloat(value);

  switch (indexValueInTable) {
    case 0:
      if (whichValue == "Celsius") {
        return value;
      } else if (whichValue == "Fahrenheit") {
        return ((value - temperatureUnitValues["Fahrenheit"]) * 5) / 9;
      } else if (whichValue == "kelvin") {
        return value - temperatureUnitValues["kelvin"];
      }
    case 1:
      if (whichValue == "Celsius") {
        return (value * 9) / 5 + temperatureUnitValues["Fahrenheit"];
      } else if (whichValue == "Fahrenheit") {
        return value;
      } else if (whichValue == "kelvin") {
        return ((value - temperatureUnitValues["kelvin"]) * 9) / 5 + 32;
      }
    case 2:
      if (whichValue == "Celsius") {
        return value + temperatureUnitValues["kelvin"];
      } else if (whichValue == "Fahrenheit") {
        return ((value - 32) * 5) / 9 + temperatureUnitValues["kelvin"];
      } else if (whichValue == "kelvin") {
        return value;
      }
  }
}
