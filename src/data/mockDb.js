export const services = [
  { id: 1, title: 'Plumbing & Pipes', imageUrl: '/images/service_plumbing_1778436660404.png' },
  { id: 2, title: 'Electrical Repair', imageUrl: '/images/service_electrical_1778436674650.png' },
  { id: 3, title: 'HVAC Maintenance', imageUrl: '/images/service_hvac_1778436689770.png' },
  { id: 4, title: 'Carpentry & Woodwork', imageUrl: '/images/service_carpentry_1778436707071.png' },
  { id: 5, title: 'Deep Cleaning', imageUrl: '/images/service_plumbing_1778436660404.png' },
  { id: 6, title: 'Painting & Drywall', imageUrl: '/images/service_carpentry_1778436707071.png' },
  { id: 7, title: 'Appliance Repair', imageUrl: '/images/service_electrical_1778436674650.png' },
  { id: 8, title: 'Pest Control', imageUrl: '/images/service_hvac_1778436689770.png' },
];

export const providers = [
  { id: 'p1', name: 'James Holden', role: 'Master Electrician', rate: '$85/hr', headshot: '/images/headshot_james_1778436728819.png' },
  { id: 'p2', name: 'Naomi Nagata', role: 'HVAC Specialist', rate: '$95/hr', headshot: '/images/headshot_naomi_1778436744010.png' },
  { id: 'p3', name: 'Amos Burton', role: 'Heavy Carpentry', rate: '$75/hr', headshot: '/images/headshot_amos_1778436760788.png' },
  { id: 'p4', name: 'Alex Kamal', role: 'General Plumbing', rate: '$80/hr', headshot: '/images/headshot_alex_1778436776939.png' },
];

export const initialBookings = [
  { id: 'BK-1001', customer: 'Alice Vance', service: 'Plumbing', status: 'Pending', time: '10:00 AM' },
  { id: 'BK-1002', customer: 'Bob Miller', service: 'Electrical', status: 'Accepted', time: '11:30 AM' },
  { id: 'BK-1003', customer: 'Charlie Davis', service: 'HVAC', status: 'In-Progress', time: '09:00 AM' },
  { id: 'BK-1004', customer: 'Diana Prince', service: 'Carpentry', status: 'Completed', time: 'Yesterday' },
];
