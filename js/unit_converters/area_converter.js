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
  value = parseFloat(value);

  switch (indexValueInTable) {
    case 0:
      return (value / baseUnitValue) * areaUnitValues["square meter"];
    case 1:
      return (value / baseUnitValue) * areaUnitValues["square kilometer"];
    case 2:
      return (value / baseUnitValue) * areaUnitValues["square decimeter"];
    case 3:
      return (value / baseUnitValue) * areaUnitValues["square centimeter"];
    case 4:
      return (value / baseUnitValue) * areaUnitValues["square millimeter"];
    case 5:
      return (value / baseUnitValue) * areaUnitValues["are"];
    case 6:
      return (value / baseUnitValue) * areaUnitValues["hectare"];
    case 7:
      return (value / baseUnitValue) * areaUnitValues["square inch"];
    case 8:
      return (value / baseUnitValue) * areaUnitValues["square foot"];
    case 9:
      return (value / baseUnitValue) * areaUnitValues["square yard"];
    case 10:
      return (value / baseUnitValue) * areaUnitValues["acre"];
  }
}
