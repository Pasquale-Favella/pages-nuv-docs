import { Owner } from "./githubRepo";

export interface SearchDetails{
  name: string;
  path: string;
  html_url: string;
  repository: Repository;
  text_matches: Textmatch[];
}

export interface GithubSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items : GithubSearchResult[];
}

export interface GithubSearchResult {
  name: string;
  path: string;
  sha: string;
  url: string;
  git_url: string;
  html_url: string;
  repository: Repository;
  score: number;
  text_matches: Textmatch[];
}

export interface Textmatch {
  object_url: string;
  object_type: string;
  property: string;
  fragment: string;
  matches: Match[];
}

interface Match {
  text: string;
  indices: number[];
}

export interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
}
