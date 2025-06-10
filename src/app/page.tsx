import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Saya | Web Pribadi',
  description: 'Informasi tentang saya dan pengalaman saya',
};

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <div className="relative w-64 h-64 bg-cyan-400 mx-auto mb-5 overflow-hidden rounded-full">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/images/244107027001-logo.png"
              alt="Profile Picture"
              width={500}
              height={500}
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800">M. Agung Wibowo</h1>
        <p className="text-lg text-gray-600 mt-2">
          Web Developer, UI Designer, Graphic Designer
        </p>

        <div className="flex justify-center space-x-4 mt-4">
          {[
            { href: 'https://github.com', label: 'GitHub', icon: 'github' },
            { href: 'https://twitter.com', label: 'Twitter', icon: 'twitter' },
            { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-teal-500"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{link.label}</span>
              {/* Icons tetap sama, bisa pakai dari Heroicons atau SVG langsung */}
            </a>
          ))}
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-cyan-600 mb-4">Tentang Saya</h2>
        <p>
          Selamat datang di website pribadi saya. Saya adalah seorang web developer dengan pengalaman beberapa tahun dalam mengembangkan aplikasi web modern. Fokus utama saya adalah pada pengembangan Frontend menggunakan teknologi JavaScript, khususnya React dan Next.js.
        </p>
        <p>
          Saya merupakan lulusan D4 Teknik Informatika dan memiliki ketertarikan mendalam pada desain UI/UX serta pengembangan antarmuka pengguna. Saya sedang mencari kesempatan profesional di dunia teknologi, khususnya sebagai Frontend Developer.
        </p>

        <h2 className="text-2xl font-bold text-cyan-600 mt-8 mb-4">Keahlian</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {[
            {
              title: 'Frontend Development',
              color: 'indigo',
              skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
            },
            {
              title: 'Backend Development',
              color: 'teal',
              skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
            },
            {
              title: 'UI/UX Design',
              color: 'purple',
              skills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping'],
            },
            {
              title: 'Tools & Others',
              color: 'amber',
              skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'CI/CD'],
            },
          ].map((section) => (
            <div
              key={section.title}
              className={`card-container gradient-${section.color} p-6 rounded-xl custom-shadow hover:custom-shadow-hover border border-${section.color}-100`}
            >
              <h3 className={`font-bold text-xl text-${section.color}-800 mb-4`}>
                {section.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`bg-${section.color}-100 text-${section.color}-800 px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Kontak</h2>
        <p>
          Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan, silakan hubungi saya melalui email di{' '}
          <a href="mailto:agung@gmail.com" className="text-teal-500 hover:underline">
            agung@gmail.com
          </a>.
        </p>
      </div>
    </div>
  );
}
