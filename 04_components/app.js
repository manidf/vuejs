

Vue.component('my-counter', {
    template: '#counter-template',

    // return a function, does not work the same as a normal vue root instance.
    data: function () {
        return {
            count: 0 
        };
    } 
});

new Vue({

    el: '#counter',

    // data: {
    //     count: 0
    // },

    // methods: {
    //     updateCount: function () {
    //         this.count += 1;
    //     }
    // }

});