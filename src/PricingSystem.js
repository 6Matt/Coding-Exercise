function PricingSystem() {
	this.flatMarkup = 0.05;
	this.personMarkup = 0.012;
	this.materialMarkups = new Object();
	this.materialMarkups['drugs'] = 0.075;
	this.materialMarkups['food'] = 0.13;
	this.materialMarkups['electronics'] = 0.02;

	this.basePricePlusFlat = 0;
	this.markedUpPrice = 0;
}

PricingSystem.prototype.command = function(input) {
	var basePriceCommand = /\$\d*\.?\d*/;
	var peopleCommand = /(\d+)\s(person|people)/i;

	var peopleTest = peopleCommand.exec(input);

	if(basePriceCommand.test(input) && this.basePricePlusFlat === 0) {
		this.basePricePlusFlat = input.substring(1) * (1 + this.flatMarkup);
		this.markedUpPrice = this.basePricePlusFlat;
	}
	else if(peopleTest !== null && peopleTest[0] == peopleTest.input) {
		this.markedUpPrice += this.basePricePlusFlat * (peopleTest[1] * this.personMarkup);
	}
	else if(typeof this.materialMarkups[input] !== 'undefined') {
		this.markedUpPrice += this.basePricePlusFlat * this.materialMarkups[input];
	}
};

PricingSystem.prototype.finalPrice = function() {
	return "$"+this.markedUpPrice.toFixed(2);
}
