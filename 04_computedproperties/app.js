
new Vue({
    el: '#app',

    data: {
        points: 101, // data bound to input in page, when changed will cause computed value to re-evalute on user input
    },

    computed: {
        skill: function() {
            if (this.points <= 100) {
                return 'Beginner';
            }
            return 'Advanced';
        }
    }
});

new Vue({

    el: '#names',

    data: {
        firstName: 'Jonny',
        lastName: 'Mcdooooo',
        // fullName: 'Mannuel Ferreira'
    },

    computed: {
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        }
    }
});