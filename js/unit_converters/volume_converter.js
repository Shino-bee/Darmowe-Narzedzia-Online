export function volume_converter(indexValueInTable, whichValue, value) {
  const volumeUnitValues = {
    "cubic meter": 1,
    "cubic kilometer": 0.000000001,
    "cubic decimeter": 1000,
    "cubic centimeter": 1000000,
    "cubic millimeter": 1000000000,
    liter: 1000,
    milliliter: 1000000,
    "gallon USA": 264.17217686,
    "gallon UK": 219.9692483,
    "cubic inch": 61023.744095,
    "cubic foot": 35.314666721,
    "cubic yard": 1.3079506193,
    "cubic mile": 2.399128636e-10,
  };
  const baseUnitValue = volumeUnitValues[whichValue];
  value = parseInt(value);

  switch (indexValueInTable) {
    case 0:
      return (value / baseUnitValue) * volumeUnitValues["cubic meter"];
    case 1:
      return (value / baseUnitValue) * volumeUnitValues["cubic kilometer"];
    case 2:
      return (value / baseUnitValue) * volumeUnitValues["cubic decimeter"];
    case 3:
      return (value / baseUnitValue) * volumeUnitValues["cubic centimeter"];
    case 4:
      return (value / baseUnitValue) * volumeUnitValues["cubic millimeter"];
    case 5:
      return (value / baseUnitValue) * volumeUnitValues["liter"];
    case 6:
      return (value / baseUnitValue) * volumeUnitValues["milliliter"];
    case 7:
      return (value / baseUnitValue) * volumeUnitValues["gallon USA"];
    case 8:
      return (value / baseUnitValue) * volumeUnitValues["gallon UK"];
    case 9:
      return (value / baseUnitValue) * volumeUnitValues["cubic inch"];
    case 10:
      return (value / baseUnitValue) * volumeUnitValues["cubic foot"];
    case 11:
      return (value / baseUnitValue) * volumeUnitValues["cubic yard"];
    case 12:
      return (value / baseUnitValue) * volumeUnitValues["cubic mile"];
  }
}
