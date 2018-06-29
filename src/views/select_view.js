const PubSub = require('../helpers/pub_sub.js');
const createElement = require('../helpers/create_element.js')

const SelectView = function (selectElement) {
  this.element = selectElement;
}

SelectView.prototype.bindEvents = function () {
  this.element.addEventListener('change', (event) => {
    const ghibliTitle = event.target.value;
    PubSub.publish('SelectView:get-ghibli-details', ghibliTitle);
  });

  PubSub.subscribe('StudioGhibli:film-name', (event) => {
    const ghibliTitles = event.detail;
    this.populate(ghibliTitles);
  });
};

SelectView.prototype.getTitle = function () {
  PubSub.publish('SelectView:get-titles')
};

SelectView.prototype.populate = function (ghibliTitles) {
  for (const ghibliTitle of ghibliTitles) {
    this.element.appendChild(createElement('option', ghibliTitle));
  }
};

module.exports = SelectView;
