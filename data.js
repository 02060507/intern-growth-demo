export const interns = [
  {
    id: 1,
    name: '林悦',
    role: '研发实习生',
    department: '商业平台',
    mentor: '陈航',
    stage: '基础融入',
    score: 72,
    risk: '低',
    tasksDone: 6,
    weeklyFocus: '完成开发环境配置，理解系统模块关系，跟做一个低风险需求。',
    blocker: '对业务上下游链路理解还不完整。',
    summary: '本周完成环境搭建与代码走读，已能独立处理简单联调问题。'
  },
  {
    id: 2,
    name: '周岚',
    role: '产品实习生',
    department: '增长产品',
    mentor: '李桐',
    stage: '任务跟做',
    score: 68,
    risk: '中',
    tasksDone: 4,
    weeklyFocus: '补齐竞品分析方法，独立输出一版活动页需求草案。',
    blocker: 'PRD结构较完整，但目标拆解仍偏弱。',
    summary: '已参与两次需求评审，能复述业务背景，但对优先级判断仍不稳定。'
  },
  {
    id: 3,
    name: '许诺',
    role: '销售实习生',
    department: '企业服务',
    mentor: '赵川',
    stage: '独立承接',
    score: 84,
    risk: '低',
    tasksDone: 9,
    weeklyFocus: '跟进2个意向客户线索，输出一次客户异议整理。',
    blocker: '需要补充产品卖点与案例表达。',
    summary: '沟通积极，能独立完成初步客户触达，已具备基础岗位适配度。'
  },
  {
    id: 4,
    name: '顾然',
    role: '研发实习生',
    department: '数据平台',
    mentor: '陈航',
    stage: '任务跟做',
    score: 55,
    risk: '高',
    tasksDone: 2,
    weeklyFocus: '优先完成系统链路梳理，安排一次专项代码讲解。',
    blocker: '连续多日未更新关键任务，进入节奏较慢。',
    summary: '基础能力具备，但当前任务承接不足，建议导师加密跟进。'
  },
  {
    id: 5,
    name: '沈知',
    role: '产品实习生',
    department: '商业化产品',
    mentor: '李桐',
    stage: '基础融入',
    score: 74,
    risk: '低',
    tasksDone: 5,
    weeklyFocus: '完成业务名词学习与用户旅程梳理。',
    blocker: '需要更多真实案例建立场景感。',
    summary: '理解速度较快，已能跟上周会讨论。'
  }
];

export const roadmap = {
  '研发实习生': [
    { name: '第1周：基础融入', goal: '熟悉团队、开发环境、系统模块和业务流程', deliverable: '完成环境搭建与系统阅读清单' },
    { name: '第2-3周：任务跟做', goal: '在导师指导下完成低风险需求或缺陷处理', deliverable: '提交1个可验收功能点' },
    { name: '第4-6周：独立承接', goal: '能独立理解需求、开发、联调并复盘', deliverable: '独立完成1个小模块需求' },
    { name: '第7-8周：阶段评估', goal: '沉淀技术复盘与岗位适配结论', deliverable: '形成阶段总结与改进计划' }
  ],
  '产品实习生': [
    { name: '第1周：基础融入', goal: '理解业务背景、目标用户与产品目标', deliverable: '完成业务背景梳理' },
    { name: '第2-3周：任务跟做', goal: '参与需求分析、竞品研究与文档协作', deliverable: '输出1份需求草案或分析文档' },
    { name: '第4-6周：独立承接', goal: '独立负责简单需求的调研、方案和推进', deliverable: '推进1个需求进入评审' },
    { name: '第7-8周：阶段评估', goal: '总结业务判断、沟通推进与结构化表达能力', deliverable: '完成阶段复盘' }
  ],
  '销售实习生': [
    { name: '第1周：基础融入', goal: '熟悉产品、销售流程和客户画像', deliverable: '完成销售话术与案例学习' },
    { name: '第2-3周：任务跟做', goal: '跟听客户沟通并学习需求记录', deliverable: '形成客户问题整理表' },
    { name: '第4-6周：独立承接', goal: '能进行基础客户触达与需求跟进', deliverable: '独立跟进至少1条线索' },
    { name: '第7-8周：阶段评估', goal: '总结线索转化与沟通能力表现', deliverable: '输出适岗复盘' }
  ]
};

export const mentorAlerts = [
  '顾然连续多日无关键任务更新，建议安排15分钟短会对齐。',
  '周岚已完成基础观察期，可增加一个独立子任务验证方案能力。',
  '许诺表现稳定，可尝试承担更完整的客户跟进链路。'
];

export const hrStats = [
  { name: '进展正常', value: 12 },
  { name: '持续观察', value: 5 },
  { name: '重点关注', value: 3 }
];

export const roleProgress = [
  { role: '研发', progress: 71 },
  { role: '产品', progress: 66 },
  { role: '销售', progress: 79 }
];

export const aiReplies = {
  '研发实习生': '你目前最需要完成的是把业务链路和代码模块一一对应起来。本周建议先跟着导师完成一个低风险需求，再把过程记录成自己的交付清单。',
  '产品实习生': '当前阶段重点不是追求方案复杂度，而是先建立结构化分析能力。建议先补齐目标、用户、流程、指标四个维度，再输出需求草案。',
  '销售实习生': '你已经进入可以独立练习沟通的阶段。本周建议围绕客户异议、产品卖点和案例表达进行集中训练，并形成复盘。'
};