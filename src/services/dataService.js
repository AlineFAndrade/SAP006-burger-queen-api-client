
export const loginWithUserPassword = (email, password) => {
  console.log(email, password)
  return  fetch("https://lab-api-bq.herokuapp.com/auth", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify ({
    "email": email,
    "password": password
  })
});
};


export const registerUser = (name, email, password, role) => {
  console.log(name, email, password, role)
  return  fetch("https://lab-api-bq.herokuapp.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify ({
    "name": name,
    "email": email,
    "password": password,
    "role": role,
    "restaurant": "Red Queen"
  })
});
};