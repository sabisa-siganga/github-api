import { useHistory } from "react-router-dom";
import { useGitHubData } from "../../hooks/githubData/useGitHubData";
import { GitHubUser } from "../../services/github/types";
import "./UsersListItem.scss";

interface Props {
  data: GitHubUser[0];
}

const UsersListItem = (props: Props) => {
  const { data } = props;
  const context = useGitHubData();
  const history = useHistory();

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    event.preventDefault();

    const findSearchElem = document.getElementById(
      "search"
    ) as HTMLInputElement | null;

    if (context && findSearchElem) {
      context.saveResults(findSearchElem.value);
    }

    history.push(url);
  };

  return (
    <a
      href={`/user-activity/${data.login}`}
      onClick={(event) => {
        onClick(event, `/user-activity/${data.login}`);
      }}
      className="usersListItem"
    >
      <div className="image">
        <img src={data.avatar_url} alt="" />
      </div>
      <div className="details">
        <div className="userType">
          {data.type}: {data.login}
        </div>
        <div className="userLink">
          <span>{data.html_url}</span>
        </div>
      </div>
      <div className="button">
        <button type="button">Activity</button>
      </div>
    </a>
  );
};

export default UsersListItem;
