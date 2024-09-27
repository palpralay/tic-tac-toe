const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset-btn");

let turn = true;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  const BOXES = [...boxes];

  const Xs = BOXES.map((box) => box.classList.contains("X"));
  const Os = BOXES.map((box) => box.classList.contains("O"));

  console.log("++++X+++")
  console.log(Xs);
  console.log("++++O+++")
  console.log(Os);

  const isXWin = winPatterns.some((ptn) => {
    return ptn.every((index) => {
      return Xs[index];
    });
  });

  const isOWin = winPatterns.some((ptn) => {
    return ptn.every((index) => {
      return Os[index];
    });
  });

  if (isXWin || isOWin) {
    setTimeout(() => {
      alert(`Player ${isOWin ? "O" : "X"} wins!`);
      reset();
    }, 100);
  }
};

boxes.forEach((box, i) => {
  box.addEventListener("click", () => {
    box.classList.add(turn ? "O" : "X");
    turn = !turn;

    box.disabled = true;
    checkWinner();
  });
});

function reset() {
  boxes.forEach((box) => {
    box.classList.remove("X", "O");
    box.disabled = false;
  });
}

resetBtn.addEventListener("click", reset);
