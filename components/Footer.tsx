import React from 'react';
import { Facebook, Instagram, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white border-t border-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">אלעזר <span className="text-primary-500">שיפוצים</span></h3>
            <p className="text-secondary-400 max-w-sm">
              אנו מתמחים בשיפוצים כלליים, עבודות גמר ובנייה ברמה הגבוהה ביותר.
              המוטו שלנו הוא שירות, אמינות ומקצועיות ללא פשרות.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-secondary-400 hover:text-white transition-colors">ראשי</a></li>
              <li><a href="#about" className="text-secondary-400 hover:text-white transition-colors">אודות</a></li>
              <li><a href="#portfolio" className="text-secondary-400 hover:text-white transition-colors">פרויקטים</a></li>
              <li><a href="#contact" className="text-secondary-400 hover:text-white transition-colors">צור קשר</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">עקבו אחרינו</h4>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
               <a href="tel:0501234567" className="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

        </div>
        
        <div className="border-t border-secondary-800 mt-12 pt-8 text-center text-secondary-500 text-sm">
          <p>© {new Date().getFullYear()} אלעזר שיפוצים. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
