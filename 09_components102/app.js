
Vue.config.debug = true;

Vue.component('tasks', {
    
    props: ['list'],

    template: '#tasks-template',

    computed: {
        remaining: function() {
            return this.list.filter(this.inProgress).length; 
        }
    },

    methods: {
        isCompleted: function(task) {
            return task.completed;
        },
        
        inProgress: function(task) {
            return ! this.isCompleted(task);
        },

        deleteTask: function(task) {
            this.list.$remove(task);
        },

        clearCompleted: function(task) {
            this.list = this.list.filter(this.inProgress);
        }
    }
});

new Vue({
    
    el: '#app',

    data: {
        tasks: [
            { body: 'Go to the store', completed: true },
            { body: 'Go to the bank', completed: false },
            { body: 'Go the football match', completed: false },
            { body: 'Buy Milk', completed: false }
        ]
    }

});