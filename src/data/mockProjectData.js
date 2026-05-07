export const projectKpis = [
  { label: 'Open RFIs', value: 14, note: '3 need escalation', intent: 'warning' },
  { label: 'Overdue RFIs', value: 3, note: 'Oldest open 18 days', intent: 'danger' },
  { label: 'Open Submittals', value: 22, note: '5 tied to procurement', intent: 'warning' },
  { label: 'Overdue Submittals', value: 5, note: 'HVAC item is critical', intent: 'danger' },
  { label: 'Pending Change Events', value: 4, note: '2 need owner input', intent: 'warning' },
  { label: 'Safety Observations', value: 2, note: 'Housekeeping trend noted', intent: 'neutral' },
  { label: 'Schedule Risk Items', value: 6, note: 'Rough-in path exposed', intent: 'danger' },
]

export const projectRecords = [
  {
    id: 'RFI-014',
    type: 'RFI',
    title: 'MEP ceiling coordination conflict',
    responsibleParty: 'MEP Engineer',
    status: 'Open',
    daysOpen: 18,
    riskLevel: 'High',
    reason: 'Blocks ceiling rough-in sequence.',
  },
  {
    id: 'SUB-022',
    type: 'Submittal',
    title: 'HVAC equipment submittal',
    responsibleParty: 'Mechanical Subcontractor',
    status: 'Overdue',
    daysOpen: 21,
    riskLevel: 'High',
    reason: 'Overdue 9 days and tied to a long-lead item.',
  },
  {
    id: 'CE-004',
    type: 'Change Event',
    title: 'Lobby finish alternate',
    responsibleParty: 'Owner Representative',
    status: 'Pending',
    daysOpen: 12,
    riskLevel: 'Medium',
    reason: 'Owner decision needed before finish release.',
  },
  {
    id: 'SAFE-002',
    type: 'Safety Observation',
    title: 'Repeated housekeeping issue near material staging',
    responsibleParty: 'Field Superintendent',
    status: 'Open',
    daysOpen: 6,
    riskLevel: 'Medium',
    reason: 'Repeated staging issue increases access and trip exposure.',
  },
  {
    id: 'RFI-011',
    type: 'RFI',
    title: 'Exam room casework blocking condition',
    responsibleParty: 'Architect',
    status: 'Open',
    daysOpen: 14,
    riskLevel: 'High',
    reason: 'Impacts casework layout and rough-in verification.',
  },
  {
    id: 'RFI-009',
    type: 'RFI',
    title: 'Firestopping detail at existing rated wall',
    responsibleParty: 'Life Safety Consultant',
    status: 'Overdue',
    daysOpen: 16,
    riskLevel: 'Medium',
    reason: 'Inspection readiness could slip if detail is not confirmed.',
  },
  {
    id: 'RFI-006',
    type: 'RFI',
    title: 'Door frame conflict at imaging suite',
    responsibleParty: 'Architect',
    status: 'Closed',
    daysOpen: 7,
    riskLevel: 'Low',
    reason: 'Resolved with revised frame detail.',
  },
  {
    id: 'SUB-018',
    type: 'Submittal',
    title: 'Door hardware schedule',
    responsibleParty: 'Doors and Hardware Supplier',
    status: 'Overdue',
    daysOpen: 17,
    riskLevel: 'Medium',
    reason: 'Late review could compress finish installation.',
  },
  {
    id: 'SUB-016',
    type: 'Submittal',
    title: 'Acoustical ceiling tile',
    responsibleParty: 'Ceiling Subcontractor',
    status: 'Open',
    daysOpen: 10,
    riskLevel: 'Medium',
    reason: 'Needs alignment with ceiling coordination answer.',
  },
  {
    id: 'SUB-013',
    type: 'Submittal',
    title: 'Exam room millwork samples',
    responsibleParty: 'Millwork Subcontractor',
    status: 'Open',
    daysOpen: 8,
    riskLevel: 'Low',
    reason: 'No current path impact if reviewed this week.',
  },
  {
    id: 'SUB-010',
    type: 'Submittal',
    title: 'Low-voltage cabling shop drawings',
    responsibleParty: 'Electrical Subcontractor',
    status: 'Approved as Noted',
    daysOpen: 5,
    riskLevel: 'Low',
    reason: 'Coordination comments are manageable.',
  },
  {
    id: 'CE-003',
    type: 'Change Event',
    title: 'Added exam room sink rough-in',
    responsibleParty: 'Project Manager',
    status: 'Pricing',
    daysOpen: 9,
    riskLevel: 'Medium',
    reason: 'Could affect plumbing labor and inspection sequence.',
  },
  {
    id: 'CE-002',
    type: 'Change Event',
    title: 'After-hours infection control premium',
    responsibleParty: 'Operations Manager',
    status: 'Pending',
    daysOpen: 11,
    riskLevel: 'Low',
    reason: 'Cost exposure exists but schedule path is not blocked.',
  },
  {
    id: 'SAFE-001',
    type: 'Safety Observation',
    title: 'Temporary corridor protection needs repair',
    responsibleParty: 'Field Superintendent',
    status: 'Closed',
    daysOpen: 2,
    riskLevel: 'Low',
    reason: 'Corrected during daily field walk.',
  },
]

