import { GitHubActivity } from "../../services/github/types";
import ActivityDetails from "../ActivityDetails/ActivityDetails";
import "./ActivityListItem.scss";

interface Props {
  data: GitHubActivity;
}

const ActivityListItem = (props: Props) => {
  const { data } = props;

  return (
    <div className="activityListItem">
      <div className="details">
        <div className="img">
          <img src={data.actor.avatar_url} alt="" />
        </div>
        <div className="name">{data.actor.display_login}</div>
      </div>
      <div className="eventDetails">
        <span className="event">{data.type}</span>
        {" on "}
        <span className="repo">{data.repo.name}</span>
      </div>

      <ActivityDetails data={data} />
    </div>
  );
};

export default ActivityListItem;
