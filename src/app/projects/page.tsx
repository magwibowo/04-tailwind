import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyek | Web Pribadi',
  description: 'Daftar proyek yang telah saya kerjakan',
};

type ProjectProps = {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
};

function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        {/* Using a colored div instead of an image to avoid Image component issues */}
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-lg">{project.title}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={project.link} 
          className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors"
        >
          Lihat Proyek
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const projects: ProjectProps[] = [
    {
      title: "Setup Env-React",
      description: "Tugas Pertama Pak Hasyim.",
      imageUrl: "/images/project1.png",
      technologies: ["Next.js", "React",],
      link: "https://github.com/magwibowo/-01-setup-environment-react.git"
    },
    {
      title: "Task Management App",
      description: "Tugas kedua Pak Hasyim.",
      imageUrl: "/images/project2.png",
      technologies: ["React", "Next.js"],
      link: "https://github.com/magwibowo/02-my-react-app"
    },
    {
      title: "Pembelajaran Next.js",
      description: "Tugas Ketiga Pak Hasyim.",
      imageUrl: "/images/project3.png",
      technologies: ["Next.js", "React",],
      link: "https://github.com/magwibowo/03-nextjs.git"
    },
    {
      title: "Sistem Informasi Klinik Polinema",
      description: "Aplikasi pendataan rekam medis Mahasiswa Polinema, Panduan Kesehatan, dan Chat antar Dokter dan Mahasiswa.",
      imageUrl: "/images/project4.png",
      technologies: ["React", "API", "Styled Components"],
      link: "https://github.com/MhmdHafiidh/SIMKESMA.git"
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-teal-300 mb-6 text-center">Proyek</h1>
      <p className="text-gray-400 mb-8 text-center">
        Berikut adalah beberapa proyek yang telah saya kembangkan. Klik pada proyek untuk melihat detail lebih lanjut.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}