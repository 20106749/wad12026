'use strict';

import logger from "../utils/logger.js";

import modlistStore from "../models/modlist-store.js";

import { v4 as uuidv4 } from 'uuid';

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");
    
    const viewData = {
      title: "Modlist App Dashboard",
      modlists: modlistStore.getAllModlists()
    };

    logger.debug(viewData.modlists)

    response.render('dashboard', viewData);
  },
  addModlist(request, response) {
    const newModList = {
      id: uuidv4(),
      title: request.body.title,
      mods: [],
    };
    modlistStore.addModlist(newModList);
    response.redirect('/dashboard');
},
};

export default dashboard;
