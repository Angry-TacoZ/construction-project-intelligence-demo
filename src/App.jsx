import { useMemo, useState } from 'react'
import './App.css'
import {
  actionItems,
  assistantAnswers,
  briefSections,
  implementationPhases,
  projectKpis,
  projectRecords,
  roiScenarios,
  suggestedQuestions,
} from './data/mockProjectData'

const tabs = [
  'Project Overview',
  'Weekly Risk Brief',
  'RFI and Submittal Tracker',
  'AI Project Assistant',
  'PM Action List Generator',
  'ROI / Impact Estimate',
  'Implementation Notes',
]

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <div className="app-shell">
      <Header />
      <nav className="tab-nav" aria-label="Demo sections">
        {tabs.map((tab) => (
          <button
            className={activeTab === tab ? 'tab active' : 'tab'}
            key={tab}
            onClick={() => setActiveTab(tab)}
            type="button"
          >
            {tab}
          </button>
        ))}
      </nav>
      <main>
        {activeTab === 'Project Overview' && <ProjectOverview />}
        {activeTab === 'Weekly Risk Brief' && <WeeklyRiskBrief />}
        {activeTab === 'RFI and Submittal Tracker' && <Tracker />}
        {activeTab === 'AI Project Assistant' && <Assistant />}
        {activeTab === 'PM Action List Generator' && <ActionList />}
        {activeTab === 'ROI / Impact Estimate' && <RoiEstimate />}
        {activeTab === 'Implementation Notes' && <ImplementationNotes />}
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="hero-header">
      <div>
        <p className="demo-label">Procore-compatible concept demo</p>
        <h1>Construction Project Intelligence Demo</h1>
        <p className="lede">
          Mock AI-assisted workflow intelligence for surfacing project risk from RFIs,
          submittals, change events, safety notes, and schedule signals.
        </p>
      </div>
      <div className="project-card" aria-label="Current demo project">
        <span>Demo project</span>
        <strong>Lancaster Medical Office Renovation</strong>
        <small>Renovation phase: interior rough-in and finish approvals</small>
      </div>
    </header>
  )
}

function ProjectOverview() {
  return (
    <section className="section-grid overview-grid">
      <div className="panel span-full">
        <SectionHeader
          title="Project Overview"
          description="A realistic mock snapshot of construction workflow health for a medical office renovation."
        />
        <div className="kpi-grid">
          {projectKpis.map((kpi) => (
            <article className="kpi-card" key={kpi.label}>
              <span>{kpi.label}</span>
              <strong>{kpi.value}</strong>
              <small className={kpi.intent}>{kpi.note}</small>
            </article>
          ))}
        </div>
      </div>
      <div className="panel status-panel">
        <h2>Plain-English Status Summary</h2>
        <p>
          Lancaster Medical Office Renovation is moving forward, but interior
          rough-in sequencing is exposed to coordination risk. The main pressure
          points are aging RFIs tied to ceiling and above-ceiling MEP conflicts,
          overdue HVAC and door hardware submittals, and pending owner decisions
          on lobby finishes and exam room casework. The project team should focus
          this week on closing blockers that affect procurement and room turnover.
        </p>
      </div>
      <div className="panel signal-panel">
        <h2>Risk Signal Mix</h2>
        <div className="signal-list">
          <Signal label="Schedule" value="6 items" tone="high" />
          <Signal label="Procurement" value="3 long-lead concerns" tone="medium" />
          <Signal label="Owner Decisions" value="2 pending" tone="medium" />
          <Signal label="Safety" value="2 observations" tone="low" />
        </div>
      </div>
    </section>
  )
}

