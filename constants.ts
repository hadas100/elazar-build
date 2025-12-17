import { Hammer, PaintRoller, Ruler, BrickWall, Truck, HardHat } from 'lucide-react';
import { Project, Service, Testimonial } from './types';

// Using consistent nature/architecture images from picsum
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "שיפוץ דירת גג בתל אביב",
    category: "שיפוץ מלא",
    image: "https://picsum.photos/800/600?random=1",
    description: "עיצוב מחדש של חלל המגורים, ריצוף יוקרתי ועבודות גבס מורכבות."
  },
  {
    id: 2,
    title: "מטבח מודרני בהרצליה",
    category: "מטבחים",
    image: "https://picsum.photos/800/600?random=2",
    description: "התקנת שיש, חיפוי קירות ותאורה נסתרת למראה נקי ואלגנטי."
  },
  {
    id: 3,
    title: "חדר רחצה מפנק",
    category: "חדרי רחצה",
    image: "https://picsum.photos/800/600?random=3",
    description: "אינסטלציה חדשה, כלים סניטריים תלויים וריצוף מונע החלקה."
  },
  {
    id: 4,
    title: "תוספת בנייה במושב",
    category: "בנייה",
    image: "https://picsum.photos/800/600?random=4",
    description: "יציקת יסודות, בניית שלד וגמר חוץ כולל שליכט צבעוני."
  },
  {
    id: 5,
    title: "סלון בעיצוב כפרי",
    category: "שיפוץ מלא",
    image: "https://picsum.photos/800/600?random=5",
    description: "פרקט עץ טבעי, קיר בריקים ופינת קמין מעוצבת."
  },
  {
    id: 6,
    title: "שיקום חזית בניין",
    category: "חיצוני",
    image: "https://picsum.photos/800/600?random=6",
    description: "טיפול בסדקים, צביעה חיצונית ואיטום מלא נגד רטיבות."
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "שיפוץ דירות קומפלט",
    description: "ליווי מלא משלב התכנון ועד מסירת המפתח, כולל הריסה, אינסטלציה, חשמל וגמר.",
    icon: Hammer
  },
  {
    id: 2,
    title: "עבודות צבע וגבס",
    description: "הנמכות תקרה, קרניזים, קירות דקורטיביים וצביעה אומנותית ברמה גבוהה.",
    icon: PaintRoller
  },
  {
    id: 3,
    title: "ריצוף וחיפוי",
    description: "הדבקת ריצוף, פירוק והרכבה, קרמיקה, גרניט פורצלן ופרקטים.",
    icon: BrickWall
  },
  {
    id: 4,
    title: "תוספות בנייה",
    description: "הרחבת מבנים קיימים, בניית ממ\"דים, מרפסות ופרגולות.",
    icon: HardHat
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "דני כהן",
    role: "בעל דירה ברמת גן",
    content: "אלעזר הוא איש מקצוע נדיר. עמד בלוח הזמנים במדויק, והגימור יצא מושלם. ממליץ בחום!"
  },
  {
    id: 2,
    name: "שרה לוי",
    role: "אדריכלית פנים",
    content: "כאדריכלית, אני עובדת עם המון קבלנים, אבל השקט הנפשי שאלעזר נותן לי הוא מעל ומעבר."
  },
  {
    id: 3,
    name: "משפחת אברהמי",
    role: "לקוחות פרטיים",
    content: "הפך לנו את הבית. מצוות עובדים מסור, נקי ומקצועי. תודה רבה על הכל."
  }
];
