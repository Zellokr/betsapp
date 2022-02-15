export const cuotas = [
    {
        cuot1: 1.1,
        cuot2: 11
    },
    {
        cuot1: 1.12,
        cuot2: 9.33
    },
    {
        cuot1: 1.14,
        cuot2: 8.14
    },
    {
        cuot1: 1.16,
        cuot2: 7.25
    },
    {
        cuot1: 1.18,
        cuot2: 6.58
    },
    {
        cuot1: 1.2,
        cuot2: 6
    },
    {

        cuot1: 1.22,
        cuot2: 5.5
    },
    {
        cuot1: 1.25,
        cuot2: 5
    },
    {
        cuot1: 1.28,
        cuot2: 4.5
    },
    {
        cuot1: 1.3,
        cuot2: 4.33
    },
    {
        cuot1: 1.33,
        cuot2: 4
    },
    {
        cuot1: 1.36,
        cuot2: 3.75
    },
    {
        cuot1: 1.4,
        cuot2: 3.5
    },
    {
        cuot1: 1.44,
        cuot2: 3.25
    },
    {
        cuot1: 1.5,
        cuot2: 3
    },
    {
        cuot1: 1.53,
        cuot2: 2.89
    },
    {
        cuot1: 1.57,
        cuot2: 2.75
    },
    {
        cuot1: 1.6,
        cuot2: 2.67
    },
    {
        cuot1: 1.66,
        cuot2: 2.52
    },
    {
        cuot1: 1.7,
        cuot2: 2.43
    },
    {
        cuot1: 1.72,
        cuot2: 2.39
    },
    {
        cuot1: 1.75,
        cuot2: 2.33
    },
    {
        cuot1: 1.8,
        cuot2: 2.25
    },
    {
        cuot1: 1.83,
        cuot2: 2.2
    },
    {
        cuot1: 1.85,
        cuot2: 2.18
    },
    {
        cuot1: 1.9,
        cuot2: 2.11
    },
    {
        cuot1: 1.95,
        cuot2: 2.05
    },
    {
        cuot1: 1.99,
        cuot2: 2.01
    }
];

export const orderLeaguesByCountry = leagues => {
    const arrayCountries = [];
    leagues.value.forEach(element => {
        const country = { region: element.region, league: [element.league] };
        leagues.value.forEach(subelement => {
            if (element.region === subelement.region) {
                if (!country.league.includes(subelement.league)) {
                    country.league.push(subelement.league);
                }
            }
        });
        let isExist = false;
        arrayCountries.forEach(league => {
            if (league.region === country.region) { isExist = true; }
        });
        if (!isExist) { arrayCountries.push(country); }
    });
    return arrayCountries;
};
