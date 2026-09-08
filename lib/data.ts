export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  category: string;
  features: string[];
  durationOptions: string[];
  keyBenefits: string[];
}

export const CONTACT_INFO = {
  companyName: 'Sawariya Home Care',
  tagline: 'Care That Brings Comfort Home',
  heroTrust: 'Care that feels like family.',
  phones: [
    { display: '+91 62659 01231', raw: '+916265901231', isPrimary: true },
  ],
  email: 'sawariyahomecare@gmail.com',
  instagram: {
    handle: '@sawariya_home_care',
    url: 'https://www.instagram.com/sawariya_home_care/',
  },
  whatsapp: 'https://wa.me/916265901231?text=Hello%20Sawariya%20Home%20Care,%20I%20would%20like%20to%20inquire%20about%20care%20services.',
  timings: '24 Hours / 7 Days a Week Support',
  address: 'Near Vyanktesh Hospital, Kamal Vihar, Sector 6, Sector 8 A, Raipur, Chhattisgarh 492015',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'senior-care',
    number: '01',
    title: 'Senior Citizen / Elder Care',
    shortDesc: 'Compassionate support for seniors with everyday assistance, companionship and personal care in the comfort of home.',
    fullDesc: 'Ageing in familiar surroundings gives seniors emotional security and dignified independence. Our trained home attendants assist with daily routines, medication reminders, wholesome meal assistance, mobility support, and heartwarming companionship, relieving family stress and fostering happiness.',
    image: '/images/senior-care.webp',
    iconName: 'HeartHandshake',
    category: 'Elderly Support',
    features: [
      'Personal grooming, bathing & dressing support',
      'Gentle mobility assistance & fall prevention',
      'Timely medication adherence & vitals logging',
      'Warm conversation, reading & emotional companionship',
    ],
    durationOptions: ['12-Hour Day Shift', '12-Hour Night Shift', '24-Hour Live-in', 'Custom Schedule'],
    keyBenefits: [
      'Allows seniors to stay peacefully in their beloved home',
      'Individual attention tailored to specific mobility needs',
      'Regular reassuring updates for family members',
    ],
  },
  {
    id: 'newborn-care',
    number: '02',
    title: 'Newborn & Baby Care',
    shortDesc: 'Gentle and attentive support for newborns and babies, helping parents feel more confident and supported at home.',
    fullDesc: 'Welcoming a newborn is a wondrous yet demanding milestone. Our specialized baby care assistants provide dedicated support for mother and child, focusing on baby massage, sponge bath, safe feeding posture, diaper care, and night comfort routines so mothers can recuperate with peace of mind.',
    image: '/images/baby-care.webp',
    iconName: 'Baby',
    category: 'Maternal & Infant',
    features: [
      'Traditional baby massage & gentle bathing',
      'Feeding, burping & sleep soothing assistance',
      'Sterilization of baby bottles & nursery hygiene',
      'Postpartum recovery reassurance for new mothers',
    ],
    durationOptions: ['12-Hour Day Shift', '12-Hour Night Shift', '24-Hour Live-in Jharoka/Nanny', 'Custom Schedule'],
    keyBenefits: [
      'Restful night sleep for recuperating mothers',
      'Expert hygiene practices preventing infant rashes',
      'Gentle guidance on calming fussy babies',
    ],
  },
  {
    id: 'babysitting',
    number: '03',
    title: 'Babysitting',
    shortDesc: 'Trusted childcare and supervision for families who need dependable support for their little ones.',
    fullDesc: 'Finding reliable, patient, and caring supervision for growing children is essential for modern busy families. Our babysitters engage toddlers and youngsters with wholesome offline activities, story time, nutritious meal assistance, and safe playtime supervision.',
    image: '/images/babysitting.webp',
    iconName: 'Smile',
    category: 'Childcare',
    features: [
      'Attentive playtime supervision & safety oversight',
      'Encouraging creative offline play & book reading',
      'Timely meals, snacks & hydration support',
      'Assistance with bedtime routines and daily habits',
    ],
    durationOptions: ['Flexible Hourly Blocks', 'Full-Day Support', 'After-School Shifts', 'Weekend Support'],
    keyBenefits: [
      'Peace of mind for working or busy parents',
      'Positive, patient, screen-free engagement',
      'Dependable adherence to family rules and routines',
    ],
  },
  {
    id: 'home-nursing',
    number: '04',
    title: 'Home Nursing',
    shortDesc: 'Professional nursing support delivered in the comfort and familiarity of home.',
    fullDesc: 'Clinical recovery is often faster and far less stressful in a homely atmosphere. Our qualified nursing staff provides doctor-prescribed nursing interventions, including post-operative wound dressing, catheter management, IV infusion support, injections, and comprehensive vital sign monitoring.',
    image: '/images/home-nursing.webp',
    iconName: 'Activity',
    category: 'Clinical Care',
    features: [
      'Post-surgical wound dressing & stitch management',
      'Medication administration via IV, IM & subcutaneous',
      'Ryle tube insertion, catheter care & nebulization',
      'Comprehensive vitals charting & doctor reporting',
    ],
    durationOptions: ['Short Nursing Visits', '12-Hour Nursing Shift', '24-Hour Intensive Nursing', 'Post-Op Packages'],
    keyBenefits: [
      'Minimizes hospital-acquired infections',
      'Personalized bedside attention by experienced nurses',
      'Continuous coordination with treating physicians',
    ],
  },
  {
    id: 'physiotherapy',
    number: '05',
    title: 'Physiotherapy at Home',
    shortDesc: 'Convenient physiotherapy support at home to help individuals continue their recovery and mobility journey.',
    fullDesc: 'Traveling to rehabilitation clinics can be exhausting and painful for recovering patients. Our certified physiotherapists bring specialized equipment and targeted exercise protocols directly to your home for stroke rehabilitation, orthopedic surgery recovery, arthritis mobility, and neurological conditioning.',
    image: '/images/physiotherapy.webp',
    iconName: 'Accessibility',
    category: 'Rehabilitation',
    features: [
      'Post-fracture & joint replacement rehabilitation',
      'Stroke & neuro-muscular movement retraining',
      'Geriatric balance training & fall prevention',
      'Chronic back, neck & arthritis pain relief therapies',
    ],
    durationOptions: ['Per-Session Home Visits', '10-Day Intensive Package', 'Monthly Wellness Protocol'],
    keyBenefits: [
      'Zero commute stress for injured or elderly patients',
      'Exercises customized to home furniture & actual living space',
      'Measurable weekly progress assessments',
    ],
  },
  {
    id: 'medical-equipment',
    number: '06',
    title: 'Medical Equipment Support',
    shortDesc: 'Home-care support and medical equipment solutions for families requiring additional care at home.',
    fullDesc: 'For patients transitioning from hospital ICUs or requiring high-dependency respiratory and monitoring support, we supply, install, and support medical equipment at home. This includes hospital motorized beds, oxygen concentrators, BiPAP/CPAP, suction machines, patient monitors, and wheelchairs.',
    image: '/images/medical-equipment.webp',
    iconName: 'Bed',
    category: 'Equipment & Critical',
    features: [
      'Multi-function electric & manual hospital beds',
      'Oxygen concentrators (5L / 10L) & cylinders',
      'BiPAP / CPAP machines with certified technician setup',
      'Patient monitors, suction pumps & anti-bedsore air mattresses',
    ],
    durationOptions: ['Rental Monthly Basis', 'Rental Weekly Basis', 'Purchase Support', 'Complete Home ICU Setup'],
    keyBenefits: [
      'Cost-effective alternative to prolonged hospital stays',
      'Prompt doorstep installation and troubleshooting',
      'Sanitized, hospital-grade calibrated equipment',
    ],
  },
];

