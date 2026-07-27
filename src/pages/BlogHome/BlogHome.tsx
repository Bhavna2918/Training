import React from 'react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { BlogHero } from './components/BlogHero';
import { BlogFilter } from './components/BlogFilter';
import { BlogSidebar } from './components/BlogSidebar';
import { NewsletterBanner } from './components/NewsletterBanner';
import { BlogList } from './components/BlogList';
import { FeaturedPost } from './components/FeaturedPost';
import { useBlogHome } from './hooks/useBlogHome';
import { styles } from './BlogHome.styles';
import type { BlogHomeProps } from './BlogHome.types';

export const BlogHome: React.FC<BlogHomeProps> = () => {
  const {
    posts,
    users,
    comments,
    isLoading,
    error,
    searchQuery,
    handleRetry
  } = useBlogHome();

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <BlogHero />
        <FeaturedPost />
        <section className={styles.section}>
          <div className={styles.contentWrapper}>
            <div className={styles.grid}>
              
              {/* Left Column - Main Blog Grid */}
              <div className="flex flex-col">
                <BlogFilter />
                <BlogList 
                  posts={posts}
                  users={users}
                  comments={comments}
                  isLoading={isLoading}
                  error={error}
                  searchQuery={searchQuery}
                  onRetry={handleRetry}
                />
              </div>

              {/* Right Column - Sidebar */}
              <div className={styles.sidebarDesktop}>
                <BlogSidebar />
              </div>
              
              {/* Mobile Sidebar (shown below posts on small screens) */}
              <div className={styles.sidebarMobile}>
                <BlogSidebar />
              </div>

            </div>
          </div>
        </section>

        <NewsletterBanner />
      </main>

      <Footer />
    </div>
  );
};
