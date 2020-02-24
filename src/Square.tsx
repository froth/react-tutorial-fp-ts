import {Option} from "fp-ts/lib/Option";
import Player from "./Player";
import React from "react";
import {absurd} from "fp-ts/lib/function";

export type SquareState = Option<Player>
export type SquareProps = {
    value: SquareState,
    onClick: () => void
}
const Square: React.FC<SquareProps> = props => {

    const renderState = (state: SquareState) => {
        switch (state._tag) {
            case 'None':
                return "";
            case 'Some':
                return state.value;
            default:
                absurd(state)
        }
    };

    return (
        <button className="square" onClick={props.onClick}>
            {renderState(props.value)}
        </button>
    );
};

export default Square