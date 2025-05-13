
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "مدرب الذكاء الاصطناعي",
      company: "أكاديمية السادات",
      description: "تقديم الذكاء الاصطناعي للمتخصصين في الرعاية الصحية في أكاديمية السادات"
    },
    {
      title: "مدرب الذكاء الاصطناعي",
      company: "Pharmacademy",
      description: "مالك دورة DR.AI"
    },
    {
      title: "مدير التسويق",
      company: "مستشفى النهضة",
      description: "أدير حاليًا قسم التسويق الرقمي في مستشفى النهضة بالإسكندرية"
    },
    {
      title: "مدير صيدلية",
      company: "صيدلية د. سحر هبة - مصر",
      description: "بعد الاستقرار في مصر، توليت إدارة صيدلية د. سحر"
    },
    {
      title: "سلسلة صيدليات أوبلس",
      company: "المملكة العربية السعودية",
      description: "عملت لمدة 8 سنوات كصيدلي مجتمعي عادي، ومدير صيدلية، وصيدلي تسويق مسؤول عن صيدلية التوصيل عبر الإنترنت"
    },
    {
      title: "صيدلي مجتمعي",
      company: "مصر",
      description: "التدريب في صيدلية فؤاد لمدة عام. العمل في صيدلية الجمهورية لمدة عام. العمل في صيدلية دبلو 2 لمدة 6 أشهر. العمل في صيدلية عبد العزيز وهبة لمدة 4 أشهر. العمل في صيدلية حضر متولي لمدة 3 أشهر."
    }
  ];

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h2 className="section-title">الخبرات المهنية</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <h3 className="font-bold text-cv-blue">{exp.title}</h3>
              <div className="font-medium text-cv-light-blue">{exp.company}</div>
              <div className="text-gray-700 mt-1">{exp.description}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
