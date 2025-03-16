import { notFound } from 'next/navigation';
import { essays } from '@/data/essays';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import type { Essay, EssayContent } from '@/types/essay';

// Tentukan tipe untuk parameter
interface PageParams {
  params: {
    slug: string;
  };
}

export default function EssayDetailPage({ params }: PageParams) {
  const { slug } = params;
  
  // Temukan esai berdasarkan slug
  const essay = essays.find((essay: Essay) => essay.slug === slug);
  
  // Jika esai tidak ditemukan, arahkan ke halaman 404
  if (!essay) {
    notFound();
  }
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Fungsi untuk merender konten esai berdasarkan strukturnya
  const renderContent = () => {
    // Jika konten dalam format string (markdown)
    if (typeof essay.content === 'string') {
      return (
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{essay.content}</ReactMarkdown>
        </div>
      );
    }
    
    // Jika konten dalam format array objek
    if (Array.isArray(essay.content)) {
      return (
        <div className="prose prose-lg max-w-none">
          {essay.content.map((item: EssayContent, index: number) => {
            switch (item.type) {
              case 'heading':
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{item.text}</h2>;
              case 'paragraph':
                return <p key={index} className="my-4">{item.text}</p>;
              case 'code':
                return (
                  <pre key={index} className="bg-gray-100 p-4 rounded-md overflow-x-auto my-6">
                    <code className={`language-${item.language}`}>
                      {item.text}
                    </code>
                  </pre>
                );
              default:
                return null;
            }
          })}
        </div>
      );
    }
    
    return <p>Konten tidak tersedia.</p>;
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Link href="/essays" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
        ← Kembali ke daftar esai
      </Link>
      
      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{essay.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <span>{formatDate(essay.date)}</span>
            <span>{essay.readTime}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {essay.categories.map((category: string) => (
              <span 
                key={category} 
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm"
              >
                {category}
              </span>
            ))}
          </div>
          
          <p className="text-xl text-gray-700 font-medium">{essay.excerpt}</p>
        </header>
        
        {renderContent()}
      </article>
    </div>
  );
}

// Menghasilkan parameter statis untuk semua halaman esai
export async function generateStaticParams() {
  return essays.map((essay: Essay) => ({
    slug: essay.slug,
  }));
}