<script>
import { state } from '/state.js';
//import * from '';

export default {
    name: 'appFooter',
    //emits: [''],
    components: { //imported components 
        //*,

    },
    data() { //variables, bool, array, objects and so on

        return {}
    },
    methods: { //functions; all kind of manipulations

    },
    computed: { // computed properties are cached based on their reactive dependencies
        //return example this.value1 + this.value2;

    },
    created() { //Run code before DOM's initial rendering
        return //example this.value1 + this.value2;

    },
    mounted() { //Run code after DOM's initial rendering
        /*axios
        .get('')
        .then((response) => {
           console.log(response);
        } )*/
    },
    watch: { //triggers a function whenever a reactive property changes

    },
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row mainrow">
                <h1 class="sitnavH1 hidden-md hidden-lg">
                    Site Navigation
                </h1>
                <div class="col-md-3">




                    <ul>
                        <li>
                            <a href="#">About page</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md-3 col-sm-12">
                    <ul>
                        <li>
                            <a href="">Developer contacts</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md-3">

                    <ul>
                        <li>
                            <a href="#">To Form Page</a>
                        </li>
                    </ul>
                </div>
                <hr class="hidden-md hidden-lg">

                <div class="col-md-3">
                    <h1 class="contactus">Contact Me</h1>
                    <p>Email: <a href="mailto:simone.moretti.944@gmil.com">simone moretti</a></p>
                    <!-- <p>Call-Us <a href="tel:044-4547896321">044-4547896321</a></p> -->
                    <h1 class="socialM">Social Media</h1>
                    <a href="https://www.facebook.com"><i class="fab fa-facebook-square fa-3x"></i></a>
                    <a href="https://www.facebook.com"><i class="fab fa-instagram-square fa-3x"></i></a>
                    <a href="https://www.facebook.com"><i class="fab fa-twitter-square fa-3x"></i></a>
                    <a href="https://www.facebook.com"><i class="fab fa-pinterest-square fa-3x"></i></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
/* imported footer style, shared within all pages */

footer {
    min-height: 150px;
    position: relative;
    padding-top: 20px;
    bottom: 0;
    border-top: 2px solid #225378;

    & a {
        text-decoration: none;
    }
}

.mainrow {
    padding-bottom: 10px;
}

.sitnavH1,
.contactus,
.socialM {
    margin-top: 0;
    margin-bottom: 15px;
    color: #225378;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;

}

ul {
    list-style: none;
    margin-bottom: 0px;
}
</style>