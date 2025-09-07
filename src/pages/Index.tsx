import { PhoneFrame } from "@/components/PhoneFrame";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { LoginScreen } from "@/components/LoginScreen";
import { SignUpScreen } from "@/components/SignUpScreen";
import { ForgotPasswordScreen } from "@/components/ForgotPasswordScreen";
import { DashboardScreen } from "@/components/DashboardScreen";
import { OngoingMangaScreen } from "@/components/OngoingMangaScreen";
import { CompletedMangaScreen } from "@/components/CompletedMangaScreen";
import { MangaDetailScreen } from "@/components/MangaDetailScreen";
import { ProfileScreen } from "@/components/ProfileScreen";
import { AddMangaScreen } from "@/components/AddMangaScreen";
import { EditMangaScreen } from "@/components/EditMangaScreen";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="text-center py-12 px-6">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Manga Tracker App
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          A beautiful, minimalist manga tracking app with light orange and white theme. 
          Track your reading progress with clean, intuitive design.
        </p>
      </div>

      {/* Phone Screens Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 pb-12">
        {/* Welcome Screen */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Welcome Screen</h3>
          <div className="scale-75 origin-top">
            <PhoneFrame>
              <WelcomeScreen />
            </PhoneFrame>
          </div>
        </div>

        {/* Login Screen */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Login Screen</h3>
          <div className="scale-75 origin-top">
            <PhoneFrame>
              <LoginScreen />
            </PhoneFrame>
          </div>
        </div>

        {/* Sign Up Screen */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Sign Up Screen</h3>
          <div className="scale-75 origin-top">
            <PhoneFrame>
              <SignUpScreen />
            </PhoneFrame>
          </div>
        </div>

        {/* Forgot Password Screen */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Forgot Password Screen</h3>
          <div className="scale-75 origin-top">
            <PhoneFrame>
              <ForgotPasswordScreen />
            </PhoneFrame>
          </div>
        </div>

        {/* Dashboard Screen */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Dashboard Screen</h3>
          <div className="scale-75 origin-top">
            <PhoneFrame>
              <DashboardScreen />
            </PhoneFrame>
          </div>
        </div>

        {/* Ongoing Manga Screen */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Ongoing Manga Screen</h3>
          <div className="scale-75 origin-top">
            <PhoneFrame>
              <OngoingMangaScreen />
            </PhoneFrame>
          </div>
        </div>

        {/* Completed Manga Screen */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Completed Manga Screen</h3>
          <div className="scale-75 origin-top">
            <PhoneFrame>
              <CompletedMangaScreen />
            </PhoneFrame>
          </div>
        </div>

        {/* Manga Detail Screen */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Manga Detail Screen</h3>
          <div className="scale-75 origin-top">
            <PhoneFrame>
              <MangaDetailScreen />
            </PhoneFrame>
          </div>
        </div>

        {/* Profile Screen */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Profile Screen</h3>
          <div className="scale-75 origin-top">
            <PhoneFrame>
              <ProfileScreen />
            </PhoneFrame>
          </div>
        </div>

        {/* Add Manga Screen */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Add Manga Screen</h3>
          <div className="scale-75 origin-top">
            <PhoneFrame>
              <AddMangaScreen />
            </PhoneFrame>
          </div>
        </div>

        {/* Edit Manga Screen */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Edit Manga Screen</h3>
          <div className="scale-75 origin-top">
            <PhoneFrame>
              <EditMangaScreen />
            </PhoneFrame>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white/50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-orange-400 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Clean Design</h3>
              <p className="text-slate-600">Minimalist interface with light orange accents and plenty of breathing space</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-orange-400 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Progress Tracking</h3>
              <p className="text-slate-600">Visual progress bars and reading statistics to track your manga journey</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-orange-400 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Smooth Animations</h3>
              <p className="text-slate-600">Physics-based transitions and hover effects for a delightful experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
