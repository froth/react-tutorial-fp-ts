import React from 'react';
import Board from "./Board";
import Player from "./Player";
import {SquareState} from "./Square";
import {none, some} from "fp-ts/lib/Option";
import {absurd} from "fp-ts/lib/function";
import calculateWinner from "./CalculateWinner";

type GameProps = {}

const otherPlayer: (player: Player) => Player = (player: Player) => {
    switch (player) {
        case Player.O: return Player.X;
        case Player.X: return Player.O;
    }
    absurd(player)
};

const Game: React.FC<GameProps> = () => {
    const [next, setNext] = React.useState<Player>(Player.X);
    const [boardState, setBoardState] = React.useState<Array<SquareState>>(Array(9).fill(none));
    const [status, setStatus] = React.useState<string>("New Game. Starting player: " + next)

    function handleClick(i: number) {
        const squares = boardState.slice();
        squares[i] = some(next);
        setBoardState(squares);
        const newNext = otherPlayer(next)
        setNext(newNext);
        setStatus(computeStatus(newNext, squares))
    }
    const computeStatus = (next: Player, boardState: Array<SquareState>): string => {
        const winner = calculateWinner(boardState)
        switch (winner._tag) {
            case "None":
                return 'Next player: ' + next;
            case "Some":
                return "Winner is: " + winner.value;
            default:
                return absurd(winner)
        }
    }
    return (
        <div className="game">
            <div className="game-board">
                <Board next={next} setNext={setNext} boardState={boardState} handleClick={handleClick}/>
            </div>
            <div className="game-info">
                <div className="status">{status }</div>
            </div>
        </div>
    );
};
export default Game;
