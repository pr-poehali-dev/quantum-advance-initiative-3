import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const courses = [
  {
    id: 1,
    title: "Введение в ИИ",
    desc: "Что такое искусственный интеллект, как он работает и где применяется уже сегодня.",
    level: "Новичок",
    lessons: 12,
    duration: "4 часа",
    progress: 100,
    badge: "🎓",
    tags: ["ИИ", "Основы"],
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/30",
    accent: "text-emerald-400",
  },
  {
    id: 2,
    title: "Нейронные сети с нуля",
    desc: "Перцептрон, слои, веса, функции активации — строим первую нейросеть на Python.",
    level: "Новичок",
    lessons: 18,
    duration: "7 часов",
    progress: 58,
    badge: "🧠",
    tags: ["Нейросети", "Python"],
    color: "from-accent/20 to-accent/5",
    border: "border-accent/30",
    accent: "text-accent",
  },
  {
    id: 3,
    title: "Машинное обучение",
    desc: "Регрессия, классификация, кластеризация — учим модели находить закономерности в данных.",
    level: "Средний",
    lessons: 24,
    duration: "10 часов",
    progress: 20,
    badge: "⚙️",
    tags: ["ML", "scikit-learn"],
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30",
    accent: "text-blue-400",
  },
  {
    id: 4,
    title: "Компьютерное зрение",
    desc: "CNN, распознавание изображений, детекция объектов — учим нейросеть видеть мир.",
    level: "Средний",
    lessons: 20,
    duration: "9 часов",
    progress: 0,
    badge: "👁️",
    tags: ["CV", "TensorFlow"],
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/30",
    accent: "text-purple-400",
  },
  {
    id: 5,
    title: "Обработка текста (NLP)",
    desc: "Токенизация, трансформеры, BERT — понимаем как ChatGPT понимает язык.",
    level: "Продвинутый",
    lessons: 22,
    duration: "11 часов",
    progress: 0,
    badge: "💬",
    tags: ["NLP", "Transformers"],
    color: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/30",
    accent: "text-orange-400",
  },
  {
    id: 6,
    title: "Генеративный ИИ",
    desc: "GAN, диффузионные модели, создание изображений и текста — как работают DALL-E и Midjourney.",
    level: "Продвинутый",
    lessons: 16,
    duration: "8 часов",
    progress: 0,
    badge: "🎨",
    tags: ["GenAI", "Diffusion"],
    color: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/30",
    accent: "text-pink-400",
  },
];

const levelColors: Record<string, string> = {
  "Новичок": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "Средний": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Продвинутый": "bg-orange-500/15 text-orange-400 border-orange-500/30",
};

const levels = ["Все", "Новичок", "Средний", "Продвинутый"];

export default function Courses() {
  const [activeLevel, setActiveLevel] = useState("Все");
  const navigate = useNavigate();

  const filtered = activeLevel === "Все" ? courses : courses.filter((c) => c.level === activeLevel);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <button onClick={() => navigate("/")} className="flex items-center gap-2">
            <Icon name="Brain" size={26} className="text-accent" />
            <span className="font-display font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
              NeuroLearn
            </span>
          </button>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <button onClick={() => navigate("/courses")} className="text-white transition-colors">Курсы</button>
            <button onClick={() => navigate("/dashboard")} className="text-muted-foreground hover:text-white transition-colors">Мой кабинет</button>
            <button onClick={() => navigate("/#contacts")} className="text-muted-foreground hover:text-white transition-colors">Контакты</button>
          </nav>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-accent to-accent/80 text-black rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all"
          >
            Мой кабинет
          </button>
        </div>
      </header>

      <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Каталог</span>
          <h1 className="text-5xl font-display font-black tracking-tighter mt-3 mb-4">
            <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
              Все курсы
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            От первых шагов до продвинутых тем — выберите свой путь в мире ИИ
          </p>
        </div>

        {/* Level filter */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {levels.map((l) => (
            <button
              key={l}
              onClick={() => setActiveLevel(l)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                activeLevel === l
                  ? "bg-accent text-black border-accent"
                  : "border-accent/20 text-muted-foreground hover:border-accent/50 hover:text-white"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Courses grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <div
              key={course.id}
              className={`group relative bg-gradient-to-br ${course.color} border ${course.border} rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl">{course.badge}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${levelColors[course.level]}`}>
                    {course.level}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{course.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{course.desc}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {course.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm text-white/50 mb-4">
                  <span className="flex items-center gap-1">
                    <Icon name="PlayCircle" size={14} className="text-white/40" />
                    {course.lessons} уроков
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={14} className="text-white/40" />
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Progress */}
              <div>
                {course.progress > 0 && (
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/50">Прогресс</span>
                      <span className={course.accent}>{course.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${course.progress === 100 ? "from-emerald-400 to-emerald-500" : "from-accent to-accent/60"}`}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}
                <button
                  onClick={() => navigate("/dashboard")}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                    course.progress === 100
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : course.progress > 0
                      ? "bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {course.progress === 100 ? "✅ Завершён" : course.progress > 0 ? "Продолжить" : "Начать курс"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
