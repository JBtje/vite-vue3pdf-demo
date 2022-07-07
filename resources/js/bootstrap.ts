declare global {
    interface Window {
        //    _ :any
        axios :any
        // Echo :any
        // Pusher :any
    }
}

// import _ from 'lodash';
// window._ = _;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
import axios from 'axios'
window.axios = axios

/* Required for Sanctum */
window.axios.defaults.withCredentials = true

/**
 * Next we will obtain the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */
// window.axios.get('/sanctum/csrf-cookie').then(response => {
//
// });

// let token = document.head.querySelector<any>( 'meta[name="csrf-token"]' );
//
// if( token ) {
//     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error( 'CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token' );
// }

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Pusher from 'pusher-js';
// window.Pusher = require('pusher-js');

// import Echo from 'laravel-echo'
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.MIX_PUSHER_APP_KEY,
//     cluster: import.meta.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
