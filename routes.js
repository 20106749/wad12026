'use strict';

import express from 'express';
const router = express.Router();
import logger from "./utils/logger.js";

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import modlist from './controllers/modlist.js';

router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/about', about.createView);
router.get('/modlist/:id', modlist.createView);
router.post('/modlist/:id/addmod', modlist.addMod);
router.post('/dashboard/addmodlist', dashboard.addModlist);
router.get('/modlist/:id/deletemod/:modid', modlist.deleteMod);

router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
