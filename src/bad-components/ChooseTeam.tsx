import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
<<<<<<< HEAD
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(person: string) {
        const addPerson = `Add ${person}`;
        setTeam((prevTeam) =>
            prevTeam.includes(addPerson) ? prevTeam : [...prevTeam, addPerson],
        );
    }

    function clearTeam() {
        setTeam([]); // Properly reset the state
=======
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember() {
        /*
        if (!team.includes(newMember)) {
            team.push(newMember);
        }
        */
    }

    function clearTeam() {
        /*
        team = [];
        */
>>>>>>> origin/task-forms
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
<<<<<<< HEAD
                    {PEOPLE.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            <Button
                                onClick={() => {
                                    chooseMember(option);
                                }}
                                size="sm"
                            >
                                Add {option}
=======
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button onClick={chooseMember} size="sm">
                                {option}
>>>>>>> origin/task-forms
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
<<<<<<< HEAD
                    <ul>
                        {team.map((member: string) => (
                            <li key={member}>{member}</li>
                        ))}
                    </ul>
=======
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
>>>>>>> origin/task-forms
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
