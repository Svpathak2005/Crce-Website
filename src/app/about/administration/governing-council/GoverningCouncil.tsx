import React from 'react';

const GoverningCouncil = () => {
  const councilMembers = [
    { number: '1', name: 'Fr. Bento Rodrigues', designation: 'Chairman' },
    { number: '2', name: 'Fr. Alarico Carvalho', designation: 'Vice Chairman' },
    { number: '3', name: 'Fr. Peter D’Souza', designation: 'Treasurer' },
    { number: '4', name: 'Fr. Valerian D’Souza', designation: 'Secretary' },
    { number: '5', name: 'Fr. Agnelo Gomes', designation: 'Member' },
  ];

  return (
    <div className="flex min-h-max w-full flex-col">
      <main className="container mx-auto flex-grow p-4">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold">Governing Council</h2>
          <div className="mx-auto grid max-w-[60%] grid-cols-3 grid-rows-6 gap-x-0 gap-y-2 border-2 border-black p-4">
            {/* Title Row */}
            <div className="flex font-bold ">
              <h2>Sr.</h2>
            </div>
            <div className="flex font-bold ">
              <h2>Name</h2>
            </div>
            <div className="flex font-bold ">
              <h2>Designation</h2>
            </div>
            {/* Data Rows */}
            {councilMembers.map((member, index) => (
              <React.Fragment key={index}>
                <div className="pt-1 border-t  border-gray-400">
                  <h2>{member.number}{"."}</h2>
                </div>
                <div className="pt-1 border-t border-gray-400">
                  <h2>{member.name}</h2>
                </div>
                <div className="pt-1 border-t border-gray-400">
                  <h2>{member.designation}</h2>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GoverningCouncil;
