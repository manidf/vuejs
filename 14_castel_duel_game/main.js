new Vue({
    name: 'game',
    el: '#app',
    
    data: state,

    mounted () {
        console.log(this.$data === state)
    },

    created () {
        this.testHand = this.createTestHand()
    },

    template: `<div id="#app">
       <top-bar :turn="turn" 
        :current-player-index="currentPlayerIndex" 
        :players="players" 
        />
       <hand :cards="testHand" />

    </div>`,

    computed: {
        testCard () {
            return cards.archers
        }
    },

    methods: {
        handlePlay (color, number) {            
            this.$on('play', () => { // listen to an event
                console.log('Caught a play event')
            })
        },
        createTestHand () {
            const cards = [] // get the possible ids            
            const ids = Object.keys(cards) // JS objects are written as key value pairs and to retrieve the key you use Object.keys
            for (let i = 0; i < 5; i++) { // Draw 5 cards
                cards.push(this.testDrawCard())
            }
            console.log(cards);
            return cards
        },
        testDrawCard() {            
            const ids = Object.keys(cards)// choose the card at random with the ids
            const randomId = ids[Math.floor(Math.random() * ids.length)]            
            return { // return a new card with this definition
                uid: cardUid++, // unique id for the card
                id: randomId, // Id of the definition
                def: cards[randomId],
            }
        }
    }
})

window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio() // Window resize handling
})