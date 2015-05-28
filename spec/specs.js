describe('romanNumeral', function() {
  it("should return the number based on the respective symbol", function() {
    expect(romanNumeral(1)).to.eq("I");
    expect(romanNumeral(5)).to.eq("V");
  });

  it("should return correct number of symbols for numeral < 4", function() {
    expect(romanNumeral(3)).to.eq("III");
  });

  it("should return correct symbols for numbers 6, 7, 8", function() {
    expect(romanNumeral(6)).to.eq("VI");
  });
});

describe('lessThanFour', function() {
  it("should return correct number of symbols for numeral < 4", function() {
    expect(romanNumeral(3)).to.eq("III");
  });
});
