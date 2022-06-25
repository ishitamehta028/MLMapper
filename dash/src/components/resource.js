import React from "react";
import Form from "react-bootstrap/Form";

export default function ResourceAllocate() {
  return (
    <>
      <div className="flex">
        <Form.Group className="mb-3">
          <Form.Label>Resource to Allocate</Form.Label>
          <Form.Control placeholder="Vaccines" disabled />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>States Column</Form.Label>
          <Form.Select>
            <option>col names</option>
          </Form.Select>
        </Form.Group>
      </div>
    </>
  );
}
