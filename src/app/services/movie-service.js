export default class movieService {
  /** @ngInject */
  constructor($http, movieDataStore) {
    this.BASE_URL = 'http://api.cinemalytics.in/v2';
    this.TOKEN = '8636A9BD30BE36407402BBAA326C8A2E';
    this.$http = $http;
    this.movieDataStore = movieDataStore;
  }
  getActorsByHighestRating() {
    return this.$http.get(`${this.BASE_URL}/analytics/ActorsByHighestRating/?auth_token=${this.TOKEN}`).then(response => {
      this.movieDataStore.setActors(response.data);
    });
  }
  getMaleActorsByHighestRating() {
    return this.$http.get(`${this.BASE_URL}/analytics/MaleActorsByHighestRating/?auth_token=${this.TOKEN}`).then(response => {
      this.movieDataStore.setMaleActors(response.data);
    });
  }
  getFemaleActorsByHighestRating() {
    return this.$http.get(`${this.BASE_URL}/analytics/FemaleActorsByHighestRating/?auth_token=${this.TOKEN}`).then(response => {
      this.movieDataStore.setFemaleActors(response.data);
    });
  }
  getMoviesByActorId(id) {
    return this.$http.get(`${this.BASE_URL}/actor/${id}/movies/?limit=10&auth_token=${this.TOKEN}`).then(response => {
      this.movieDataStore.setMovies(response.data);
    });
  }
}
