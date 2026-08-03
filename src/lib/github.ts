export async function githubFetch<T>(endpoint: string, accessToken: string): Promise<T> {
  const response = await fetch(`https://api.github.com${endpoint}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/vnd.github+json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`GitHub API Error: ${response.status}`);
  }

  return response.json();
}
