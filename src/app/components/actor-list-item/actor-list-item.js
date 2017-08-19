import template from './actor-list-item.html';

export const actorListItem = {
  bindings: {
    actorData: '=',
    index: '<'
  },
  template,
  controller: class actorListItem {
    constructor() {}
    $onInit() {}
  }
};
