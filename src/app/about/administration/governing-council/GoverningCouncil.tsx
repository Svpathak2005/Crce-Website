import React from 'react'

const GoverningCouncil = () => {
  const councilMembers = [
    { number: '1', name: 'Fr. Bento Rodrigues', designation: 'Chairman' },
    { number: '2', name: 'Fr. Alarico Carvalho', designation: 'Vice Chairman' },
    { number: '3', name: 'Fr. Peter D’Souza', designation: 'Treasurer' },
    { number: '4', name: 'Fr. Valerian D’Souza', designation: 'Secretary' },
    { number: '5', name: 'Fr. Agnelo Gomes', designation: 'Member' },
  ]

  return (
    <div className="flex min-h-max w-full flex-col">
      <main className="container mx-auto flex-grow p-4">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold">Trustees</h2>
          <section className="mb-10 mx-auto w-[50%]">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-lg bg-white shadow-md">
                <thead className="bg-[#001f3f] text-white">
                  <tr>
                    <th className="border border-gray-300 p-3">
                     Sr.
                    </th>
                    <th className="border border-gray-300 p-3">
                      Name
                    </th>
                    <th className="border border-gray-300 p-3">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      '1',
                      'Fr. Bento Rodrigues',
                      'Chairman',
                    ],
                    [
                      '2',
                      'Fr. Alarico Carvalho',
                      'Vice Chairman',
                    ],
                    [
                      '3',
                      'Fr. Peter D’Souza',
                      'Treasurer',
                    ],
                    [
                      '4',
                      'Fr. Valerian D’Souza',
                      'Secretary',
                    ],
                    [
                      '5',
                      'Fr. Agnelo Gomes',
                      'Member',
                    ],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                    >
                      <td className="border border-gray-300 p-3">{row[0]}</td>
                      <td className="border border-gray-300 p-3">{row[1]}</td>
                      <td className="border border-gray-300 p-3">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default GoverningCouncil
