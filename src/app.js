const SelectView = require('./views/select_view.js');
const DetailView = require('./views/detail_view.js');
const StudioGhibli = require('./models/studio_ghibli.js')

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('#studio-ghibli')
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const studioghibli = new StudioGhibli();
  studioghibli.bindEvents();

  const detailElement = document.querySelector('#films-detail')
  const detailView = new DetailView(detailElement);
  detailView.bindEvents();

  selectView.getTitle();
});
