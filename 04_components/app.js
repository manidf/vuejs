

Vue.component('my-counter', {
    template: '<h1> hello worldgi</h1>'
});

new Vue({

    el: '#counter',

    data: {
        count: 0
    },

    methods: {
        updateCount: function () {
            this.count += 1;
        }
    }

});