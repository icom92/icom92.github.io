const quotes = [
  {
    quote: "훌륭한 평판을 받는 법은 자신이 드러내고자 하는 모습이 되도록 노력하는 것이다.",
    author: "Socrates",
  },
  {
    quote: "미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.",
    author: "Alan Kay",
  },
  {
    quote: "성공에는 비밀이 없다. 성공한 사람 치고 성공에 대해 말하지 않는 사람을 본적 있는가?",
    author: "Kin Hubbard",
  },
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
    author: "Paulo Cuelho",
  },
  {
    quote: "게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해서 무엇인가 하고 있어야 한다.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "우리가 할 수 있기 전에 배워야 하는 일들을, 우리는 하면서 배운다",
    author: "Aristotle",
  },
  {
    quote: "웃음은 강장제이고, 안정제이며, 진통제이다.",
    author: "Charlie Chaplin",
  },
  {
    quote: "사람이 유머감각이 있는 게 아니다. 유머 감각이 사람을 움직이는 것이다.",
    author: "Larry Gelbart",
  },
  {
    quote: "웃는 자가 승자일지니!",
    author: "Mary Pettibone Poole",
  },
  {
    quote: "강렬한 사랑은 판단하지 않는다. 주기만 할 뿐이다.",
    author: "Mother Teresa",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes [Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;