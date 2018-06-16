'use strict';

const axios = require('axios');
const convert = require('xml-js');
const unionBy = require('lodash/unionBy');
const getCountry = require('country-currency-map').getCountry;
const repository = require('../../dao/repository');
const apiKey = process.env.GOOGLE_KEY;

const exchangeUrl = 'https://www.mtbank.by/currxml.php?ver=0';

const OK = 200;

class CountryController {
    async get(ctx) {
        const { lng, lat } = ctx.request.query;

        const googleResponse = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&latlng=${lat},${lng}`);

        if (googleResponse && googleResponse.status === OK) {
            const results = googleResponse && googleResponse.data && googleResponse.data.results;

            if (!Array.isArray(results)) {
                return null;
            }

            const countryItem = results.find(item => Array.isArray(item.types) && item.types.includes('country'));
            const country = countryItem && countryItem.formatted_address;

            const countryInfo = getCountry(country);

            return {
                country,
                currency: countryInfo && countryInfo.currency
            };
        }

        return null;
    }

    async getOfficialExchange() {
        return repository.getOfficialExchange();
    }


    async getMtbBankExchange() {
        const response = await axios.get(exchangeUrl);

        const resultJSON = response ? await convert.xml2json(response.data, {
            compact: true
        }) : '{}';

        const result = JSON.parse(resultJSON);

        const exchangeItems = result && result.rates && result.rates.best && result.rates.best.currency;
        const oldItems = exchangeItems.map(item => {
            return {
                rate: item && item.sale && item.sale._text,
                abbreviation: item && item.code && item.code._text
            };
        });

        return {
            exchange: unionBy(oldItems, repository.getOfficialExchange().exchange, 'abbreviation')
        };
    }
}

module.exports = new CountryController();