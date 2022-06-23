import { useGitHubData } from "../../hooks/githubData/useGitHubData";
import "./UsersList.scss";
import UsersListItem from "./UsersListItem";

const UsersList = () => {
  const context = useGitHubData();

  return (
    <div className="usersList">
      {context && context.searchResults && (
        <>
          <div>Total: {context.searchResults.total_count}</div>

          {context.searchResults.items.map((item) => {
            return <UsersListItem data={item} key={item.id} />;
          })}
        </>
      )}

      {context && !context.searchResults && (
        <>
          <h2 className="noActivity">Please search by username</h2>
        </>
      )}
    </div>
  );
};

export default UsersList;
