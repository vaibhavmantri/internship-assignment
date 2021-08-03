function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



const cards = document.getElementsByClassName("carousel-item");

// window.onload = () => {
//   console.log(cards);
// };

const removeClass = (curr, card) => {
  switch (curr) {
    case "item1": {
      card.classList.remove("item1");
      break;
    }
    case "item2": {
      card.classList.remove("item2");
      break;
    }
    case "item3": {
      card.classList.remove("item3");
      break;
    }
    case "item4": {
      card.classList.remove("item4");
      break;
    }
    case "item5": {
      card.classList.remove("item5");
      break;
    }
    case "item6": {
      card.classList.remove("item6");
      break;
    }
  }
};

const slideLeft = () => {
  for (j = 0; j < cards.length; j++) {
    cards[j].classList.add("slideLeft");
  }
  setTimeout(() => {
    let prev = cards[5].classList[1];
    console.log(prev);
    for (j = 0; j < cards.length; j++) {
      const curr = cards[j].classList[1];
      removeClass(curr, cards[j]);
      cards[j].classList.remove("slideLeft");
      cards[j].classList.add(prev);
      prev = curr;
    }
  }, 750);
};

const slideRight = () => {
  for (j = 0; j < cards.length; j++) {
    cards[j].classList.add("slideRight");
  }
  setTimeout(() => {
    let prev = cards[0].classList[1];
    console.log(prev);
    for (j = cards.length - 1; j >= 0; j--) {
      const curr = cards[j].classList[1];
      removeClass(curr, cards[j]);
      cards[j].classList.remove("slideRight");
      cards[j].classList.add(prev);
      prev = curr;
    }
  }, 750);
};