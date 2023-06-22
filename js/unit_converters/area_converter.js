export function area_converter(indexValueInTable, whichValue, value) {
  const areaUnitValues = {
    "square meter": 1,
    "square kilometer": 0.000001,
    "square decimeter": 100,
    "square centimeter": 10000,
    "square millimeter": 1000000,
    are: 0.01,
    hectare: 0.0001,
    "square inch": 1550.0031,
    "square foot": 10.763910417,
    "square yard": 1.1959900463,
    acre: 0.0002471054,
  };
  const baseUnitValue = areaUnitValues[whichValue];
  value = parseInt(value);

  switch (indexValueInTable) {
    // square meter
    case 0:
      return (value / baseUnitValue) * areaUnitValues["square meter"];
    // square kilometer
    case 1:
      return (value / baseUnitValue) * areaUnitValues["square kilometer"];
    // square decimeter
    case 2:
      return (value / baseUnitValue) * areaUnitValues["square decimeter"];
    // square centimeter
    case 3:
      return (value / baseUnitValue) * areaUnitValues["square centimeter"];
    // square millimeter
    case 4:
      return (value / baseUnitValue) * areaUnitValues["square millimeter"];
    // are
    case 5:
      return (value / baseUnitValue) * areaUnitValues["are"];
    // hectare
    case 6:
      return (value / baseUnitValue) * areaUnitValues["hectare"];
    // square inch
    case 7:
      return (value / baseUnitValue) * areaUnitValues["square inch"];
    // square foot
    case 8:
      return (value / baseUnitValue) * areaUnitValues["square foot"];
    // square yard
    case 9:
      return (value / baseUnitValue) * areaUnitValues["square yard"];
    // acre
    case 10:
      return (value / baseUnitValue) * areaUnitValues["acre"];
  }
}
