function DecreaseAttribute(attr) {
	DecreaseNumber(attr + "Attribute");

	UpdateAttributeDerivatives(attr);
}




function DecreaseNumber(elem) {
	var input = parseInt(document.getElementById(elem).value);
	var min = parseInt(document.getElementById(elem).min);

	if (input == min) {
		return
	}

	document.getElementById(elem).value = input - 1;
}




function IncreaseAttribute(attr) {
	IncraseNumber(attr + "Attribute");

	UpdateAttributeDerivatives(attr);
}




function IncreaseNumber(elem) {
	var input = parseInt(document.getElementById(elem).value);
	var max = parseInt(document.getElementById(elem).max);

	if (input == max) {
		return
	}

	document.getElementById(elem).value = input + 1;
}




function UpdateAttributeDerivatives(attr) {
	var stat = parseInt(document.getElementById(attr + "Attribute").value);

	var mod;
	var pointBuy;
	var pointBuyTotal;

	mod = Math.floor((stat-10)/2)

	document.getElementById(attr + "Mod").innerHTML = (mod >= 0 ? "+" : "") + String(mod);

	switch(stat) {
		case 18:
			pointBuy = 16;
			break;
		case 17:
			pointBuy = 13;
			break;
		case 16:
			pointBuy = 10;
			break;
		case 15:
			pointBuy = 8;
			break;
		default:
			pointBuy = stat - 8;
			break;
	}

	document.getElementById(attr + "PointBuy").innerHTML = pointBuy;

	pointBuyTotal = parseInt(document.getElementById("StrengthPointBuy").innerHTML)
		+ parseInt(document.getElementById("ConstitutionPointBuy").innerHTML)
		+ parseInt(document.getElementById("DexterityPointBuy").innerHTML)
		+ parseInt(document.getElementById("IntelligencePointBuy").innerHTML)
		+ parseInt(document.getElementById("WisdomPointBuy").innerHTML)
		+ parseInt(document.getElementById("CharismaPointBuy").innerHTML);

	document.getElementById("PointBuyTotal").innerHTML = pointBuyTotal;
}




function OnDocumentLoad() {
	UpdateAttributeDerivatives("Strength");
	UpdateAttributeDerivatives("Constitution");
	UpdateAttributeDerivatives("Dexterity");
	UpdateAttributeDerivatives("Intelligence");
	UpdateAttributeDerivatives("Wisdom");
	UpdateAttributeDerivatives("Charisma");
}
