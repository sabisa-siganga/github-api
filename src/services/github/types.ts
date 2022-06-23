import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export type GitHubActivityData = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.activity.listPublicEventsForUser
>;

export type GitHubActivity = GitHubActivityData[0];

export type GitHubUserSearchData = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.search.users
>;

export type GitHubUser = GitHubUserSearchData["items"];

export interface LoadOfflineData {
  searchInput: string;
  data: GitHubUserSearchData;
}
