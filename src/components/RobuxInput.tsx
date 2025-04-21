import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface RobuxInputProps {
  onComplete: () => void;
}

const RobuxInput = ({ onComplete }: RobuxInputProps) => {
  const [username, setUsername] = useState("");
  const [amount, setAmount] = useState(800);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username) return;
    
    setProcessing(true);
    
    // Имитация процесса
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
          setProcessing(false);
        }, 500);
      }
    }, 30);
  };

  return (
    <Card className="w-full max-w-md shadow-xl bg-white/95 backdrop-blur-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Получить Робуксы</CardTitle>
        <CardDescription className="text-center">
          Введите ваш игровой ник и выберите количество робуксов
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Input
                placeholder="Введите ваш Roblox ник"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={processing}
                className="bg-white"
                required
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">
                Количество робуксов: {amount}
              </label>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                disabled={processing}
                className="w-full accent-[#FF4500]"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>100</span>
                <span>5000</span>
                <span>10000</span>
              </div>
            </div>
            
            {processing && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Генерация робуксов...</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-[#FF4500] hover:bg-[#CC3700] transition-all"
              disabled={processing || !username}
            >
              {processing ? "Генерация..." : "Получить робуксы"}
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <p className="text-xs text-muted-foreground text-center">
          Нажимая на кнопку, вы соглашаетесь с нашими условиями использования
        </p>
      </CardFooter>
    </Card>
  );
};

export default RobuxInput;
