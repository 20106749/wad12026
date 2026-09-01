'use strict';

import logger from '../utils/logger.js';
import modlistStore from '../models/modlist-store.js';
import { v4 as uuidv4 } from 'uuid';

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

    addMod(request, response) {
        const modlistId = request.params.id;
        const modlist = modlistStore.getModlist(modlistId);
        const newMod = {
            id: uuidv4(),
            title: request.body.title,
            creator: request.body.creator,
        };
        modlistStore.addMod(modlistId, newMod);
        response.redirect('/modlist/' + modlistId);
    },

    deleteMod(request, response) {
        const modlistId = request.params.id;
        const modId = request.params.modId;
        logger.debug(`Deleting Mod  $(modId} from Modlist ${modlistId}`);
        modlistStore.removeMod(modlistId, modId);
        response.redirect('/modlist/' + modlistId);
    },

};

export default modlist;
