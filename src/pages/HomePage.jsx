import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { services } from '../data/mockDb';

const HomePage = () => {

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b-[1px] border-black min-h-[60vh] bg-white">
        <div className="md:col-span-7 border-b-[1px] md:border-b-0 md:border-r-[1px] border-black p-8 md:p-16 flex flex-col justify-center bg-grey">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-black uppercase mb-6">
            The Professional Standard for Home Services.
          </h1>
          <p className="text-lg md:text-xl font-medium tracking-tight text-black max-w-lg">
            A brutalist approach to fixing your space. Transparent pricing. Professional execution. Zero compromises.
          </p>
        </div>
        <div className="md:col-span-5 p-8 md:p-16 flex flex-col justify-center items-start bg-white">
          <label className="text-sm font-semibold tracking-widest uppercase mb-4 block text-black">
            Find a Service
          </label>
          <div className="flex w-full border-[1px] border-black">
            <input 
              type="text" 
              placeholder="e.g. Plumbing" 
              className="flex-1 bg-transparent px-4 py-3 outline-none text-black placeholder:text-black/50"
            />
            <button className="bg-accent text-white font-semibold tracking-widest uppercase px-6 border-l-[1px] border-black hover:bg-black transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Service Grid Section */}
      <section className="p-8 md:p-16 bg-grey border-b-[1px] border-black">
        <div className="mb-12 flex justify-between items-end">
          <h2 className="text-3xl font-bold tracking-tighter uppercase text-black">
            Select a Category
          </h2>
          <span className="text-xs font-semibold tracking-widest uppercase text-black">
            [08 Available]
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} title={service.title} imageUrl={service.imageUrl} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
