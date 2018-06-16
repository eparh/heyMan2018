'use strict';

const axios = require('axios');
const getCountry = require('country-currency-map').getCountry;

const apiKey = process.env.GOOGLE_KEY;

const exchangeUrl = process.env.EXCHANGE_URL;

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

    async getExchange() {
        const exchange = await axios.get(exchangeUrl);

        return {
            exchange: Array.isArray(exchange.data) && exchange.data.map(item => {
                return {
                    abbreviation: item.Cur_Abbreviation,
                    rate: item.Cur_OfficialRate
                };
            })
        };
    }
}

module.exports = new CountryController();