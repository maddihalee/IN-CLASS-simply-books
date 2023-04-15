import Image from 'next/image';
import useAuth from 'react';

export default function User() {
  const { user } = useAuth();
  return (
    <div className="text-light text-center">
      <Image
        src={user.imgUrl}
        className="rounded-circle"
        width="100px"
        height="100px"
      />
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
      <h3>{user.lastLogin}</h3>
    </div>
  );
}
