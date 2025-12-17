import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase mb-2">דברו איתנו</h2>
            <h3 className="text-4xl font-bold text-secondary-900 mb-6">מתחילים פרויקט חדש?</h3>
            <p className="text-secondary-600 text-lg mb-10">
              אנחנו כאן כדי לענות על כל שאלה ולתת לכם הצעת מחיר הוגנת ומקצועית.
              השאירו פרטים ונחזור אליכם בהקדם.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg text-primary-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-secondary-900 text-lg">טלפון</h4>
                  <a href="tel:0501234567" className="text-secondary-600 hover:text-primary-600 block dir-ltr text-right">050-123-4567</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg text-primary-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-secondary-900 text-lg">אימייל</h4>
                  <a href="mailto:contact@elazar-build.co.il" className="text-secondary-600 hover:text-primary-600">contact@elazar-build.co.il</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg text-primary-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-secondary-900 text-lg">שעות פעילות</h4>
                  <p className="text-secondary-600">ראשון - חמישי: 07:00 - 18:00</p>
                  <p className="text-secondary-600">שישי: 07:00 - 13:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg text-primary-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-secondary-900 text-lg">אזורי שירות</h4>
                  <p className="text-secondary-600">גוש דן, השרון והמרכז.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary-50 p-8 md:p-10 rounded-2xl shadow-lg border border-secondary-100">
            <h4 className="text-2xl font-bold text-secondary-900 mb-6">השארת פרטים</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">שם מלא</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="ישראל ישראלי"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">טלפון</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="050-0000000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">סוג העבודה</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all">
                  <option>שיפוץ מלא</option>
                  <option>שיפוץ חדר רחצה</option>
                  <option>מטבח</option>
                  <option>עבודות גבס וצבע</option>
                  <option>אחר</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">הודעה</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="ספר לנו קצת על הפרויקט..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-2"
              >
                שלח הודעה
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
