
new Vue({
    
    el: '#app',

    data: {
        plans: [
            { name: 'Enterprise', price: 100 },
            { name: 'Pro', price: 50 },
            { name: 'Personal', price: 10 },
            { name: 'Free', price: 'Free' }
        ],
        active: {}
    },

    computed: {
        isUgrade: function () {
            return this.plan.price > this.active.price;
            // this.plan.price
            // this.active.price
        }
    },

    components: {
        plan: {
            template: '#plan-template',
            props: ['plan', 'active'],
            methods: {
                setActivePlan: function () { //bind to @click on button to select active plan
                    this.active = this.plan;
                }
            }
        }
    }
    
});