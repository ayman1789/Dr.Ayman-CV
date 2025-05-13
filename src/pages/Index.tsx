
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Activities from "@/components/Activities";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <Profile />
          <Skills />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Education />
            <Experience />
          </div>
          <Activities />
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
