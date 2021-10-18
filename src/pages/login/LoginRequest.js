export const LoginRequest = async (email, password, setter) => {
    try {
      console.log("fetch invoked");
      const response = await fetch("https://happy-recipea.herokuapp.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      const data = await response.json();
      setter(data);
   
    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(data));
      console.log(data.username);
      console.log(setter);
    } catch (error) {
      console.log(error);
    }
  };