export const intelligenceSignals = [
  {
    label: 'Connected Risk Chains',
    value: 4,
    note: 'Linked records across RFI, submittal, change, safety, and meeting prep.',
  },
  {
    label: 'Evidence-Backed Actions',
    value: 9,
    note: 'Action recommendations include source records and business reason.',
  },
  {
    label: 'Pilot Questions Answered',
    value: 6,
    note: 'Designed to help IT compare configure, buy, and build options.',
  },
]

export const riskChains = [
  {
    id: 'chain-rough-in',
    title: 'Above-Ceiling Rough-In Delay Chain',
    severity: 'High',
    owner: 'Project Manager',
    records: ['RFI-014', 'SUB-016', 'SUB-022'],
    path: [
      'MEP ceiling coordination conflict remains open',
      'Ceiling tile submittal depends on coordination answer',
      'HVAC equipment approval is overdue',
      'Rough-in inspection and ceiling close-up sequence could slip',
    ],
    evidence:
      'RFI-014 is open 18 days, SUB-016 is waiting on coordination, and SUB-022 is overdue for a long-lead HVAC item.',
    recommendedMove:
      'Run a 20-minute focused coordination huddle with design, mechanical, and ceiling trades; end with one owner for the RFI answer and one date for HVAC release.',
  },
  {
    id: 'chain-owner-decisions',
    title: 'Owner Decision Drag on Finish Release',
    severity: 'Medium',
    owner: 'Owner Representative',
    records: ['CE-004', 'CE-002', 'SUB-018'],
    path: [
      'Lobby finish alternate remains pending',
      'After-hours infection control premium is unresolved',
      'Door hardware approval is overdue',
      'Finish procurement and room turnover decisions become harder to sequence',
    ],
    evidence:
      'CE-004 has been pending 12 days, CE-002 has been pending 11 days, and SUB-018 is overdue.',
    recommendedMove:
      'Convert these into a two-line owner decision log with a cost/schedule note and requested answer date before the next owner meeting.',
  },
  {
    id: 'chain-field-readiness',
    title: 'Field Readiness and Inspection Confidence Chain',
    severity: 'Medium',
    owner: 'Field Superintendent',
    records: ['RFI-009', 'SAFE-002', 'CE-003'],
    path: [
      'Firestopping detail is overdue',
      'Material staging housekeeping has repeated issues',
      'Added sink rough-in is still pricing',
      'Inspection readiness and daily field flow could degrade at the same time',
    ],
    evidence:
      'RFI-009 is overdue 16 days, SAFE-002 is a repeated open observation, and CE-003 could affect plumbing labor.',
    recommendedMove:
      'Pair the inspection readiness review with a field logistics check so documentation and site conditions are corrected together.',
  },
]

