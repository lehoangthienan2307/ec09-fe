import React from "react";
import Card from 'react-bootstrap/Card';

import StarRatings from "react-star-ratings";
import moment from "moment";



const Comment = ({ review }) => {
  return (
    <div >
        <Card style={{ width: '60rem' }}>
      <Card.Body>
        <Card.Title>
   {review.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{review.time}</Card.Subtitle>
        <Card.Text>
          {review.comment}
        </Card.Text>
        <div >
        <StarRatings
          rating={parseFloat(review.rating)}
          starRatedColor="yellow"
          starDimension="20px"
          numberOfStars={5}
          name="rating"
        />
      </div>
      </Card.Body>
    </Card>
     
    </div>
  );
};

export default Comment;