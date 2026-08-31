'use strict';

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";

const start = {
  createView(request, response) {
    // const info = appStore.getAppInfo();
    // logger.debug(info);

    logger.info("Start page loading!");
    // response.send('Welcome to my modlist app!');   


    const viewData = {
      title: "Welcome to my modlist app!",
      info: appStore.getAppInfo()
    };
    
    //logger.debug(viewData);
    response.render('start', viewData); 

  },
};

export default start;
