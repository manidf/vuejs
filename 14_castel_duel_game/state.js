var maxHealth = 10
var maxFood = 10
var handSize = 5
var cardUid = 0
var currentPlayingCard = null

var state = { // The consolidated state of our app  
  worldRatio: getWorldRatio(), // World
  turn: 1,
  players: [
    {
      name: 'Joe Soap',
    },
    {
      name: 'Sally Soap'
    }    
  ],
  testHand: [],
  currentPlayerIndex: Math.round(Math.random()), // generate random number to change who starts
  activeOverlay: null, // UI
}