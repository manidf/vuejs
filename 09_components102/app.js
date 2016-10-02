
Vue.config.debug = true;

Vue.component('tasks', {
    
    props: ['list'],

    template: '#tasks-template',

    computed: {
        remaining: function() {
            return this.list.filter(function(task) {
                return !task.completed;
            }).length; 
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