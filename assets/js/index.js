function AttributeModalOpen(attr) {
	document.getElementById("AttributeModalLabel").innerHTML = attr + " Attribute";
	document.getElementById("AttributeModalAttribute").value = document.getElementById(attr + "Attribute").value;
	document.getElementById("AttributeModalSaveButton").setAttribute("onclick","AttributeModalSave('" + attr + "')");

	UpdateAttributeDerivatives("AttributeModal");
}




function AttributeModalSave(attr) {
	var base = document.getElementById("AttributeModalAttribute").value;

	document.getElementById(attr + "StatButtonForXS").innerHTML = base;
	document.getElementById(attr + "Attribute").value = base;
	UpdateAttributeDerivatives(attr);
}




function DecreaseAttribute(attr) {
	document.getElementById(attr + "Attribute").stepDown(1);

	UpdateAttributeDerivatives(attr);
}




function IncreaseAttribute(attr) {
	document.getElementById(attr + "Attribute").stepUp(1);

	UpdateAttributeDerivatives(attr);
}




function ShowPointBuyToggle() {
	Array.from(document.getElementsByClassName("ShowPointBuy")).forEach((item, i) => {
		item.classList.toggle("d-none");
	});
}




function UpdateAttributeDerivatives(attr) {
	var stat = parseInt(document.getElementById(attr + "Attribute").value);
	var mod = Math.floor((stat-10)/2);

	var pointBuy;

	if (attr != "AttributeModal") {
		document.getElementById(attr + "StatButtonForXS").innerHTML = stat;
	}
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

	document.getElementById("PointBuyTotal").innerHTML = parseInt(document.getElementById("StrengthPointBuy").innerHTML)
		+ parseInt(document.getElementById("ConstitutionPointBuy").innerHTML)
		+ parseInt(document.getElementById("DexterityPointBuy").innerHTML)
		+ parseInt(document.getElementById("IntelligencePointBuy").innerHTML)
		+ parseInt(document.getElementById("WisdomPointBuy").innerHTML)
		+ parseInt(document.getElementById("CharismaPointBuy").innerHTML);
}




function OnDocumentLoad() {
	UpdateAttributeDerivatives("Strength");
	UpdateAttributeDerivatives("Constitution");
	UpdateAttributeDerivatives("Dexterity");
	UpdateAttributeDerivatives("Intelligence");
	UpdateAttributeDerivatives("Wisdom");
	UpdateAttributeDerivatives("Charisma");
}