function WeeklyRiskBrief() {
  const [generated, setGenerated] = useState(false)

  return (
    <section className="panel">
      <SectionHeader
        title="Weekly Risk Brief"
        description="Generate a deterministic mock AI-style brief from local project records."
      />
      <button className="primary-button" onClick={() => setGenerated(true)} type="button">
        Generate Weekly Risk Brief
      </button>
      {generated ? (
        <div className="brief-output">
          <p className="mock-note">Generated from mock project records only.</p>
          {briefSections.map((section) => (
            <article className="brief-section" key={section.title}>
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState text="Click the button to simulate a weekly project risk brief." />
      )}
    </section>
  )
}

function Tracker() {
  const [filters, setFilters] = useState({ type: 'All', status: 'All', risk: 'All' })

  const options = useMemo(
    () => ({
      type: ['All', ...new Set(projectRecords.map((record) => record.type))],
      status: ['All', ...new Set(projectRecords.map((record) => record.status))],
      risk: ['All', 'High', 'Medium', 'Low'],
    }),
    [],
  )

  const filteredRecords = projectRecords.filter((record) => {
    return (
      (filters.type === 'All' || record.type === filters.type) &&
      (filters.status === 'All' || record.status === filters.status) &&
      (filters.risk === 'All' || record.riskLevel === filters.risk)
    )
  })

  return (
    <section className="panel">
      <SectionHeader
        title="RFI and Submittal Tracker"
        description="Filter mock RFIs, submittals, change events, and safety observations by workflow risk."
      />
      <div className="filters">
        <SelectFilter
          label="Type"
          value={filters.type}
          options={options.type}
          onChange={(type) => setFilters((current) => ({ ...current, type }))}
        />
        <SelectFilter
          label="Status"
          value={filters.status}
          options={options.status}
          onChange={(status) => setFilters((current) => ({ ...current, status }))}
        />
        <SelectFilter
          label="Risk Level"
          value={filters.risk}
          options={options.risk}
          onChange={(risk) => setFilters((current) => ({ ...current, risk }))}
        />
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Title</th>
              <th>Responsible Party</th>
              <th>Status</th>
              <th>Days Open</th>
              <th>Risk Level</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record) => (
              <tr key={record.id}>
                <td className="record-id">{record.id}</td>
                <td>{record.type}</td>
                <td>{record.title}</td>
                <td>{record.responsibleParty}</td>
                <td>{record.status}</td>
                <td>{record.daysOpen}</td>
                <td>
                  <RiskBadge level={record.riskLevel} />
                </td>
                <td>{record.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function Assistant() {
  const [input, setInput] = useState('')
  const [answer, setAnswer] = useState(assistantAnswers.default)

  function respond(question) {
    const normalized = question.toLowerCase()
    const match =
      suggestedQuestions.find((suggestion) =>
        normalized.includes(suggestion.toLowerCase().slice(0, 18)),
      ) ||
      Object.keys(assistantAnswers).find((key) => normalized.includes(key))

    setInput(question)
    setAnswer(assistantAnswers[match] || inferAssistantAnswer(normalized))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (input.trim()) {
      respond(input.trim())
    }
  }

  return (
    <section className="section-grid assistant-grid">
      <div className="panel">
        <SectionHeader
          title="AI Project Assistant"
          description="A deterministic mock assistant with practical answers tied to local sample records."
        />
        <div className="suggestion-grid">
          {suggestedQuestions.map((question) => (
            <button key={question} onClick={() => respond(question)} type="button">
              {question}
            </button>
          ))}
        </div>
        <form className="chat-form" onSubmit={handleSubmit}>
          <input
            aria-label="Ask a project question"
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about RFIs, submittals, owner decisions, cost, or PM focus..."
            value={input}
          />
          <button className="primary-button" type="submit">
            Ask
          </button>
        </form>
      </div>
      <div className="panel answer-panel">
        <h2>Assistant Response</h2>
        <p className="mock-note">Mock response generated from local rules and sample data.</p>
        <p>{answer}</p>
      </div>
    </section>
  )
}

function ActionList() {
  const [created, setCreated] = useState(false)

  return (
    <section className="panel">
      <SectionHeader
        title="PM Action List Generator"
        description="Create a prioritized mock action list from the same risk signals used by the brief."
      />
      <button className="primary-button" onClick={() => setCreated(true)} type="button">
        Create PM Action List
      </button>
      {created ? (
        <div className="action-list">
          {actionItems.map((item) => (
            <article className="action-card" key={item.task}>
              <div>
                <span className={`priority priority-${item.priority.toLowerCase()}`}>
                  {item.priority}
                </span>
                <h3>{item.task}</h3>
                <p>{item.reason}</p>
              </div>
              <dl>
                <div>
                  <dt>Owner</dt>
                  <dd>{item.owner}</dd>
                </div>
                <div>
                  <dt>Due</dt>
                  <dd>{item.dueDate}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState text="Click the button to simulate a PM-ready action list." />
      )}
    </section>
  )
}

function RoiEstimate() {
  return (
    <section className="panel">
      <SectionHeader
        title="ROI / Impact Estimate"
        description="Simple mock time-savings scenarios using 10 PMs and 52 annual work weeks."
      />
      <div className="table-wrap compact">
        <table>
          <thead>
            <tr>
              <th>Scenario</th>
              {roiScenarios.map((scenario) => (
                <th key={scenario.name}>{scenario.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Assumption</td>
              {roiScenarios.map((scenario) => (
                <td key={scenario.name}>Saves {scenario.hoursPerPmPerWeek} hour(s) per PM per week</td>
              ))}
            </tr>
            <tr>
              <td>Weekly Hours Saved</td>
              {roiScenarios.map((scenario) => (
                <td key={scenario.name}>{scenario.weeklyHoursSaved}</td>
              ))}
            </tr>
            <tr>
              <td>Annual Hours Saved</td>
              {roiScenarios.map((scenario) => (
                <td key={scenario.name}>{scenario.annualHoursSaved}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="impact-note">
        Actual impact would need to be validated through a controlled pilot using real workflow
        timing, adoption rates, and quality/error metrics.
      </p>
    </section>
  )
}

function ImplementationNotes() {
  return (
    <section className="panel">
      <SectionHeader
        title="Implementation Notes"
        description="A conservative path for exploring workflow intelligence without production integrations."
      />
      <div className="phase-list">
        {implementationPhases.map((phase) => (
          <article className="phase-card" key={phase.phase}>
            <span>{phase.phase}</span>
            <p>{phase.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SectionHeader({ title, description }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function SelectFilter({ label, onChange, options, value }) {
  return (
    <label>
      <span>{label}</span>
      <select onChange={(event) => onChange(event.target.value)} value={value}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

function RiskBadge({ level }) {
  return <span className={`risk-badge risk-${level.toLowerCase()}`}>{level}</span>
}

function Signal({ label, tone, value }) {
  return (
    <div className={`signal ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function EmptyState({ text }) {
  return <div className="empty-state">{text}</div>
}

function inferAssistantAnswer(normalizedQuestion) {
  if (normalizedQuestion.includes('cost')) {
    return assistantAnswers['Which items could affect cost?']
  }

  if (normalizedQuestion.includes('email') || normalizedQuestion.includes('subcontractor')) {
    return assistantAnswers['Draft an email to the subcontractor about overdue submittals.']
  }

  if (normalizedQuestion.includes('owner')) {
    return assistantAnswers['Summarize unresolved owner decisions.']
  }

  if (normalizedQuestion.includes('rfi') || normalizedQuestion.includes('escalation')) {
    return assistantAnswers['Which RFIs need escalation?']
  }

  if (normalizedQuestion.includes('schedule') || normalizedQuestion.includes('risk')) {
    return assistantAnswers['What are the top schedule risks this week?']
  }

  return assistantAnswers.default
}

function Footer() {
  return (
    <footer>
      Demo uses mock data only. No production systems or private project records are connected.
    </footer>
  )
}

export default App
