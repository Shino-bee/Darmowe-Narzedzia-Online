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
    // kilogram
    case 0:
      return (value / baseUnitValue) * weightUnitValues["kilogram"];
    // dekagram
    case 1:
      return (value / baseUnitValue) * weightUnitValues["dekagram"];
    // gram
    case 2:
      return (value / baseUnitValue) * weightUnitValues["gram"];
    // miligram
    case 3:
      return (value / baseUnitValue) * weightUnitValues["miligram"];
    // pound
    case 4:
      return (value / baseUnitValue) * weightUnitValues["pound"];
    // ounce
    case 5:
      return (value / baseUnitValue) * weightUnitValues["ounce"];
    // carat
    case 6:
      return (value / baseUnitValue) * weightUnitValues["carat"];
    // ton
    case 7:
      return (value / baseUnitValue) * weightUnitValues["ton"];
  }
}
