import React from "react";
import Square, {SquareState} from "./Square";
import Player from "./Player";

type BoardProps = {
    setNext: (p: Player) => void,
    next: Player,
    boardState: Array<SquareState>,
    handleClick: (i: number) => void
}
const Board: React.FC<BoardProps> = props => {


    function renderSquare(i: number) {
        return <Square value={props.boardState[i]} onClick={() =>props.handleClick(i)}/>;
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board
