import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface VBucksInputProps {
  onComplete: () => void;
}

const VBucksInput = ({ onComplete }: VBucksInputProps) => {
  const [username, setUsername] = useState("");
  const [vbucksAmount, setVBucksAmount] = useState("5000");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError("Пожалуйста, введите имя пользователя Fortnite");
      return;
    }

    setError("");
    setLoading(true);
    
    // Имитация запроса к серверу
    setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 2000);
  };

  return (
    <div className="w-full bg-black/50 backdrop-blur-md rounded-xl p-6 border border-[#19e6e6]/30 shadow-[0_0_15px_rgba(25,230,230,0.3)]">
      <h2 className="text-2xl font-bold text-[#19e6e6] mb-4 text-center">Получить В-Баксы</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded text-white text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-white text-sm mb-1">
            Имя пользователя Fortnite:
          </label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Введите ваше имя в Fortnite"
            className="bg-white/10 border-[#19e6e6]/30 text-white placeholder:text-gray-400"
          />
        </div>
        
        <div>
          <label htmlFor="vbucks" className="block text-white text-sm mb-1">
            Количество В-Баксов:
          </label>
          <select
            id="vbucks"
            value={vbucksAmount}
            onChange={(e) => setVBucksAmount(e.target.value)}
            className="w-full h-10 rounded-md border border-[#19e6e6]/30 bg-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#19e6e6]"
          >
            <option value="1000">1,000 В-Баксов</option>
            <option value="2800">2,800 В-Баксов</option>
            <option value="5000">5,000 В-Баксов</option>
            <option value="13500">13,500 В-Баксов</option>
          </select>
        </div>
        
        <div className="pt-2">
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#19e6e6] to-[#9945FF] hover:from-[#19e6e6]/90 hover:to-[#9945FF]/90 text-white font-bold"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Проверка...
              </>
            ) : (
              "Получить В-Баксы"
            )}
          </Button>
        </div>
      </form>
      
      <div className="mt-4 text-xs text-gray-300 text-center">
        Бесплатные В-Баксы будут отправлены на ваш аккаунт после верификации
      </div>
    </div>
  );
};

export default VBucksInput;
