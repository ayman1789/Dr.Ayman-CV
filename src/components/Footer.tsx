
import { Facebook, Linkedin, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cv-blue text-cv-light py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} د. أيمن القاضي - مدرب الذكاء الاصطناعي
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cv-light hover:text-cv-gold transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.facebook.com/ayman.kady1/?locale=ar_AR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cv-light hover:text-cv-gold transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://wa.me/2001010391353?text=" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cv-light hover:text-cv-gold transition-colors"
            >
              <MessageSquare size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
