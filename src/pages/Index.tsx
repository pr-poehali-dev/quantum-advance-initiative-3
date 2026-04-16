import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "features", "how", "cta"];

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
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors">
              Что вы изучите
            </a>
            <a href="#how" className="text-muted-foreground hover:text-white transition-colors">
              Как это работает
            </a>

          </nav>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 text-sm font-medium border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all">
              Войти
            </button>
            <button className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent via-accent to-accent/80 text-black rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all font-semibold">
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
            <div
              className={`transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
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
                <button className="group px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold text-lg flex items-center gap-3 justify-center">
                  Начать обучение
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="px-8 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white">
                  Смотреть программу
                </button>
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

            <div
              className={`relative h-96 lg:h-[550px] transition-all duration-1000 flex items-center justify-center ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent rounded-3xl blur-3xl animate-pulse" />
              {/* Neural network visual */}
              <div className="relative z-10 w-full max-w-sm lg:max-w-md">
                <div className="bg-card/60 border border-accent/20 rounded-2xl p-6 backdrop-blur-sm animate-float">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm text-accent font-medium">Урок 7: Нейронные сети</span>
                  </div>
                  <div className="space-y-3 mb-4">
                    {["Входной слой", "Скрытый слой", "Выходной слой"].map((layer, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`h-2 rounded-full bg-gradient-to-r from-accent to-accent/40 transition-all`} style={{ width: `${80 - i * 15}%` }} />
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
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Что вы изучите</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Всё для старта в ИИ
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Brain",
                title: "Основы нейронных сетей",
                desc: "Поймёте как работают нейроны, слои и веса — от простого перцептрона до глубокого обучения",
              },
              {
                icon: "Code2",
                title: "Практика на Python",
                desc: "Пишете код прямо в браузере: TensorFlow, PyTorch, scikit-learn — без установки ПО",
              },
              {
                icon: "TrendingUp",
                title: "Обучение моделей",
                desc: "Учите нейросети на реальных датасетах и видите результат в реальном времени",
              },
              {
                icon: "Eye",
                title: "Компьютерное зрение",
                desc: "Создаёте модели распознавания изображений, лиц и объектов с нуля",
              },
              {
                icon: "MessageSquare",
                title: "Обработка текста (NLP)",
                desc: "Разбираетесь как работают ChatGPT, переводчики и умные поисковики",
              },
              {
                icon: "Award",
                title: "Сертификат по итогу",
                desc: "Получаете документ, подтверждающий ваши знания — для резюме и портфолио",
              },
            ].map((item, i) => {
              const isVisible = visibleSections["features"];
              return (
                <div
                  key={i}
                  className={`group p-8 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
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
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
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
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="group bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-2xl p-8 h-full flex flex-col justify-between transition-all backdrop-blur-sm cursor-pointer">
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

      {/* CTA */}
      <section id="cta" className="py-32 px-6">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${visibleSections["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
              Готовы понять ИИ?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
            Присоединяйтесь к тысячам студентов, которые уже осваивают нейросети — и строят карьеру будущего.
          </p>
          <button className="group px-10 py-5 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all font-bold text-lg flex items-center gap-3 mx-auto">
            Начать бесплатно
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
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
            <a href="#" className="hover:text-white transition-colors">
              Конфиденциальность
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Условия
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Программа курса
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;