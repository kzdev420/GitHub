import React from "react";
import { Card } from "react-bootstrap";

import "./Activity.scss";

export const Activity = () => {
  return (
    <div className="activity">
      <div className="activity-hearder">
        <img src="image.png" />
        <span>
          Sorin C6 created a repository SorinC6/e-Commerce-app 9 days ago
        </span>
      </div>
      <Card className="activity-content">
        <Card.Body>
          <Card.Title>SorinC6/e-commerce-app</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            E-Commerce app using react-native
          </Card.Subtitle>
          <Card.Text className="mb-2 text-muted">Updated Jul 8</Card.Text>
        </Card.Body>
      </Card>
      <hr />
    </div>
  );
};
