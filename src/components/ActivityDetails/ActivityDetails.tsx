import { GitHubActivity } from "../../services/github/types";
import "./ActivityDetails.scss";

interface Props {
  data: GitHubActivity;
}

const ActivityDetails = (props: Props) => {
  const { data } = props;

  const PushEvent = () => {
    return (
      <div className="eventItem">
        {
          /* @ts-ignore */
          data.payload.commits.map((commit) => {
            return (
              <div className="commits" key={commit.sha}>
                <div className="author">Author: {commit.author.name}</div>
                <div className="msg"> {commit.message}</div>
              </div>
            );
          })
        }
      </div>
    );
  };

  const PullRequestEvent = () => {
    return (
      <div className="eventItem">
        <div className="title">
          {/* @ts-ignore */}
          Pull request #{data.payload.pull_request.number} is{" "}
          {data.payload.action}
        </div>
        {/* @ts-ignore */}
        <div className="body"> {data.payload.pull_request.title}</div>
      </div>
    );
  };

  const IssueCommentEvent = () => {
    return (
      <div className="eventItem">
        <div className="title">
          {/* @ts-ignore */}
          Issue #{data.payload.issue.number} has been {data.payload.action}
        </div>
        {/* @ts-ignore */}
        <div className="body"> {data.payload.issue.title}</div>
      </div>
    );
  };

  const ForkEvent = () => {
    return (
      <div className="eventItem">
        {/* @ts-ignore */}
        Forked <span> {data.payload.forkee.full_name}</span> from
        <span> {data.repo.name}</span>
      </div>
    );
  };

  const WatchEvent = () => {
    return (
      <div className="eventItem">
        {/* @ts-ignore */}
        Watch event has been <span>{data.payload.action}</span> on
        <span> {data.repo.name}</span>
      </div>
    );
  };

  return (
    <div className="activityDetails">
      {data && (
        <>
          {data.type === "PushEvent" && <PushEvent />}
          {data.type === "PullRequestEvent" && <PullRequestEvent />}
          {data.type === "IssueCommentEvent" && <IssueCommentEvent />}
          {data.type === "ForkEvent" && <ForkEvent />}
          {data.type === "WatchEvent" && <WatchEvent />}
        </>
      )}
    </div>
  );
};

export default ActivityDetails;
