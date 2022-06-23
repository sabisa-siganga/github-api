import React, { useState } from "react";
import {
  GitHubUserSearchData,
  LoadOfflineData,
} from "../../services/github/types";
import { useOfflineStorage } from "../useOfflineStorage";
import { gitHubDataContext, GitHubDataContext } from "./GitHubDataContext";

function ProvideGitHubData(): GitHubDataContext {
  const [searchResults, setResults] = useState<GitHubUserSearchData>();
  const { saveData, loadData } = useOfflineStorage();

  const setSearchResults = (data: GitHubUserSearchData) => {
    setResults(data);
  };

  const saveResults = (searchInput: string) => {
    if (searchInput) {
      saveData("info", {
        searchInput,
        data: searchResults,
      });
    } else {
      saveData("info", null);
    }
  };

  const loadResults = () => {
    const data = loadData("info");

    if (data) {
      return data as LoadOfflineData;
    }

    return undefined;
  };

  return {
    searchResults,
    setSearchResults,
    saveResults,
    loadResults,
  };
}

const GitHubDataProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const githubData = ProvideGitHubData();

  return (
    <gitHubDataContext.Provider value={githubData}>
      {children}
    </gitHubDataContext.Provider>
  );
};

export default GitHubDataProvider;
