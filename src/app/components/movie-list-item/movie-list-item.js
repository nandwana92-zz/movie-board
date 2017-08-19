import template from './movie-list-item.html';

export const movieListItem = {
  bindings: {
    movieData: '=',
    index: '<'
  },
  template,
  controller: class movieListItem {
    constructor() {
      this.isExpanded = false;
    }
    $onInit() {}
  }
};
