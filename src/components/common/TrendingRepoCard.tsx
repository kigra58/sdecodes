import React, { useState, useEffect } from 'react';
import { fetchTrendingRepositories, GitHubRepository } from '../../services/github';

import styles from './TrendingRepoCard.module.css';
import { UIText } from '../../utils/constant';

const TrendingRepoCard: React.FC = React.memo(() => {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTrendingRepo = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const repositories = await fetchTrendingRepositories();
        
        if (repositories.length > 0) {
          setRepositories(repositories);
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

  if (error || repositories.length === 0) {
    return <div className={styles.error}>{error || UIText.ERROR}</div>;
  }

  return (
    <section className={styles.trendingRepoSection}>
      <header className={styles.sectionHeader}>
        <div className={styles.headerContent}>
          <span className={styles.trendingEmoji}>{UIText.TRENDING_EMOJI}</span>
          <span>{UIText.TRENDING_LABEL}</span>
        </div>
        <h2 className={styles.title}>Top 5 {UIText.TITLE}</h2>
      </header>
      
      <div className={styles.repositoryGrid}>
        {repositories.map((repo) => (
          <article key={`${repo.author}-${repo.name}`} className={styles.repoCard}>
            <div className={styles.cardHeader}>
              <img 
                src={repo.avatar} 
                alt={`${repo.author}'s avatar`} 
                className={styles.avatar}
              />
              <div className={styles.repoInfo}>
                <a 
                  href={repo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.repoName}
                >
                  {repo.author}/{repo.name}
                </a>
                <div className={styles.meta}>
                  <div className={styles.stars}>
                    <span className={styles.starIcon}>â</span>
                    <span>{formatStars(repo.stars)} {UIText.STARS_LABEL}</span>
                  </div>
                  
                  {repo.language && (
                    <div className={styles.language}>
                      <span className={styles.languageDot}></span>
                      <span>{repo.language}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className={styles.thumbnailContainer}>
              <img 
                src={repo.thumbnail} 
                alt={`${repo.name} thumbnail`} 
                className={styles.thumbnail}
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/400x200/2f3b8d/ffffff?text=${repo.name}`;
                }}
              />
            </div>
            
            <p className={styles.description}>
              {repo.description || 'No description available'}
            </p>
            
            <a 
              href={repo.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              {UIText.VIEW_ON_GITHUB}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
});

export default TrendingRepoCard;
