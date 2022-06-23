import { useContext } from "react";
import { gitHubDataContext } from "./GitHubDataContext";

export const useGitHubData = () => {
  return useContext(gitHubDataContext);
};
