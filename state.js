import { reactive } from 'vue';
import { calendar } from './shifts';
import { workedCalendar } from './shifts';

export const state = reactive({

    users: [
        ['simone_moretti', 'simone94', 'simone', 'moretti', 'simone moretti'],
        ['test', 'test', 'simone', 'moretti', 'simone moretti'],
        ['emmanuele_motta', 'emmanuele00', 'emmanuele', 'motta', 'emmanuele motta'],
        ['fabio_paganoni', 'fabio00', 'fabio', 'paganoni', 'fabio paganoni'],
        ['carlo_munafo', 'carlo00', 'carlo', 'munafo', "carlo munafo'"],
        ['rosario_scerra', 'rosarios00', 'rosarios', 'scerra', 'rosario scerra'],
        ['rosario_buttice', 'rosariob00', 'rosariob', 'buttice', "rosario buttice'"],
        ['alessandro_alecce', 'alessandro00', 'alessandro', 'alecce', 'alessandro alecce'],
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

});