import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    setColorIndex,
}: {
    setColorIndex: React.Dispatch<React.SetStateAction<number>>; // Fixed typing
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setColorIndex(
                    (prevIndex: number) => (prevIndex + 1) % COLORS.length,
                ); // Explicitly typed
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ color }: { color: string }): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor setColorIndex={setColorIndex} />
                <ColorPreview color={COLORS[colorIndex]} />
            </div>
        </div>
    );
}
