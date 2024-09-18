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
            month: 'october_2024',
            days: 31,
            schedule: [
                { day: 1, dayShift: ['emmanuele', 'alessandro'], nightShift: ['fabio', 'rosarios'] },
                { day: 2, dayShift: ['simone', 'alessandro'], nightShift: ['emmanuele', 'rosarios'] },
                { day: 3, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosarios'] },
                { day: 4, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosarios'] },
                { day: 5, dayShift: ['emmanuele', 'alessandro'], nightShift: ['carlo', 'rosarios'] },
                { day: 6, dayShift: ['simone', 'alessandro'], nightShift: ['emmanuele', 'rosarios'] },
                { day: 7, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosarios'] },
                { day: 8, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosarios'] },
                { day: 9, dayShift: ['emmanuele', 'alessandro'], nightShift: ['carlo', 'rosarios'] },
                { day: 10, dayShift: ['simone', 'alessandro'], nightShift: ['emmanuele', 'rosarios'] },
                { day: 11, dayShift: ['carlo', 'rosariob'], nightShift: ['simone', 'alessandro'] },
                { day: 12, dayShift: ['emmanuele', 'rosariob'], nightShift: ['carlo', 'alessandro'] },
                { day: 13, dayShift: ['emmanuele', 'rosariob'], nightShift: ['rosarios', 'alessandro'] },
                { day: 14, dayShift: ['simone', 'rosariob'], nightShift: ['emmanuele', 'alessandro'] },
                { day: 15, dayShift: ['rosarios', 'rosariob'], nightShift: ['simone', 'alessandro'] },
                { day: 16, dayShift: ['rosarios', 'rosariob'], nightShift: ['emmanuele', 'alessandro'] },
                { day: 17, dayShift: ['rosarios', 'rosariob'], nightShift: ['emmanuele', 'alessandro'] },
                { day: 18, dayShift: ['simone', 'rosariob'], nightShift: ['emmanuele', 'alessandro'] },
                { day: 19, dayShift: ['rosarios', 'rosariob'], nightShift: ['simone', 'alessandro'] },
                { day: 20, dayShift: ['scoperto', 'rosarios'], nightShift: ['carlo', 'rosariob'] },
                { day: 21, dayShift: ['fabio', 'rosarios'], nightShift: ['emmanuele', 'rosariob'] },
                { day: 22, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'] },
                { day: 23, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'rosariob'] },
                { day: 24, dayShift: ['fabio', 'rosarios'], nightShift: ['carlo', 'rosariob'] },
                { day: 25, dayShift: ['emmanuele', 'rosarios'], nightShift: ['fabio', 'rosariob'] },
                { day: 26, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'] },
                { day: 27, dayShift: ['carlo', 'scoperto'], nightShift: ['simone', 'rosariob'] },
                { day: 28, dayShift: ['fabio', 'scoperto'], nightShift: ['carlo', 'rosariob'] },
                { day: 29, dayShift: ['emmanuele', 'simone'], nightShift: ['fabio', 'rosariob'] },
                { day: 30, dayShift: ['simone', 'carlo'], nightShift: ['emmanuele', 'rosariob'] },
                { day: 31, dayShift: ['carlo', 'fabio'], nightShift: ['simone', 'rosariob'] },
            ]
        },
        {
            month: 'september_2024',
            days: 30,
            schedule: [
                { day: 1, dayShift: ['simone', 'alessandro'], nightShift: ['carlo', 'rosarios'] },
                { day: 2, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosarios'] },
                { day: 3, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosarios'] },
                { day: 4, dayShift: ['simone', 'alessandro'], nightShift: ['fabio', 'rosarios'] },
                { day: 5, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosarios'] },
                { day: 6, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosarios'] },
                { day: 7, dayShift: ['simone', 'alessandro'], nightShift: ['fabio', 'rosarios'] },
                { day: 8, dayShift: ['simone', 'alessandro'], nightShift: ['emmanuele', 'rosarios'] },
                { day: 9, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosarios'] },
                { day: 10, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosarios'] },
                { day: 11, dayShift: ['emmanuele', 'rosariob'], nightShift: ['fabio', 'alessandro'] },
                { day: 12, dayShift: ['simone', 'rosariob'], nightShift: ['emmanuele', 'alessandro'] },
                { day: 13, dayShift: ['carlo', 'rosariob'], nightShift: ['simone', 'alessandro'] },
                { day: 14, dayShift: ['fabio', 'rosariob'], nightShift: ['carlo', 'alessandro'] },
                { day: 15, dayShift: ['emmanuele', 'rosariob'], nightShift: ['fabio', 'alessandro'] },
                { day: 16, dayShift: ['simone', 'rosariob'], nightShift: ['emmanuele', 'alessandro'] },
                { day: 17, dayShift: ['carlo', 'rosariob'], nightShift: ['emmanuele', 'simone'] },
                { day: 18, dayShift: ['fabio', 'rosariob'], nightShift: ['emmanuele', 'carlo'] },
                { day: 19, dayShift: ['scoperto', 'rosariob'], nightShift: ['emmanuele', 'carlo'] },
                { day: 20, dayShift: ['simone', 'scoperto'], nightShift: ['emmanuele', 'rosariob'] },
                { day: 21, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'rosariob'] },
                { day: 22, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'rosariob'] },
                { day: 23, dayShift: ['emmanuele', 'rosarios'], nightShift: ['carlo', 'rosariob'] },
                { day: 24, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'] },
                { day: 25, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'rosariob'] },
                { day: 26, dayShift: ['carlo', 'rosarios'], nightShift: ['emmanuele', 'rosariob'] },
                { day: 27, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'] },
                { day: 28, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'] },
                { day: 29, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'rosariob'] },
                { day: 30, dayShift: ['fabio', 'rosarios'], nightShift: ['carlo', 'rosariob'] },
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