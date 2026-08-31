'use strict';

import logger from '../utils/logger.js';
import modlistStore from '../models/modlist-store.js';

const modlist = {
  createView(request, response) {
    const modlistId = request.params.id;
    logger.debug(`Modlist id = ${modlistId}`);
    
    const viewData = {
      title: 'Modlist',
      singleModlist: modlistStore.getModlist(modlistId)
    };
    response.render('modlist', viewData);
  },
};

export default modlist;
