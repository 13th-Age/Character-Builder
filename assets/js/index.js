function AttributeBonusModalOpen(attr) {
	document.getElementById("AttributeBonusModalLabel").innerHTML = attr + " Bonuses";
	document.getElementById("AttributeBonusRacialBonusCheck").checked = document.getElementById(attr + "RacialBonusCheck").checked;
	document.getElementById("AttributeBonusClassBonusCheck").checked = document.getElementById(attr + "ClassBonusCheck").checked;
	document.getElementById("AttributeBonusModalSaveButton").setAttribute("onclick","AttributeBonusModalSave('" + attr + "')");
}




function AttributeBonusModalSave(attr) {
	document.getElementById(attr + "RacialBonusCheck").checked = document.getElementById("AttributeBonusRacialBonusCheck").checked;
	document.getElementById(attr + "ClassBonusCheck").checked = document.getElementById("AttributeBonusClassBonusCheck").checked;

	UpdateAttributeDerivatives(attr);
}




function AttributeModalOpen(attr) {
	document.getElementById("AttributeModalLabel").innerHTML = attr + " Attribute";
	document.getElementById("AttributeModalBase").value = document.getElementById(attr + "Base").value;
	document.getElementById("AttributeModalRacialBonusCheck").checked = document.getElementById(attr + "RacialBonusCheck").checked;
	document.getElementById("AttributeModalClassBonusCheck").checked = document.getElementById(attr + "ClassBonusCheck").checked;
	document.getElementById("AttributeModalSaveButton").setAttribute("onclick","AttributeModalSave('" + attr + "')");

	UpdateAttributeDerivatives("AttributeModal");
}




function AttributeModalSave(attr) {
	document.getElementById(attr + "Base").value = document.getElementById("AttributeModalBase").value;
	document.getElementById(attr + "RacialBonusCheck").checked = document.getElementById("AttributeModalRacialBonusCheck").checked;
	document.getElementById(attr + "ClassBonusCheck").checked = document.getElementById("AttributeModalClassBonusCheck").checked;

	UpdateAttributeDerivatives(attr);
}




function DecreaseAttribute(attr) {
	document.getElementById(attr + "Base").stepDown(1);

	UpdateAttributeDerivatives(attr);
}




function IncreaseAttribute(attr) {
	document.getElementById(attr + "Base").stepUp(1);

	UpdateAttributeDerivatives(attr);
}




function ShowPointBuyToggle() {
	Array.from(document.getElementsByClassName("ShowPointBuyToggleXS")).forEach((item, i) => {
		item.classList.toggle("d-none");
	});

	Array.from(document.getElementsByClassName("ShowPointBuyToggleSM")).forEach((item, i) => {
		item.classList.toggle("d-sm-block");
	});

	Array.from(document.getElementsByClassName("ShowPointBuyToggleMD")).forEach((item, i) => {
		item.classList.toggle("d-md-block");
	});
}




function UpdateAttributeDerivatives(attr) {
	var base = parseInt(document.getElementById(attr + "Base").value);
	var stat = base
		+ (document.getElementById(attr + "RacialBonusCheck").checked == true ? 2 : 0)
		+ (document.getElementById(attr + "ClassBonusCheck").checked == true ? 2 : 0);
	var mod = Math.floor((stat-10)/2);

	var pointBuy;

	if (attr != "AttributeModal") {
		document.getElementById(attr + "StatButtonForXS").innerHTML = base
			+ (base != stat ? " (" + stat + ")" : "");
		document.getElementById(attr + "BonusButtonForSM").innerHTML = (base == stat ? "-" : "+" + (stat - base));
		document.getElementById(attr + "StatAndMod").innerHTML = stat + " (" + (mod >= 0 ? "+" : "") + mod + ")";
	}
	document.getElementById(attr + "Stat").innerHTML = stat;
	document.getElementById(attr + "Mod").innerHTML = (mod >= 0 ? "+" : "") + mod;

	switch(base) {
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
			pointBuy = base - 8;
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
