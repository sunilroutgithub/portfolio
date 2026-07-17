import { personalData } from '../data';
import { FaPaperPlane } from 'react-icons/fa';

export default function HireMe() {
  return (
    <a 
      href={`mailto:${personalData.email}?subject=Job%20Opportunity%20for%20${personalData.name}`}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:scale-110 flex items-center gap-2 font-semibold animate-bounce"
    >
      <FaPaperPlane /> Hire Me
    </a>
  );
}