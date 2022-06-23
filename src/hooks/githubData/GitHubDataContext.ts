import { createContext } from "react";
import {
  GitHubUserSearchData,
  LoadOfflineData,
} from "../../services/github/types";

interface IGitHubDataContext {
  searchResults: GitHubUserSearchData | undefined;
  setSearchResults(data: GitHubUserSearchData): void;
  saveResults: (searchInput: string) => void;
  loadResults: () => LoadOfflineData | undefined;
}

export type GitHubDataContext = IGitHubDataContext;

export const gitHubDataContext = createContext<GitHubDataContext | undefined>(
  undefined
);
