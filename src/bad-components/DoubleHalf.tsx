import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(1); // Explicitly set type to number

    return (
        <div>
            <h3>Double and Halve</h3>
            <p>Value: {value}</p>
            <Button
                onClick={() => {
                    setValue((prevValue: number) => 2 * prevValue);
                }}
            >
                Double
            </Button>
            <Button
                onClick={() => {
                    setValue((prevValue: number) => 0.5 * prevValue);
                }}
            >
                Halve
            </Button>
        </div>
    );
}
