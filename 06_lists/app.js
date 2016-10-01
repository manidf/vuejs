
new Vue({
    
    el: '#app',

    data: {
        someThing: false,
        tasks: [
            { body: 'Go to the store', completed: false },
            { body: 'Go to the bank', completed: true },
            { body: 'Go the football match', completed: true },
        ]
    },

    methods: {
        toggleCompletedFor: function (task) {
            task.completed = ! task.completed;

        }
    }
    
});