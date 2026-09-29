import React, { useState } from "react";

function ConditionalRenderer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Conditional Rendering Example</h2>

      {isLoggedIn ? (
        <p>Welcome back, user!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}

      <button onClick={toggleLogin}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

export default ConditionalRenderer;