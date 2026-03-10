import { useEffect, useState } from "react";

export default function UserViewer() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    setUser(null);

    const timeout = setTimeout(() => {
      if (isMounted) {
        setUser({ id: userId, name: "User " + userId });
      }
    }, 1000);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [userId]);

  return (
    <div>
      <h2>User Viewer</h2>

      <button onClick={() => setUserId(userId + 1)}>
        Next User
      </button>

      <p>User ID: {userId}</p>
      <p>
        {user ? user.name : "Loading..."}
      </p>
    </div>
  );
}