export const evidencePackets = [
  {
    title: 'Escalation Packet: Ceiling Rough-In Risk',
    audience: 'PM, Superintendent, MEP Engineer, Ceiling Subcontractor',
    summary:
      'A meeting-ready packet that connects the open coordination RFI, dependent ceiling material decisions, and overdue HVAC procurement into one escalation.',
    includes: ['RFI-014', 'SUB-016', 'SUB-022', 'Recommended huddle agenda', 'Decision owner list'],
  },
  {
    title: 'Owner Decision Packet: Finish and Premium Exposure',
    audience: 'Owner Representative, PM, Operations',
    summary:
      'A concise owner-facing packet that separates aesthetic choice, cost exposure, and schedule implication so decisions do not stay buried in logs.',
    includes: ['CE-004', 'CE-002', 'SUB-018', 'Cost/schedule talking points', 'Requested response dates'],
  },
  {
    title: 'Field Readiness Packet: Inspection and Safety Signals',
    audience: 'Superintendent, Safety Lead, Project Engineer',
    summary:
      'A field-focused packet that combines documentation blockers with observed site conditions before they become inspection misses.',
    includes: ['RFI-009', 'SAFE-002', 'CE-003', 'Daily verification checklist', 'Closeout owner'],
  },
]

export const strategyOptions = [
  {
    option: 'Configure Procore Native Tools',
    bestFor: 'Teams that mainly need cleaner dashboards, reports, and existing tool adoption.',
    limitation: 'May not connect cross-record risk narratives exactly the way PMs discuss them.',
  },
  {
    option: 'Buy Marketplace App',
    bestFor: 'Teams that need a supported production integration quickly.',
    limitation: 'Fit depends on vendor workflow assumptions, data scope, pricing, and security posture.',
  },
  {
    option: 'Run Targeted Intelligence Pilot',
    bestFor: 'IT-led validation of the specific PM decisions, evidence packets, and ROI model before procurement.',
    limitation: 'Requires disciplined scope control and a clear path to retire or productize the pilot.',
  },
]

export const briefSections = [
  {
    title: 'Top schedule risks',
    items: [
      'RFI-014 is blocking the ceiling rough-in sequence and has been open for 18 days.',
      'SUB-022 is overdue by 9 days and could delay HVAC equipment release.',
      'RFI-011 affects exam room casework and rough-in verification before wall close-up.',
    ],
  },
  {
    title: 'Overdue RFIs',
    items: [
      'RFI-014 should be escalated to the MEP engineer and design lead today.',
      'RFI-009 needs a firestopping decision before inspection readiness becomes exposed.',
      'The PM should review whether any closed RFIs require drawing updates before the next coordination meeting.',
    ],
  },
  {
    title: 'Overdue submittals',
    items: [
      'SUB-022 is the highest procurement risk because it is tied to long-lead HVAC equipment.',
      'SUB-018 should be pushed through review to avoid compressing door hardware and finish installation.',
      'SUB-016 depends on the ceiling coordination path and should be held close to RFI-014.',
    ],
  },
  {
    title: 'Unresolved owner decisions',
    items: [
      'CE-004 needs a lobby finish alternate decision before finishes are released.',
      'CE-002 should be resolved before after-hours infection control premiums become a recurring cost question.',
    ],
  },
  {
    title: 'Safety observations',
    items: [
      'SAFE-002 indicates a repeated housekeeping issue near material staging.',
      'The field team should confirm the staging plan and assign a daily closeout owner.',
    ],
  },
  {
    title: 'Recommended next actions',
    items: [
      'Escalate RFI-014 and SUB-022 before the next owner and subcontractor meeting.',
      'Create a short decision log for CE-004 and CE-002 with required response dates.',
      'Ask the superintendent to verify material staging housekeeping for three consecutive workdays.',
    ],
  },
]

export const suggestedQuestions = [
  'What are the top schedule risks this week?',
  'Which RFIs need escalation?',
  'Summarize unresolved owner decisions.',
  'What should the PM focus on before the next meeting?',
  'Which items could affect cost?',
  'Draft an email to the subcontractor about overdue submittals.',
]

