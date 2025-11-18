import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold neon-glow">@alexxand_er</h1>
          <div className="flex gap-6">
            <a href="#hero" className="text-foreground/80 hover:text-primary transition-colors">Главная</a>
            <a href="#portfolio" className="text-foreground/80 hover:text-primary transition-colors">Портфолио</a>
            <a href="#contacts" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-block animate-float mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent neon-border mx-auto" />
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 neon-glow animate-fade-in">
            ALEXXAND_ER
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 animate-fade-in">
            Криптоэксперт в Telegram
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Покупка и продажа NFT подарков • Модератор Parfum Club • Помощь в криптовалютных операциях
          </p>
          <Button 
            size="lg" 
            className="neon-border bg-primary/20 hover:bg-primary/30 text-primary-foreground text-lg px-8 py-6 animate-pulse-glow"
            onClick={() => window.open('https://t.me/alexxand_er', '_blank')}
          >
            <Icon name="Send" className="mr-2" size={24} />
            Связаться в Telegram
          </Button>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-glow">
            Портфолио
          </h2>
          <p className="text-center text-muted-foreground mb-12">Мои услуги в крипто-пространстве</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="neon-card p-8 hover:scale-105 transition-transform cursor-pointer">
              <div className="mb-6">
                <img 
                  src="https://cdn.poehali.dev/projects/e0dbf433-1322-44ad-9ea4-2a1535b10f4c/files/eafa7085-47b7-497f-b7a1-a1640ceb5d23.jpg" 
                  alt="NFT подарки" 
                  className="w-full h-48 object-cover rounded-lg mb-4 neon-border"
                />
                <Icon name="Gift" size={40} className="text-primary animate-pulse-glow" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">NFT Подарки</h3>
              <p className="text-foreground/70">
                Покупка и продажа уникальных NFT подарков в Telegram. Эксклюзивные цифровые активы для вашей коллекции.
              </p>
            </Card>

            <Card className="neon-card p-8 hover:scale-105 transition-transform cursor-pointer">
              <div className="mb-6">
                <img 
                  src="https://cdn.poehali.dev/projects/e0dbf433-1322-44ad-9ea4-2a1535b10f4c/files/22ec54d2-6199-4e35-9938-4fb150e90d1e.jpg" 
                  alt="Криптотрейдинг" 
                  className="w-full h-48 object-cover rounded-lg mb-4 neon-border"
                />
                <Icon name="TrendingUp" size={40} className="text-secondary animate-pulse-glow" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Криптотрейдинг</h3>
              <p className="text-foreground/70">
                Консультации по криптовалютным операциям. Помогу разобраться в крипто-активах и сделать правильный выбор.
              </p>
            </Card>

            <Card className="neon-card p-8 hover:scale-105 transition-transform cursor-pointer">
              <div className="mb-6">
                <div className="w-full h-48 rounded-lg mb-4 neon-border bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <Icon name="Users" size={80} className="text-accent animate-pulse-glow" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-accent">Parfum Club</h3>
              <p className="text-foreground/70">
                Модератор группы холдеров Parfum Club. Управление сообществом и поддержка участников.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-glow">
            Контакты
          </h2>
          <p className="text-center text-muted-foreground mb-12">Свяжитесь со мной удобным способом</p>
          
          <Card className="neon-card p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-primary/20 neon-border">
                  <Icon name="Send" size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Telegram</h3>
                  <a 
                    href="https://t.me/alexxand_er" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    @alexxand_er
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Основной канал связи</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-secondary/20 neon-border">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Parfum Club</h3>
                  <p className="text-foreground/70">Модератор группы холдеров</p>
                  <p className="text-sm text-muted-foreground mt-1">Эксклюзивное сообщество</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-accent/20 neon-border">
                  <Icon name="Gift" size={32} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">NFT Услуги</h3>
                  <p className="text-foreground/70">Покупка/продажа NFT подарков</p>
                  <p className="text-sm text-muted-foreground mt-1">Быстрые сделки</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-primary/20 neon-border">
                  <Icon name="TrendingUp" size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Консультации</h3>
                  <p className="text-foreground/70">Помощь в крипто-операциях</p>
                  <p className="text-sm text-muted-foreground mt-1">Индивидуальный подход</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button 
                size="lg"
                className="neon-border bg-primary hover:bg-primary/90 text-lg px-12 py-6"
                onClick={() => window.open('https://t.me/alexxand_er', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={24} />
                Написать в Telegram
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-primary/20">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 @alexxand_er • Криптоэксперт в Telegram
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            NFT подарки • Parfum Club • Крипто-консультации
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