export const TRUSTED_SERVICES_STRIP = [
  { title: 'Home Nursing', subtitle: 'Clinical bedside assistance', iconName: 'Activity', href: '#services' },
  { title: 'Elder Care', subtitle: 'Warm senior companionship', iconName: 'HeartHandshake', href: '#senior-care' },
  { title: 'Newborn & Baby Care', subtitle: 'Postnatal & infant support', iconName: 'Baby', href: '#newborn-care' },
  { title: 'Babysitting', subtitle: 'Attentive, loving supervision', iconName: 'Smile', href: '#babysitting' },
  { title: 'Physiotherapy at Home', subtitle: 'Targeted mobility recovery', iconName: 'Accessibility', href: '#services' },
  { title: 'Medical Equipment Support', subtitle: 'ICU beds & oxygen rentals', iconName: 'Bed', href: '#services' },
];

export const WHY_CHOOSE_ITEMS = [
  {
    number: '01',
    title: 'Compassionate Care',
    description: 'We treat every client with genuine empathy, kindness, and deep personal respect, making care feel natural and comforting.',
    iconName: 'Heart',
  },
  {
    number: '02',
    title: 'Trusted Professionals',
    description: 'Caregivers and nursing staff are thoroughly vetted, trained in domestic etiquette, and dedicated to client safety.',
    iconName: 'ShieldCheck',
  },
  {
    number: '03',
    title: 'Personalized Attention',
    description: 'Every individual has unique daily routines and health needs. We customize care plans to fit your family’s specific lifestyle.',
    iconName: 'UserCheck',
  },
  {
    number: '04',
    title: 'Home-Based Support',
    description: 'Healing and comfort happen best in familiar surroundings without the disruption and distress of institutional environments.',
    iconName: 'Home',
  },
  {
    number: '05',
    title: 'Reliable Service',
    description: 'Punctual attendance, dependable replacement coordination, and responsive management support around the clock.',
    iconName: 'Clock',
  },
  {
    number: '06',
    title: 'Family-First Approach',
    description: 'We maintain clear, transparent communication with family members, giving you total peace of mind every single day.',
    iconName: 'Users',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Tell Us Your Needs',
    description: 'Share the type of care and support your family requires — whether for an elderly parent, newborn, or recovery support.',
    iconName: 'MessageSquareText',
  },
  {
    step: '02',
    title: 'We Understand Your Requirements',
    description: 'Our team understands your situation, schedule preferences, medical background, and specific home requirements.',
    iconName: 'FileCheck',
  },
  {
    step: '03',
    title: 'Choose the Right Care Support',
    description: 'Find a suitable care option for your family, reviewing caregiver profiles and confirming duration terms.',
    iconName: 'UserCheck',
  },
  {
    step: '04',
    title: 'Care Begins at Home',
    description: 'Receive dependable support in a familiar and comfortable environment, with continuous supervisory oversight.',
    iconName: 'Sparkles',
  },
];

