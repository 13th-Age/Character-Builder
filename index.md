<div class="container mt-3">
	<h2 id="headingAttributes">Attributes</h2>
	<div class="container mt-3">
		<div class="row gy-2 align-items-center">
			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1 h6 text-center">Attribute</div>
			<div class="col col-5 col-sm-4 col-md-3 col-lg-2 h6 text-center">Stat</div>
			<div class="col d-none d-sm-block col-sm-2 col-md-1 h6 text-center">Mod</div>
			<div class="col col-3 col-md-2 col-xl-1 h6 text-center">Point Buy</div>
			<div class="w-100"></div>

			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1">Strength</div>
			<div class="col col-5 col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Strength')">–</button>
					<input class="form-control text-center"
						type="number"
						id="StrengthAttribute"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Strength')"
						aria-label="Strength Attribute">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Strength')">+</button>
				</div>
			</div>
			<div class="col d-none d-sm-block col-sm-2 col-md-1 text-center"
				id="StrengthMod"></div>
			<div class="col col-3 col-md-2 col-xl-1 text-center"
				id="StrengthPointBuy"
				aria-label="Strength Point Buy"></div>
			<div class="w-100"></div>

			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1">Constitution</div>
			<div class="col col-5 col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Constitution')">–</button>
					<input class="form-control text-center"
						type="number"
						id="ConstitutionAttribute"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Constitution')"
						aria-label="Constitution Attribute">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Constitution')">+</button>
				</div>
			</div>
			<div class="col d-none d-sm-block col-sm-2 col-md-1 text-center"
				id="ConstitutionMod"></div>
			<div class="col col-3 col-md-2 col-xl-1 text-center"
				id="ConstitutionPointBuy"
				aria-label="Constitution Point Buy"></div>
			<div class="w-100"></div>

			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1">Dexterity</div>
			<div class="col col-5 col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Dexterity')">–</button>
					<input class="form-control text-center"
						type="number"
						id="DexterityAttribute"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Dexterity')"
						aria-label="Dexterity Attribute">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Dexterity')">+</button>
				</div>
			</div>
			<div class="col d-none d-sm-block col-sm-2 col-md-1 text-center"
				id="DexterityMod"></div>
			<div class="col col-3 col-md-2 col-xl-1 text-center"
				id="DexterityPointBuy"
				aria-label="Dexterity Point Buy"></div>
			<div class="w-100"></div>

			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1">Intelligence</div>
			<div class="col col-5 col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Intelligence')">–</button>
					<input class="form-control text-center"
						type="number"
						id="IntelligenceAttribute"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Intelligence')"
						aria-label="Intelligence Attribute">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Intelligence')">+</button>
				</div>
			</div>
			<div class="col d-none d-sm-block col-sm-2 col-md-1 text-center"
				id="IntelligenceMod"></div>
			<div class="col col-3 col-md-2 col-xl-1 text-center"
				id="IntelligencePointBuy"
				aria-label="Intelligence Point Buy"></div>
			<div class="w-100"></div>

			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1">Wisdom</div>
			<div class="col col-5 col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Wisdom')">–</button>
					<input class="form-control text-center"
						type="number"
						id="WisdomAttribute"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Wisdom')"
						aria-label="Wisdom Attribute">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Wisdom')">+</button>
				</div>
			</div>
			<div class="col d-none d-sm-block col-sm-2 col-md-1 text-center"
				id="WisdomMod"></div>
			<div class="col col-3 col-md-2 col-xl-1 text-center"
				id="WisdomPointBuy"
				aria-label="Wisdom Point Buy"></div>
			<div class="w-100"></div>

			<div class="col col-4 col-sm-3 col-md-2 col-xxl-1">Charisma</div>
			<div class="col col-5 col-sm-4 col-md-3 col-lg-2">
				<div class="input-group">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="DecreaseAttribute('Charisma')">–</button>
					<input class="form-control text-center"
						type="number"
						id="CharismaAttribute"
						value="10" min="8" max="18"
						onchange="UpdateAttributeDerivatives('Charisma')"
						aria-label="Charisma Attribute">
					<button class="btn btn-outline-secondary"
						type="button"
						onclick="IncreaseAttribute('Charisma')">+</button>
				</div>
			</div>
			<div class="col d-none d-sm-block col-sm-2 col-md-1 text-center"
				id="CharismaMod"></div>
			<div class="col col-3 col-md-2 col-xl-1 text-center"
				id="CharismaPointBuy"
				aria-label="Charisma Point Buy"></div>
			<div class="w-100"></div>

			<div class="col col-9 col-md-6 col-lg-5 col-xxl-4 text-end">Total</div>
			<div class="col col-3 col-md-2 col-xl-1 text-center"
				id="PointBuyTotal"></div>
			<div class="w-100"></div>
		</div>
	</div>
</div>




<nav class="navbar navbar-expand-sm sticky-bottom bg-body-tertiary mt-3">
<div class="container">
	<button type="button"
		class="navbar-toggler"
		data-bs-toggle="collapse"
		data-bs-target="#navbarToggle"
		aria-controls="navbarToggle"
		aria-expanded="false"
		aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse"
		id="navbarToggle">
		<ul class="nav nav-pills">
			<li class="nav-item">
				<a class="nav-link"
					href="#headingAttributes">Attributes</a>
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
