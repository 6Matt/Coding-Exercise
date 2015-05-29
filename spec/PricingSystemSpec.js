describe("Pricing system tests", function() {
  var system;

  beforeEach(function() {
    system = new PricingSystem();
  });

  it("should match expected output for Input 1", function() {
    system.command("$1299.99");
    system.command("3 people");
    system.command("food");
    expect(system.finalPrice()).toEqual("$1591.58");
  });

  it("should match expected output for Input 2", function() {
    system.command("$5432.00");
    system.command("1 person");
    system.command("drugs");
    expect(system.finalPrice()).toEqual("$6199.81");
  });

  it("should match expected output for Input 3", function() {
    system.command("$12456.95");
    system.command("4 people");
    system.command("books");
    expect(system.finalPrice()).toEqual("$13707.63");
  });

  it("should add a 2% markup for electonics", function() {
    system.command("$100.00");
    system.command("electronics");
    expect(system.finalPrice()).toEqual("$107.10");
  });

  it("should add a 5% base markup for all jobs", function() {
    system.command("$100.00");
    expect(system.finalPrice()).toEqual("$105.00");
  });

  it("should support jobs with multiple materials", function() {
    system.command("$267.44");
    system.command("drugs");
    system.command("food");
    system.command("electronics");
    expect(system.finalPrice()).toEqual("$343.99");
  });

});
