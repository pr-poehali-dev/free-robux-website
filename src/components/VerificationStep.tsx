import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle2, Copy, Lock } from "lucide-react";

const VerificationStep = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [verifying, setVerifying] = useState(false);

  const handleVerify = () => {
    setVerifying(true);
    
    // Имитация процесса верификации
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setStep(2);
          setVerifying(false);
        }, 500);
      }
    }, 30);
  };

  return (
    <Card className="w-full max-w-md shadow-xl bg-white/95 backdrop-blur-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Верификация</CardTitle>
        <CardDescription className="text-center">
          Для защиты от ботов пройдите верификацию
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-md flex items-start">
              <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-sm text-amber-800">
                Для защиты системы от ботов и спама, необходимо пройти проверку. Это займет всего 1 минуту.
              </p>
            </div>
            
            <div className="grid gap-4">
              <div className="border rounded-md p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-roblox mr-2" />
                  <span className="text-sm font-medium">Код верификации:</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-mono bg-gray-100 p-1 px-2 rounded mr-2">RBXFREE24</span>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
              
              {verifying && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Проверка...</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}
              
              <Button 
                className="w-full bg-roblox hover:bg-roblox-dark transition-all"
                onClick={handleVerify}
                disabled={verifying}
              >
                {verifying ? "Проверка..." : "Пройти верификацию"}
              </Button>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-md flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-green-800">Робуксы отправлены!</p>
                <p className="text-sm text-green-700 mt-1">
                  Проверьте свой аккаунт Roblox через 24 часа. Если вы не получили робуксы, повторите процесс.
                </p>
              </div>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="text-sm font-medium mb-2">Как получить больше робуксов:</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-roblox mr-2">•</span>
                  Приглашайте друзей и получайте по 100 робуксов за каждого
                </li>
                <li className="flex items-start">
                  <span className="text-roblox mr-2">•</span>
                  Возвращайтесь каждый день для получения бонуса
                </li>
                <li className="flex items-start">
                  <span className="text-roblox mr-2">•</span>
                  Подпишитесь на наш канал для получения VIP статуса
                </li>
              </ul>
            </div>
            
            <Button 
              className="w-full bg-roblox hover:bg-roblox-dark transition-all"
              onClick={() => window.location.reload()}
            >
              Получить еще робуксы
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col">
        <p className="text-xs text-muted-foreground text-center">
          Все операции с робуксами могут занимать до 24 часов
        </p>
      </CardFooter>
    </Card>
  );
};

export default VerificationStep;
