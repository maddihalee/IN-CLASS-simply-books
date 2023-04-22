import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AuthorForm from '../../../components/forms/AuthorForm';
import { getSingleAuthor } from '../../../api/authorData';

export default function EditAuthor() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  // const [formInput, setFormInput] = useState();
  const [authors, setAuthors] = useState();

  useEffect(() => {
    getSingleAuthor(firebaseKey).then(setAuthors);
  }, [firebaseKey]);

  return <AuthorForm obj={authors} />;
}
