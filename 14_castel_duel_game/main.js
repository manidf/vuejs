console.log('game init');

new Vue({
    name: 'game',
    el: '#app',
    
    data: state,

    mounted () {
        console.log(this.$data === state)
    },

    template: `<div id="#app">
       <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players" />
    </div>`,
})

// Window resize handling
window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio()
})