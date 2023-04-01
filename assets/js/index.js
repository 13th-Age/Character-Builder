function AttributeBonusModal_Open(attr) {
	var form = document.getElementById("AttributeBonusModal_Form");

	document.getElementById("AttributeBonusModal_Label").innerHTML = attr + " Bonuses";
	form.RacialBonusCheck.checked = JSON.parse(sessionStorage.getItem(attr + "RacialBonusCheck"));
	form.ClassBonusCheck.checked = JSON.parse(sessionStorage.getItem(attr + "ClassBonusCheck"));
	document.getElementById("AttributeBonusModal_SaveButton").setAttribute("onclick","AttributeBonusModal_Save('" + attr + "')");
}




function AttributeBonusModal_Save(attr) {
	var form = document.getElementById("AttributeBonusModal_Form");

	document.getElementById(attr + "RacialBonusCheck").checked = form.RacialBonusCheck.checked;
	document.getElementById(attr + "ClassBonusCheck").checked = form.ClassBonusCheck.checked;

	UpdateAttributeDerivatives(attr);
}




function AttributeModal_Open(attr) {
	var form = document.getElementById("AttributeModal_Form");

	document.getElementById("AttributeModal_Label").innerHTML = attr + " Attribute";
	form.AttributeBase.value = sessionStorage.getItem(attr + "Base");
	form.RacialBonusCheck.checked = JSON.parse(sessionStorage.getItem(attr + "RacialBonusCheck"));
	form.ClassBonusCheck.checked = JSON.parse(sessionStorage.getItem(attr + "ClassBonusCheck"));
	document.getElementById("AttributeModal_SaveButton").setAttribute("onclick","AttributeModal_Save('" + attr + "')");

	UpdateAttributeDerivatives("AttributeModal_");
}




function AttributeModal_Save(attr) {
	var form = document.getElementById("AttributeModal_Form");

	document.getElementById(attr + "Base").value = form.AttributeBase.value;
	document.getElementById(attr + "RacialBonusCheck").checked = form.RacialBonusCheck.checked;
	document.getElementById(attr + "ClassBonusCheck").checked = form.ClassBonusCheck.checked;

	UpdateAttributeDerivatives(attr);
}




function AttributeForm_Reset() {
	setTimeout(function(){
		UpdateAttributeDerivatives("Strength");
		UpdateAttributeDerivatives("Constitution");
		UpdateAttributeDerivatives("Dexterity");
		UpdateAttributeDerivatives("Intelligence");
		UpdateAttributeDerivatives("Wisdom");
		UpdateAttributeDerivatives("Charisma");
	},0);
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
	var racialBonusCheck = document.getElementById(attr + "RacialBonusCheck").checked;
	var classBonusCheck = document.getElementById(attr + "ClassBonusCheck").checked;

	var stat = base
		+ (racialBonusCheck == true ? 2 : 0)
		+ (classBonusCheck == true ? 2 : 0);
	var mod = Math.floor((stat-10)/2);
	var pointBuy;

	sessionStorage.setItem(attr + "Base",base);
	sessionStorage.setItem(attr + "RacialBonusCheck",racialBonusCheck);
	sessionStorage.setItem(attr + "ClassBonusCheck",classBonusCheck);

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
	var form = document.getElementById("AttributeForm");

	if (sessionStorage.length != 0) {
		form.StrengthBase.value = sessionStorage.StrengthBase;
		form.StrengthRacialBonusCheck.checked = JSON.parse(sessionStorage.StrengthRacialBonusCheck);
		form.StrengthClassBonusCheck.checked = JSON.parse(sessionStorage.StrengthClassBonusCheck);

		form.ConstitutionBase.value = sessionStorage.ConstitutionBase;
		form.ConstitutionRacialBonusCheck.checked = JSON.parse(sessionStorage.ConstitutionRacialBonusCheck);
		form.ConstitutionClassBonusCheck.checked = JSON.parse(sessionStorage.ConstitutionClassBonusCheck);

		form.DexterityBase.value = sessionStorage.DexterityBase;
		form.DexterityRacialBonusCheck.checked = JSON.parse(sessionStorage.DexterityRacialBonusCheck);
		form.DexterityClassBonusCheck.checked = JSON.parse(sessionStorage.DexterityClassBonusCheck);

		form.IntelligenceBase.value = sessionStorage.IntelligenceBase;
		form.IntelligenceRacialBonusCheck.checked = JSON.parse(sessionStorage.IntelligenceRacialBonusCheck);
		form.IntelligenceClassBonusCheck.checked = JSON.parse(sessionStorage.IntelligenceClassBonusCheck);

		form.WisdomBase.value = sessionStorage.WisdomBase;
		form.WisdomRacialBonusCheck.checked = JSON.parse(sessionStorage.WisdomRacialBonusCheck);
		form.WisdomClassBonusCheck.checked = JSON.parse(sessionStorage.WisdomClassBonusCheck);

		form.CharismaBase.value = sessionStorage.CharismaBase;
		form.CharismaRacialBonusCheck.checked = JSON.parse(sessionStorage.CharismaRacialBonusCheck);
		form.CharismaClassBonusCheck.checked = JSON.parse(sessionStorage.CharismaClassBonusCheck);
	}

	UpdateAttributeDerivatives("Strength");
	UpdateAttributeDerivatives("Constitution");
	UpdateAttributeDerivatives("Dexterity");
	UpdateAttributeDerivatives("Intelligence");
	UpdateAttributeDerivatives("Wisdom");
	UpdateAttributeDerivatives("Charisma");
}
