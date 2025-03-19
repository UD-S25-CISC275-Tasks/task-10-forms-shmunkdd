import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10); // Fixed: initial value is now 10

    return (
        <div>
            <h3>Double and Halve</h3>
            {/* Ensure the value appears clearly in one text node */}
            <p>
                Value: <span>{value}</span>
            </p>

            <Button
                onClick={() => {
                    setValue((prevValue: number) => prevValue * 2);
                }}
            >
                Double
            </Button>

            <Button
                onClick={() => {
                    setValue((prevValue: number) => prevValue / 2);
                }}
            >
                Halve
            </Button>
        </div>
    );
}
