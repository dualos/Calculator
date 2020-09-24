import React from "react";
import "./CalcButtons.css";

function CalcButtons() {
    return (
        <div className="calc-keys">
            <button type="button" value="7">
                7
            </button>
            <button type="button" value="8">
                8
            </button>
            <button type="button" value="9">
                9
            </button>
            <button type="button" class="operator" value="+">
                +
            </button>

            <button type="button" value="4">
                4
            </button>
            <button type="button" value="5">
                5
            </button>
            <button type="button" value="6">
                6
            </button>
            <button type="button" class="operator" value="-">
                -
            </button>

            <button type="button" value="1">
                1
            </button>
            <button type="button" value="2">
                2
            </button>
            <button type="button" value="3">
                3
            </button>
            <button type="button" class="operator" value="*">
                *
            </button>

            <button class="zero-button" type="button" value="0">
                0
            </button>
            <button type="button" class="decimal" value=".">
                .
            </button>
            <button type="button" class="all-clear" value="all-clear">
                AC
            </button>
            <button type="button" class="operator" value="/">
                /
            </button>

            <button type="button" class="equal-sign" value="=">
                =
            </button>
        </div>
    );
}
export default CalcButtons;
