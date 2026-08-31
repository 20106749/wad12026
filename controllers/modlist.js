'use strict';

import logger from '../utils/logger.js';

const modlist = {
  createView(request, response) {
    const viewData = {
      title: 'Modlist'
    };
    response.render('modlist', viewData);
  },
};

export default modlist;
