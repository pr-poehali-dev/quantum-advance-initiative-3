import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "features", "how", "gamification", "contacts", "cta"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;
      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.15 }
      );
      observers[id].observe(element);
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Brain" size={26} className="text-accent" />
            <div className="font-display font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
              NeuroLearn
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <button onClick={() => navigate("/courses")} className="text-muted-foreground hover:text-white transition-colors">
              Курсы
            </button>
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors">
              Программа
            </a>
            <a href="#gamification" className="text-muted-foreground hover:text-white transition-colors">
              Геймификация
            </a>
            <a href="#contacts" className="text-muted-foreground hover:text-white transition-colors">
              Контакты
            </a>
          </nav>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/dashboard")}
              className="px-5 py-2.5 text-sm font-medium border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all"
            >
              Войти
            </button>
            <button
              onClick={() => navigate("/courses")}
              className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent via-accent to-accent/80 text-black rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all font-semibold"
            >
              Начать бесплатно
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <img src="/images/black-hole-gif.gif" alt="Neural network animation" className="w-auto h-3/4 object-contain" />
        </div>
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="mb-8 inline-block">
                <span className="text-xs font-medium tracking-widest text-accent/80 uppercase">
                  Интерактивное обучение · ИИ и нейросети
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-black leading-tight mb-8 tracking-tighter">
                <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                  Освой ИИ.
                </span>
                <br />
                <span className="text-accent">С нуля до практики.</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-light">
                Интерактивный курс по искусственному интеллекту и нейронным сетям. Учись на реальных задачах, получай мгновенную обратную связь и становись востребованным специалистом.
              </p>
              <div className="flex gap-4 mb-12 flex-col sm:flex-row">
                <button
                  onClick={() => navigate("/courses")}
                  className="group px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold text-lg flex items-center gap-3 justify-center"
                >
                  Начать обучение
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <a
                  href="#features"
                  className="px-8 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white text-center"
                >
                  Смотреть программу
                </a>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">5 000+</div>
                  <p className="text-sm text-white/60">Студентов уже учатся</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">120+</div>
                  <p className="text-sm text-white/60">Интерактивных уроков</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">4.9 ★</div>
                  <p className="text-sm text-white/60">Средняя оценка курса</p>
                </div>
              </div>
            </div>

            <div className={`relative h-96 lg:h-[550px] transition-all duration-1000 flex items-center justify-center ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent rounded-3xl blur-3xl animate-pulse" />
              <div className="relative z-10 w-full max-w-sm lg:max-w-md">
                <div className="bg-card/60 border border-accent/20 rounded-2xl p-6 backdrop-blur-sm animate-float">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm text-accent font-medium">Урок 7: Нейронные сети</span>
                  </div>
                  <div className="space-y-3 mb-4">
                    {["Входной слой", "Скрытый слой", "Выходной слой"].map((layer, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-2 rounded-full bg-gradient-to-r from-accent to-accent/40" style={{ width: `${80 - i * 15}%` }} />
                        <span className="text-xs text-white/60 whitespace-nowrap">{layer}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-3 text-sm text-white/80">
                    ✅ Вы правильно настроили архитектуру сети!
                  </div>
                </div>
                <div className="mt-4 bg-card/40 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex justify-between text-xs text-white/50 mb-2">
                    <span>Прогресс курса</span>
                    <span className="text-accent">58%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[58%] bg-gradient-to-r from-accent to-accent/60 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Что вы изучите</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Всё для старта в ИИ
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Brain", title: "Основы нейронных сетей", desc: "Поймёте как работают нейроны, слои и веса — от простого перцептрона до глубокого обучения" },
              { icon: "Code2", title: "Практика на Python", desc: "Пишете код прямо в браузере: TensorFlow, PyTorch, scikit-learn — без установки ПО" },
              { icon: "TrendingUp", title: "Обучение моделей", desc: "Учите нейросети на реальных датасетах и видите результат в реальном времени" },
              { icon: "Eye", title: "Компьютерное зрение", desc: "Создаёте модели распознавания изображений, лиц и объектов с нуля" },
              { icon: "MessageSquare", title: "Обработка текста (NLP)", desc: "Разбираетесь как работают ChatGPT, переводчики и умные поисковики" },
              { icon: "Award", title: "Сертификат по итогу", desc: "Получаете документ, подтверждающий ваши знания — для резюме и портфолио" },
            ].map((item, i) => {
              const isVisible = visibleSections["features"];
              return (
                <div
                  key={i}
                  className={`group p-8 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon name={item.icon} size={22} className="text-accent" fallback="Zap" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Процесс обучения</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                От теории к практике
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Теория", desc: "Короткие видео и интерактивные объяснения — без скучных лекций" },
              { num: "02", title: "Практика", desc: "Сразу пробуете в деле: задачи, квизы и живой код в браузере" },
              { num: "03", title: "Проект", desc: "Создаёте реальную нейросеть и добавляете её в портфолио" },
              { num: "04", title: "Сертификат", desc: "Получаете подтверждение навыков и рекомендации по карьере" },
            ].map((step, i) => {
              const isVisible = visibleSections["how"];
              return (
                <div
                  key={i}
                  className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="group bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-2xl p-8 h-full flex flex-col justify-between transition-all backdrop-blur-sm">
                    <div>
                      <div className="text-5xl font-display font-black text-accent mb-4 group-hover:scale-110 transition-transform">
                        {step.num}
                      </div>
                      <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section id="gamification" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections["gamification"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Геймификация</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Учиться — это игра
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Система наград превращает обучение в увлечение
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: "Zap", title: "Очки опыта (XP)", desc: "За каждый урок и задание вы получаете XP и повышаете свой уровень", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
              { icon: "Flame", title: "Серии дней", desc: "Учитесь каждый день — поддерживайте огонь и получайте бонусные награды", color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20" },
              { icon: "Trophy", title: "Достижения", desc: "Разблокируйте уникальные значки за особые успехи в обучении", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
              { icon: "BarChart2", title: "Таблица лидеров", desc: "Соревнуйтесь с другими студентами и занимайте топовые позиции", color: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
            ].map((item, i) => {
              const isVisible = visibleSections["gamification"];
              return (
                <div
                  key={i}
                  className={`p-6 border ${item.border} ${item.bg} rounded-2xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`w-12 h-12 bg-black/20 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon name={item.icon} size={22} className={item.color} fallback="Star" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Achievement badges preview */}
          <div className={`bg-card/40 border border-white/10 rounded-2xl p-8 transition-all duration-1000 ${visibleSections["gamification"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="text-center mb-6">
              <h3 className="font-display font-bold text-xl">Коллекция достижений</h3>
              <p className="text-white/40 text-sm mt-1">8 уникальных значков — разблокируй все</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: "🚀", label: "Первый старт" },
                { icon: "🔥", label: "На волне" },
                { icon: "🧠", label: "Нейронный ум" },
                { icon: "⚡", label: "Быстрый ученик" },
                { icon: "🎯", label: "Меткий стрелок" },
                { icon: "💎", label: "Бриллиант" },
                { icon: "🤖", label: "AI-мастер" },
                { icon: "🏆", label: "Легенда" },
              ].map((badge, i) => (
                <div key={i} className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${i < 6 ? "border-accent/20 bg-accent/5" : "border-white/5 bg-white/2 opacity-40 grayscale"}`}>
                  <span className="text-3xl">{badge.icon}</span>
                  <span className="text-xs text-white/60 whitespace-nowrap">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${visibleSections["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
              Готовы понять ИИ?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
            Присоединяйтесь к тысячам студентов, которые уже осваивают нейросети — и строят карьеру будущего.
          </p>
          <button
            onClick={() => navigate("/courses")}
            className="group px-10 py-5 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all font-bold text-lg flex items-center gap-3 mx-auto"
          >
            Начать бесплатно
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-24 px-6 bg-accent/5">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-14 transition-all duration-1000 ${visibleSections["contacts"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Связь</span>
            <h2 className="text-4xl lg:text-5xl font-display font-black tracking-tighter mt-3">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Контакты
              </span>
            </h2>
            <p className="text-muted-foreground mt-3">Есть вопросы? Напишите или позвоните — всегда на связи</p>
          </div>

          <div className={`grid md:grid-cols-3 gap-5 transition-all duration-1000 ${visibleSections["contacts"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <a
              href="tel:+79513754438"
              className="group flex flex-col items-center gap-4 p-7 bg-card/50 border border-white/10 hover:border-accent/40 rounded-2xl hover:bg-card/80 transition-all"
            >
              <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <Icon name="Phone" size={24} className="text-emerald-400" />
              </div>
              <div className="text-center">
                <div className="text-xs text-white/40 mb-1 uppercase tracking-widest">Телефон</div>
                <div className="font-semibold text-white">+7 951 375 44 38</div>
              </div>
            </a>

            <a
              href="mailto:ded.12.insaid@gmail.com"
              className="group flex flex-col items-center gap-4 p-7 bg-card/50 border border-white/10 hover:border-accent/40 rounded-2xl hover:bg-card/80 transition-all"
            >
              <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Icon name="Mail" size={24} className="text-accent" />
              </div>
              <div className="text-center">
                <div className="text-xs text-white/40 mb-1 uppercase tracking-widest">Почта</div>
                <div className="font-semibold text-white text-sm">ded.12.insaid@gmail.com</div>
              </div>
            </a>

            <a
              href="https://t.me/dead_lox"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-7 bg-card/50 border border-white/10 hover:border-blue-400/40 rounded-2xl hover:bg-card/80 transition-all"
            >
              <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Icon name="Send" size={24} className="text-blue-400" />
              </div>
              <div className="text-center">
                <div className="text-xs text-white/40 mb-1 uppercase tracking-widest">Telegram</div>
                <div className="font-semibold text-white">@dead_lox</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/10 py-12 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="Brain" size={18} className="text-accent" />
            <p>© 2025 NeuroLearn — Интерактивное обучение ИИ и нейросетям</p>
          </div>
          <div className="flex gap-8">
            <button onClick={() => navigate("/courses")} className="hover:text-white transition-colors">Курсы</button>
            <a href="#gamification" className="hover:text-white transition-colors">Геймификация</a>
            <button onClick={() => navigate("/dashboard")} className="hover:text-white transition-colors">Кабинет</button>
            <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
