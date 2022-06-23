import { GitHubActivityData, GitHubUserSearchData } from "./types";

import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export default class GitHubService {
  static readonly GIT_API_URL = "https://api.github.com/";

  public static async getUserActivity(
    username: string
  ): Promise<GitHubActivityData> {
    try {
      const results = await octokit.activity.listPublicEventsForUser({
        username: username,
      });

      // Overriding data type
      const overRiding: GitHubActivityData = results.data as never;

      return overRiding;
    } catch (error: any) {
      console.log(error.message);
      throw new Error(`User ${error.message}`);
    }
  }

  public static async searchUsers(
    username: string,
    page?: number
  ): Promise<GitHubUserSearchData> {
    try {
      const results = await octokit.search.users({
        q: `${username}+in:login`, // login = username
      });

      // Overriding data type
      const overRiding: GitHubUserSearchData = results.data as never;

      return overRiding;
    } catch (error: any) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}
