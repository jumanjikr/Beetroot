function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
/**
 * Functionality for tabs navigation
 *
 * @param linkActivator         - css selector/array of DOM elements
 * @param tabsPanel             - css selector of tabs panel
 * @param linkActivatorHolder   - css selector of wrapper around linkActivator's
 */
const tabs = (linkActivator, tabsPanel, linkActivatorHolder) => {
  // проверяем является или нет переданный параметр linkActivator
  // валидным массивом DOM элементом или просто css селектором
  const links =
    typeof linkActivator === Array
      ? linkActivator
      : document.querySelectorAll(linkActivator);

  const linkActivatorElement = document.querySelector(linkActivatorHolder);

  // Добавляем обрабочик "click" на ссылку-активатор таба
  linkActivatorElement.addEventListener("click", (event) => {
    event.preventDefault();

    // проверяем, что мы нажалли именно по ссылка,
    // для этого удаляем из параметра "linkActivator" точку в начале
    if ([...event.target.classList].includes(linkActivator.substring(1))) {
      const hrefValue = event.target.getAttribute("href");
      const tabsPanelElements = document.querySelectorAll(tabsPanel);

      // скрываем неактивные табы и убираем класс "active" с неактивных ссылок
      [...tabsPanelElements].forEach((item) => (item.style.display = "none"));
      [...links].forEach((item) => item.classList.remove("active"));

      // задаем новое состояние для табов
      event.target.classList.add("active");
      document.querySelector(hrefValue).style.display = "block";
    }
  });
};
;

tabs(".tabs-nav__link", ".tabs-nav__panel", ".tabs-nav__link-list");
