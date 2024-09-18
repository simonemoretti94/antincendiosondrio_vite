import { reactive } from 'vue';

export const state = reactive({

    users: [
        ['simone_moretti', 'simone94', 'simone', 'moretti'],
        ['test', 'test', 'simone', 'moretti'],
        ['emmanuele_motta', 'emmanuele00', 'emmanuele', 'motta'],
        ['fabio_paganoni', 'fabio00', 'fabio', 'paganoni'],
        ['carlo_munafo', 'carlo00', 'carlo', 'munafo'],
        ['rosario_scerra', 'rosarios00', 'rosarios', 'scerra'],
        ['rosario_buttice', 'rosariob00', 'rosariob', 'buttice'],
        ['alessandro_alecce', 'alessandro00', 'alessandro', 'alecce'],
        //['username', 'password', 'realname', 'realsurname'],
    ],

    /**
     * handles login
     */
    found: false,
    userData: [],

    /**
     * handles shifts component
     */
    shiftsComponent: false,

    /**
     * handles form page
     */
    isAdmin: false,
    formComponent: false,


    calendar: [
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
    ],

});