import React, { useState, useEffect } from 'react';
import { initialBookings } from '../data/mockDb';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState(initialBookings);

  // Mocking Firestore onSnapshot behavior for real-time updates
  useEffect(() => {
    const statuses = ['Pending', 'Accepted', 'In-Progress', 'Completed'];
    
    const interval = setInterval(() => {
      setBookings(prevBookings => {
        const newBookings = [...prevBookings];
        // Randomly pick a booking and advance its status
        const randomIndex = Math.floor(Math.random() * 3); // Only change first 3
        const currentStatus = newBookings[randomIndex].status;
        const currentIdx = statuses.indexOf(currentStatus);
        
        if (currentIdx < statuses.length - 1) {
          newBookings[randomIndex] = {
            ...newBookings[randomIndex],
            status: statuses[currentIdx + 1]
          };
        }
        
        return newBookings;
      });
    }, 5000); // Update every 5 seconds to simulate real-time

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'bg-white text-black border-black';
      case 'Accepted': return 'bg-grey text-black border-black';
      case 'In-Progress': return 'bg-accent text-white border-accent';
      case 'Completed': return 'bg-black text-white border-black';
      default: return 'bg-white text-black border-black';
    }
  };

  return (
    <div className="w-full min-h-screen bg-grey p-8 md:p-12">
      <div className="mb-12 flex justify-between items-end border-b-[1px] border-black pb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter uppercase text-black">
            System Operations
          </h1>
          <p className="text-sm font-semibold tracking-widest uppercase mt-4 text-black/60 font-mono">
            LIVE DATA / MOCK-FIRESTORE
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-accent rounded-none animate-pulse"></span>
          <span className="text-xs font-semibold tracking-widest uppercase">Connected</span>
        </div>
      </div>

      <div className="bg-white border-[1px] border-black overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b-[1px] border-black bg-black text-white uppercase tracking-widest text-xs font-semibold">
              <th className="p-4 border-r-[1px] border-white/20">ID</th>
              <th className="p-4 border-r-[1px] border-white/20">Customer</th>
              <th className="p-4 border-r-[1px] border-white/20">Service</th>
              <th className="p-4 border-r-[1px] border-white/20">Time</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="font-mono text-sm">
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b-[1px] border-black hover:bg-grey transition-colors">
                <td className="p-4 border-r-[1px] border-black font-bold">{booking.id}</td>
                <td className="p-4 border-r-[1px] border-black">{booking.customer}</td>
                <td className="p-4 border-r-[1px] border-black">{booking.service}</td>
                <td className="p-4 border-r-[1px] border-black">{booking.time}</td>
                <td className="p-4">
                  <span className={`inline-block px-3 py-1 text-xs font-sans tracking-widest uppercase font-bold border-[1px] ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
