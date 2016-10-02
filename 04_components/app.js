
// if you need more than one instance of an object/component to have same functionality
// always make it a vue-component with its own reusable data and props and functions.
Vue.component('my-counter', {
    // this is a global isntance of a vue component, if you want to make it not global add it to the root vue instance below.
    template: '#counter-template',

    // pass data in from outside using properties
    props: ['subject'],

    // return a function, does not work the same as a normal vue root instance.
    data: function () {
        return {
            count: 0 
        };
    }
});

new Vue({
    // always create a 'root vue intance'
    el: '#counter',

    // to encapsulate a vue-component to a particular vue-instance with a unique ID use the components methods
    /*
    component: {
        counter: {
            template: '#counter-template',

            props: ['subject'],

            data: function () {
                return {
                    count: 0 
                };
            } 
        }
    }
    */

});