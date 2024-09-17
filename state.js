import { reactive } from 'vue';

export const state = reactive({

    users: [
        //['simone_moretti', 'simone94', 'simone', 'moretti'],
        ['test', 'test', 'simone', 'moretti'],
        ['emmanuele_motta', 'emmanuele00', 'emmanuele', 'motta'],
        ['fabio_paganoni', 'fabio00', 'fabio', 'paganoni'],
        ['carlo_munafo', 'carlo00', 'carlo', 'munafo'],
        ['rosario_scerra', 'rosarios00', 'rosarios', 'scerra'],
        ['rosario_buttice', 'rosariob00', 'rosariob', 'buttice'],
        ['alessandro_alecce', 'alessandro00', 'alessandro', 'alecce'],
        //['username', 'password', 'realname', 'realsurname'],
    ],

    found: false,
    userData: [],


    calendar: [
        {
            month: 'january',
            days: 31,
        },
        {
            month: 'february',
            days: 28
        },
        {
            month: 'march',
            days: 31
        },
        {
            month: 'april',
            days: 30
        },
        {
            month: 'may',
            days: 31
        },
        {
            month: 'june',
            days: 30
        },
        {
            month: 'july',
            days: 31
        },
        /*{
            month: 'august_2024',
            days: 31,
            users: {
                simone: {
                    number: 17,
                    day: 7,
                    night: 10,
                    ps: 0,
                },
                emmanuele: {
                    number: 14.5,
                    day: 7,
                    night: 8,
                    ps: 0,
                },
                fabio: {
                    number: 15,
                    day: 8,
                    night: 7,
                    ps: 0,
                },
                rosariob: {
                    number: 19.5,
                    day: 8,
                    night: 11,
                },
                rosarios: {
                    number: 20,
                    day: 10,
                    night: 8,
                    ps: 1,
                },
                carlo: {
                    number: 19.5,
                    day: 9,
                    night: 9,
                    ps: 0,
                },
                alessandro: {
                    number: 16,
                    day: 10,
                    night: 6,
                    ps: 1,
                },
            }
        },*/
        {
            month: 'september_2024',
            days: 30,
            schedule: [
                { day: 1, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 2, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 3, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 4, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 5, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 6, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 7, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 8, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 9, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 10, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 11, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 12, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 13, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 14, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 15, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 16, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 17, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 18, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 19, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 20, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 21, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 22, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 23, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 24, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 25, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 26, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 27, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 28, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 29, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 30, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 31, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
            ]
        },
        {
            month: 'august_2024',
            days: 31,
            schedule: [
                { day: 1, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 2, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 3, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 4, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 5, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 6, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 7, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 8, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 9, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 10, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 11, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 12, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 13, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 14, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 15, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 16, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 17, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 18, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 19, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 20, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 21, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 22, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 23, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 24, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 25, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 26, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 27, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 28, dayShift: ['simone', 'fabio'], nightShift: ['simone', 'emmanuele'] },
                { day: 29, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 30, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
                { day: 31, dayShift: ['simone', 'fabio'], nightShift: ['carlo', 'emmanuele'] },
            ]
        },
        /*{
            month: 'september_2024',
            days: 30,
            users: {
                simone: {
                    number: 19,
                    day: 10,
                    night: 9,
                    ps: 0,
                },
                emmanuele: {
                    number: 14.5,
                    day: 3,
                    night: 11,
                    ps: 1,
                },
                fabio: {
                    number: 11,
                    day: 7,
                    night: 4,
                    ps: 0,
                },
                rosariob: {
                    number: 20,
                    day: 9,
                    night: 11,
                    ps: 2,
                },
                rosarios: {
                    number: 20,
                    day: 10,
                    night: 10,
                    ps: 0,
                },
                carlo: {
                    number: 19.5,
                    day: 8,
                    night: 11,
                    ps: 1,
                },
                alessandro: {
                    number: 12,
                    day: 10,
                    night: 2,
                    ps: 0,
                },
            }
        },*/
        /*{
            month: 'october',
            days: 31
        },
        {
            month: 'november',
            days: 30
        },
        {
            month: 'december',
            days: 31
        },*/
    ],

});