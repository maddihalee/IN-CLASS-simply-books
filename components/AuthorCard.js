import PropTypes from 'prop-types';

export default function AuthorCard({ author }) {
  return (
    <>
      <h1>{author.firstName}{author.lastName}</h1>
      <h2>{author.email}</h2>
    </>
  );
}

AuthorCard.propTypes = {
  author: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }),
};

AuthorCard.defaultProps = {
  author: {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
  },
};
