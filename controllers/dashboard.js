'use strict';

import logger from "../utils/logger.js";

// const modlist = [
//   {
//     id: 1,
//     title: "appleskin",
//     author: "dz40"
//   },
//   {
//     id: 2,
//     title: "applecore",
//     author: "dz40"
//   },
//   {
//     id: 3,
//     title: "smoothfontslib",
//     author: "caligrizombie"
//   }
// ];

// const dashboard = {
//   createView(request, response) {
//     logger.info("Dashboard page loading!")
//     logger.debug("Loading the modlist", modlist);
//     response.json(modlist);   
//   },
// };


const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");
    
    const viewData = {
      title: "Modlist App Dashboard"
    };
    
    response.render('dashboard', viewData);
  },
};

export default dashboard;
