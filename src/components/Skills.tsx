
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skills = [
    'العمل الجماعي', 
    'التفكير الإبداعي', 
    'مهارات مايكروسوفت', 
    'التصميم', 
    'مهارات الاتصال'
  ];
  
  const languages = [
    { name: 'العربية', level: 'اللغة الأم' },
    { name: 'الإنجليزية', level: 'إجادة' }
  ];
  
  const hobbies = ['القراءة', 'ممارسة الألعاب'];

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="section-title">المهارات</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="bg-cv-light-blue/10 text-cv-blue border-cv-light-blue">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="section-title">اللغات</h2>
            <div className="space-y-3">
              {languages.map((language, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{language.name}</span>
                  <span className="text-sm text-gray-500">{language.level}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="section-title">الهوايات</h2>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby, index) => (
                <Badge key={index} variant="outline" className="bg-cv-gold/10 text-cv-dark border-cv-gold">
                  {hobby}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;
