'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const devStore = {

  store: new JsonStore('./models/dev-store.json', { developer: {} }),
  collection: 'developer',


  getDevInfo() {
    return this.store.findAll(this.collection);
  },

};

export default devStore;
