import fetch from "node-fetch";

export const getAccessToken = async ({ code }) => {
  const response = await fetch("http://localhost:5000/authenticate", {
    method: "POST",
    body: JSON.stringify({
      client_id: "77b7596e42e83b68aab5",
      client_secret: "3a1dd33c4e5bb9dc347581bd61a4c75f6f6c88ab",
      code,
      redirect_uri: "http://localhost:3000",
    }),
  });
  return response.json();
};

export const getUserInfo = async (accessInfo) => {
  const response = await fetch("http://localhost:5000/userinfo", {
    method: "POST",
    body: JSON.stringify(accessInfo),
  });
  const json = await response.json();
  return json;
};

export const getNotifications = async (access_token, username) => {
  const response = await fetch("http://localhost:5000/notifications", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      access_token: access_token,
    }),
  });
  const json = response.json();
  return json;
};

export const getRepos = async (access_token, repos_url) => {
  const response = await fetch("http://localhost:5000/repos", {
    method: "POST",
    body: JSON.stringify({
      repos_url: repos_url,
      access_token: access_token,
    }),
  });
  const json = await response.json();
  return json;
};
