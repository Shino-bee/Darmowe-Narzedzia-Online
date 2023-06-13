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
  value = parseInt(value);

  switch (indexValueInTable) {
    // meter
    case 0:
      return (value / baseUnitValue) * lengthUnitValues["meter"];
    // kilometer
    case 1:
      return (value / baseUnitValue) * lengthUnitValues["kilometer"];
    // decimeter
    case 2:
      return (value / baseUnitValue) * lengthUnitValues["decimeter"];
    // centimeter
    case 3:
      return (value / baseUnitValue) * lengthUnitValues["centimeter"];
    // millimeter
    case 4:
      return (value / baseUnitValue) * lengthUnitValues["millimeter"];
    // micrometer
    case 5:
      return (value / baseUnitValue) * lengthUnitValues["micrometer"];
    // nanometer
    case 6:
      return (value / baseUnitValue) * lengthUnitValues["nanometer"];
    // mile
    case 7:
      return (value / baseUnitValue) * lengthUnitValues["mile"];
    // foot
    case 8:
      return (value / baseUnitValue) * lengthUnitValues["foot"];
    // inch
    case 9:
      return (value / baseUnitValue) * lengthUnitValues["inch"];
    // light year
    case 10:
      return (value / baseUnitValue) * lengthUnitValues["light year"];
  }
}
