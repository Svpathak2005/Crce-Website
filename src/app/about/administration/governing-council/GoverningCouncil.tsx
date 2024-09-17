import React from 'react'

const GoverningCouncil = () => {
  const data = [
    ['1', 'Rev. Fr. Bento Rodrigues', 'Chairman'],
    ['2', "Rev. Fr. Valerian D'Souza", 'Director'],
    ['3', 'Dr. S.M. Khot', 'Principal - Fr. CRIT, Vashi'],
    [
      '4',
      'Dr. R.S. Iyer',
      'Director - SP Jain Inst of Management & Ex-Principal, Fr. CRCE',
    ],
    ['5', 'Mr. P.N. Jumle', 'Director, Board of Apprenticeship & Training'],
    ['6', 'Dr. Deven N. Shah', 'Principal - Shri L.R. Tiwari College of Engg.'],
    ['7', 'Dr. Ajeet Singh', 'Western Regional Officer, AICTE'],
    ['8', 'Dr. Abhay Wagh', 'Director - D.T.E.'],
    ['9', 'Mr. Suresh Ramanan', 'Z.S. Associates'],
    ['10', 'Mr. Paresh Shetty', 'President, Sales - CtrlS Datacentres'],
    ['11', 'Dr. Deepak V. Bhoir', 'Professor - Electronics & Computer Science'],
    [
      '12',
      'Mr. D.S.S. Sudhakar',
      'Associate Professor - Mechanical Engineering',
    ],
    ['13', 'Dr. Surendra Singh Rathod', 'Principal - Member Secretary'],
  ]

  return (
    <div className="flex min-h-max sm:w-full w-[90vw]  flex-col">
      <main className="container mx-auto flex-grow p-2 sm:p-4">
        <div className="rounded-lg bg-white p-2 sm:p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold">Governing Council</h2>
          <section className="mx-auto mb-10 w-full lg:w-[70%]">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse rounded-lg bg-white shadow-md">
                <thead className="bg-[#001f3f] text-white">
                  <tr>
                    <th className="border border-gray-300 p-3 text-sm lg:text-base">
                      Sr.
                    </th>
                    <th className="border border-gray-300 p-3 text-sm lg:text-base">
                      Name
                    </th>
                    <th className="border border-gray-300 p-3 text-sm lg:text-base">
                      Designation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                    >
                      <td className="border border-gray-300 p-2 text-sm lg:p-3 lg:text-base">
                        {row[0]}
                      </td>
                      <td className="border border-gray-300 p-2 text-sm lg:p-3 lg:text-base">
                        {row[1]}
                      </td>
                      <td className="border border-gray-300 p-2 text-sm lg:p-3 lg:text-base">
                        {row[2]}
                      </td>
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
