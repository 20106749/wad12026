'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const modlistStore = {

  store: new JsonStore('./models/modlist-store.json', { modlistCollection: [] }),
  collection: 'modlistCollection',
  array: 'mods',

  getAllModlists() {
    return this.store.findAll(this.collection);
  },

};

export default modlistStore;
