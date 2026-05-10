import React, { useState } from 'react';
import Button from '../components/Button';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      day: d.toLocaleDateString('en-US', { weekday: 'short' }),
      date: d.getDate()
    };
  });

  const times = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00'];

  return (
    <div className="w-full min-h-screen bg-grey flex flex-col md:flex-row">
      {/* Sidebar Progress */}
      <div className="w-full md:w-1/3 lg:w-1/4 border-r-[1px] border-black bg-white flex flex-col">
        <div className="p-8 border-b-[1px] border-black">
          <h2 className="text-2xl font-bold tracking-tighter uppercase text-black">
            Booking Flow
          </h2>
        </div>
        
        <div className="flex-1 flex flex-col">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`flex-1 border-b-[1px] border-black p-8 flex flex-col justify-center transition-colors ${
                step === s ? 'bg-black text-white' : 'bg-white text-black opacity-50'
              }`}
            >
              <span className="text-6xl font-bold tracking-tighter mb-2">
                0{s}
              </span>
              <span className="text-sm font-semibold tracking-widest uppercase">
                {s === 1 ? 'Select Time' : s === 2 ? 'Details' : 'Confirm'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col bg-grey">
        {step === 1 && (
          <div className="p-8 md:p-16 flex-1">
            <h3 className="text-3xl font-bold tracking-tighter uppercase text-black mb-8">
              Select Date & Time
            </h3>
            
            <div className="mb-12">
              <label className="text-sm font-semibold tracking-widest uppercase mb-4 block text-black">
                Available Dates
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-0 border-[1px] border-black bg-white">
                {dates.map((d, i) => (
                  <div 
                    key={i}
                    onClick={() => setSelectedDate(i)}
                    className={`aspect-square flex flex-col items-center justify-center border-[1px] border-black cursor-pointer transition-colors ${
                      selectedDate === i ? 'bg-black text-white' : 'hover:bg-grey'
                    }`}
                  >
                    <span className="text-xs font-semibold tracking-widest uppercase mb-1">{d.day}</span>
                    <span className="text-xl font-bold">{d.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {selectedDate !== null && (
              <div className="mb-12 animate-fade-in">
                <label className="text-sm font-semibold tracking-widest uppercase mb-4 block text-black">
                  Available Times
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-0 border-[1px] border-black bg-white">
                  {times.map((t, i) => (
                    <div 
                      key={i}
                      onClick={() => setSelectedTime(i)}
                      className={`aspect-square flex items-center justify-center border-[1px] border-black cursor-pointer transition-colors ${
                        selectedTime === i ? 'bg-accent text-white' : 'hover:bg-grey'
                      }`}
                    >
                      <span className="font-mono font-bold">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end pt-8 border-t-[1px] border-black">
              <Button 
                disabled={selectedDate === null || selectedTime === null}
                onClick={() => setStep(2)}
                className="px-12"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="p-8 md:p-16 flex-1 flex flex-col justify-center">
            <h3 className="text-3xl font-bold tracking-tighter uppercase text-black mb-8">
              Service Details
            </h3>
            <div className="border-[1px] border-black bg-white p-8 mb-8">
               <p className="text-black/60 tracking-widest text-sm">[FORM PLACEHOLDER]</p>
            </div>
            <div className="flex justify-between pt-8 border-t-[1px] border-black">
              <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
              <Button onClick={() => setStep(3)}>Review</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="p-8 md:p-16 flex-1 flex flex-col justify-center">
             <h3 className="text-3xl font-bold tracking-tighter uppercase text-black mb-8">
              Confirmation
            </h3>
            <div className="border-[1px] border-black bg-white p-8 mb-8">
               <h4 className="font-bold text-xl uppercase mb-4">Summary</h4>
               <ul className="space-y-2 font-mono">
                 <li>Date: {selectedDate !== null ? dates[selectedDate].date : 'N/A'}</li>
                 <li>Time: {selectedTime !== null ? times[selectedTime] : 'N/A'}</li>
                 <li>Rate: $85/hr</li>
               </ul>
            </div>
            <div className="flex justify-between pt-8 border-t-[1px] border-black">
              <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
              <Button>Confirm Booking</Button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BookingPage;
