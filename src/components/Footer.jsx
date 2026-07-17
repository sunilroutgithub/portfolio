import { personalData } from '../data';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-8 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">{personalData.name}</h3>
        <p className="text-gray-400 text-sm mb-4">
          {personalData.bio}
        </p>
        <a href={`mailto:${personalData.email}`} className="text-blue-400 hover:text-blue-300 transition">
          {personalData.email}
        </a>
        <p className="text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} {personalData.name}. Built with ❤️
        </p>
      </div>
    </footer>
  );
}