import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const privileges = [
    { name: "Барон", price: 10 },
    { name: "Страж", price: 16 },
    { name: "Герой", price: 24 },
    { name: "Аспид", price: 56 },
    { name: "Сквид", price: 69 },
    { name: "Глава", price: 87 },
    { name: "Элита", price: 149 },
    { name: "Титан", price: 239 },
    { name: "Принц", price: 329 },
    { name: "Князь", price: 549 },
    { name: "Герцог", price: 999 },
    { name: "Спонсор", price: 1850 },
    { name: "Мажор", price: 2650 },
  ];

  const creators = ["IIoneR", "umQKoKiq", "TukeInside"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[#1a1f2d] to-background">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-8">
        <header className="text-center mb-16 pt-12">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Pickaxe" size={48} className="text-primary" />
              <h1 className="text-7xl md:text-8xl font-bold tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  ROOMTIME
                </span>
              </h1>
              <Icon name="Sword" size={48} className="text-secondary" />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground" style={{ fontFamily: "'Roboto', sans-serif" }}>
              MINECRAFT SERVER
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-lg p-6 max-w-md mx-auto mb-8 hover:border-primary/60 transition-all">
            <p className="text-sm text-muted-foreground mb-2">IP адрес сервера:</p>
            <p className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              RoomTime.gomc.me
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white font-bold"
            >
              <a href="https://t.me/HollyFunServer" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" className="mr-2" size={20} />
                Telegram
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold"
            >
              <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Discord
              </a>
            </Button>
          </div>
        </header>

        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              ТОКЕНЫ
            </h2>
            <p className="text-lg text-muted-foreground">Игровая валюта сервера</p>
          </div>
          
          <Card className="max-w-sm mx-auto p-8 bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent/50 hover:border-accent transition-all">
            <div className="text-center">
              <Icon name="Coins" size={64} className="mx-auto mb-4 text-accent" />
              <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                1 Токен
              </h3>
              <p className="text-5xl font-bold text-accent mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                1₽
              </p>
              <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-background font-bold">
                Купить
              </Button>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              ПРИВИЛЕГИИ
            </h2>
            <p className="text-lg text-muted-foreground">Получи преимущества на сервере</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {privileges.map((privilege, index) => {
              const colors = [
                "from-[#8B7355] to-[#654321]",
                "from-[#4A5568] to-[#2D3748]",
                "from-[#4299E1] to-[#2B6CB0]",
                "from-[#805AD5] to-[#553C9A]",
                "from-[#ED64A6] to-[#B83280]",
                "from-[#F56565] to-[#C53030]",
                "from-[#F6AD55] to-[#DD6B20]",
                "from-[#FBD38D] to-[#D69E2E]",
                "from-[#FC8181] to-[#E53E3E]",
                "from-[#9F7AEA] to-[#6B46C1]",
                "from-[#667EEA] to-[#5A67D8]",
                "from-[#48BB78] to-[#2F855A]",
                "from-[#ECC94B] to-[#D69E2E]",
              ];

              return (
                <Card 
                  key={privilege.name}
                  className={`p-6 bg-gradient-to-br ${colors[index]} border-2 border-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300`}
                >
                  <div className="flex flex-col items-center text-center">
                    <Icon name="Crown" size={40} className="mb-3 text-white" />
                    <h3 className="text-2xl font-bold mb-2 text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {privilege.name}
                    </h3>
                    <div className="w-full h-px bg-white/30 my-3" />
                    <p className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {privilege.price}₽
                    </p>
                    <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 font-bold">
                      Купить
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        <footer className="mt-20 pb-8">
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Создатели сервера
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {creators.map((creator) => (
                <div 
                  key={creator}
                  className="px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-lg hover:border-primary/60 transition-all"
                >
                  <p className="text-lg font-bold text-primary" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {creator}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-muted-foreground">
                © 2024 RoomTime Minecraft Server
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
