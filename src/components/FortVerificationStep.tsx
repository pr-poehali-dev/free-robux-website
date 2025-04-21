import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ShieldCheck, Trophy, Check } from "lucide-react";

const FortVerificationStep = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  // Симуляция прогресса верификации
  const startVerification = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentStep(2);
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  const completeHumanVerification = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setCompleted(true);
          }, 500);
          return 100;
        }
        return prev + 8;
      });
    }, 100);
  };

  return (
    <div className="w-full bg-black/50 backdrop-blur-md rounded-xl p-6 border border-[#19e6e6]/30 shadow-[0_0_15px_rgba(25,230,230,0.3)]">
      {!completed ? (
        <>
          <h2 className="text-2xl font-bold text-[#19e6e6] mb-4 text-center">
            Верификация
          </h2>
          
          {currentStep === 1 ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-[#19e6e6]/20">
                <ShieldCheck className="text-[#19e6e6] h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-medium">Проверка аккаунта</h3>
                  <p className="text-gray-300 text-sm">Подтверждение данных вашего аккаунта Fortnite</p>
                </div>
              </div>
              
              <div className="py-2">
                <Progress value={progress} className="h-2 bg-white/20" indicatorClassName="bg-gradient-to-r from-[#19e6e6] to-[#9945FF]" />
                <div className="text-xs text-gray-300 mt-1 text-right">
                  {progress}% завершено
                </div>
              </div>
              
              {progress === 0 ? (
                <Button 
                  onClick={startVerification}
                  className="w-full bg-gradient-to-r from-[#19e6e6] to-[#9945FF] hover:from-[#19e6e6]/90 hover:to-[#9945FF]/90 text-white font-bold"
                >
                  Начать проверку
                </Button>
              ) : progress === 100 ? (
                <div className="text-center text-green-400 py-2 font-medium">
                  Аккаунт подтвержден!
                </div>
              ) : (
                <Button 
                  disabled
                  className="w-full bg-gradient-to-r from-[#19e6e6]/70 to-[#9945FF]/70 text-white font-bold"
                >
                  Проверка...
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-[#19e6e6]/20">
                <Trophy className="text-[#FFD700] h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-medium">Подтверждение человечности</h3>
                  <p className="text-gray-300 text-sm">Защита от ботов для безопасного получения В-Баксов</p>
                </div>
              </div>
              
              <div className="py-2">
                <Progress value={progress} className="h-2 bg-white/20" indicatorClassName="bg-gradient-to-r from-[#FFD700] to-[#FF6B00]" />
                <div className="text-xs text-gray-300 mt-1 text-right">
                  {progress}% завершено
                </div>
              </div>
              
              {progress === 0 ? (
                <Button 
                  onClick={completeHumanVerification}
                  className="w-full bg-gradient-to-r from-[#FFD700] to-[#FF6B00] hover:from-[#FFD700]/90 hover:to-[#FF6B00]/90 text-white font-bold"
                >
                  Подтвердить
                </Button>
              ) : progress === 100 ? (
                <div className="text-center text-green-400 py-2 font-medium">
                  Верификация завершена!
                </div>
              ) : (
                <Button 
                  disabled
                  className="w-full bg-gradient-to-r from-[#FFD700]/70 to-[#FF6B00]/70 text-white font-bold"
                >
                  Верификация...
                </Button>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="text-center space-y-4 py-4">
          <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
            <Check className="h-10 w-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-white">Поздравляем!</h2>
          <p className="text-gray-300">
            Ваши В-Баксы будут отправлены на указанный аккаунт в течение 24 часов.
          </p>
          <div className="px-4 py-3 bg-[#19e6e6]/10 rounded-lg border border-[#19e6e6]/30 text-sm text-gray-200">
            Пожалуйста, не закрывайте эту страницу до полного завершения процесса.
          </div>
        </div>
      )}
    </div>
  );
};

export default FortVerificationStep;
