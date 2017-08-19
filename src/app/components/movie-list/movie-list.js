import template from './movie-list.html';

export const movieList = {
  bindings: {},
  template,
  controller: class movieList {
    /** @ngInject */
    constructor(movieService, movieDataStore, $stateParams) {
      this.movieService = movieService;
      this.movieDataStore = movieDataStore;
      this.$stateParams = $stateParams;
    }
    $onInit() {
      this.getMovies(this.$stateParams.actorId);
      this.listItems = this.movieDataStore.getMovies();
    }
    getMovies(id) {
      this.movieService.getMoviesByActorId(id);
    }
  }
};
