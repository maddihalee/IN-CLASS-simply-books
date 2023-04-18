import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function AuthorCard({ author }) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{author.first_name} {author.last_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{author.email}</Card.Subtitle>
          <Link href={`/author/${author.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">VIEW</Button>
          </Link>
          {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
          <Link href={`/author/edit/${author.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

AuthorCard.propTypes = {
  author: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    firebaseKey: PropTypes.string.isRequired,
  }),
};

AuthorCard.defaultProps = {
  author: {
    first_name: 'First Name',
    last_name: 'Last Name',
    email: 'Email',
  },
};
