import React, { useState, useEffect } from 'react';
import { fetchTrendingRepositories, GitHubRepository } from '../../services/github';

import styles from './TrendingRepoCard.module.css';
import { UIText } from '../../utils/constant';

const TrendingRepoCard: React.FC = () => {
  const [repository, setRepository] = useState<GitHubRepository | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTrendingRepo = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const repositories = await fetchTrendingRepositories();
        
        if (repositories.length > 0) {
          setRepository(repositories[0]);
        } else {
          setError('No trending repositories found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : UIText.ERROR);
      } finally {
        setIsLoading(false);
      }
    };

    loadTrendingRepo();
  }, []);

  const formatStars = (stars: number): string => {
    if (stars >= 1000) {
      return `${(stars / 1000).toFixed(1)}k`;
    }
    return stars.toString();
  };

  if (isLoading) {
    return <div className={styles.loading}>{UIText.LOADING}</div>;
  }

  if (error || !repository) {
    return <div className={styles.error}>{error || UIText.ERROR}</div>;
  }

  return (
    <article className={styles.trendingRepoCard}>
      <header className={styles.header}>
        <span className={styles.trendingEmoji}>{UIText.TRENDING_EMOJI}</span>
        <span>{UIText.TRENDING_LABEL}</span>
      </header>
      
      <h2 className={styles.title}>{UIText.TITLE}</h2>
      
      <a 
        href={repository.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.repoName}
      >
        {repository.author}/{repository.name}
      </a>
      
      <p className={styles.description}>
        {repository.description || 'No description available'}
      </p>
      
      <div className={styles.meta}>
        <div className={styles.stars}>
          <span className={styles.starIcon}>â</span>
          <span>{formatStars(repository.stars)} {UIText.STARS_LABEL}</span>
        </div>
        
        {repository.language && (
          <div className={styles.language}>
            {repository.languageColor && (
              <span 
                className={styles.languageDot}
                style={{ backgroundColor: repository.languageColor }}
              />
            )}
            <span>{repository.language}</span>
          </div>
        )}
      </div>
      
      <a 
        href={repository.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.ctaButton}
      >
        {UIText.VIEW_ON_GITHUB}
      </a>
    </article>
  );
};

export default TrendingRepoCard;
