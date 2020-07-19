import React from "react";
import GitHubLogin from "react-github-login";
import { GithubLoginButton } from "react-social-login-buttons";

import {
  getAccessToken,
  getUserInfo,
  getNotifications,
  getRepos,
} from "../../Services/Github";

import "./AuthPage.scss";

let history = null;

const onSuccess = async (code) => {
  history.push("/");
  const accessInfo = await getAccessToken(code);
  console.log(accessInfo);
  const userInfo = await getUserInfo(accessInfo);
  console.log(userInfo);
  const { access_token } = accessInfo;
  const { login, repos_url } = userInfo;
  const notfications = await getNotifications(access_token, login);
  console.log(notfications);
  const repos = await getRepos(access_token, repos_url);
  console.log(repos);
};
const onFailure = (response) => console.error(response);
export const AuthPage = (props) => {
  history = props.history;
  return (
    <div className="github-login">
      <GitHubLogin
        clientId="77b7596e42e83b68aab5"
        onSuccess={onSuccess}
        onFailure={onFailure}
        state=""
        redirectUri="http://localhost:3000"
        scope="repo,gist,user"
      >
        <GithubLoginButton />
      </GitHubLogin>
    </div>
  );
};
