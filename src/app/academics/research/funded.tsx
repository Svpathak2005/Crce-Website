import React from 'react'

const projects = [
  {
    name: 'Unmanned Aerial Vehicle – Logistics for medical and food supply',
    principalInvestigator: 'Prof. Swati Ringe',
    department: 'Computer',
    yearOfAward: '2019-20',
    amount: 30000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Smart cradle for reducing risk of SIDS using IOT',
    principalInvestigator: 'Prof. Dipali Koshti',
    department: 'Computer',
    yearOfAward: '2019-20',
    amount: 25000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Real Time Fire Detection and Suppression System using AI',
    principalInvestigator: 'Prof. Roshni Padate',
    department: 'Computer',
    yearOfAward: '2019-20',
    amount: 25000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Assistant to the Hearing Impaired (Speech Recognition)',
    principalInvestigator: 'Prof. Kalpana Deorukhkar',
    department: 'Computer',
    yearOfAward: '2019-20',
    amount: 30000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Application of game theory to find Equilibrium distribution of carbon credits',
    principalInvestigator: 'Prof. Prasad Lalit',
    department: 'Mathematics',
    yearOfAward: '2019-20',
    amount: 20000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Audio Classification With Wireless Sensor Networks Using Machine Learning for Home Security',
    principalInvestigator: 'Dr. Nilesh Patil',
    department: 'Information Technology',
    yearOfAward: '2019-20',
    amount: 40000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Performance Enhancement of Injection Molding Process using Different Types of Channels',
    principalInvestigator: 'Prof. Deepika Singh',
    department: 'Production',
    yearOfAward: '2019-20',
    amount: 25000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Temperature Measurements using K-Type Thermocouple and Infrared Thermometer to enable Green Manufacturing',
    principalInvestigator: 'Prof. Miriyala Veera Bhadra Rao',
    department: 'Production',
    yearOfAward: '2019-20',
    amount: 25000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Plastic bottles recycling for commercial Applications',
    principalInvestigator: 'Prof. Kranti Wagle',
    department: 'Electronics',
    yearOfAward: '2019-20',
    amount: 30000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Synthesis and Characterization of Compounds of Transition metal with N-benzoylanthronitic acid',
    principalInvestigator: 'Dr. Hemant Khanolkar',
    department: 'H & S',
    yearOfAward: '2018-19',
    amount: 50000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Stock market forecasting using neural network implementation on FPGA',
    principalInvestigator: 'Prof. Archana Lopes',
    department: 'Electronics',
    yearOfAward: '2018-19',
    amount: 30000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Smart soil analyzer using IoT',
    principalInvestigator: 'Prof. Henakausar Pendhari',
    department: 'Electronics',
    yearOfAward: '2018-19',
    amount: 20000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Automatic Chimney',
    principalInvestigator: 'Prof. Vaibhav Godbole',
    department: 'Electronics',
    yearOfAward: '2018-19',
    amount: 18000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Driver activity monitoring and warning system',
    principalInvestigator: 'Prof. Prajakta Dhamanskar',
    department: 'IT',
    yearOfAward: '2018-19',
    amount: 25000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Baby monitoring using Smart cradle',
    principalInvestigator: 'Prof. Sarika Davare',
    department: 'IT',
    yearOfAward: '2018-19',
    amount: 25000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Intelligent waste collector',
    principalInvestigator: 'Prof. Ashwini Pansare',
    department: 'Computer',
    yearOfAward: '2018-19',
    amount: 25000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Green Machining',
    principalInvestigator: 'Dr. Vasim A. Shaikh',
    department: 'Production',
    yearOfAward: '2017-18',
    amount: 30000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Smart unmanned vehicles for time-critical missions with autonomous system',
    principalInvestigator: 'Dr. Sunil K. Surve',
    department: 'Computer',
    yearOfAward: '2017-18',
    amount: 46000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Smart Wearable for senior citizens using IOT',
    principalInvestigator: 'Prof. Sunil Chaudhari',
    department: 'Computer',
    yearOfAward: '2017-18',
    amount: 30000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Solar Powered Smart Micro Grid for Rural Areas',
    principalInvestigator: 'Prof. Binsy Joseph',
    department: 'Electronics',
    yearOfAward: '2017-18',
    amount: 25000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Smart Air quality monitoring system in Urban Environment',
    principalInvestigator: 'Prof. Sangeeta Parshionikar',
    department: 'Electronics',
    yearOfAward: '2017-18',
    amount: 20000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
  {
    name: 'Rpi – Scope: Effective Tool for Farmers',
    principalInvestigator: 'Prof. Swapnali Makdey',
    department: 'Electronics',
    yearOfAward: '2017-18',
    amount: 30000,
    duration: '1 year',
    fundingAgency: 'University of Mumbai',
  },
]

const FundedProjects = () => {
  return (
    <div className="bg-gray-50 p-4">
      <h2 className="mb-4 text-xl font-semibold">Funded Research Projects</h2>
      <table className="min-w-full table-auto border border-gray-200 bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Project Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Principal Investigator
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Department
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Year of Award
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Amount (INR)
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Duration
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Funding Agency
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2 text-sm text-gray-600">
                {project.name}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {project.principalInvestigator}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {project.department}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {project.yearOfAward}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {project.amount}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {project.duration}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {project.fundingAgency}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FundedProjects
