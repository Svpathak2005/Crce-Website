import React from 'react'

const patents = [
  {
    slNo: 1,
    patentNo: '379051-001',
    status: 'Granted',
    inventors: 'Dr. Bhushan Patil, Dr. Ketaki Joshi, Dr. Sujata Deshmukh',
    title:
      'Corner set punch for springback elimination in v sheet metal bending',
    filedDate: '10/02/2023',
    publishedDate: '22/03/2023',
  },
  {
    slNo: 2,
    patentNo: '375204-001',
    status: 'Granted',
    inventors: 'Dr. Ketaki Joshi, Dr. Bhushan Patil, Dr. Sujata Deshmukh',
    title: 'Football Thrower',
    filedDate: '7/12/2022',
    publishedDate: '13/01/2023',
  },
  {
    slNo: 3,
    patentNo: '374640-001',
    status: 'Granted',
    inventors: 'Dr. Bhushan Patil, Dr. Sujata Deshmukh, Dr. Ketaki Joshi',
    title: 'Article for Printing 3D parts using Electrochemical Deposition',
    filedDate: '25/11/2022',
    publishedDate: '27/01/2023',
  },
  {
    slNo: 4,
    patentNo: '202321015188',
    status: 'Published',
    inventors: 'Prof. Sangeeta Parshionikar, Prof. Archana Lopes',
    title: 'Verbal Agreement Signing using Blockchain & Speech Recognition',
    filedDate: '07/03/2023',
    publishedDate: '31/03/2023',
  },
  {
    slNo: 5,
    patentNo: '202321018653',
    status: 'Published',
    inventors: 'Prof. Archana Lopes, Prof. Sangeeta Parshionikar',
    title:
      'Metastore- An Image-Based 3D Garment-Making System For Virtual Try-Ons',
    filedDate: '19/03/2023',
    publishedDate: '14/04/2023',
  },
  {
    slNo: 6,
    patentNo: '202241051449',
    status: 'Published',
    inventors: 'Dr. Sujata Deshmukh',
    title:
      'IoT and Artificial Intelligence based fruit recognition, calorie estimation and suggestion for healthy life using Deep learning algorithms',
    filedDate: '08/09/2022',
    publishedDate: '16/09/2022',
  },
  {
    slNo: 7,
    patentNo: '202221060823',
    status: 'Published',
    inventors: 'Prof. Monali Shetty',
    title: 'Blockchain based system for project funding and CSR funding',
    filedDate: '25/10/2022',
    publishedDate: '18/11/2022',
  },
  {
    slNo: 8,
    patentNo: '202221070479',
    status: 'Published',
    inventors: 'Dr. Sujata Deshmukh, Prof. Supriya Kamoji, Dr. Bhushan Patil',
    title:
      'Floodknow: An AI Based Hybrid System For Flood Severity Prediction Based On Leveraging Both Textual And Visual Features Using Deep Neural Networks',
    filedDate: '07/12/2022',
    publishedDate: '16/12/2022',
  },
  {
    slNo: 9,
    patentNo: '2020102342',
    status: 'Granted',
    inventors: 'Prof. Hitendra Vaishnav',
    title: 'A Home Aquarium Monitoring System',
    filedDate: '19/09/2020',
    publishedDate: '14/10/2020',
  },
  {
    slNo: 10,
    patentNo: '296740',
    status: 'Granted',
    inventors: 'Prof. Ketaki Joshi, Dr. Bhushan Patil, Prof. Hitendra Vaishnav',
    title:
      'Article for Image Acquisition and Measurement of Surface and Dimensional Quality',
    filedDate: '18/08/2017',
    publishedDate: '19/07/2019',
  },
  {
    slNo: 11,
    patentNo: '201821031456 A',
    status: 'Published',
    inventors: 'Dr. Jorapur Vedavyasrao',
    title: 'An Improved Fuel Jet Apparatus For A Carburetor',
    filedDate: '22/08/2018',
    publishedDate: '12/10/2018',
  },
]

const PatentsPublications = () => {
  return (
    <div className="bg-gray-50 p-4">
      <h2 className="mb-4 text-xl font-semibold">
        Publications for the year 2022-23
      </h2>

      <h2 className="mb-4 mt-6 text-xl font-semibold">
        Patents for the year 2022-23
      </h2>
      <table className="min-w-full table-auto border border-gray-200 bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Sl. No
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Patent No
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Status
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Inventor(s)
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Title
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Filed Date
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Published/Granted Date
            </th>
          </tr>
        </thead>
        <tbody>
          {patents.map((patent) => (
            <tr key={patent.slNo} className="border-t">
              <td className="px-4 py-2 text-sm text-gray-600">{patent.slNo}</td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {patent.patentNo}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {patent.status}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {patent.inventors}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {patent.title}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {patent.filedDate}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {patent.publishedDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PatentsPublications
