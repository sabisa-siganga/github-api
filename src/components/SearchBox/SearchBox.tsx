import { useEffect, useRef } from "react";
import { useGitHubData } from "../../hooks/githubData/useGitHubData";
import GitHubService from "../../services/github/Github";
import "./SearchBox.scss";

const SearchBox = () => {
  const context = useGitHubData();

  const updated = useRef(false);

  // .....
  useEffect(() => {
    if (context) {
      const data = context.loadResults();

      const findSearchElem = document.getElementById(
        "search"
      ) as HTMLInputElement | null;

      if (data) {
        if (findSearchElem) {
          findSearchElem.value = data.searchInput || "";
        }

        if (!updated.current) {
          updated.current = true;
          context.setSearchResults(data.data);
        }
      }
    }
  }, [context]);

  const onSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const username = event.target.value;

    if (context) {
      if (username.trim().length === 0) {
        context.saveResults("");
      } else {
        const results = await GitHubService.searchUsers(username);
        context.setSearchResults(results);
      }
    }
  };

  return (
    <div className="search">
      <input
        type="search"
        onChange={onSearch}
        placeholder="Search"
        id="search"
      />
    </div>
  );
};

export default SearchBox;
