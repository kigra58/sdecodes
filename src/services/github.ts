import { GITHUB_API_CONFIG } from '../utils/constant';

export interface GitHubRepository {
  author: string;
  name: string;
  avatar: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  currentPeriodStars: number;
  thumbnail: string;
  builtBy: Array<{
    username: string;
    href: string;
    avatar: string;
  }>;
}

export interface GitHubAPIResponse {
  repositories: GitHubRepository[];
}

export const fetchTrendingRepositories = async (): Promise<GitHubRepository[]> => {
  try {
    // Use GitHub's official Search API to find popular repositories
    // Sort by stars and get repositories created in the last 7 days
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - GITHUB_API_CONFIG.TRENDING_PARAMS.CREATED_DAYS_AGO);
    const dateStr = sevenDaysAgo.toISOString().split('T')[0];
    
    const response = await fetch(
      `${GITHUB_API_CONFIG.BASE_URL}${GITHUB_API_CONFIG.SEARCH_REPOS}?q=created:>${dateStr}&sort=${GITHUB_API_CONFIG.TRENDING_PARAMS.SORT}&order=${GITHUB_API_CONFIG.TRENDING_PARAMS.ORDER}&per_page=${GITHUB_API_CONFIG.TRENDING_PARAMS.PER_PAGE}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform GitHub API response to match our interface
    const repositories: GitHubRepository[] = data.items.map((item: any) => ({
      author: item.owner.login,
      name: item.name,
      avatar: item.owner.avatar_url,
      url: item.html_url,
      description: item.description || '',
      language: item.language || '',
      languageColor: '', // GitHub API doesn't provide this
      stars: item.stargazers_count,
      forks: item.forks_count,
      currentPeriodStars: 0, // Not available in this API
      thumbnail: `${GITHUB_API_CONFIG.OPEN_GRAPH_BASE}/${item.owner.login}/${item.name}`,
      builtBy: [{
        username: item.owner.login,
        href: item.owner.html_url,
        avatar: item.owner.avatar_url
      }]
    }));
    
    return repositories;
  } catch (error) {
    console.error('Failed to fetch trending repositories:', error);
    throw error;
  }
};
