const PubSub = require('../helpers/pub_sub.js');
const createElement = require('../helpers/create_element.js')


const DetailView = function (container) {
  this.container = container;
};

DetailView.prototype.bindEvents = function () {
  PubSub.subscribe('StudioGhibli:ghibli-details', (event) => {
    const ghibliDetails = event.detail;
    this.populate(ghibliDetails);
    console.log(ghibliDetails);
  })
};

DetailView.prototype.populate = function (ghibliDetails) {
  this.container.appendChild(createElement('h2', ghibliDetails.title))

  const ul = document.createElement('ul')
  ul.appendChild(createElement('li', ghibliDetails.description))
  ul.appendChild(createElement('li', ghibliDetails.director))
  ul.appendChild(createElement('li', ghibliDetails.producer))
  ul.appendChild(createElement('li', ghibliDetails.release_date))
  ul.appendChild(createElement('li', ghibliDetails.rt_score))

    this.container.appendChild(ul)
};

module.exports = DetailView;
