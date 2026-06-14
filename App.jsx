import { useMemo, useState } from 'react';
import { BarChart, Bar, CartesianGrid, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { aiReplies, hrStats, interns, mentorAlerts, roadmap, roleProgress } from './data';

const navs = [
  { key: 'home', label: '总览' },
  { key: 'intern', label: '实习生视角' },
  { key: 'mentor', label: '导师视角' },
  { key: 'hr', label: 'HR视角' }
];

const riskStyle = {
  低: 'bg-emerald-50 text-emerald-700',
  中: 'bg-amber-50 text-amber-700',
  高: 'bg-rose-50 text-rose-700'
};

const pieColors = ['#2563eb', '#60a5fa', '#cbd5e1'];

function StatCard({ title, value, hint }) {
  return (
    <div className="card p-5">
      <div className="muted">{title}</div>
      <div className="mt-3 text-3xl font-bold text-slate-900">{value}</div>
      <div className="mt-2 text-sm text-slate-500">{hint}</div>
    </div>
  );
}

function Header({ current, onChange }) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <div className="text-xl font-bold text-slate-900">业务部实习生成长导航</div>
          <div className="text-sm text-slate-500">统一带教节奏，降低成长迷茫，提升协同效率</div>
        </div>
        <nav className="flex gap-2 rounded-full bg-slate-100 p-1">
          {navs.map((item) => (
            <button
              key={item.key}
              onClick={() => onChange(item.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                current === item.key ? 'bg-white text-brand shadow' : 'text-slate-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HomePage({ onJump }) {
  return (
    <div className="space-y-6">
      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="card p-8">
          <div className="badge bg-blue-50 text-blue-700">Demo</div>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
            面向实习生、导师与 HR 的
            <br />
            业务部实习生成长导航平台
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            通过成长路径、带教提醒、风险预警和批量进展概览，把分散的人带教动作沉淀成可追踪、可协同的培养系统。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={() => onJump('intern')} className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white">
              查看实习生视角
            </button>
            <button onClick={() => onJump('mentor')} className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
              查看导师视角
            </button>
            <button onClick={() => onJump('hr')} className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
              查看HR视角
            </button>
          </div>
        </div>
        <div className="card p-6">
          <div className="section-title">场景价值</div>
          <div className="mt-5 space-y-4">
            {[
              '实习生清楚知道当前阶段该学什么、做什么。',
              '导师按统一节奏完成 onboarding、任务安排与反馈。',
              'HR 快速掌握整批实习生的适岗进展与风险分布。'
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="实习生总数" value="20" hint="覆盖研发、产品、销售等岗位" />
        <StatCard title="进展正常" value="12" hint="已进入稳定培养节奏" />
        <StatCard title="持续观察" value="5" hint="建议继续跟进关键节点" />
        <StatCard title="重点关注" value="3" hint="需及时进行带教干预" />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="section-title">各岗位平均进展</div>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={roleProgress}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="role" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="progress" fill="#2563eb" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="card p-6">
          <div className="section-title">核心模块</div>
          <div className="mt-5 grid gap-4">
            {[
              ['成长地图', '按岗位自动生成阶段目标、学习内容和交付要求。'],
              ['导师驾驶舱', '识别带教空档、提醒沟通节点并输出建议动作。'],
              ['适岗雷达', '帮助 HR 从批量视角掌握整体进展和高风险对象。']
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-slate-100 p-4">
                <div className="font-semibold text-slate-900">{title}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function InternPage() {
  const [selectedId, setSelectedId] = useState(interns[0].id);
  const current = useMemo(() => interns.find((item) => item.id === selectedId) ?? interns[0], [selectedId]);
  const currentRoadmap = roadmap[current.role] || [];

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <aside className="card p-4">
        <div className="section-title">实习生列表</div>
        <div className="mt-4 space-y-3">
          {interns.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`w-full rounded-2xl border p-4 text-left transition ${
                selectedId === item.id ? 'border-blue-200 bg-blue-50' : 'border-slate-100 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-900">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
                <span className={`badge ${riskStyle[item.risk]}`}>{item.risk}风险</span>
              </div>
              <div className="mt-3 text-sm text-slate-500">当前阶段：{item.stage}</div>
            </button>
          ))}
        </div>
      </aside>

      <main className="space-y-6">
        <section className="card p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="text-2xl font-bold text-slate-900">{current.name}</div>
              <div className="mt-2 text-sm text-slate-500">
                {current.role} · {current.department} · 导师：{current.mentor}
              </div>
            </div>
            <div className="flex gap-3">
              <span className="badge bg-slate-100 text-slate-700">阶段：{current.stage}</span>
              <span className={`badge ${riskStyle[current.risk]}`}>{current.risk}风险</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">成长评分</div>
              <div className="mt-2 text-3xl font-bold text-slate-900">{current.score}</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">已完成任务</div>
              <div className="mt-2 text-3xl font-bold text-slate-900">{current.tasksDone}</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">本周重点</div>
              <div className="mt-2 text-sm leading-6 text-slate-700">{current.weeklyFocus}</div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-6">
            <div className="section-title">成长地图</div>
            <div className="mt-5 space-y-4">
              {currentRoadmap.map((item, index) => (
                <div key={item.name} className="flex gap-4 rounded-2xl border border-slate-100 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 font-semibold text-blue-700">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{item.name}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">目标：{item.goal}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-500">交付：{item.deliverable}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <div className="section-title">阶段总结</div>
              <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">{current.summary}</div>
              <div className="mt-4 text-sm font-medium text-slate-700">当前卡点</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{current.blocker}</div>
            </div>
            <div className="card p-6">
              <div className="section-title">成长导航建议</div>
              <div className="mt-4 rounded-2xl bg-blue-50 p-4 text-sm leading-7 text-slate-700">{aiReplies[current.role]}</div>
              <button className="mt-4 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white">提问：我本周该重点做什么</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function MentorPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard title="带教人数" value="8" hint="当前导师合计带教中的实习生" />
        <StatCard title="需跟进提醒" value="3" hint="建议本周优先处理高风险对象" />
        <StatCard title="可升级任务" value="4" hint="已有实习生进入独立承接阶段" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="card p-6">
          <div className="section-title">所带实习生概览</div>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-slate-500">
                  <th className="pb-3 pr-4">姓名</th>
                  <th className="pb-3 pr-4">岗位</th>
                  <th className="pb-3 pr-4">阶段</th>
                  <th className="pb-3 pr-4">成长评分</th>
                  <th className="pb-3">风险</th>
                </tr>
              </thead>
              <tbody>
                {interns.map((item) => (
                  <tr key={item.id} className="border-b border-slate-50 text-slate-700 last:border-0">
                    <td className="py-4 pr-4 font-medium">{item.name}</td>
                    <td className="py-4 pr-4">{item.role}</td>
                    <td className="py-4 pr-4">{item.stage}</td>
                    <td className="py-4 pr-4">{item.score}</td>
                    <td className="py-4">
                      <span className={`badge ${riskStyle[item.risk]}`}>{item.risk}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card p-6">
          <div className="section-title">AI带教提醒</div>
          <div className="mt-5 space-y-4">
            {mentorAlerts.map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function HRPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-4">
        <StatCard title="本批次人数" value="20" hint="纳入统一培养管理" />
        <StatCard title="正常推进" value="12" hint="培养节奏整体稳定" />
        <StatCard title="需观察" value="5" hint="建议继续跟进反馈频率" />
        <StatCard title="重点关注" value="3" hint="建议尽快安排干预动作" />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="section-title">适岗分布</div>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={hrStats} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={2}>
                  {hrStats.map((entry, index) => (
                    <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-6">
          <div className="section-title">重点关注名单</div>
          <div className="mt-5 space-y-4">
            {interns.filter((item) => item.risk !== '低').map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-100 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-slate-900">{item.name}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.role} · {item.department}</div>
                  </div>
                  <span className={`badge ${riskStyle[item.risk]}`}>{item.risk}风险</span>
                </div>
                <div className="mt-3 text-sm leading-6 text-slate-600">{item.blocker}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState('home');

  return (
    <div className="min-h-screen">
      <Header current={tab} onChange={setTab} />
      <div className="mx-auto max-w-7xl px-6 py-8">
        {tab === 'home' && <HomePage onJump={setTab} />}
        {tab === 'intern' && <InternPage />}
        {tab === 'mentor' && <MentorPage />}
        {tab === 'hr' && <HRPage />}
      </div>
    </div>
  );
}