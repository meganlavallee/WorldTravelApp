// Packages and Variables
import React from "react";
import { Card } from "react-bootstrap";

// Main Function
export default function VerticalTabs({ entries }) {
  // Rendering
  return (
    <div className="mainScroll col-md-12 mt-5">
      {entries.length ? (
        <div>
          {entries.map((entry) => (
            <div
              key={entry._id + 2}
              className="d-flex flex-wrap mb-5 border border-primary"
            >
              <Card
                key={entry._id}
                style={{ width: "17rem", backgroundColor: "rgba(255, 255, 255, 0.66)"}}
                className="border-end-success"
              >
                <Card.Title className="mb-3 text-center" style={{fontWeight: "600"}}>{entry.title}</Card.Title>
                <Card.Img
                  style={{ width: "14rem"}}
                  variant="top"
                  src={entry.image}
                  className="ml-3 mb-2"
                />
              </Card>
              <Card.Body key={entry._id + 1} style={{ width: "18rem", backgroundColor: "rgba(255, 255, 255, 0.66)"}}>
                <Card.Text className="cardText mt-5">
                  Description: {entry.description}
                </Card.Text>
                <Card.Text className="cardText mt-5">
                  Comments: {entry.comments}
                </Card.Text>
                <Card.Text className="cardText mt-5">
                  Rating: {entry.rating}
                </Card.Text>
              </Card.Body>
            </div>
          ))}
        </div>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
    </div>
  );
}
