import template from './movie-list-body.html';

export const movieListBody = {
  bindings: {
    listItems: '='
  },
  template,
  controller: class movieListBody {
    constructor() {}
    $onInit() {}
  }
};
