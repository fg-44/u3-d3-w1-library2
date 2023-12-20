import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardText } from 'react-bootstrap';

const SingleBook = ({ book }) => {
  return (
    <Card>
      <CardBody>
        <CardText>{book.title}</CardText>
      </CardBody>
    </Card>
  );
};

SingleBook.propTypes = {
  book: PropTypes.object.isRequired
}

export default SingleBook;
