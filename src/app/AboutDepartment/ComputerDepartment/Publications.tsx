const publications = [
    {
        id: 1,
        authors:
            'Sushma Nagdeote; Heenakausar Pendhari; Omkar Shirsat; Raj Lad; Sujata Chiwande',
        title: 'Esports analysis with data science',
        journal: 'AIP Conf. Proc. 2764, 060013 (2023)',
        link: 'https://doi.org/10.1063/5.0144108',
    },
    {
        id: 2,
        authors: 'Praditi Rede; Sahaana Iyer; Sheetal Sharma; Sujata Deshmukh',
        title:
            'Blockchain Based Identity Management System Using Cryptography and Steganography',
        journal: 'Publisher: IEEE',
        doi: '10.1109/ICIT58056.2023.10225957',
    },
    {
        id: 3,
        authors:
            'Pranav Gangurde, Melita Japhet. Clafacio Lobo, Nilesh Patil, Prachi Patil',
        title:
            'ResStorage - Blockchain Based Decentralized Resume Storage Application',
        journal: 'in 2022 IEEE World Conference on Applied Intelligence and Computing (AIC), August 2022',
    },
    {
        id: 4,
        authors:
            'Varad Patil, Dhrumil Shah, Yash Sankpal, Prajakta Dhamanskar, Prajakta Bhangale',
        title:
            'EARTHQUAKE MAGNITUDE PREDICTION USING NEURAL NETWORKS',
        journal:
            'Volume No. 14, Issue- 5 , October - December 2022 in Samriddhi: A Journal of Physical Sciences, Engineering and Technology, Impact Factor: 6.6, UGC Care Approved, Peer Reviewed and Referred Journal',
    },
    {
        id: 5,
        authors:
            'Robin Lobo, Sonali Joshi, Joel Syrus Fernandes, Prajakta Bhangale, Prajakta Dhamanskar',
        title:
            'A COMPUTABLE STUDY ON TACTICS TOWARDS CRIME PREDICTION AND ANALYSIS',
        journal:
            'Volume No. 14, Issue- 5 , October - December 2022 in Samriddhi: A Journal of Physical Sciences, Engineering and Technology, Impact Factor: 6.6, UGC Care Approved, Peer Reviewed and Referred Journal',
    },
    {
        id: 6,
        authors:
            'Tanisha Harry Braganza; Fatima Felix Pereira; Sameeksha Pravin Rane; Kranti Wagle',
        title: 'Multipurpose Application for the Visually Impaired',
        journal: '2022 2nd Asian Conference on Innovation in Technology (ASIANCON),26-28 August 2022',
    },
    {
        id: 7,
        authors: 'Sumit Kothari, Sujata Deshmukh, Samarth Mehta',
        title:
            'Comparison of Age, Gender and Ethnicity Prediction Using Traditional CNN and Transfer Learning',
        journal:
            '13th IEEE INTERNATIONAL CONFERENCE ON COMPUTING, COMMUNICATION AND NETWORKING TECHNOLOGIES (ICCCNT) 2022, October 3rd - 5th, 2022',
    },
    
];

import React from 'react'
/*
const publications = [
  {
    id: 1,
    authors:
      'Sushma Nagdeote; Heenakausar Pendhari; Omkar Shirsat; Raj Lad; Sujata Chiwande',
    title: 'Esports analysis with data science',
    journal: 'AIP Conf. Proc. 2764, 060013 (2023)',
    link: 'https://doi.org/10.1063/5.0144108',
  },
  {
    id: 2,
    authors: 'Praditi Rede; Sahaana Iyer; Sheetal Sharma; Sujata Deshmukh',
    title:
      'Blockchain Based Identity Management System Using Cryptography and Steganography',
    journal: 'Publisher: IEEE',
    doi: '10.1109/ICIT58056.2023.10225957',
  },
]
*/
const Publications: React.FC = () => {
  return (
    <div itemProp="articleBody" className="p-4">
      <table id="tablePreview" className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="w-4"></th>
            <th className="text-center text-lg font-bold">
              Publications for the year 2023-24
            </th>
          </tr>
        </thead>
        <tbody>
          {publications.map((publication) => (
            <tr key={publication.id}>
              <td className="w-4 text-center">{publication.id}</td>
              <td className="p-2 text-justify">
                <p>
                  {publication.authors}; {publication.title}{' '}
                  {publication.journal}{' '}
                  {publication.link && (
                    <a
                      href={publication.link}
                      className="text-blue-500 underline"
                    >
                      {publication.link}
                    </a>
                  )}
                  {publication.doi && (
                    <>
                      {' '}
                      DOI:{' '}
                      <a
                        href={`https://doi.org/${publication.doi}`}
                        className="text-blue-500 underline"
                      >
                        {publication.doi}
                      </a>
                    </>
                  )}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Publications