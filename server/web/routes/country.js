'use strict';

const countryController = require('../controllers/country');
const BaseRoute = require('./base');

class CountryRoute extends BaseRoute {
    constructor() {
        super(countryController);
    }

    get(router) {
        router.prefix('/travel');

        router.get('/country', this.registerHandler('get'));
        router.get('/exchange', this.registerHandler('getExchange'));
    }
}

module.exports = new CountryRoute();
