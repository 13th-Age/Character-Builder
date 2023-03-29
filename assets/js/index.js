function AttributeBonusModal_Open(attr) {
	document.getElementById("AttributeBonusModal_Label").innerHTML = attr + " Bonuses";
	document.getElementById("AttributeBonusModal_RacialBonusCheck").checked = document.getElementById(attr + "RacialBonusCheck").checked;
	document.getElementById("AttributeBonusModal_ClassBonusCheck").checked = document.getElementById(attr + "ClassBonusCheck").checked;
	document.getElementById("AttributeBonusModal_SaveButton").setAttribute("onclick","AttributeBonusModal_Save('" + attr + "')");
}




function AttributeBonusModal_Save(attr) {
	document.getElementById(attr + "RacialBonusCheck").checked = document.getElementById("AttributeBonusModal_RacialBonusCheck").checked;
	document.getElementById(attr + "ClassBonusCheck").checked = document.getElementById("AttributeBonusModal_ClassBonusCheck").checked;

	UpdateAttributeDerivatives(attr);
}




function AttributeModal_Open(attr) {
	document.getElementById("AttributeModal_Label").innerHTML = attr + " Attribute";
	document.getElementById("AttributeModal_Base").value = document.getElementById(attr + "Base").value;
	document.getElementById("AttributeModal_RacialBonusCheck").checked = document.getElementById(attr + "RacialBonusCheck").checked;
	document.getElementById("AttributeModal_ClassBonusCheck").checked = document.getElementById(attr + "ClassBonusCheck").checked;
	document.getElementById("AttributeModal_SaveButton").setAttribute("onclick","AttributeModal_Save('" + attr + "')");

	UpdateAttributeDerivatives("AttributeModal_");
}




function AttributeModal_Save(attr) {
	document.getElementById(attr + "Base").value = document.getElementById("AttributeModal_Base").value;
	document.getElementById(attr + "RacialBonusCheck").checked = document.getElementById("AttributeModal_RacialBonusCheck").checked;
	document.getElementById(attr + "ClassBonusCheck").checked = document.getElementById("AttributeModal_ClassBonusCheck").checked;

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

	if (attr != "AttributeModal_") {
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
