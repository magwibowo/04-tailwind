export default function Footer() {
    return (
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Web Pribadi. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <a href="https://github.com/yourusername" className="hover:text-teal-500">GitHub</a>
              <a href="https://linkedin.com/in/yourusername" className="hover:text-teal-500">LinkedIn</a>
              <a href="https://twitter.com/yourusername" className="hover:text-teal-500">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }