(function (doc) {
  "use strict";
  const appTitle = doc.querySelector(".js-app-title");
  const togglePricingMarkup = `
  <div class="toggle-pricing">
    <input
      type="radio"
      name="pricing"
      id="annually"
      class="toggle-pricing__radio toggle-pricing__radio--annually js-toggle-pricing-radio"
    />
    <label
      for="annually"
      class="toggle-pricing__label toggle-pricing__label--inline-start"
    >
      Annually
    </label>
    <input
      type="radio"
      name="pricing"
      id="monthly"
      class="toggle-pricing__radio toggle-pricing__radio--monthly js-toggle-pricing-radio"
      checked
    />
    <label
      for="monthly"
      class="toggle-pricing__label toggle-pricing__label--inline-end"
    >
      Monthly
    </label>
  </div>
  `;
  appTitle.insertAdjacentHTML("afterend", togglePricingMarkup);
})(document);

(function (doc) {
  "use strict";
  const hideWhenScriptAvailable = doc.querySelectorAll(
    ".js-hide-when-script-available"
  );

  hideWhenScriptAvailable.forEach((element) =>
    element.setAttribute("hidden", "")
  );
})(document);

(function (doc) {
  const togglePricingRadios = doc.querySelectorAll(".js-toggle-pricing-radio");
  const monthlyPrices = doc.querySelectorAll(".js-monthly-price-text");
  const annuallyPrices = doc.querySelectorAll(".js-annually-price-text");

  const showPrice = (element) => {
    element.removeAttribute("hidden");
  };

  const hidePrice = (element) => {
    element.setAttribute("hidden", "");
  };

  const showAnnuallyPrices = () => {
    annuallyPrices.forEach((price) => showPrice(price));
  };

  const showMonthlyPrices = () => {
    monthlyPrices.forEach((price) => showPrice(price));
  };

  const hideAnnuallyPrices = () => {
    annuallyPrices.forEach((price) => hidePrice(price));
  };

  const hideMonthlyPrices = () => {
    monthlyPrices.forEach((price) => hidePrice(price));
  };

  const togglePrices = () => {
    const monthlyPrice = doc.querySelector(".js-monthly-price-text");
    const isMonthlyPriceHidden = monthlyPrice.hasAttribute("hidden");
    if (isMonthlyPriceHidden) {
      showMonthlyPrices();
      hideAnnuallyPrices();
    } else {
      showAnnuallyPrices();
      hideMonthlyPrices();
    }
  };

  togglePricingRadios.forEach((radio) =>
    radio.addEventListener("input", togglePrices)
  );
})(document);
