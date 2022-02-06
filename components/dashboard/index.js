import React, { useEffect, useState } from "react";

function index() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const value = localStorage.getItem("user");
    const user = !!value ? JSON.parse(value) : undefined;
    setUser(user)
  }, [])

  return (
    <>
      <div className="flex items-center justify-center">{user.email}</div>
    </>
  );
}

export default index;
