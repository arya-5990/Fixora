import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const ProviderListPage = () => {
  const navigate = useNavigate();
  
  const providers = [
    { id: 'p1', name: 'James Holden', role: 'Master Electrician', rate: '$85/hr', headshot: '/images/headshot_james_1778436728819.png' },
    { id: 'p2', name: 'Naomi Nagata', role: 'HVAC Specialist', rate: '$95/hr', headshot: '/images/headshot_naomi_1778436744010.png' },
    { id: 'p3', name: 'Amos Burton', role: 'Heavy Carpentry', rate: '$75/hr', headshot: '/images/headshot_amos_1778436760788.png' },
    { id: 'p4', name: 'Alex Kamal', role: 'General Plumbing', rate: '$80/hr', headshot: '/images/headshot_alex_1778436776939.png' },
  ];

  return (
    <div className="w-full min-h-screen bg-grey">
      <div className="border-b-[1px] border-black bg-white p-8 md:p-12">
        <h1 className="text-4xl font-bold tracking-tighter uppercase text-black">
          Available Professionals
        </h1>
        <p className="text-sm font-semibold tracking-widest uppercase mt-4 text-black/60">
          Showing results for your area
        </p>
      </div>

      <div className="flex flex-col">
        {providers.map((provider) => (
          <div key={provider.id} className="grid grid-cols-1 md:grid-cols-12 border-b-[1px] border-black bg-white group hover:bg-grey transition-colors">
            <div className="md:col-span-2 border-b-[1px] md:border-b-0 md:border-r-[1px] border-black aspect-square md:aspect-auto flex items-center justify-center bg-black/5 overflow-hidden">
              <img src={provider.headshot} alt={provider.name} className="w-full h-full object-cover grayscale" />
            </div>
            
            <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-center border-b-[1px] md:border-b-0 md:border-r-[1px] border-black">
              <h2 className="text-2xl font-bold tracking-tighter text-black uppercase mb-2">
                {provider.name}
              </h2>
              <span className="text-sm font-semibold tracking-widest uppercase text-black/60">
                {provider.role}
              </span>
            </div>

            <div className="md:col-span-2 p-6 md:p-8 flex items-center justify-center md:border-r-[1px] border-black">
              <span className="font-mono text-xl font-bold text-black">
                {provider.rate}
              </span>
            </div>

            <div className="md:col-span-2 p-6 flex items-center justify-center">
              <Button 
                variant="primary" 
                className="w-full h-full py-4 bg-accent border-[1px] border-black"
                onClick={() => navigate('/book')}
              >
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderListPage;
