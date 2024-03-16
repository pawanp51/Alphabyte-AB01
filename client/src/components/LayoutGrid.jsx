import React from "react";

export const LayoutGrid = () => {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-12 gap-4 mt-12 p-4">
        <div className="col-span-12 rounded-3xl border border-gray-500 p-32 sm:col-span-8 h-96 bg-slate-900">
            
        </div>
        <div className="col-span-12 rounded-3xl border border-gray-400 bg-gray-200 p-16 sm:col-span-4 bg-slate-900">
            
        </div>
        <div className="col-span-12 rounded-3xl border border-gray-500 bg-gray-200 p-32 sm:col-span-4 h-96 bg-slate-900">

        </div>
        <div className="col-span-12 rounded-3xl border border-gray-500 bg-gray-200 p-32 sm:col-span-8 bg-slate-900">

        </div>
    </div>
  );
};

