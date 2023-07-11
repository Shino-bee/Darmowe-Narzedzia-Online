export function weight_converter(indexValueInTable, whichValue, value) {
  const weightUnitValues = {
    kilogram: 1,
    dekagram: 100,
    gram: 1000,
    miligram: 1000000,
    pound: 2.2046226218,
    ounce: 35.27396195,
    carat: 5000,
    ton: 0.001,
  };
  const baseUnitValue = weightUnitValues[whichValue];
  value = parseInt(value);

  switch (indexValueInTable) {
    case 0:
      return (value / baseUnitValue) * weightUnitValues["kilogram"];
    case 1:
      return (value / baseUnitValue) * weightUnitValues["dekagram"];
    case 2:
      return (value / baseUnitValue) * weightUnitValues["gram"];
    case 3:
      return (value / baseUnitValue) * weightUnitValues["miligram"];
    case 4:
      return (value / baseUnitValue) * weightUnitValues["pound"];
    case 5:
      return (value / baseUnitValue) * weightUnitValues["ounce"];
    case 6:
      return (value / baseUnitValue) * weightUnitValues["carat"];
    case 7:
      return (value / baseUnitValue) * weightUnitValues["ton"];
  }
}
