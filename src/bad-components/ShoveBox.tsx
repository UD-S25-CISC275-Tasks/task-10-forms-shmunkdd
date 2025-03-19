import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    position,
    setPosition,
}: {
    position: number;
    setPosition: (newPosition: number) => void;
<<<<<<< HEAD
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setPosition(position + 4);
=======
}) {
    return (
        <Button
            onClick={() => {
                setPosition(4 + position);
>>>>>>> origin/task-forms
            }}
        >
            Shove the Box
        </Button>
    );
}

<<<<<<< HEAD
function MoveableBox({ position }: { position: number }): React.JSX.Element {
=======
function MoveableBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);
>>>>>>> origin/task-forms
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px",
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
<<<<<<< HEAD
    const [position, setPosition] = useState<number>(10); // Move state here
=======
    const box = MoveableBox();
>>>>>>> origin/task-forms

    return (
        <div>
            <h3>Shove Box</h3>
<<<<<<< HEAD
            <span>The box is at: {position}px</span>
            <div>
                <ShoveBoxButton position={position} setPosition={setPosition} />
                <MoveableBox position={position} />
            </div>
=======
            {/* <span>The box is at: {box.position}</span>
            <div>
                <ShoveBoxButton
                    position={box.position}
                    setPosition={box.setPosition}
                ></ShoveBoxButton>
                {box}
            </div> */}
>>>>>>> origin/task-forms
        </div>
    );
}
