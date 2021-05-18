module.exports.state = {
  token: {},
};

module.exports.getToken = () => {
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
};

module.exports.setToken = (userToken) => {
  this.setState({ token: userToken });
};

module.exports.saveToken = (userToken) => {
  if (userToken !== undefined) {
    localStorage.setItem("token", JSON.stringify(userToken));
    this.setToken(userToken);
  }
};

module.exports.removeToken = () => {
  localStorage.removeItem("token");
};
