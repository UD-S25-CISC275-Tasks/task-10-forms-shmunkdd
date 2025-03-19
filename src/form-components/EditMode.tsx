import React, { useState } from "react";
import Form from "react-bootstrap/Form"; // Import Bootstrap Form

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            {/* Ensuring the checkbox for edit mode is inside a form-switch div */}
            <div className="form-switch">
                <Form.Check
                    type="switch"
                    id="edit-mode-switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
            </div>

            {editMode ?
                <div>
                    <Form.Control
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <Form.Check
                        type="checkbox"
                        id="student-checkbox"
                        label="Student"
                        checked={isStudent}
                        onChange={() => setIsStudent(!isStudent)}
                    />
                </div>
            :   <p>
                    {userName} is {isStudent ? "a student" : "not a student"}.
                </p>
            }
        </div>
    );
}
