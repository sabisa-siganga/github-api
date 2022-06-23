import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ActivityListItem from "../../components/ActivityList/ActivityListItem";
import GitHubService from "../../services/github/Github";
import { GitHubActivity } from "../../services/github/types";
import "./UserActivity.scss";

const eventTypes = [
  "PushEvent",
  "PullRequestEvent",
  "IssueCommentEvent",
  "ForkEvent",
  "WatchEvent",
];

const UserActivityView = () => {
  const [activities, setActivities] = useState<GitHubActivity[]>([]);

  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    GitHubService.getUserActivity(username).then((results) => {
      setActivities(results);
    });
  }, [username]);

  return (
    <div className="userActivity">
      <h1>
        <Link to="/">Back</Link> <div>Activity</div>
      </h1>
      <h3>{username}</h3>
      <div className="activities">
        <h5>Activities</h5>
        <div className="container">
          {activities.length === 0 && (
            <>
              <h2 className="noActivity">
                There is no activity from {username}
              </h2>
            </>
          )}

          {activities.map((activity) => {
            if (eventTypes.includes(activity.type || "")) {
              return <ActivityListItem key={activity.id} data={activity} />;
            }

            return <div key={activity.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserActivityView;
