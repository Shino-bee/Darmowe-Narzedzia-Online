export function length_converter(indexValueInTable, whichValue, value) {
  const lengthUnitValues = {
    Metry: 1,
    Kilometry: 0.001,
    Centymetry: 100,
    Milimetry: 1000,
    Mikrometry: 1000000,
    Nanometry: 1000000000,
    Mile: 0.00062136887563302,
    Stopy: 3.2808398950131,
    Cale: 39.370078740157,
    "Lata świetlne": 1.0570087076377e-16,
  };
  const baseLengthValue = lengthUnitValues[whichValue];
  value = parseInt(value);
  // console.log(indexValueInTable, whichValue, value, baseLengthValue);

  switch (indexValueInTable) {
    // meter
    case 0:
      return (value / baseLengthValue) * lengthUnitValues["Metry"];
    // kilometer
    case 1:
      return (value / baseLengthValue) * lengthUnitValues["Kilometry"];
    // centimeter
    case 2:
      return ((value / baseLengthValue) * lengthUnitValues["Centymetry"]);
    // millimeter
    case 3:
      return (value / baseLengthValue) * lengthUnitValues["Milimetry"];
    // micrometer
    case 4:
      return (value / baseLengthValue) * lengthUnitValues["Mikrometry"];
    // nanometer
    case 5:
      return (value / baseLengthValue) * lengthUnitValues["Nanometry"];
    // mile
    case 6:
      return (value / baseLengthValue) * lengthUnitValues["Mile"];
    // foot
    case 7:
      return (value / baseLengthValue) * lengthUnitValues["Stopy"];
    // inch
    case 8:
      return (value / baseLengthValue) * lengthUnitValues["Cale"];
    // light year
    case 9:
      return (value / baseLengthValue) * lengthUnitValues["Lata świetlne"];
  }
}
