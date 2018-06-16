'use strict';

class Repository {
    getOfficialExchange() {
        return {
            exchange: [
                {
                    abbreviation: 'AUD',
                    rate: 1.4932
                },
                {
                    abbreviation: 'BGN',
                    rate: 1.1865
                },
                {
                    abbreviation: 'UAH',
                    rate: 7.5913
                },
                {
                    abbreviation: 'DKK',
                    rate: 3.1149
                },
                {
                    abbreviation: 'USD',
                    rate: 2.0007
                },
                {
                    abbreviation: 'EUR',
                    rate: 2.3168
                },
                {
                    abbreviation: 'PLN',
                    rate: 5.4257
                },
                {
                    abbreviation: 'IRR',
                    rate: 4.7276
                },
                {
                    abbreviation: 'ISK',
                    rate: 1.8731
                },
                {
                    abbreviation: 'JPY',
                    rate: 1.81
                },
                {
                    abbreviation: 'CAD',
                    rate: 1.5218
                },
                {
                    abbreviation: 'CNY',
                    rate: 3.116
                },
                {
                    abbreviation: 'KWD',
                    rate: 6.6105
                },
                {
                    abbreviation: 'MDL',
                    rate: 1.1909
                },
                {
                    abbreviation: 'NZD',
                    rate: 1.3896
                },
                {
                    abbreviation: 'NOK',
                    rate: 2.4581
                },
                {
                    abbreviation: 'RUB',
                    rate: 3.1911
                },
                {
                    abbreviation: 'XDR',
                    rate: 2.8465
                },
                {
                    abbreviation: 'SGD',
                    rate: 1.4851
                },
                {
                    abbreviation: 'KGS',
                    rate: 2.9293
                },
                {
                    abbreviation: 'KZT',
                    rate: 5.9412
                },
                {
                    abbreviation: 'TRY',
                    rate: 4.2177
                },
                {
                    abbreviation: 'GBP',
                    rate: 2.6563
                },
                {
                    abbreviation: 'CZK',
                    rate: 9.0215
                },
                {
                    abbreviation: 'SEK',
                    rate: 2.2809
                },
                {
                    abbreviation: 'CHF',
                    rate: 2.0066
                }
            ]
        };
    }
}

module.exports = new Repository();