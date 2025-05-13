
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const educations = [
    {
      degree: "بكالوريوس صيدلة",
      institution: "جامعة الإسكندرية",
      period: "2006 - 2011"
    },
    {
      degree: "دبلوم المبيعات والتسويق",
      institution: "الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري (ASST)",
      period: "2021 - 2022"
    },
    {
      degree: "دبلوم الجودة",
      institution: "أكاديمية اللوجستيك للدراسات المتقدمة والتعليم المستمر",
      period: "2022 - 2023"
    },
    {
      degree: "الممارسة السريرية للصيادلة",
      institution: "جامعة الإسكندرية",
      period: "2010"
    },
    {
      degree: "دورة MPA المصغرة عبر الإنترنت",
      institution: "يوديمي",
      period: "2020"
    },
    {
      degree: "دورة Super Community Pharmacist",
      institution: "Pharmacademy",
      period: "2021"
    },
    {
      degree: "دورة الذكاء الاصطناعي Chat GPT",
      institution: "أكاديمية د. نور - الجزائر",
      period: "2024"
    }
  ];

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h2 className="section-title">التعليم والمؤهلات</h2>
        <div className="space-y-4">
          {educations.map((edu, index) => (
            <div key={index} className="timeline-item">
              <h3 className="font-bold text-cv-blue">{edu.degree}</h3>
              <div className="text-gray-700">{edu.institution}</div>
              <div className="text-sm text-gray-500">{edu.period}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;
