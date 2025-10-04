import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const privileges = [
    { name: "Барон", price: 10, emoji: "⚔️" },
    { name: "Страж", price: 16, emoji: "🛡️" },
    { name: "Герой", price: 24, emoji: "⭐" },
    { name: "Аспид", price: 56, emoji: "🐉" },
    { name: "Сквид", price: 69, emoji: "🦑" },
    { name: "Глава", price: 87, emoji: "👑" },
    { name: "Элита", price: 149, emoji: "💎" },
    { name: "Титан", price: 239, emoji: "⚡" },
    { name: "Принц", price: 329, emoji: "🔱" },
    { name: "Князь", price: 549, emoji: "🏆" },
    { name: "Герцог", price: 999, emoji: "💫" },
    { name: "Спонсор", price: 1850, emoji: "🌟" },
    { name: "Мажор", price: 2650, emoji: "👾" },
  ];

  const creators = ["IIoneR", "umQKoKiq", "TukeInside"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0015] via-[#1a0a2e] to-[#16213e] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="absolute top-20 left-10 text-6xl animate-pulse">⭐</div>
      <div className="absolute top-40 right-20 text-5xl animate-bounce">💫</div>
      <div className="absolute bottom-20 left-1/4 text-7xl opacity-20">❤️</div>
      <div className="absolute top-1/3 right-10 text-6xl animate-pulse">⚡</div>

      <div className="container relative z-10 mx-auto px-4 py-8">
        <header className="text-center mb-16 pt-16">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent blur-3xl opacity-30 animate-pulse" />
            
            <div className="relative">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-6xl">⛏️</span>
                <h1 className="text-8xl md:text-9xl font-black tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-2xl">
                    ROOMTIME
                  </span>
                </h1>
                <span className="text-6xl">⚔️</span>
              </div>
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  MINECRAFT SERVER
                </p>
                <div className="h-1 w-16 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full" />
              </div>
            </div>
          </div>
          
          <div className="relative max-w-xl mx-auto mb-10">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-75" />
            <div className="relative bg-gradient-to-br from-[#1a0a2e] to-[#0a0015] border-2 border-primary/50 rounded-2xl p-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Icon name="Zap" size={24} className="text-accent animate-pulse" />
                <p className="text-sm font-bold text-accent uppercase tracking-widest">IP адрес сервера</p>
                <Icon name="Zap" size={24} className="text-accent animate-pulse" />
              </div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                RoomTime.gomc.me
              </p>
              <Button className="mt-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-2xl">
                <Icon name="Copy" className="mr-2" size={20} />
                Скопировать IP
              </Button>
            </div>
          </div>

          <div className="flex gap-6 justify-center flex-wrap">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-[#0088cc] to-[#00aced] hover:scale-105 transition-transform text-white font-bold text-lg px-8 py-6 rounded-xl shadow-2xl"
            >
              <a href="https://t.me/HollyFunServer" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" className="mr-2" size={24} />
                Telegram канал
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-[#5865F2] to-[#7289DA] hover:scale-105 transition-transform text-white font-bold text-lg px-8 py-6 rounded-xl shadow-2xl"
            >
              <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" className="mr-2" size={24} />
                Discord сервер
              </a>
            </Button>
          </div>
        </header>

        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block relative mb-4">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent to-primary blur-2xl opacity-30" />
              <h2 className="relative text-6xl md:text-7xl font-black bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                ⚡ ТОКЕНЫ ⚡
              </h2>
            </div>
            <p className="text-xl text-muted-foreground font-medium">Игровая валюта сервера</p>
          </div>
          
          <div className="max-w-md mx-auto relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-secondary rounded-3xl blur opacity-75 animate-pulse" />
            <Card className="relative bg-gradient-to-br from-[#1a0a2e] to-[#0a0015] p-10 border-0 rounded-3xl">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-bounce">🪙</div>
                <h3 className="text-4xl font-black mb-3 text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  1 ТОКЕН
                </h3>
                <div className="my-6">
                  <p className="text-7xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    1₽
                  </p>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-accent to-primary hover:from-accent/80 hover:to-primary/80 text-black font-black text-xl py-7 rounded-xl shadow-2xl">
                  КУПИТЬ ТОКЕНЫ
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block relative mb-4">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-30" />
              <h2 className="relative text-6xl md:text-7xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                👑 ПРИВИЛЕГИИ 👑
              </h2>
            </div>
            <p className="text-xl text-muted-foreground font-medium">Стань легендой сервера!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {privileges.map((privilege, index) => {
              const gradients = [
                "from-[#8B4513] to-[#654321]",
                "from-[#708090] to-[#2F4F4F]",
                "from-[#4169E1] to-[#191970]",
                "from-[#8A2BE2] to-[#4B0082]",
                "from-[#FF1493] to-[#C71585]",
                "from-[#DC143C] to-[#8B0000]",
                "from-[#FF8C00] to-[#FF4500]",
                "from-[#FFD700] to-[#FFA500]",
                "from-[#FF69B4] to-[#FF1493]",
                "from-[#9370DB] to-[#8A2BE2]",
                "from-[#4169E1] to-[#1E90FF]",
                "from-[#32CD32] to-[#228B22]",
                "from-[#FFD700] to-[#FF8C00]",
              ];

              return (
                <div key={privilege.name} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300" />
                  <Card 
                    className={`relative p-8 bg-gradient-to-br ${gradients[index]} border-0 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="text-6xl mb-4">{privilege.emoji}</div>
                      <h3 className="text-3xl font-black mb-3 text-white drop-shadow-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        {privilege.name}
                      </h3>
                      <div className="w-full h-1 bg-white/30 my-4 rounded-full" />
                      <p className="text-5xl font-black text-white mb-6 drop-shadow-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        {privilege.price}₽
                      </p>
                      <Button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/50 font-black text-lg py-6 rounded-xl shadow-lg">
                        КУПИТЬ
                      </Button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </section>

        <footer className="mt-24 pb-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur opacity-30" />
            <div className="relative bg-gradient-to-br from-[#1a0a2e] to-[#0a0015] border-2 border-primary/30 rounded-3xl p-10 text-center">
              <h3 className="text-5xl font-black mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                ⚡ СОЗДАТЕЛИ СЕРВЕРА ⚡
              </h3>
              <div className="flex flex-wrap gap-6 justify-center mb-8">
                {creators.map((creator) => (
                  <div 
                    key={creator}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-50 group-hover:opacity-100 transition" />
                    <div className="relative px-8 py-4 bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/40 rounded-xl hover:border-primary/80 transition-all">
                      <p className="text-2xl font-black text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        {creator}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t-2 border-primary/20">
                <p className="text-muted-foreground text-lg font-medium">
                  © 2024 RoomTime Minecraft Server. Все права защищены.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
