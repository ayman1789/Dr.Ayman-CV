
import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Profile = () => {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h2 className="section-title">الملف الشخصي</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-cv-blue mb-4">معلومات الاتصال</h3>
            <div className="space-y-3">
              <a href="tel:00201010391353" className="contact-link">
                <Phone size={18} />
                <span>00201010391353</span>
              </a>
              <a href="mailto:Pharmacist_201175@yahoo.com" className="contact-link">
                <Mail size={18} />
                <span>Pharmacist_201175@yahoo.com</span>
              </a>
              <div className="contact-link">
                <MapPin size={18} />
                <span>شبراخيت، البحيرة، مصر</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-cv-blue mb-4">المعلومات الشخصية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">تاريخ الميلاد</span>
                <span>01/08/1989</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">الحالة الاجتماعية</span>
                <span>متزوج</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">رخصة القيادة</span>
                <span>مصرية وسعودية</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">الهيئة السعودية للتخصصات الصحية</span>
                <span>معتمد</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
