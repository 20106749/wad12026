'use strict';

import logger from "../utils/logger.js";
import devStore from "../models/dev-store.js";

// const about = {
//   createView(request, response) {
//     logger.info("About page loading!");
//     response.send('About my app!');   
//   },
// };

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    
    const viewData = {
      title: "About Modlist App",
      devs: devStore.getDevInfo()
    };
    
    logger.info(viewData.devs)
    response.render('about', viewData);
  },
};

export default about;
