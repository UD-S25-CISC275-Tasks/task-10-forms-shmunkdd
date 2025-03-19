import React, { useState } from "react";
import { Button } from "react-bootstrap";
<<<<<<< HEAD

function Doubler({
    setValue,
}: {
    setValue: (newValue: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue((prevValue) => 2 * prevValue);
=======
import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler(): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
>>>>>>> origin/task-forms
            }}
        >
            Double
        </Button>
    );
}

<<<<<<< HEAD
function Halver({
    setValue,
}: {
    setValue: (newValue: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue((prevValue) => 0.5 * prevValue);
=======
function Halver(): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
>>>>>>> origin/task-forms
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
<<<<<<< HEAD
    const [dhValue, setDhValue] = useState<number>(10); // Correctly place useState inside the component

=======
>>>>>>> origin/task-forms
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
<<<<<<< HEAD
            <Doubler setValue={setDhValue} />
            <Halver setValue={setDhValue} />
=======
            <Doubler></Doubler>
            <Halver></Halver>
>>>>>>> origin/task-forms
        </div>
    );
}
