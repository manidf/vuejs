new Vue({
    el: '#app',

    // data model that renders links on the homepage yay so easy your mama could write this. 
    data: {
        links: [
            { name: '01. Hello World', path: '/01_helloworld'},
            { name: '02. Vue Show', path: '/02_vueshow'},
            { name: '03. Event Handling', path: '/03_eventhandling'},
            { name: '04. Components', path: '/04_components' },
            { name: '05. Computed Properties', path: '/05_computedproperties'},
            { name: '06. Subscriptions', path: '/06_subscriptions'},
            { name: '07. Lists', path: '/07_lists'},
            { name: '08. Components101', path: '/08_components101'},
        ]
    }
});