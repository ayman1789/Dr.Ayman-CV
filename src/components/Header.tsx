
import { Facebook, Linkedin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-cv-blue to-cv-light-blue text-cv-light py-10 md:py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cv-gold shadow-lg">
          <img 
            src="https://i.imgur.com/QO3tEnP.jpeg" 
            alt="د. أيمن القاضي" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">أيمن القاضي</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-cv-gold">مدرب الذكاء الاصطناعي</h2>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button variant="outline" className="bg-white/10 hover:bg-white/20" asChild>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </Button>
            
            <Button variant="outline" className="bg-white/10 hover:bg-white/20" asChild>
              <a href="https://www.facebook.com/ayman.kady1/?locale=ar_AR" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Facebook size={20} />
                Facebook
              </a>
            </Button>
            
            <Button variant="outline" className="bg-white/10 hover:bg-white/20" asChild>
              <a href="https://wa.me/2001010391353?text=" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageSquare size={20} />
                واتساب
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
