export function time_converter(indexValueInTable, whichValue, value) {
  const timeUnitValues = {
    second: 1,
    millisecond: 0.001,
    microsecond: 0.000001,
    nanosecond: 0.000000001,
    minute: 60,
    hour: 3600,
    day: 86400,
    week: 604800,
    month: 2629800,
    year: 31557600,
    century: 3155760000,
    millennium: 31557600000,
  };
  const baseUnitValue = timeUnitValues[whichValue];
  value = parseFloat(value);

  switch (indexValueInTable) {
    case 0:
      return (value * baseUnitValue) / timeUnitValues["second"];
    case 1:
      return (value * baseUnitValue) / timeUnitValues["millisecond"];
    case 2:
      return (value * baseUnitValue) / timeUnitValues["microsecond"];
    case 3:
      return (value * baseUnitValue) / timeUnitValues["nanosecond"];
    case 4:
      return (value * baseUnitValue) / timeUnitValues["minute"];
    case 5:
      return (value * baseUnitValue) / timeUnitValues["hour"];
    case 6:
      return (value * baseUnitValue) / timeUnitValues["day"];
    case 7:
      return (value * baseUnitValue) / timeUnitValues["week"];
    case 8:
      return (value * baseUnitValue) / timeUnitValues["month"];
    case 9:
      return (value * baseUnitValue) / timeUnitValues["year"];
    case 10:
      return (value * baseUnitValue) / timeUnitValues["century"];
    case 11:
      return (value * baseUnitValue) / timeUnitValues["millennium"];
  }
}
