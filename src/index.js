import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import movieService from './app/services/movie-service';
import movieDataStore from './app/data-stores/movie-data-store';

import {app} from './app/components/app/app';
import {actorList} from './app/components/actor-list/actor-list';
import {actorListHeader} from './app/components/actor-list-header/actor-list-header';
import {actorListBody} from './app/components/actor-list-body/actor-list-body';
import {actorListItem} from './app/components/actor-list-item/actor-list-item';
import {movieList} from './app/components/movie-list/movie-list';
import {movieListHeader} from './app/components/movie-list-header/movie-list-header';
import {movieListBody} from './app/components/movie-list-body/movie-list-body';
import {movieListItem} from './app/components/movie-list-item/movie-list-item';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('movieService', movieService)
  .service('movieDataStore', movieDataStore)
  .component('app', app)
  .component('actorList', actorList)
  .component('actorListHeader', actorListHeader)
  .component('actorListBody', actorListBody)
  .component('actorListItem', actorListItem)
  .component('movieList', movieList)
  .component('movieListHeader', movieListHeader)
  .component('movieListBody', movieListBody)
  .component('movieListItem', movieListItem);
