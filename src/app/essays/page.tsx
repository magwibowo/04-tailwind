import Link from 'next/link';
import { essays } from '@/data/essays';
import type { Essay } from '@/types/essay';

export default function EssaysPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Daftar Esai</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {essays.map((essay: Essay) => (
          <div 
            key={essay.slug} 
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-2 text-sm text-gray-600">
                <span>{formatDate(essay.date)}</span>
                <span>{essay.readTime}</span>
              </div>
              
              <h2 className="text-xl font-semibold mb-3">
                <Link href={`/essays/${essay.slug}`} className="hover:text-blue-600 transition-colors">
                  {essay.title}
                </Link>
              </h2>
              
              <p className="text-gray-700 mb-4">{essay.excerpt}</p>
              
              <div className="flex flex-wrap gap-2">
                {essay.categories.map((category: string) => (
                  <span 
                    key={category} 
                    className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <div className="mt-4">
                <Link 
                  href={`/essays/${essay.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Baca selengkapnya →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}