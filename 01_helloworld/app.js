
new Vue({
    el: '#app', // bind to element in html
    data: {
        message: 'Hello World!'
    }
});

new Vue({ // view model
    el: '#todoApp',
    data: {
        todos: [
            { text: 'Learn Js' },
            { text: 'Learn Vue Js' }
        ]
    }
});