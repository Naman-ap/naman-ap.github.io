import { useRef, useState, useEffect } from 'react';
import { BookOpen, Calendar, ExternalLink, Loader2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { BlogPost } from '../types';

export const Blog = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.2);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const mockPosts: BlogPost[] = [
          {
            title: 'Commit Logs to Clicks',
            pubDate: '2024-10-15',
            link: 'https://medium.com/@naman10ap/commit-logs-to-clicks-5f344586abe1',
            thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
            description:
              'Exploring the journey from version control systems to user interactions, understanding how code commits translate into meaningful user experiences.',
          },
          {
            title: 'Technical Jargon: Asynchronous',
            pubDate: '2024-09-20',
            link: 'https://medium.com/@naman10ap/technical-jargon-asynchronous-148be96d7b09',
            thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
            description:
              'Demystifying asynchronous programming concepts, breaking down complex technical jargon into understandable explanations for developers.',
          },
        ];

        setTimeout(() => {
          setPosts(mockPosts);
          setLoading(false);
        }, 1000);
      } catch {
        setError(true);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Latest Articles
            </h2>
          </div>
          <p className="text-gray-400 text-lg">
            Sharing knowledge and insights from my tech journey
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-cyan-400 animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-gray-400">
              Unable to load blog posts. Please check back later.
            </p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={post.link}
                className={`transition-all duration-1000 delay-${index * 100} ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 h-full flex flex-col">
                    {post.thumbnail && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                      </div>
                    )}

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.pubDate)}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-300 mb-4 flex-1 line-clamp-3 leading-relaxed">
                        {post.description}
                      </p>

                      <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors pt-4 border-t border-gray-700">
                        <span className="text-sm font-semibold">Read More</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://medium.com/@naman10ap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
          >
            View All Articles
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
