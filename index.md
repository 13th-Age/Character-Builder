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
		<div class="row align-items-center">
			{% comment %} Buttons {% endcomment -%}
			<div class="col col-12">
				<div class="input-group">
					<div class="d-sm-none me-2">Mod</div>
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
		<div class="row mt-2 gy-2 align-items-center text-center">
			{% comment %} Headings {% endcomment -%}
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1">Attribute</div>
			<div class="col col-4 d-sm-none">Stat</div>
			<div class="col d-none d-sm-block col-sm-4 col-md-3 col-lg-2">Base</div>
			<div class="col d-none col-4 col-sm-3 col-md-2 col-xl-1 ShowPointBuy">Point Buy</div>
			<div class="col col-4 d-sm-block col-sm-2 col-md-1 ShowPointBuy">Mod</div>
			<div class="w-100"></div>

			{% comment %} Strength Label {% endcomment -%}
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1 text-start">
				<label for="StrengthAttribute">Strength</label>
			</div>
			{% comment %} Strength Button for XS Screens {% endcomment -%}
			<div class="col col-4 d-sm-none">
				<button class="btn btn-secondary w-100"
					type="button"
					id="StrengthStatButtonForXS"
					data-bs-toggle="modal"
					data-bs-target="#AttributeModal"
					onclick="AttributeModalOpen('Strength')">10</button>
			</div>
			{% comment %} Strength Attribute for not XS screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Strength')">–</button>
					<input class="form-control text-center"
						type="number"
						id="StrengthAttribute"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Strength')">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Strength')">+</button>
				</div>
			</div>
			{% comment %} Strength Point Buy {% endcomment -%}
			<div class="col d-none col-4 col-sm-3 col-md-2 col-xl-1 ShowPointBuy"
				id="StrengthPointBuy">2</div>
			{% comment %} Strength Mod {% endcomment -%}
			<div class="col col-4 d-sm-block col-sm-2 col-md-1 ShowPointBuy"
				id="StrengthMod">+0</div>
			{% comment %} Strength Column Wrap {% endcomment -%}
			<div class="w-100"></div>

			{% comment %} Constitution Label {% endcomment -%}
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1 text-start">
				<label for="ConstitutionAttribute">Constitution</label>
			</div>
			{% comment %} Constitution Button for XS Screens {% endcomment -%}
			<div class="col col-4 d-sm-none">
				<button class="btn btn-secondary w-100"
					type="button"
					id="ConstitutionStatButtonForXS"
					data-bs-toggle="modal"
					data-bs-target="#AttributeModal"
					onclick="AttributeModalOpen('Constitution')">10</button>
			</div>
			{% comment %} Constitution Attribute for not XS screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Constitution')">–</button>
					<input class="form-control text-center"
						type="number"
						id="ConstitutionAttribute"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Constitution')">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Constitution')">+</button>
				</div>
			</div>
			{% comment %} Constitution Point Buy {% endcomment -%}
			<div class="col d-none col-4 col-sm-3 col-md-2 col-xl-1 ShowPointBuy"
				id="ConstitutionPointBuy">2</div>
			{% comment %} Constitution Mod {% endcomment -%}
			<div class="col col-4 d-sm-block col-sm-2 col-md-1 ShowPointBuy"
				id="ConstitutionMod">+0</div>
			{% comment %} Constitution Column Wrap {% endcomment -%}
			<div class="w-100"></div>

			{% comment %} Dexterity Label {% endcomment -%}
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1 text-start">
				<label for="DexterityAttribute">Dexterity</label>
			</div>
			{% comment %} Dexterity Button for XS Screens {% endcomment -%}
			<div class="col col-4 d-sm-none">
				<button class="btn btn-secondary w-100"
					type="button"
					id="DexterityStatButtonForXS"
					data-bs-toggle="modal"
					data-bs-target="#AttributeModal"
					onclick="AttributeModalOpen('Dexterity')">10</button>
			</div>
			{% comment %} Dexterity Attribute for not XS screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Dexterity')">–</button>
					<input class="form-control text-center"
						type="number"
						id="DexterityAttribute"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Dexterity')">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Dexterity')">+</button>
				</div>
			</div>
			{% comment %} Dexterity Point Buy {% endcomment -%}
			<div class="col d-none col-4 col-sm-3 col-md-2 col-xl-1 ShowPointBuy"
				id="DexterityPointBuy">2</div>
			{% comment %} Dexterity Mod {% endcomment -%}
			<div class="col col-4 d-sm-block col-sm-2 col-md-1 ShowPointBuy"
				id="DexterityMod">+0</div>
			{% comment %} Dexterity Column Wrap {% endcomment -%}
			<div class="w-100"></div>

			{% comment %} Intelligence Label {% endcomment -%}
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1 text-start">
				<label for="IntelligenceAttribute">Intelligence</label>
			</div>
			{% comment %} Intelligence Button for XS Screens {% endcomment -%}
			<div class="col col-4 d-sm-none">
				<button class="btn btn-secondary w-100"
					type="button"
					id="IntelligenceStatButtonForXS"
					data-bs-toggle="modal"
					data-bs-target="#AttributeModal"
					onclick="AttributeModalOpen('Intelligence')">10</button>
			</div>
			{% comment %} Intelligence Attribute for not XS screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Intelligence')">–</button>
					<input class="form-control text-center"
						type="number"
						id="IntelligenceAttribute"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Intelligence')">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Intelligence')">+</button>
				</div>
			</div>
			{% comment %} Intelligence Point Buy {% endcomment -%}
			<div class="col d-none col-4 col-sm-3 col-md-2 col-xl-1 ShowPointBuy"
				id="IntelligencePointBuy">2</div>
			{% comment %} Intelligence Mod {% endcomment -%}
			<div class="col col-4 d-sm-block col-sm-2 col-md-1 ShowPointBuy"
				id="IntelligenceMod">+0</div>
			{% comment %} Intelligence Column Wrap {% endcomment -%}
			<div class="w-100"></div>

			{% comment %} Wisdom Label {% endcomment -%}
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1 text-start">
				<label for="WisdomAttribute">Wisdom</label>
			</div>
			{% comment %} Wisdom Button for XS Screens {% endcomment -%}
			<div class="col col-4 d-sm-none">
				<button class="btn btn-secondary w-100"
					type="button"
					id="WisdomStatButtonForXS"
					data-bs-toggle="modal"
					data-bs-target="#AttributeModal"
					onclick="AttributeModalOpen('Wisdom')">10</button>
			</div>
			{% comment %} Wisdom Attribute for not XS screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Wisdom')">–</button>
					<input class="form-control text-center"
						type="number"
						id="WisdomAttribute"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Wisdom')">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Wisdom')">+</button>
				</div>
			</div>
			{% comment %} Wisdom Point Buy {% endcomment -%}
			<div class="col d-none col-4 col-sm-3 col-md-2 col-xl-1 ShowPointBuy"
				id="WisdomPointBuy">2</div>
			{% comment %} Wisdom Mod {% endcomment -%}
			<div class="col col-4 d-sm-block col-sm-2 col-md-1 ShowPointBuy"
				id="WisdomMod">+0</div>
			{% comment %} Wisdom Column Wrap {% endcomment -%}
			<div class="w-100"></div>

			{% comment %} Charisma Label {% endcomment -%}
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1 text-start">
				<label for="CharismaAttribute">Charisma</label>
			</div>
			{% comment %} Charisma Button for XS Screens {% endcomment -%}
			<div class="col col-4 d-sm-none">
				<button class="btn btn-secondary w-100"
					type="button"
					id="CharismaStatButtonForXS"
					data-bs-toggle="modal"
					data-bs-target="#AttributeModal"
					onclick="AttributeModalOpen('Charisma')">10</button>
			</div>
			{% comment %} Charisma Attribute for not XS screens {% endcomment -%}
			<div class="col d-none d-sm-block col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Charisma')">–</button>
					<input class="form-control text-center"
						type="number"
						id="CharismaAttribute"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Charisma')">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Charisma')">+</button>
				</div>
			</div>
			{% comment %} Charisma Point Buy {% endcomment -%}
			<div class="col d-none col-4 col-sm-3 col-md-2 col-xl-1 ShowPointBuy"
				id="CharismaPointBuy">2</div>
			{% comment %} Charisma Mod {% endcomment -%}
			<div class="col col-4 d-sm-block col-sm-2 col-md-1 ShowPointBuy"
				id="CharismaMod">+0</div>
			{% comment %} Charisma Column Wrap {% endcomment -%}
			<div class="w-100"></div>

			{% comment %} Point Buy Total {% endcomment -%}
			<div class="d-none col-8 col-sm-7 col-md-5 col-lg-4 col-xxl-3 text-end ShowPointBuy">Total</div>
			<div class="d-none col-4 col-sm-3 col-md-2 col-xl-1 ShowPointBuy"
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
					<div class="col col-4">Base</div>
					<div class="col col-6">
						<div class="input-group">
							<button class="btn btn-outline-secondary"
								type="button"
								onclick="DecreaseAttribute('AttributeModal')">–</button>
							<input class="form-control text-center"
								type="number"
								id="AttributeModalAttribute"
								value="10" min="8" max="18">
							<button class="btn btn-outline-secondary"
								type="button"
								onclick="IncreaseAttribute('AttributeModal')">+</button>
						</div>
					</div>
					<div class="w-100"></div>
					{% comment %} Point Buy {% endcomment -%}
					<div class="col col-4">Point Buy</div>
					<div class="col col-6 text-center"
						id="AttributeModalPointBuy">2</div>
					<div class="w-100"></div>
					{% comment %} Mod {% endcomment -%}
					<div class="col col-4">Mod</div>
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
