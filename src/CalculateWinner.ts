import {SquareState} from "./Square";
import Player from "./Player";
import {getEq, none, Option} from "fp-ts/lib/Option";
import {strictEqual} from "fp-ts/lib/Eq";

function calculateWinner(squares: Array<SquareState>): Option<Player> {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const E = getEq({ equals: strictEqual });
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (E.equals(squares[a], squares[b]) && E.equals(squares[a], squares[c])) {
      return squares[a];
    }
  }
  return none;
}

export default calculateWinner