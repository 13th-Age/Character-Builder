{% comment %} Character {% endcomment -%}
<div class="container mt-3">
	<h2 id="Character">Character</h2>
	<div class="container mt-3">
		<div class="row align-items-center">
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1">
				<label for="CharacterName">Name</label>
			</div>
			<div class="col col-8 col-sm-9 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
				<input class="form-control"
					id="CharacterName">
			</div>
		</div>
	</div>
</div>




{% comment %} Attributes {% endcomment -%}
<div class="container mt-3">
	<h2 id="Attributes">Attributes</h2>
	<div class="container mt-3">
		{% comment %} Buttons {% endcomment -%}
		<div class="row align-items-center">
			<div class="col col-12">
				<div class="input-group">
					<div class="d-sm-none me-2">Mod</div>
					<div class="d-none d-sm-block d-md-none me-2">Stat (Mod)</div>
					<div class="d-none d-md-block d-lg-none me-2">Stat and Mod</div>
					<div class="form-check form-switch">
						<input class="form-check-input"
							type="checkbox"
							id="ShowPointBuyCheck"
							role="switch"
							onchange="ShowPointBuyToggle()">
						<label class="form-check-label"
							for="ShowPointBuyCheck">Point Buy</label>
					</div>
				</div>
			</div>
		</div>

		{% comment %} Headings {% endcomment -%}
		<div class="row mt-2 gy-2 align-items-center text-center">
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1">Attribute</div>
			<div class="col col-4 d-sm-none">Stat</div>
			<div class="col d-none d-sm-block col-sm-4 col-md-3 col-lg-2">Base</div>
			<div class="col d-none d-sm-block col-sm-2 d-md-none">Bonus</div>
			<div class="col d-none d-md-block col-md-2 col-lg-1">Racial Bonus</div>
			<div class="col d-none d-md-block col-md-2 col-lg-1">Class Bonus</div>
			<div class="col d-none col-4 col-sm-3 col-md-2 col-lg-1 ShowPointBuyToggleXS">Point Buy</div>
			<div class="col d-none d-sm-block col-sm-3 d-md-none ShowPointBuyToggleSM">Stat (Mod)</div>
			<div class="col d-none d-md-block col-md-1 d-lg-block ShowPointBuyToggleMD">Stat</div>
			<div class="col col-4 d-sm-none d-md-block col-md-1 d-lg-block ShowPointBuyToggleXS ShowPointBuyToggleMD">Mod</div>
		</div>

		{% comment %} Strength {% endcomment -%}
		<div class="row mt-2 align-items-center text-center">
			{% comment %} Strength Label {% endcomment -%}
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1 text-start">Strength</div>
			{% comment %} Strength Button for XS Screens {% endcomment -%}
			<div class="col col-4 d-sm-none">
				<button class="btn btn-secondary w-100"
					type="button"
					id="StrengthStatButtonForXS"
					data-bs-toggle="modal"
					data-bs-target="#AttributeModal"
					onclick="AttributeModal_Open('Strength')">10</button>
			</div>
			{% comment %} Strength Attribute for not XS screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Strength')">–</button>
					<input class="form-control text-center"
						type="number"
						id="StrengthBase"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Strength')">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Strength')">+</button>
				</div>
			</div>
			{% comment %} Strength Bonus for SM screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-2 d-md-none"
				id="StrengthBonusForSM">
				<button class="btn btn-outline-secondary w-100"
					type="button"
					id="StrengthBonusButtonForSM"
					data-bs-toggle="modal"
					data-bs-target="#AttributeBonusModal"
					onclick="AttributeBonusModal_Open('Strength')">-</button>
			</div>
			{% comment %} Strength Racial Bonus {% endcomment -%}
			<div class="col d-none d-md-block col-md-2 col-lg-1">
				<input class="form-check-input"
					type="checkbox"
					id="StrengthRacialBonusCheck"
					oninput="UpdateAttributeDerivatives('Strength')">
			</div>
			{% comment %} Strength Class Bonus {% endcomment -%}
			<div class="col d-none d-md-block col-md-2 col-lg-1">
				<input class="form-check-input"
					type="checkbox"
					id="StrengthClassBonusCheck"
					oninput="UpdateAttributeDerivatives('Strength')">
			</div>
			{% comment %} Strength Point Buy {% endcomment -%}
			<div class="col d-none col-4 col-sm-3 col-md-2 col-lg-1 ShowPointBuyToggleXS"
				id="StrengthPointBuy">2</div>
			{% comment %} Strength Stat (Mod) {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-3 d-md-none ShowPointBuyToggleSM"
				id="StrengthStatAndMod">10 (+0)</div>
			{% comment %} Strength Stat {% endcomment -%}
			<div class="col d-none d-md-block col-md-1 d-lg-block ShowPointBuyToggleMD"
				id="StrengthStat">10</div>
			{% comment %} Strength Mod {% endcomment -%}
			<div class="col col-4 d-sm-none d-md-block col-md-1 d-lg-block ShowPointBuyToggleXS ShowPointBuyToggleMD"
				id="StrengthMod">+0</div>
		</div>

		{% comment %} Constitution {% endcomment -%}
		<div class="row mt-2 align-items-center text-center">
			{% comment %} Constitution Label {% endcomment -%}
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1 text-start">Constitution</div>
			{% comment %} Constitution Button for XS Screens {% endcomment -%}
			<div class="col col-4 d-sm-none">
				<button class="btn btn-secondary w-100"
					type="button"
					id="ConstitutionStatButtonForXS"
					data-bs-toggle="modal"
					data-bs-target="#AttributeModal"
					onclick="AttributeModal_Open('Constitution')">10</button>
			</div>
			{% comment %} Constitution Attribute for not XS screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Constitution')">–</button>
					<input class="form-control text-center"
						type="number"
						id="ConstitutionBase"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Constitution')">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Constitution')">+</button>
				</div>
			</div>
			{% comment %} Constitution Bonus for SM screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-2 d-md-none"
				id="ConstitutionBonusForSM">
				<button class="btn btn-outline-secondary w-100"
					type="button"
					id="ConstitutionBonusButtonForSM"
					data-bs-toggle="modal"
					data-bs-target="#AttributeBonusModal"
					onclick="AttributeBonusModal_Open('Constitution')">-</button>
			</div>
			{% comment %} Constitution Racial Bonus {% endcomment -%}
			<div class="col d-none d-md-block col-md-2 col-lg-1">
				<input class="form-check-input"
					type="checkbox"
					id="ConstitutionRacialBonusCheck"
					oninput="UpdateAttributeDerivatives('Constitution')">
			</div>
			{% comment %} Constitution Class Bonus {% endcomment -%}
			<div class="col d-none d-md-block col-md-2 col-lg-1">
				<input class="form-check-input"
					type="checkbox"
					id="ConstitutionClassBonusCheck"
					oninput="UpdateAttributeDerivatives('Constitution')">
			</div>
			{% comment %} Constitution Point Buy {% endcomment -%}
			<div class="col d-none col-4 col-sm-3 col-md-2 col-lg-1 ShowPointBuyToggleXS"
				id="ConstitutionPointBuy">2</div>
			{% comment %} Constitution Stat (Mod) {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-3 d-md-none ShowPointBuyToggleSM"
				id="ConstitutionStatAndMod">10 (+0)</div>
			{% comment %} Constitution Stat {% endcomment -%}
			<div class="col d-none d-md-block col-md-1 d-lg-block ShowPointBuyToggleMD"
				id="ConstitutionStat">10</div>
			{% comment %} Constitution Mod {% endcomment -%}
			<div class="col col-4 d-sm-none d-md-block col-md-1 d-lg-block ShowPointBuyToggleXS ShowPointBuyToggleMD"
				id="ConstitutionMod">+0</div>
		</div>

		{% comment %} Dexterity {% endcomment -%}
		<div class="row mt-2 align-items-center text-center">
			{% comment %} Dexterity Label {% endcomment -%}
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1 text-start">Dexterity</div>
			{% comment %} Dexterity Button for XS Screens {% endcomment -%}
			<div class="col col-4 d-sm-none">
				<button class="btn btn-secondary w-100"
					type="button"
					id="DexterityStatButtonForXS"
					data-bs-toggle="modal"
					data-bs-target="#AttributeModal"
					onclick="AttributeModal_Open('Dexterity')">10</button>
			</div>
			{% comment %} Dexterity Attribute for not XS screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Dexterity')">–</button>
					<input class="form-control text-center"
						type="number"
						id="DexterityBase"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Dexterity')">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Dexterity')">+</button>
				</div>
			</div>
			{% comment %} Dexterity Bonus for SM screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-2 d-md-none"
				id="DexterityBonusForSM">
				<button class="btn btn-outline-secondary w-100"
					type="button"
					id="DexterityBonusButtonForSM"
					data-bs-toggle="modal"
					data-bs-target="#AttributeBonusModal"
					onclick="AttributeBonusModal_Open('Dexterity')">-</button>
			</div>
			{% comment %} Dexterity Racial Bonus {% endcomment -%}
			<div class="col d-none d-md-block col-md-2 col-lg-1">
				<input class="form-check-input"
					type="checkbox"
					id="DexterityRacialBonusCheck"
					oninput="UpdateAttributeDerivatives('Dexterity')">
			</div>
			{% comment %} Dexterity Class Bonus {% endcomment -%}
			<div class="col d-none d-md-block col-md-2 col-lg-1">
				<input class="form-check-input"
					type="checkbox"
					id="DexterityClassBonusCheck"
					oninput="UpdateAttributeDerivatives('Dexterity')">
			</div>
			{% comment %} Dexterity Point Buy {% endcomment -%}
			<div class="col d-none col-4 col-sm-3 col-md-2 col-lg-1 ShowPointBuyToggleXS"
				id="DexterityPointBuy">2</div>
			{% comment %} Dexterity Stat (Mod) {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-3 d-md-none ShowPointBuyToggleSM"
				id="DexterityStatAndMod">10 (+0)</div>
			{% comment %} Dexterity Stat {% endcomment -%}
			<div class="col d-none d-md-block col-md-1 d-lg-block ShowPointBuyToggleMD"
				id="DexterityStat">10</div>
			{% comment %} Dexterity Mod {% endcomment -%}
			<div class="col col-4 d-sm-none d-md-block col-md-1 d-lg-block ShowPointBuyToggleXS ShowPointBuyToggleMD"
				id="DexterityMod">+0</div>
		</div>

		{% comment %} Intelligence {% endcomment -%}
		<div class="row mt-2 align-items-center text-center">
			{% comment %} Intelligence Label {% endcomment -%}
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1 text-start">Intelligence</div>
			{% comment %} Intelligence Button for XS Screens {% endcomment -%}
			<div class="col col-4 d-sm-none">
				<button class="btn btn-secondary w-100"
					type="button"
					id="IntelligenceStatButtonForXS"
					data-bs-toggle="modal"
					data-bs-target="#AttributeModal"
					onclick="AttributeModal_Open('Intelligence')">10</button>
			</div>
			{% comment %} Intelligence Attribute for not XS screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Intelligence')">–</button>
					<input class="form-control text-center"
						type="number"
						id="IntelligenceBase"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Intelligence')">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Intelligence')">+</button>
				</div>
			</div>
			{% comment %} Intelligence Bonus for SM screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-2 d-md-none"
				id="IntelligenceBonusForSM">
				<button class="btn btn-outline-secondary w-100"
					type="button"
					id="IntelligenceBonusButtonForSM"
					data-bs-toggle="modal"
					data-bs-target="#AttributeBonusModal"
					onclick="AttributeBonusModal_Open('Intelligence')">-</button>
			</div>
			{% comment %} Intelligence Racial Bonus {% endcomment -%}
			<div class="col d-none d-md-block col-md-2 col-lg-1">
				<input class="form-check-input"
					type="checkbox"
					id="IntelligenceRacialBonusCheck"
					oninput="UpdateAttributeDerivatives('Intelligence')">
			</div>
			{% comment %} Intelligence Class Bonus {% endcomment -%}
			<div class="col d-none d-md-block col-md-2 col-lg-1">
				<input class="form-check-input"
					type="checkbox"
					id="IntelligenceClassBonusCheck"
					oninput="UpdateAttributeDerivatives('Intelligence')">
			</div>
			{% comment %} Intelligence Point Buy {% endcomment -%}
			<div class="col d-none col-4 col-sm-3 col-md-2 col-lg-1 ShowPointBuyToggleXS"
				id="IntelligencePointBuy">2</div>
			{% comment %} Intelligence Stat (Mod) {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-3 d-md-none ShowPointBuyToggleSM"
				id="IntelligenceStatAndMod">10 (+0)</div>
			{% comment %} Intelligence Stat {% endcomment -%}
			<div class="col d-none d-md-block col-md-1 d-lg-block ShowPointBuyToggleMD"
				id="IntelligenceStat">10</div>
			{% comment %} Intelligence Mod {% endcomment -%}
			<div class="col col-4 d-sm-none d-md-block col-md-1 d-lg-block ShowPointBuyToggleXS ShowPointBuyToggleMD"
				id="IntelligenceMod">+0</div>
		</div>

		{% comment %} Wisdom {% endcomment -%}
		<div class="row mt-2 align-items-center text-center">
			{% comment %} Wisdom Label {% endcomment -%}
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1 text-start">Wisdom</div>
			{% comment %} Wisdom Button for XS Screens {% endcomment -%}
			<div class="col col-4 d-sm-none">
				<button class="btn btn-secondary w-100"
					type="button"
					id="WisdomStatButtonForXS"
					data-bs-toggle="modal"
					data-bs-target="#AttributeModal"
					onclick="AttributeModal_Open('Wisdom')">10</button>
			</div>
			{% comment %} Wisdom Attribute for not XS screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Wisdom')">–</button>
					<input class="form-control text-center"
						type="number"
						id="WisdomBase"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Wisdom')">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Wisdom')">+</button>
				</div>
			</div>
			{% comment %} Wisdom Bonus for SM screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-2 d-md-none"
				id="WisdomBonusForSM">
				<button class="btn btn-outline-secondary w-100"
					type="button"
					id="WisdomBonusButtonForSM"
					data-bs-toggle="modal"
					data-bs-target="#AttributeBonusModal"
					onclick="AttributeBonusModal_Open('Wisdom')">-</button>
			</div>
			{% comment %} Wisdom Racial Bonus {% endcomment -%}
			<div class="col d-none d-md-block col-md-2 col-lg-1">
				<input class="form-check-input"
					type="checkbox"
					id="WisdomRacialBonusCheck"
					oninput="UpdateAttributeDerivatives('Wisdom')">
			</div>
			{% comment %} Wisdom Class Bonus {% endcomment -%}
			<div class="col d-none d-md-block col-md-2 col-lg-1">
				<input class="form-check-input"
					type="checkbox"
					id="WisdomClassBonusCheck"
					oninput="UpdateAttributeDerivatives('Wisdom')">
			</div>
			{% comment %} Wisdom Point Buy {% endcomment -%}
			<div class="col d-none col-4 col-sm-3 col-md-2 col-lg-1 ShowPointBuyToggleXS"
				id="WisdomPointBuy">2</div>
			{% comment %} Wisdom Stat (Mod) {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-3 d-md-none ShowPointBuyToggleSM"
				id="WisdomStatAndMod">10 (+0)</div>
			{% comment %} Wisdom Stat {% endcomment -%}
			<div class="col d-none d-md-block col-md-1 d-lg-block ShowPointBuyToggleMD"
				id="WisdomStat">10</div>
			{% comment %} Wisdom Mod {% endcomment -%}
			<div class="col col-4 d-sm-none d-md-block col-md-1 d-lg-block ShowPointBuyToggleXS ShowPointBuyToggleMD"
				id="WisdomMod">+0</div>
		</div>

		{% comment %} Charisma {% endcomment -%}
		<div class="row mt-2 align-items-center text-center">
			{% comment %} Charisma Label {% endcomment -%}
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1 text-start">Charisma</div>
			{% comment %} Charisma Button for XS Screens {% endcomment -%}
			<div class="col col-4 d-sm-none">
				<button class="btn btn-secondary w-100"
					type="button"
					id="CharismaStatButtonForXS"
					data-bs-toggle="modal"
					data-bs-target="#AttributeModal"
					onclick="AttributeModal_Open('Charisma')">10</button>
			</div>
			{% comment %} Charisma Attribute for not XS screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Charisma')">–</button>
					<input class="form-control text-center"
						type="number"
						id="CharismaBase"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Charisma')">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Charisma')">+</button>
				</div>
			</div>
			{% comment %} Charisma Bonus for SM screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-2 d-md-none"
				id="CharismaBonusForSM">
				<button class="btn btn-outline-secondary w-100"
					type="button"
					id="CharismaBonusButtonForSM"
					data-bs-toggle="modal"
					data-bs-target="#AttributeBonusModal"
					onclick="AttributeBonusModal_Open('Charisma')">-</button>
			</div>
			{% comment %} Charisma Racial Bonus {% endcomment -%}
			<div class="col d-none d-md-block col-md-2 col-lg-1">
				<input class="form-check-input"
					type="checkbox"
					id="CharismaRacialBonusCheck"
					oninput="UpdateAttributeDerivatives('Charisma')">
			</div>
			{% comment %} Charisma Class Bonus {% endcomment -%}
			<div class="col d-none d-md-block col-md-2 col-lg-1">
				<input class="form-check-input"
					type="checkbox"
					id="CharismaClassBonusCheck"
					oninput="UpdateAttributeDerivatives('Charisma')">
			</div>
			{% comment %} Charisma Point Buy {% endcomment -%}
			<div class="col d-none col-4 col-sm-3 col-md-2 col-lg-1 ShowPointBuyToggleXS"
				id="CharismaPointBuy">2</div>
			{% comment %} Charisma Stat (Mod) {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-3 d-md-none ShowPointBuyToggleSM"
				id="CharismaStatAndMod">10 (+0)</div>
			{% comment %} Charisma Stat {% endcomment -%}
			<div class="col d-none d-md-block col-md-1 d-lg-block ShowPointBuyToggleMD"
				id="CharismaStat">10</div>
			{% comment %} Charisma Mod {% endcomment -%}
			<div class="col col-4 d-sm-none d-md-block col-md-1 d-lg-block ShowPointBuyToggleXS ShowPointBuyToggleMD"
				id="CharismaMod">+0</div>
		</div>

		{% comment %} Point Buy Total {% endcomment -%}
		<div class="row mt-2 align-items-center text-center">
			<div class="d-none col-8 col-sm-9 col-lg-6 col-xxl-5 text-end ShowPointBuyToggleXS">Total</div>
			<div class="d-none col-4 col-sm-3 col-md-2 col-lg-1 ShowPointBuyToggleXS"
				id="PointBuyTotal">12</div>
		</div>
	</div>
</div>




{% comment %} Attribute Modal {% endcomment -%}
<div class="modal fade"
	id="AttributeModal"
	tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5"
					id="AttributeModalLabel">Attribute Modal</h1>
				<button class="btn-close"
					type="button"
					data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">
				<div class="row gy-2 align-items-center">
					{% comment %} Base {% endcomment -%}
					<div class="col col-6">Base</div>
					<div class="col col-6">
						<div class="input-group">
							<button class="btn btn-outline-secondary"
								type="button"
								onclick="DecreaseAttribute('AttributeModal')">–</button>
							<input class="form-control text-center"
								type="number"
								id="AttributeModalBase"
								value="10" min="8" max="18">
							<button class="btn btn-outline-secondary"
								type="button"
								onclick="IncreaseAttribute('AttributeModal')">+</button>
						</div>
					</div>
					<div class="w-100"></div>

					{% comment %} Point Buy {% endcomment -%}
					<div class="col d-none col-6 ShowPointBuyToggleXS">Point Buy</div>
					<div class="col d-none col-6 text-center ShowPointBuyToggleXS"
						id="AttributeModalPointBuy">2</div>
					<div class="w-100"></div>

					{% comment %} Racial Bonus {% endcomment -%}
					<div class="col col-6">
						<label for="AttributeModalRacialBonusCheck">Racial Bonus</label>
					</div>
					<div class="col col-6 text-center">
						<input class="form-check-input"
							type="checkbox"
							id="AttributeModalRacialBonusCheck"
							oninput="UpdateAttributeDerivatives('AttributeModal')">
					</div>
					<div class="w-100"></div>

					{% comment %} Class Bonus {% endcomment -%}
					<div class="col col-6">
						<label for="AttributeModalClassBonusCheck">Class Bonus</label>
					</div>
					<div class="col col-6 text-center">
						<input class="form-check-input"
							type="checkbox"
							id="AttributeModalClassBonusCheck"
							oninput="UpdateAttributeDerivatives('AttributeModal')">
					</div>
					<div class="w-100"></div>

					{% comment %} Stat {% endcomment -%}
					<div class="col col-6">Stat</div>
					<div class="col col-6 text-center"
						id="AttributeModalStat">10</div>
					<div class="w-100"></div>

					{% comment %} Mod {% endcomment -%}
					<div class="col col-6">Mod</div>
					<div class="col col-6 text-center"
						id="AttributeModalMod">+0</div>
					<div class="w-100"></div>
				</div>
			</div>
			<div class="modal-footer">
				<button class="btn btn-secondary"
					type="button"
					data-bs-dismiss="modal">Close</button>
				<button class="btn btn-primary"
					type="button"
					id="AttributeModalSaveButton"
					data-bs-dismiss="modal">Save changes</button>
			</div>
		</div>
	</div>
</div>




{% comment %} Attribute Bonus Modal {% endcomment -%}
<div class="modal fade"
	id="AttributeBonusModal"
	tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5"
					id="AttributeBonusModalLabel">Attribute Bonus Modal</h1>
				<button class="btn-close"
					type="button"
					data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">
				<div class="row gy-2 align-items-center">
					{% comment %} Racial Bonus {% endcomment -%}
					<div class="col col-4">Racial Bonus</div>
					<div class="col col-6">
						<input class="form-check-input"
							type="checkbox"
							id="AttributeBonusRacialBonusCheck">
					</div>
					<div class="w-100"></div>

					{% comment %} Class Bonus {% endcomment -%}
					<div class="col col-4">Class Bonus</div>
					<div class="col col-6">
						<input class="form-check-input"
							type="checkbox"
							id="AttributeBonusClassBonusCheck">
					</div>
					<div class="w-100"></div>
				</div>
			</div>
			<div class="modal-footer">
				<button class="btn btn-secondary"
					type="button"
					data-bs-dismiss="modal">Close</button>
				<button class="btn btn-primary"
					type="button"
					id="AttributeBonusModalSaveButton"
					data-bs-dismiss="modal">Save changes</button>
			</div>
		</div>
	</div>
</div>




{% comment %} Navbar {% endcomment -%}
<nav class="navbar navbar-expand-sm sticky-bottom bg-body-tertiary mt-3">
<div class="container">
	<button type="button"
		class="navbar-toggler"
		data-bs-toggle="collapse"
		data-bs-target="#navbarToggle">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse"
		id="navbarToggle">
		<ul class="nav nav-pills">
			<li class="nav-item">
				<a class="nav-link"
					href="#Character">Character</a>
			</li>
			<li class="nav-item">
				<a class="nav-link"
					href="#Attributes">Attributes</a>
			</li>
		</ul>
	</div>
</div>
</nav>




<script src="{{ 'assets/js/index.js?v=' | append: site.github.build_revision }}"></script>

<script>
document.addEventListener("DOMContentLoaded", function () {
	OnDocumentLoad();
}, false);
</script>
