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
                { day: 1, dayShift: ['emmanuele', 'alessandro'], nightShift: ['fabio', 'rosarios'], psShift: [''], },
                { day: 2, dayShift: ['simone', 'alessandro'], nightShift: ['emmanuele', 'rosarios'], psShift: [''], },
                { day: 3, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosarios'], psShift: [''], },
                { day: 4, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
                { day: 5, dayShift: ['emmanuele', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: ['rosarios'], },
                { day: 6, dayShift: ['simone', 'alessandro'], nightShift: ['emmanuele', 'rosarios'], psShift: [''], },
                { day: 7, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosarios'], psShift: [''], },
                { day: 8, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosarios'], psShift: [''], },
                { day: 9, dayShift: ['emmanuele', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
                { day: 10, dayShift: ['simone', 'alessandro'], nightShift: ['emmanuele', 'rosarios'], psShift: [''], },
                { day: 11, dayShift: ['carlo', 'rosariob'], nightShift: ['simone', 'alessandro'], psShift: [''], },
                { day: 12, dayShift: ['emmanuele', 'rosariob'], nightShift: ['carlo', 'alessandro'], psShift: ['rosarios'], },
                { day: 13, dayShift: ['emmanuele', 'rosariob'], nightShift: ['rosarios', 'alessandro'], psShift: [''], },
                { day: 14, dayShift: ['simone', 'rosariob'], nightShift: ['emmanuele', 'alessandro'], psShift: [''], },
                { day: 15, dayShift: ['rosarios', 'rosariob'], nightShift: ['simone', 'alessandro'], psShift: [''], },
                { day: 16, dayShift: ['rosarios', 'rosariob'], nightShift: ['emmanuele', 'alessandro'], psShift: [''], },
                { day: 17, dayShift: ['rosarios', 'rosariob'], nightShift: ['emmanuele', 'alessandro'], psShift: [''], },
                { day: 18, dayShift: ['simone', 'rosariob'], nightShift: ['emmanuele', 'alessandro'], psShift: [''], },
                { day: 19, dayShift: ['rosarios', 'rosariob'], nightShift: ['simone', 'alessandro'], psShift: ['scoperto'], },
                { day: 20, dayShift: ['scoperto', 'rosarios'], nightShift: ['carlo', 'rosariob'], psShift: [''], },
                { day: 21, dayShift: ['fabio', 'rosarios'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
                { day: 22, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
                { day: 23, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'rosariob'], psShift: [''], },
                { day: 24, dayShift: ['fabio', 'rosarios'], nightShift: ['carlo', 'rosariob'], psShift: [''], },
                { day: 25, dayShift: ['emmanuele', 'rosarios'], nightShift: ['fabio', 'rosariob'], psShift: [''], },
                { day: 26, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'], psShift: ['scoperto'], },
                { day: 27, dayShift: ['carlo', 'scoperto'], nightShift: ['simone', 'rosariob'], psShift: [''], },
                { day: 28, dayShift: ['fabio', 'scoperto'], nightShift: ['carlo', 'rosariob'], psShift: [''], },
                { day: 29, dayShift: ['emmanuele', 'simone'], nightShift: ['fabio', 'rosariob'], psShift: [''], },
                { day: 30, dayShift: ['simone', 'carlo'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
                { day: 31, dayShift: ['carlo', 'fabio'], nightShift: ['simone', 'rosariob'], psShift: [''], },
            ]
        },
        {
            month: 'september_2024',
            days: 30,
            schedule: [
                { day: 1, dayShift: ['simone', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
                { day: 2, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
                { day: 3, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
                { day: 4, dayShift: ['simone', 'alessandro'], nightShift: ['fabio', 'rosarios'], psShift: [''], },
                { day: 5, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosarios'], psShift: [''], },
                { day: 6, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
                { day: 7, dayShift: ['simone', 'alessandro'], nightShift: ['fabio', 'rosarios'], psShift: ['fabio'], },
                { day: 8, dayShift: ['simone', 'alessandro'], nightShift: ['emmanuele', 'rosarios'], psShift: [''], },
                { day: 9, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosarios'], psShift: [''], },
                { day: 10, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
                { day: 11, dayShift: ['emmanuele', 'rosariob'], nightShift: ['fabio', 'alessandro'], psShift: [''], },
                { day: 12, dayShift: ['simone', 'rosariob'], nightShift: ['emmanuele', 'alessandro'], psShift: [''], },
                { day: 13, dayShift: ['carlo', 'rosariob'], nightShift: ['simone', 'alessandro'], psShift: [''], },
                { day: 14, dayShift: ['fabio', 'rosariob'], nightShift: ['carlo', 'alessandro'], psShift: ['emmanuele'], },
                { day: 15, dayShift: ['emmanuele', 'rosariob'], nightShift: ['fabio', 'alessandro'], psShift: [''], },
                { day: 16, dayShift: ['simone', 'rosariob'], nightShift: ['emmanuele', 'alessandro'], psShift: [''], },
                { day: 17, dayShift: ['carlo', 'rosariob'], nightShift: ['emmanuele', 'simone'], psShift: [''], },
                { day: 18, dayShift: ['fabio', 'rosariob'], nightShift: ['emmanuele', 'carlo'], psShift: [''], },
                { day: 19, dayShift: ['scoperto', 'rosariob'], nightShift: ['emmanuele', 'carlo'], psShift: [''], },
                { day: 20, dayShift: ['simone', 'scoperto'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
                { day: 21, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'rosariob'], psShift: ['rosariob'], },
                { day: 22, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'rosariob'], psShift: [''], },
                { day: 23, dayShift: ['emmanuele', 'rosarios'], nightShift: ['carlo', 'rosariob'], psShift: [''], },
                { day: 24, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
                { day: 25, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'rosariob'], psShift: [''], },
                { day: 26, dayShift: ['carlo', 'rosarios'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
                { day: 27, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
                { day: 28, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'], psShift: ['rosariob'], },
                { day: 29, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'rosariob'], psShift: [''], },
                { day: 30, dayShift: ['fabio', 'rosarios'], nightShift: ['carlo', 'rosariob'], psShift: [''], },
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

//template

/*
{
    month: 'january_2025',
    days: 31,
    schedule: [
        { day: 1, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 2, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 3, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 4, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 5, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 6, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 7, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 8, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 9, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 10, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 11, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 12, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 13, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 14, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 15, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 16, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 17, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 18, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 19, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 20, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 21, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 22, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 23, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 24, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 25, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 26, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 27, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 28, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 29, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 30, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
        { day: 31, dayShift: ['nome1', 'nome2'], nightShift: ['nome3', 'nome4'], psShift: [''], },
    ]
},
*/