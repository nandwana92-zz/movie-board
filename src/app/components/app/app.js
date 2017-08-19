import template from './app.html';

export const app = {
  bindings: {},
  template,
  controller: class app {
    /** @ngInject */
    constructor(movieService, movieDataStore) {
      this.movieService = movieService;
      this.movieDataStore = movieDataStore;
    }
    $onInit() {
      this.movieService.getActorsByHighestRating();
      this.movieService.getMaleActorsByHighestRating();
      this.movieService.getFemaleActorsByHighestRating();
      this.actors = this.movieDataStore.getActors();
      this.maleActors = this.movieDataStore.getMaleActors();
      this.femaleActors = this.movieDataStore.getFemaleActors();
    }
  }
};
