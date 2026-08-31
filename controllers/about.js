'use strict';

import logger from "../utils/logger.js";

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
      title: "About Modlist App"
    };
    
    response.render('about', viewData);
  },
};

export default about;
