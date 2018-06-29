const PubSub = require('../helpers/pub_sub.js');
const createElement = require('../helpers/create_element.js')


const DetailView = function (container) {
  this.container = container;
};

DetailView.prototype.bindEvents = function () {
  PubSub.subscribe('StudioGhibli:ghibli-details', (event) => {
    const ghibliDetails = event.detail;
    this.container.innerHTML = "";
    this.populate(ghibliDetails);

    //access people api

    // const people = ghibliDetails.people[0];
    // this.personName = fetch(people)
    //                 .then(res=> res.json().then( data => data.name))
    // console.log(personName);

  })
};

DetailView.prototype.populate = function (ghibliDetails) {
  this.container.appendChild(createElement('h2', ghibliDetails.title))

  this.container.appendChild(createElement('h4', 'Description'))
  this.container.appendChild(createElement('p', ghibliDetails.description))

  this.container.appendChild(createElement('h4', 'Director'))
  this.container.appendChild(createElement('p', ghibliDetails.director))

  this.container.appendChild(createElement('h4', 'Producer'))
  this.container.appendChild(createElement('p', ghibliDetails.producer))

  this.container.appendChild(createElement('h4', 'Release Date'))
  this.container.appendChild(createElement('p', ghibliDetails.release_date))
};

module.exports = DetailView;
