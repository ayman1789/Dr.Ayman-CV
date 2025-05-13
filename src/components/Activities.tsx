
import { Card, CardContent } from '@/components/ui/card';

const Activities = () => {
  const activities = [
    {
      title: "مدرب الذكاء الاصطناعي",
      institution: "جامعة طنطا للصيدلة",
      description: "تقديم الذكاء الاصطناعي للمتخصصين في الرعاية الصحية"
    },
    {
      title: "مدرب الذكاء الاصطناعي",
      institution: "جامعة 6 أكتوبر للصيدلة",
      description: "تقديم الذكاء الاصطناعي في أتمتة الصيدلة"
    },
    {
      title: "مدرب الذكاء الاصطناعي",
      institution: "جامعة المنيا للصيدلة",
      description: "تقديم الذكاء الاصطناعي في الدراسة والتعلم"
    },
    {
      title: "مدرب الذكاء الاصطناعي",
      institution: "جامعة المنصورة الجديدة",
      description: "تقديم الذكاء الاصطناعي في دورة ممارسة الصيدلة في جامعة المنصورة"
    },
    {
      title: "مدرب الذكاء الاصطناعي",
      institution: "جامعة العريش للصيدلة",
      description: "تقديم كيفية الاستفادة من الذكاء الاصطناعي بعد التخرج"
    },
    {
      title: "مدرب الذكاء الاصطناعي",
      institution: "جامعة السادات للصيدلة",
      description: "تقديم الذكاء الاصطناعي في ممارسة الصيدلة"
    },
    {
      title: "مدرب الذكاء الاصطناعي",
      institution: "جامعة المنصورة القديمة للصيدلة",
      description: "تقديم الذكاء الاصطناعي في تسويق الصيدلة"
    },
    {
      title: "مدرب الذكاء الاصطناعي",
      institution: "EPSF - جامعة ACU",
      description: "الذكاء الاصطناعي في الدراسة والتعلم"
    },
    {
      title: "مدرب الذكاء الاصطناعي",
      institution: "EPSF - جامعة الإسكندرية",
      description: "تعلم هندسة توجيه الذكاء الاصطناعي (Prompt Engineering)"
    }
  ];

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h2 className="section-title">المشاركة في الفعاليات والأنشطة</h2>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="timeline-item">
              <h3 className="font-bold text-cv-blue">{activity.title}</h3>
              <div className="font-medium text-cv-light-blue">{activity.institution}</div>
              <div className="text-gray-700 mt-1">{activity.description}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Activities;
