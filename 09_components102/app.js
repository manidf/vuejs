
Vue.config.debug = true;


Vue.component('my-tasks', {
    props: [],
    template: '#tasks-template'
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