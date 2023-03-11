(function (doc) {
  "use strict";
  const app = doc.querySelector(".js-app");
  const appTitle = app.querySelector(".js-app-title");
  const togglePricingMarkup = `
  <fieldset class="toggle-pricing">
    <legend class="toggle-pricing__legend js-toggle-pricing-legend"></legend>
    <label
      for="annually"
      class="toggle-pricing__label toggle-pricing__label--inline-start"
    >
      Annually
    </label>
    <span class="toggle-pricing__wrapper">
      <input
        type="radio"
        name="price"
        id="annually"
        class="toggle-pricing__radio js-toggle-pricing-radio"
      />
      <input
        type="radio"
        name="price"
        id="monthly"
        class="toggle-pricing__radio js-toggle-pricing-radio"
        checked
      />
      <span class="toggle-pricing__background" aria-hidden="true"></span>
      <span class="toggle-pricing__circle" aria-hidden="true"></span>
    </span>
    <label
      for="monthly"
      class="toggle-pricing__label toggle-pricing__label--inline-end"
    >
      Monthly
    </label>
  </fieldset>
  `;
  app.insertAdjacentHTML("afterbegin", togglePricingMarkup);
  const togglePricingLegend = app.querySelector(".js-toggle-pricing-legend");
  togglePricingLegend.appendChild(appTitle);
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
