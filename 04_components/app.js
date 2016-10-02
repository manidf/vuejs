
new Vue({
    
    el: '#app', // bind to element in html
    
    methods: {
        handleIt: function () { // any method needs to nested within a methods object
            console.log('Handled');
            alert('handled');
        }
    }
    
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