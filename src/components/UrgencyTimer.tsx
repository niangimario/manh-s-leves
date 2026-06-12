import { useState, useEffect } from "react";

export function UrgencyTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function getTimeUntilMidnight() {
      const now = new Date();
      const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
      const diff = midnight.getTime() - now.getTime();
      return {
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      };
    }

    setTimeLeft(getTimeUntilMidnight());

    const interval = setInterval(() => {
      setTimeLeft(getTimeUntilMidnight());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <p className="text-xs sm:text-sm font-semibold opacity-90 text-center">
        ⏰ Offre valable encore peu de temps
      </p>
      <div className="flex items-center gap-2">
        {[
          { value: pad(timeLeft.hours), label: "h" },
          { value: pad(timeLeft.minutes), label: "min" },
          { value: pad(timeLeft.seconds), label: "s" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="bg-card/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[48px] text-center border border-white/20">
              <span className="text-lg sm:text-xl font-bold font-mono">{item.value}</span>
              <span className="block text-[10px] uppercase opacity-70">{item.label}</span>
            </div>
            {i < 2 && <span className="text-lg font-bold">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
