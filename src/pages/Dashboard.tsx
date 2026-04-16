import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const stats = [
  { label: "Дней подряд", value: "7", icon: "Flame", color: "text-orange-400", bg: "bg-orange-400/10" },
  { label: "Уроков пройдено", value: "31", icon: "PlayCircle", color: "text-accent", bg: "bg-accent/10" },
  { label: "Очки опыта", value: "2 450", icon: "Zap", color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { label: "Достижений", value: "8", icon: "Trophy", color: "text-purple-400", bg: "bg-purple-400/10" },
];

const achievements = [
  { icon: "🚀", title: "Первый старт", desc: "Начали первый урок", earned: true },
  { icon: "🔥", title: "На волне", desc: "7 дней подряд", earned: true },
  { icon: "🧠", title: "Нейронный ум", desc: "Завершили курс по нейросетям", earned: true },
  { icon: "⚡", title: "Быстрый ученик", desc: "3 урока за 1 день", earned: true },
  { icon: "🎯", title: "Меткий стрелок", desc: "10 заданий без ошибок", earned: true },
  { icon: "💎", title: "Бриллиант", desc: "100% в тесте", earned: true },
  { icon: "🤖", title: "AI-мастер", desc: "Пройти все базовые курсы", earned: false },
  { icon: "🏆", title: "Легенда", desc: "Завершить все курсы", earned: false },
];

const currentLesson = {
  course: "Нейронные сети с нуля",
  lesson: "Урок 8: Функции активации",
  progress: 58,
  nextTopic: "ReLU, Sigmoid, Tanh — сравнение",
};

const weekActivity = [40, 80, 60, 100, 75, 90, 55];
const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const recentLessons = [
  { title: "Перцептрон и его ограничения", course: "Нейронные сети", time: "Сегодня, 14:30", score: 95 },
  { title: "Градиентный спуск", course: "Нейронные сети", time: "Вчера, 18:00", score: 88 },
  { title: "Линейная регрессия", course: "Машинное обучение", time: "2 дня назад", score: 100 },
];

const levelProgress = { current: 12, max: 20, level: "Исследователь", xp: 2450, nextXp: 3000 };

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"overview" | "analytics" | "achievements">("overview");

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
            <button onClick={() => navigate("/courses")} className="text-muted-foreground hover:text-white transition-colors">Курсы</button>
            <button onClick={() => navigate("/dashboard")} className="text-white transition-colors">Мой кабинет</button>
            <button onClick={() => navigate("/#contacts")} className="text-muted-foreground hover:text-white transition-colors">Контакты</button>
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1.5 rounded-full">
              <Icon name="Zap" size={14} className="text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400">{levelProgress.xp} XP</span>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        {/* User greeting */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/40 flex items-center justify-center text-black font-bold text-lg">
                А
              </div>
              <div>
                <h1 className="text-2xl font-display font-black">Привет, Алексей! 👋</h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Award" size={14} className="text-purple-400" />
                  <span className="text-purple-400 font-medium">{levelProgress.level}</span>
                  <span>· Уровень {levelProgress.current}</span>
                </div>
              </div>
            </div>
            {/* XP bar */}
            <div className="flex items-center gap-3 mt-2">
              <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                  style={{ width: `${(levelProgress.xp / levelProgress.nextXp) * 100}%` }}
                />
              </div>
              <span className="text-xs text-white/40">{levelProgress.xp} / {levelProgress.nextXp} XP до ур. {levelProgress.current + 1}</span>
            </div>
          </div>
          <button
            onClick={() => navigate("/courses")}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent/80 text-black rounded-full font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all"
          >
            <Icon name="BookOpen" size={16} />
            Все курсы
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-white/10 pb-0">
          {[
            { id: "overview", label: "Обзор", icon: "LayoutDashboard" },
            { id: "analytics", label: "Аналитика", icon: "BarChart2" },
            { id: "achievements", label: "Достижения", icon: "Trophy" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-all -mb-px ${
                activeTab === tab.id
                  ? "border-accent text-accent"
                  : "border-transparent text-muted-foreground hover:text-white"
              }`}
            >
              <Icon name={tab.icon} size={15} fallback="Circle" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-card/50 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                  <div className={`w-11 h-11 ${s.bg} rounded-xl flex items-center justify-center`}>
                    <Icon name={s.icon} size={20} className={s.color} fallback="Star" />
                  </div>
                  <div>
                    <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                    <div className="text-xs text-white/50">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue learning */}
            <div className="bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <span className="text-xs text-accent/60 uppercase tracking-widest font-medium">Продолжить обучение</span>
                  <h3 className="text-xl font-display font-bold mt-1 mb-1">{currentLesson.lesson}</h3>
                  <p className="text-sm text-white/50 mb-3">{currentLesson.course} · Далее: {currentLesson.nextTopic}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 max-w-xs h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-accent/60 rounded-full"
                        style={{ width: `${currentLesson.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-accent font-semibold">{currentLesson.progress}%</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/courses")}
                  className="flex items-center gap-2 px-7 py-3.5 bg-accent text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all whitespace-nowrap"
                >
                  <Icon name="Play" size={16} />
                  Продолжить
                </button>
              </div>
            </div>

            {/* Recent lessons */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Последние уроки</h3>
              <div className="space-y-3">
                {recentLessons.map((lesson, i) => (
                  <div key={i} className="flex items-center justify-between bg-card/40 border border-white/10 rounded-xl p-4 hover:border-accent/20 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name="PlayCircle" size={16} className="text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{lesson.title}</div>
                        <div className="text-xs text-white/40">{lesson.course} · {lesson.time}</div>
                      </div>
                    </div>
                    <div className={`text-sm font-bold px-3 py-1 rounded-full ${lesson.score === 100 ? "bg-emerald-500/15 text-emerald-400" : "bg-accent/15 text-accent"}`}>
                      {lesson.score}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ANALYTICS TAB */}
        {activeTab === "analytics" && (
          <div className="space-y-8">
            {/* Weekly activity */}
            <div className="bg-card/50 border border-white/10 rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg mb-6">Активность за неделю</h3>
              <div className="flex items-end gap-3 h-32">
                {weekActivity.map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full relative flex items-end justify-center" style={{ height: "96px" }}>
                      <div
                        className="w-full rounded-t-lg bg-gradient-to-t from-accent/80 to-accent/30 transition-all"
                        style={{ height: `${val}%` }}
                      />
                    </div>
                    <span className="text-xs text-white/40">{weekDays[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course progress */}
            <div className="bg-card/50 border border-white/10 rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg mb-6">Прогресс по курсам</h3>
              <div className="space-y-5">
                {[
                  { name: "Введение в ИИ", progress: 100, color: "from-emerald-400 to-emerald-500", lessons: "12/12" },
                  { name: "Нейронные сети с нуля", progress: 58, color: "from-accent to-accent/60", lessons: "10/18" },
                  { name: "Машинное обучение", progress: 20, color: "from-blue-400 to-blue-500", lessons: "5/24" },
                  { name: "Компьютерное зрение", progress: 0, color: "from-purple-400 to-purple-500", lessons: "0/20" },
                ].map((c, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">{c.name}</span>
                      <span className="text-white/40">{c.lessons} уроков</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${c.color} rounded-full transition-all`}
                        style={{ width: `${c.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Score stats */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Среднй балл за тесты", value: "94%", icon: "Target", color: "text-emerald-400", bg: "bg-emerald-400/10" },
                { label: "Времени потрачено", value: "18 ч", icon: "Clock", color: "text-blue-400", bg: "bg-blue-400/10" },
                { label: "Заданий выполнено", value: "47", icon: "CheckCircle", color: "text-accent", bg: "bg-accent/10" },
              ].map((s, i) => (
                <div key={i} className="bg-card/50 border border-white/10 rounded-2xl p-5 text-center">
                  <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <Icon name={s.icon} size={22} className={s.color} fallback="Star" />
                  </div>
                  <div className={`text-3xl font-black mb-1 ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-white/40">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ACHIEVEMENTS TAB */}
        {activeTab === "achievements" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-lg">Ваши достижения</h3>
              <span className="text-sm text-white/40">6 / 8 получено</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  className={`relative p-5 border rounded-2xl text-center transition-all ${
                    a.earned
                      ? "bg-gradient-to-b from-accent/10 to-transparent border-accent/30 hover:border-accent/60"
                      : "bg-card/20 border-white/5 opacity-50 grayscale"
                  }`}
                >
                  <div className="text-4xl mb-3">{a.icon}</div>
                  <div className="font-bold text-sm mb-1">{a.title}</div>
                  <div className="text-xs text-white/40">{a.desc}</div>
                  {a.earned && (
                    <div className="absolute top-2 right-2">
                      <Icon name="CheckCircle" size={14} className="text-emerald-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
