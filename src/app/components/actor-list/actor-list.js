import template from './actor-list.html';

export const actorList = {
  bindings: {
    title: '@',
    listItems: '='
  },
  template,
  controller: class actorList {
    constructor(movieService, movieDataStore) {
      this.movieService = movieService;
      this.movieDataStore = movieDataStore;
    }
    $onInit() {
      // this.getActors();
      // this.listItems = this.movieDataStore.getActors();
    }
    getActors() {
      // this.movieService.getActorsByHighestRating();
    }
  }
};