export const TESTIMONIALS_DATA = [
  {
    quote: 'Having dependable support for my mother at home has given our family much-needed peace of mind. The caregiver treats her with immense warmth, respect, and patience.',
    name: 'Anita Sharma',
    relation: 'Daughter of Senior Care Recipient',
    location: 'Home Elder Care',
    rating: 5,
  },
  {
    quote: 'The newborn care attendant from Sawariya was an incredible support after my C-section. From baby massage to night feeding guidance, she made our first month stress-free.',
    name: 'Priya & Rahul Verma',
    relation: 'New Parents',
    location: 'Newborn & Mother Care',
    rating: 5,
  },
  {
    quote: 'As two working professionals, finding a trustworthy and gentle babysitter for our 3-year-old daughter was our top worry. Sawariya delivered dependable, loving childcare.',
    name: 'Vikram & Neha Joshi',
    relation: 'Working Parents',
    location: 'Babysitting Support',
    rating: 5,
  },
  {
    quote: 'Following knee replacement surgery, traveling to hospital for physiotherapy was difficult. The physiotherapist from Sawariya came home daily and restored my mobility within weeks.',
    name: 'Surendra Nath Gupta',
    relation: 'Recovered Patient',
    location: 'Physiotherapy at Home',
    rating: 5,
  },
  {
    quote: 'Sawariya provided a skilled home nurse for my father during critical post-op recovery. The punctuality, hygienic vitals monitoring, and kindness truly won our hearts.',
    name: 'Meenakshi Sundaram',
    relation: 'Family Caregiver',
    location: 'Home Nursing Support',
    rating: 5,
  },
];

export const FAQ_DATA = [
  {
    question: 'What home-care services does Sawariya provide?',
    answer: 'Sawariya Home Care provides a comprehensive spectrum of home-based support including Senior Citizen & Elder Care, Newborn & Baby Care, Babysitting, Home Nursing, Physiotherapy at Home, and ICU Setup / Medical Equipment Rentals and support.',
  },
  {
    question: 'Do you provide senior citizen care at home?',
    answer: 'Yes! Senior citizen care is one of our primary specialties. Our caregivers assist with daily personal hygiene, bathing, mobility assistance, timely medication intake, wholesome meal assistance, and heartwarming companionship.',
  },
  {
    question: 'Do you provide newborn and baby care?',
    answer: 'Yes. We provide experienced baby care attendants (Jharoka/Nannies) trained in newborn hygiene, traditional baby oil massage, sponge bathing, feeding positioning, burping, bottle hygiene, and assisting new mothers during postpartum recovery.',
  },
  {
    question: 'Do you offer babysitting services?',
    answer: 'Yes, we provide reliable and patient babysitting support for infants, toddlers, and young children. Our babysitters engage children in wholesome offline activities, assist with mealtimes, and ensure safe supervision while parents are working or occupied.',
  },
  {
    question: 'Do you provide home nursing?',
    answer: 'Yes, our qualified nursing team delivers doctor-prescribed nursing interventions at home, including surgical wound dressing, IV infusion and injections, catheter maintenance, vital sign logging, nebulization, and post-hospitalization recovery.',
  },
  {
    question: 'Do you provide physiotherapy at home?',
    answer: 'Yes, certified physiotherapists visit your residence to conduct targeted therapy sessions for post-orthopedic surgery, stroke recovery, arthritis pain management, neurological rehabilitation, and geriatric balance training.',
  },
  {
    question: 'Can I request flexible care support?',
    answer: 'Absolutely. We understand every family has different schedules. We offer 12-hour day shifts, 12-hour night shifts, 24-hour live-in care, short hourly visits, and customized weekly or monthly plans.',
  },
  {
    question: 'How can I book a caregiver?',
    answer: 'Booking is simple: click "Book a Caregiver" on our website, fill out the quick inquiry form, or call our care coordinators directly at 62659 01231, 79702 58440, or 90098 01216. Our team will understand your needs and match an appropriate caregiver promptly.',
  },
];