export const assistantAnswers = {
  default:
    'I can answer against the mock project record set. Ask about schedule risk, RFIs, submittals, owner decisions, cost exposure, or PM meeting preparation.',
  'What are the top schedule risks this week?':
    'The top schedule risks are RFI-014 for the MEP ceiling coordination conflict, SUB-022 for overdue HVAC equipment approval, and RFI-011 for exam room casework blocking conditions. Those items affect rough-in, procurement release, and room turnover sequencing, so they should be reviewed together rather than as separate paperwork issues.',
  'Which RFIs need escalation?':
    'Escalate RFI-014 first because it is open 18 days and blocks ceiling rough-in. RFI-011 should be next because the casework answer affects exam room rough-in verification. RFI-009 should stay visible because the firestopping detail could become an inspection readiness issue if it remains overdue.',
  'Summarize unresolved owner decisions.':
    'The main owner decision is CE-004, the lobby finish alternate, pending for 12 days. CE-002 also needs a direction on after-hours infection control premium handling. I would put both in a concise decision log with the cost/schedule implication and a requested response date.',
  'What should the PM focus on before the next meeting?':
    'Before the next meeting, the PM should align the design team and trade partners around RFI-014, push SUB-022 to a firm response date, confirm whether SUB-018 can be reviewed this week, and prepare a two-item owner decision log for CE-004 and CE-002. The meeting should end with named owners and dates, not just discussion notes.',
  'Which items could affect cost?':
    'Cost exposure is most likely around CE-003 for added exam room sink rough-in, CE-002 for after-hours infection control premiums, and CE-004 if the lobby finish alternate changes material or labor assumptions. SUB-022 may also create cost pressure if late HVAC release triggers acceleration or resequencing.',
  'Draft an email to the subcontractor about overdue submittals.':
    'Subject: Overdue HVAC Submittal Response Needed. Please provide an updated status and firm submission date for SUB-022, HVAC equipment submittal, by end of day tomorrow. This item is overdue and is now being tracked as a high schedule risk because it is tied to long-lead equipment release. Include any open questions blocking completion so the project team can resolve them quickly.',
}

export const actionItems = [
  {
    priority: 'High',
    task: 'Escalate RFI-014 with design and MEP leads',
    owner: 'Project Manager',
    dueDate: 'Today',
    reason: 'The ceiling coordination answer is blocking rough-in sequencing.',
  },
  {
    priority: 'High',
    task: 'Get a committed response date for SUB-022',
    owner: 'Mechanical Subcontractor',
    dueDate: 'Tomorrow',
    reason: 'The overdue HVAC equipment submittal is tied to long-lead procurement.',
  },
  {
    priority: 'Medium',
    task: 'Prepare owner decision log for CE-004 and CE-002',
    owner: 'Project Manager',
    dueDate: 'Before owner meeting',
    reason: 'Pending decisions affect finishes and possible after-hours cost exposure.',
  },
  {
    priority: 'Medium',
    task: 'Confirm review path for SUB-018 door hardware schedule',
    owner: 'Architect',
    dueDate: 'This week',
    reason: 'Late hardware approval could compress finish installation.',
  },
  {
    priority: 'Medium',
    task: 'Verify housekeeping correction near material staging',
    owner: 'Field Superintendent',
    dueDate: 'Next field walk',
    reason: 'SAFE-002 is a repeated observation and needs sustained correction.',
  },
  {
    priority: 'Low',
    task: 'Review closed RFI updates for drawing coordination',
    owner: 'Project Engineer',
    dueDate: 'Friday',
    reason: 'Closed coordination items should be reflected before downstream trades proceed.',
  },
]

const pmCount = 10
const annualWeeks = 52

export const roiScenarios = [
  { name: 'Conservative', hoursPerPmPerWeek: 1 },
  { name: 'Moderate', hoursPerPmPerWeek: 2 },
  { name: 'Strong', hoursPerPmPerWeek: 4 },
].map((scenario) => ({
  ...scenario,
  weeklyHoursSaved: scenario.hoursPerPmPerWeek * pmCount,
  annualHoursSaved: scenario.hoursPerPmPerWeek * pmCount * annualWeeks,
}))

export const implementationPhases = [
  {
    phase: 'Phase 1',
    description: 'Shadow PMs, field teams, and operations to understand where project risk signals appear first.',
  },
  {
    phase: 'Phase 2',
    description: 'Identify repeatable documentation pain points across RFIs, submittals, change events, safety notes, and meeting actions.',
  },
  {
    phase: 'Phase 3',
    description: 'Build a small pilot using mock or otherwise safe data so the team can evaluate workflow fit before integrations.',
  },
  {
    phase: 'Phase 4',
    description: 'Validate the pilot with users and compare assistant output against actual PM review expectations.',
  },
  {
    phase: 'Phase 5',
    description: 'Integrate with approved systems only after IT and security review of data access, retention, and audit requirements.',
  },
  {
    phase: 'Phase 6',
    description: 'Measure time saved, error reduction, adoption, and ROI with agreed success criteria.',
  },
]
