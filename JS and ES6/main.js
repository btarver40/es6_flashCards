let newCard = ""

const flashcards = [
  { cardFront: "What is my name", cardBack: "bianca" },
  { cardFront: "question", cardBack: "answer."}
]


function add_card() {
  var q = $('#cardFront').val();
  var a = $('#cardBack').val();
  flashcards.push( { question: q, answer: a} )
}


$('#newCard').on('click', function() {
  // window.location.reload()
  current_card = flashcards[Math.floor(Math.random() * flashcards.length)]
  $('#showCard').text(current_card.question)
})

$('#flipCard').click(function() {
  if ($('#showCard').text() == current_card.question) {
    $('#showCard').text(current_card.answer)
  } else {
    $('#showCard').text(current_card.question)
  }
})














// const cardFront = {}
// const cardBack = {}
// const cardFrontInput = {}
// var newCard = {}

// $('#btn-addCard').on('click' =>(){
//   if (true){
//     let cardFront = newCard  
//   }

// }}


// $('#btn-EditCard').on('click' =>(){
//   var newCard = (cardFront) => {
//     console.log();


// }}
  
// const cardFront = (user_input) => {
//   return `${user_input}`;
//  }

  