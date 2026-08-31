'use strict';

import logger from "../utils/logger.js";

import modlistStore from "../models/modlist-store.js";

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
};

export default dashboard;
