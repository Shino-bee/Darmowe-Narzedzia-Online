export function length_converter(indexValueInTable, whichValue, value) {
  const lengthUnitValues = {
    meter: 1,
    kilometer: 0.001,
    decimeter: 10,
    centimeter: 100,
    millimeter: 1000,
    micrometer: 1000000,
    nanometer: 1000000000,
    mile: 0.00062136887563302,
    foot: 3.2808398950131,
    inch: 39.370078740157,
    "light year": 1.0570087076377e-16,
  };
  const baseUnitValue = lengthUnitValues[whichValue];
  value = parseFloat(value);

  switch (indexValueInTable) {
    case 0:
      return (value / baseUnitValue) * lengthUnitValues["meter"];
    case 1:
      return (value / baseUnitValue) * lengthUnitValues["kilometer"];
    case 2:
      return (value / baseUnitValue) * lengthUnitValues["decimeter"];
    case 3:
      return (value / baseUnitValue) * lengthUnitValues["centimeter"];
    case 4:
      return (value / baseUnitValue) * lengthUnitValues["millimeter"];
    case 5:
      return (value / baseUnitValue) * lengthUnitValues["micrometer"];
    case 6:
      return (value / baseUnitValue) * lengthUnitValues["nanometer"];
    case 7:
      return (value / baseUnitValue) * lengthUnitValues["mile"];
    case 8:
      return (value / baseUnitValue) * lengthUnitValues["foot"];
    case 9:
      return (value / baseUnitValue) * lengthUnitValues["inch"];
    case 10:
      return (value / baseUnitValue) * lengthUnitValues["light year"];
  }
}
