import React, { useState } from "react";
import AuthForm from "./pages/AuthForm";
import { supabase } from "./pages/supabaseClient";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async ({ email, password }) => {
    if (isLogin) {
      // Login
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) alert("Login failed: " + error.message);
      else alert("Login successful ✅");
    } else {
      // Signup
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) alert("Signup failed: " + error.message);
      else alert("Signup successful 🎉, now login!");
      setIsLogin(true);
    }
  };

  return (
    <div>
      <AuthForm onSubmit={handleAuth} isLogin={isLogin} />
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
      </button>
    </div>
  );
}

export default App;

