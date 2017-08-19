import template from './actor-list.html';

export const actorList = {
  bindings: {
    title: '@',
    listItems: '='
  },
  template,
  controller: class actorList {
    constructor() {}
    $onInit() {}
  }
};
