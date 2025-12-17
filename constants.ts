import { Hammer, PaintRoller, Ruler, BrickWall, Truck, HardHat } from 'lucide-react';
import { Project, Service, Testimonial } from './types';

// Using consistent nature/architecture images from picsum
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "שיפוץ דירת גג בתל אביב",
    category: "שיפוץ מלא",
    image: "https://picsum.photos/800/600?random=1",
    description: "עיצוב מחדש של חלל המגורים, ריצוף יוקרתי ועבודות גבס מורכבות.",
    fullDescription: "בפרויקט זה ביצענו שיפוץ מקיף לדירת פנטהאוז ישנה בצפון תל אביב. התהליך כלל הריסה טוטאלית של הפנים, החלפת תשתיות אינסטלציה וחשמל, ותכנון מחדש של החלל ליצירת מרחב פתוח ומואר. השתמשנו בריצוף שיש איטלקי יוקרתי, התקנו מערכות מיזוג מתקדמות (VRF) ושילבנו עבודות נגרות בהתאמה אישית.",
    gallery: [
      "https://picsum.photos/800/600?random=11",
      "https://picsum.photos/800/600?random=12",
      "https://picsum.photos/800/600?random=13",
      "https://picsum.photos/800/600?random=14"
    ]
  },
  {
    id: 2,
    title: "מטבח מודרני בהרצליה",
    category: "מטבחים",
    image: "https://picsum.photos/800/600?random=2",
    description: "התקנת שיש, חיפוי קירות ותאורה נסתרת למראה נקי ואלגנטי.",
    fullDescription: "המטבח הוא לב הבית, ובפרויקט זה בהרצליה יצרנו מטבח שהוא גם פרקטי וגם יצירת אומנות. שילבנו חזיתות נאנו בגימור מט למניעת טביעות אצבע, משטח עבודה מגרניט פורצלן עמיד במיוחד, וחיפוי קיר זכוכית. התאורה תוכננה בקפידה עם פסי לד שקועים בארונות.",
    gallery: [
      "https://picsum.photos/800/600?random=21",
      "https://picsum.photos/800/600?random=22",
      "https://picsum.photos/800/600?random=23"
    ]
  },
  {
    id: 3,
    title: "חדר רחצה מפנק",
    category: "חדרי רחצה",
    image: "https://picsum.photos/800/600?random=3",
    description: "אינסטלציה חדשה, כלים סניטריים תלויים וריצוף מונע החלקה.",
    fullDescription: "הפכנו חדר רחצה סטנדרטי וצפוף לספא ביתי מפנק. העבודה כללה איטום יסודי, החלפת צנרת מלאה, התקנת אסלות סמויות וברזים אינטרפוץ. הריצוף שנבחר הוא אנטי-סליפ ברמה גבוהה לבטיחות מקסימלית, בשילוב אריחים מדוקקים לקירות למראה יוקרתי.",
    gallery: [
      "https://picsum.photos/800/600?random=31",
      "https://picsum.photos/800/600?random=32",
      "https://picsum.photos/800/600?random=33"
    ]
  },
  {
    id: 4,
    title: "תוספת בנייה במושב",
    category: "בנייה",
    image: "https://picsum.photos/800/600?random=4",
    description: "יציקת יסודות, בניית שלד וגמר חוץ כולל שליכט צבעוני.",
    fullDescription: "הרחבת בית פרטי במושב בשרון. הפרויקט כלל יציקת כלונסאות ורפסודה, בניית שלד לממ\"ד ולחדר הורים נוסף, ועבודות גמר חוץ להשתלבות מושלמת עם המבנה הקיים. ביצענו שליכט צבעוני אקרילי עמיד בכל תנאי מזג האוויר וחיפוי אבן טבעית בפינות.",
    gallery: [
      "https://picsum.photos/800/600?random=41",
      "https://picsum.photos/800/600?random=42",
      "https://picsum.photos/800/600?random=43",
      "https://picsum.photos/800/600?random=44"
    ]
  },
  {
    id: 5,
    title: "סלון בעיצוב כפרי",
    category: "שיפוץ מלא",
    image: "https://picsum.photos/800/600?random=5",
    description: "פרקט עץ טבעי, קיר בריקים ופינת קמין מעוצבת.",
    fullDescription: "עיצוב סלון באווירה חמה וכפרית. הדבקנו בריקים מפירוק על הקיר המרכזי, התקנו קמין גז בנוי עם מדף עץ אלון גושני, ופרסנו פרקט תלת-שכבתי איכותי. בנוסף, ביצענו הנמכות תקרה מינימליות להעברת תשתיות מיזוג ללא פגיעה בגובה החלל.",
    gallery: [
      "https://picsum.photos/800/600?random=51",
      "https://picsum.photos/800/600?random=52"
    ]
  },
  {
    id: 6,
    title: "שיקום חזית בניין",
    category: "חיצוני",
    image: "https://picsum.photos/800/600?random=6",
    description: "טיפול בסדקים, צביעה חיצונית ואיטום מלא נגד רטיבות.",
    fullDescription: "פרויקט לשיקום ושימור חזית של בניין משותף. ביצענו קילוף טיח רופף, טיפול בברזל חשוף וחלוד, שיקום בטונים ויישום מערכת צבע גמישה ואיכותית המגשרת על סדקים ומונעת חדירת רטיבות בעתיד. הבניין קיבל מראה חדש לגמרי.",
    gallery: [
      "https://picsum.photos/800/600?random=61",
      "https://picsum.photos/800/600?random=62",
      "https://picsum.photos/800/600?random=63"
    ]
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
