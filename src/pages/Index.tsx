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
    <div className="min-h-screen bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="absolute top-10 right-10 text-6xl animate-pulse opacity-20">⚡</div>
      <div className="absolute top-1/4 left-10 text-5xl animate-bounce opacity-20">⭐</div>
      <div className="absolute bottom-20 right-1/4 text-6xl opacity-10">❤️</div>
      <div className="absolute top-1/2 right-20 text-5xl animate-pulse opacity-20">✞</div>

      <div className="container relative z-10 mx-auto px-4 py-8">
        <header className="text-center mb-16 pt-16">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-5xl">⛏️</span>
              <h1 className="text-7xl md:text-8xl font-black tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <span className="bg-gradient-to-r from-[#fc9700] via-[#fccc00] to-[#fcfce3] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(252,151,0,0.5)]">
                  ROOMTIME
                </span>
              </h1>
              <span className="text-5xl">⚔️</span>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-[#fc9700] to-transparent" />
              <p className="text-2xl md:text-3xl font-bold text-[#fc9700]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                MINECRAFT SERVER
              </p>
              <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-[#fc9700] to-transparent" />
            </div>
          </div>
          
          <div className="relative max-w-xl mx-auto mb-10">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fc9700] to-[#fc1a1a] rounded-xl blur-sm opacity-75" />
            <div className="relative bg-[#141414] border border-[#fc9700]/30 rounded-xl p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-lg animate-pulse">⚡</span>
                <p className="text-xs font-bold text-[#fc9700] uppercase tracking-widest">IP адрес сервера</p>
                <span className="text-lg animate-pulse">⚡</span>
              </div>
              <p className="text-3xl md:text-4xl font-black text-white mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                RoomTime.gomc.me
              </p>
              <Button className="mt-2 bg-gradient-to-r from-[#fc9700] to-[#fc1a1a] hover:from-[#fc9700]/90 hover:to-[#fc1a1a]/90 text-white font-bold text-base px-6 py-5 rounded-lg shadow-[0_0_20px_rgba(252,151,0,0.5)] hover:shadow-[0_0_30px_rgba(252,151,0,0.7)] transition-all">
                <Icon name="Copy" className="mr-2" size={18} />
                Скопировать IP
              </Button>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white font-bold px-6 py-5 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <a href="https://t.me/HollyFunServer" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" className="mr-2" size={20} />
                Telegram канал
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-[#5865F2] hover:bg-[#5865F2]/90 text-white font-bold px-6 py-5 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Discord сервер
              </a>
            </Button>
          </div>
        </header>

        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-[#fc9700] to-[#fccc00] bg-clip-text text-transparent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              ⚡ ТОКЕНЫ ⚡
            </h2>
            <p className="text-lg text-gray-400">Игровая валюта сервера</p>
          </div>
          
          <div className="max-w-sm mx-auto relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fc9700] to-[#fccc00] rounded-xl blur-sm opacity-75" />
            <Card className="relative bg-[#141414] p-8 border border-[#fc9700]/30 rounded-xl">
              <div className="text-center">
                <div className="text-7xl mb-5">🪙</div>
                <h3 className="text-3xl font-black mb-2 text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  1 ТОКЕН
                </h3>
                <div className="my-4">
                  <p className="text-6xl font-black bg-gradient-to-r from-[#fc9700] to-[#fccc00] bg-clip-text text-transparent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    1₽
                  </p>
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-[#fc9700] to-[#fc1a1a] hover:from-[#fc9700]/90 hover:to-[#fc1a1a]/90 text-white font-black text-lg py-6 rounded-lg shadow-[0_0_20px_rgba(252,151,0,0.5)] hover:shadow-[0_0_30px_rgba(252,151,0,0.7)] transition-all">
                  КУПИТЬ ТОКЕНЫ
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-[#fc9700] to-[#fccc00] bg-clip-text text-transparent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              👑 ПРИВИЛЕГИИ 👑
            </h2>
            <p className="text-lg text-gray-400">Стань легендой сервера!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fc9700] to-[#fc1a1a] rounded-xl blur-sm opacity-0 group-hover:opacity-75 transition duration-300" />
                  <Card 
                    className={`relative p-6 bg-gradient-to-br ${gradients[index]} border border-white/20 rounded-xl hover:scale-105 transition-all duration-300 shadow-xl`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="text-5xl mb-3">{privilege.emoji}</div>
                      <h3 className="text-2xl font-black mb-2 text-white drop-shadow-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        {privilege.name}
                      </h3>
                      <div className="w-full h-px bg-white/30 my-3" />
                      <p className="text-4xl font-black text-white mb-4 drop-shadow-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        {privilege.price}₽
                      </p>
                      <Button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40 font-black text-base py-5 rounded-lg shadow-lg">
                        КУПИТЬ
                      </Button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </section>

        <footer className="mt-20 pb-10">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fc9700] to-[#fc1a1a] rounded-xl blur-sm opacity-30" />
            <div className="relative bg-[#141414] border border-[#fc9700]/30 rounded-xl p-8 text-center">
              <h3 className="text-4xl font-black mb-6 bg-gradient-to-r from-[#fc9700] to-[#fccc00] bg-clip-text text-transparent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                ⚡ СОЗДАТЕЛИ СЕРВЕРА ⚡
              </h3>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {creators.map((creator) => (
                  <div 
                    key={creator}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fc9700] to-[#fc1a1a] rounded-lg blur-sm opacity-0 group-hover:opacity-75 transition" />
                    <div className="relative px-6 py-3 bg-gradient-to-r from-[#fc9700]/10 to-[#fc1a1a]/10 border border-[#fc9700]/40 rounded-lg hover:border-[#fc9700]/80 transition-all">
                      <p className="text-xl font-black text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        {creator}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-[#fc9700]/20">
                <p className="text-gray-500 font-medium">
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