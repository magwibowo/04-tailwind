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
              className="rounded-full"
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white-800">M. Agung Wibowo</h1>
        <p className="text-lg text-gray-600 mt-2">Web Developer, UI Designer, Graphic Design</p>
        
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com" className="text-gray-600 hover:text-teal-500">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://twitter.com" className="text-gray-600 hover:text-teal-500">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-teal-500">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-cyan-600 mb-4">Tentang Saya</h2>
        <p className="mb-4">
          Selamat datang di website pribadi saya. Saya adalah seorang web developer dengan pengalaman 5 hari dalam mengembangkan aplikasi web modern.
          Saya fokus pada teknologi JavaScript, khususnya React dan Next.js.
        </p>
        
        <p className="mb-4">
          Latar belakang pendidikan saya adalah D4 Teknik Informatika. Saya memiliki ketertarikan khusus pada desain UI/UX dan pengembangan Frontend.
          Saat ini saya belum bekerja sebagai Frontend Developer di sebuah perusahaan teknologi.
        </p>
        
        <h2 className="text-2xl font-bold text-cyan-600 mt-8 mb-4">Keahlian</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="card-container gradient-blue p-6 rounded-xl custom-shadow hover:custom-shadow-hover border border-indigo-100">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-bold text-xl text-indigo-800">Frontend Development</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"].map((skill) => (
                <span key={skill} className="skill-tag bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="card-container gradient-green p-6 rounded-xl custom-shadow hover:custom-shadow-hover border border-teal-100">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
              <h3 className="font-bold text-xl text-teal-800">Backend Development</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Node.js", "Express", "MongoDB", "PostgreSQL"].map((skill) => (
                <span key={skill} className="skill-tag bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="card-container gradient-purple p-6 rounded-xl custom-shadow hover:custom-shadow-hover border border-purple-100">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              <h3 className="font-bold text-xl text-purple-800">UI/UX Design</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Figma", "Adobe XD", "Wireframing", "Prototyping"].map((skill) => (
                <span key={skill} className="skill-tag bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="card-container gradient-amber p-6 rounded-xl custom-shadow hover:custom-shadow-hover border border-amber-100">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-bold text-xl text-amber-800">Tools & Others</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Git", "GitHub", "VS Code", "Docker", "CI/CD"].map((skill) => (
                <span key={skill} className="skill-tag bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-300 mt-8 mb-4">Kontak</h2>
        <p>
          Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan, jangan ragu untuk menghubungi saya melalui email <a href="mailto:agung@gmail.com" className="text-teal-500 hover:underline">agung@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}