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
  getModlist(id) {
    return this.store.findOneBy(this.collection, (modlist => modlist.id === id));
  },
  addMod(id, mod) {
    this.store.addItem(this.collection, id, this.array, mod);
  },
  addModlist(modlist) {
    this.store.addCollection(this.collection, modlist);
  },

};

export default modlistStore;
