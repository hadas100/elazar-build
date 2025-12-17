import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    "עמידה קפדנית בלוחות זמנים",
    "שקיפות מלאה מול הלקוח",
    "שימוש בחומרים בעלי תו תקן",
    "צוות עובדים מקצועי ומנוסה",
    "ניקיון וסדר לאורך כל הפרויקט",
    "אחריות מלאה על העבודה"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/600/800?random=10"
                alt="Elazar at work"
                className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 right-0 bg-primary-600 text-white p-6 rounded-tl-2xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm opacity-90">שנות ניסיון</p>
              </div>
            </div>
            {/* Decoration dot pattern could go here */}
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase mb-2">מי אנחנו</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              אלעזר שיפוצים - הופכים תוכניות למציאות
            </h3>
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              נעים להכיר, שמי אלעזר. אני מאמין ששיפוץ הוא לא רק שבירת קירות, אלא יצירת חווית מגורים חדשה.
              במשך למעלה מ-15 שנה אני מוביל פרויקטים של שיפוץ ובנייה ברחבי הארץ, תוך דגש על יחס אישי, הקשבה לצרכי הלקוח וביצוע חסר פשרות.
            </p>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              החזון שלי הוא לתת שקט נפשי ללקוחות שלי. כשאתם בוחרים בי, אתם יודעים שיש מי שדואג לכל הפרטים הקטנים, מהבורג הראשון ועד ניקיון הדירה בסיום.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary-500 flex-shrink-0" size={24} />
                  <span className="text-secondary-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
