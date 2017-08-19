export default class movieDataStore {
  constructor() {
    this.data = {
      actors: [],
      maleActors: [],
      femaleActors: [],
      movies: []
    };
  }
  getData() {
    return this.data;
  }
  getMovies() {
    return this.data.movies;
  }
  setMovies(data) {
    this.data.movies.length = 0;
    this.data.movies.push(...data);
  }
  getActors() {
    return this.data.actors;
  }
  setActors(data) {
    this.data.actors.length = 0;
    this.data.actors.push(...data);
  }
  getFemaleActors() {
    return this.data.femaleActors;
  }
  setMaleActors(data) {
    this.data.maleActors.length = 0;
    this.data.maleActors.push(...data);
  }
  getMaleActors() {
    return this.data.maleActors;
  }
  setFemaleActors(data) {
    this.data.femaleActors.length = 0;
    this.data.femaleActors.push(...data);
  }
}
