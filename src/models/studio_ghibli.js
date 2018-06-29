const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');


const StudioGhibli = function () {
  this.films = null;
  this.location = null;
}

StudioGhibli.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:get-titles', () => {
    this.getData();
  });

  PubSub.subscribe('SelectView:get-ghibli-details', (event) => {
    const ghibliTitle = event.detail;
    const foundGhibliDetail = this.films.find((film) => {
      return film.title === ghibliTitle;
    });
    PubSub.publish('StudioGhibli:ghibli-details', foundGhibliDetail)
  });
};

StudioGhibli.prototype.getData = function () {
  const url = 'https://ghibliapi.herokuapp.com/films';
  const request = new RequestHelper(url);

  request.get((films) => {
    this.films = films;
    const ghibliTitles = this.films.map((film) => {
      return film.title;
    });
    PubSub.publish('StudioGhibli:film-name', ghibliTitles);
  });
};

module.exports = StudioGhibli;
