import { reactive } from 'vue';
import { calendar } from './shifts';
import { workedCalendar } from './shifts';

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
     * declared shifts
     */
    calendar,
    workedCalendar,

    /**
     * Main components handler
     */
    mainIndex: true,
    mainDocuments: false,

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


    // calendar: [
    //     {
    //         month: 'october_2024',
    //         ita: 'ottobre 2024',
    //         days: 31,
    //         schedule: [
    //             { day: 1, dayShift: ['emmanuele', 'alessandro'], nightShift: ['fabio', 'rosarios'], psShift: [''], },
    //             { day: 2, dayShift: ['simone', 'alessandro'], nightShift: ['emmanuele', 'rosarios'], psShift: [''], },
    //             { day: 3, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosarios'], psShift: [''], },
    //             { day: 4, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
    //             { day: 5, dayShift: ['emmanuele', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: ['rosarios'], },
    //             { day: 6, dayShift: ['simone', 'alessandro'], nightShift: ['emmanuele', 'rosarios'], psShift: [''], },
    //             { day: 7, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosarios'], psShift: [''], },
    //             { day: 8, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosarios'], psShift: [''], },
    //             { day: 9, dayShift: ['emmanuele', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
    //             { day: 10, dayShift: ['simone', 'alessandro'], nightShift: ['emmanuele', 'rosarios'], psShift: [''], },
    //             { day: 11, dayShift: ['carlo', 'rosariob'], nightShift: ['simone', 'alessandro'], psShift: [''], },
    //             { day: 12, dayShift: ['emmanuele', 'rosariob'], nightShift: ['carlo', 'alessandro'], psShift: ['rosarios'], },
    //             { day: 13, dayShift: ['emmanuele', 'rosariob'], nightShift: ['rosarios', 'alessandro'], psShift: [''], },
    //             { day: 14, dayShift: ['simone', 'rosariob'], nightShift: ['emmanuele', 'alessandro'], psShift: [''], },
    //             { day: 15, dayShift: ['rosarios', 'rosariob'], nightShift: ['simone', 'alessandro'], psShift: [''], },
    //             { day: 16, dayShift: ['rosarios', 'rosariob'], nightShift: ['emmanuele', 'alessandro'], psShift: [''], },
    //             { day: 17, dayShift: ['rosarios', 'rosariob'], nightShift: ['emmanuele', 'alessandro'], psShift: [''], },
    //             { day: 18, dayShift: ['simone', 'rosariob'], nightShift: ['emmanuele', 'alessandro'], psShift: [''], },
    //             { day: 19, dayShift: ['rosarios', 'rosariob'], nightShift: ['simone', 'alessandro'], psShift: ['scoperto'], },
    //             { day: 20, dayShift: ['scoperto', 'rosarios'], nightShift: ['carlo', 'rosariob'], psShift: [''], },
    //             { day: 21, dayShift: ['fabio', 'rosarios'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
    //             { day: 22, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
    //             { day: 23, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'rosariob'], psShift: [''], },
    //             { day: 24, dayShift: ['fabio', 'rosarios'], nightShift: ['carlo', 'rosariob'], psShift: [''], },
    //             { day: 25, dayShift: ['emmanuele', 'rosarios'], nightShift: ['fabio', 'rosariob'], psShift: [''], },
    //             { day: 26, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'], psShift: ['scoperto'], },
    //             { day: 27, dayShift: ['carlo', 'scoperto'], nightShift: ['simone', 'rosariob'], psShift: [''], },
    //             { day: 28, dayShift: ['fabio', 'scoperto'], nightShift: ['carlo', 'rosariob'], psShift: [''], },
    //             { day: 29, dayShift: ['emmanuele', 'simone'], nightShift: ['fabio', 'rosariob'], psShift: [''], },
    //             { day: 30, dayShift: ['simone', 'carlo'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
    //             { day: 31, dayShift: ['carlo', 'fabio'], nightShift: ['simone', 'rosariob'], psShift: [''], },
    //         ]
    //     },
    //     {
    //         month: 'september_2024',
    //         ita: 'settembre 2024',
    //         days: 30,
    //         schedule: [
    //             { day: 1, dayShift: ['simone', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
    //             { day: 2, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
    //             { day: 3, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
    //             { day: 4, dayShift: ['simone', 'alessandro'], nightShift: ['fabio', 'rosarios'], psShift: [''], },
    //             { day: 5, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosarios'], psShift: [''], },
    //             { day: 6, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
    //             { day: 7, dayShift: ['simone', 'alessandro'], nightShift: ['fabio', 'rosarios'], psShift: ['fabio'], },
    //             { day: 8, dayShift: ['simone', 'alessandro'], nightShift: ['emmanuele', 'rosarios'], psShift: [''], },
    //             { day: 9, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosarios'], psShift: [''], },
    //             { day: 10, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
    //             { day: 11, dayShift: ['emmanuele', 'rosariob'], nightShift: ['fabio', 'alessandro'], psShift: [''], },
    //             { day: 12, dayShift: ['simone', 'rosariob'], nightShift: ['emmanuele', 'alessandro'], psShift: [''], },
    //             { day: 13, dayShift: ['carlo', 'rosariob'], nightShift: ['simone', 'alessandro'], psShift: [''], },
    //             { day: 14, dayShift: ['fabio', 'rosariob'], nightShift: ['carlo', 'alessandro'], psShift: ['emmanuele'], },
    //             { day: 15, dayShift: ['emmanuele', 'rosariob'], nightShift: ['fabio', 'alessandro'], psShift: [''], },
    //             { day: 16, dayShift: ['simone', 'rosariob'], nightShift: ['emmanuele', 'alessandro'], psShift: [''], },
    //             { day: 17, dayShift: ['carlo', 'rosariob'], nightShift: ['emmanuele', 'simone'], psShift: [''], },
    //             { day: 18, dayShift: ['fabio', 'rosariob'], nightShift: ['emmanuele', 'carlo'], psShift: [''], },
    //             { day: 19, dayShift: ['scoperto', 'rosariob'], nightShift: ['emmanuele', 'carlo'], psShift: [''], },
    //             { day: 20, dayShift: ['simone', 'scoperto'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
    //             { day: 21, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'rosariob'], psShift: ['rosariob'], },
    //             { day: 22, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'rosariob'], psShift: [''], },
    //             { day: 23, dayShift: ['emmanuele', 'rosarios'], nightShift: ['carlo', 'rosariob'], psShift: [''], },
    //             { day: 24, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
    //             { day: 25, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'rosariob'], psShift: [''], },
    //             { day: 26, dayShift: ['carlo', 'rosarios'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
    //             { day: 27, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
    //             { day: 28, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'], psShift: ['rosariob'], },
    //             { day: 29, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'rosariob'], psShift: [''], },
    //             { day: 30, dayShift: ['fabio', 'rosarios'], nightShift: ['carlo', 'rosariob'], psShift: [''], },
    //         ]
    //     },
    //     {
    //         month: 'august_2024',
    //         ita: 'agosto 2024',
    //         days: 31,
    //         schedule: [
    //             { day: 1, dayShift: ['fabio', 'rosariob'], nightShift: ['simone', 'alessandro'], psShift: [''], },
    //             { day: 2, dayShift: ['rosarios', 'rosariob'], nightShift: ['fabio', 'alessandro'], psShift: [''], },
    //             { day: 3, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'alessandro'], psShift: ['scoperto'], },
    //             { day: 4, dayShift: ['rosarios', 'rosariob'], nightShift: ['simone', 'alessandro'], psShift: [''], },
    //             { day: 5, dayShift: ['fabio', 'rosarios'], nightShift: ['simone', 'alessandro'], psShift: [''], },
    //             { day: 6, dayShift: ['emmanuele', 'rosarios'], nightShift: ['fabio', 'alessandro'], psShift: [''], },
    //             { day: 7, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'alessandro'], psShift: [''], },
    //             { day: 8, dayShift: ['carlo', 'rosarios'], nightShift: ['simone', 'alessandro'], psShift: [''], },
    //             { day: 9, dayShift: ['fabio', 'rosarios'], nightShift: ['carlo', 'alessandro'], psShift: [''], },
    //             { day: 10, dayShift: ['emmanuele', 'rosarios'], nightShift: ['carlo', 'fabio'], psShift: ['alessandro'], },
    //             { day: 11, dayShift: ['simone', 'rosarios'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
    //             { day: 12, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosariob'], psShift: [''], },
    //             { day: 13, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosariob'], psShift: [''], },
    //             { day: 14, dayShift: ['emmanuele', 'alessandro'], nightShift: ['fabio', 'rosariob'], psShift: [''], },
    //             { day: 15, dayShift: ['carlo', 'alessandro'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
    //             { day: 16, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosariob'], psShift: [''], },
    //             { day: 17, dayShift: ['fabio', 'alessandro'], nightShift: ['simone', 'carlo'], psShift: ['rosariob'], },
    //             { day: 18, dayShift: ['emmanuele', 'alessandro'], nightShift: ['fabio', 'rosariob'], psShift: [''], },
    //             { day: 19, dayShift: ['simone', 'carlo'], nightShift: ['emmanuele', 'rosariob'], psShift: [''], },
    //             { day: 20, dayShift: ['carlo', 'alessandro'], nightShift: ['simone', 'rosariob'], psShift: [''], },
    //             { day: 21, dayShift: ['fabio', 'alessandro'], nightShift: ['carlo', 'rosariob'], psShift: [''], },
    //             { day: 22, dayShift: ['emmanuele', 'alessandro'], nightShift: ['fabio', 'rosariob'], psShift: [''], },
    //             { day: 23, dayShift: ['simone', 'carlo'], nightShift: ['emmanuele', 'rosarios'], psShift: [''], },
    //             { day: 24, dayShift: ['carlo', 'rosariob'], nightShift: ['simone', 'rosarios'], psShift: ['scoperto'], },
    //             { day: 25, dayShift: ['fabio', 'rosariob'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
    //             { day: 26, dayShift: ['emmanuele', 'rosariob'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
    //             { day: 27, dayShift: ['simone', 'rosariob'], nightShift: ['emmanuele', 'rosarios'], psShift: [''], },
    //             { day: 28, dayShift: ['carlo', 'rosariob'], nightShift: ['simone', 'rosarios'], psShift: [''], },
    //             { day: 29, dayShift: ['fabio', 'rosariob'], nightShift: ['carlo', 'rosarios'], psShift: [''], },
    //             { day: 30, dayShift: ['emmanuele', 'rosariob'], nightShift: ['fabio', 'rosarios'], psShift: [''], },
    //             { day: 31, dayShift: ['simone', 'rosariob'], nightShift: ['fabio', 'carlo'], psShift: ['rosarios'], },
    //         ]
    //     },
    // ],

});