import React from 'react'

const publications = [
  {
    title:
      'Pranav Gangurde, Melita Japhet, Clafacio Lobo, Nilesh Patil, Prachi Patil, ResStorage - Blockchain Based Decentralized Resume Storage Application',
    conference:
      '2022 IEEE World Conference on Applied Intelligence and Computing (AIC), August 2022',
  },
  {
    title:
      'Varad Patil, Dhrumil Shah, Yash Sankpal, Prajakta Dhamanskar, Prajakta Bhangale, EARTHQUAKE MAGNITUDE PREDICTION USING NEURAL NETWORKS',
    details:
      'Volume No. 14, Issue 5, October - December 2022 in Samriddhi: A Journal of Physical Sciences, Engineering and Technology, Impact Factor: 6.6, UGC Care Approved, Peer Reviewed and Referred Journal',
  },
  {
    title:
      'Robin Lobo, Sonali Joshi, Joel Syrus Fernandes, Prajakta Bhangale, Prajakta Dhamanskar, A COMPUTABLE STUDY ON TACTICS TOWARDS CRIME PREDICTION AND ANALYSIS',
    details:
      'Volume No. 14, Issue 5, October - December 2022 in Samriddhi: A Journal of Physical Sciences, Engineering and Technology, Impact Factor: 6.6, UGC Care Approved, Peer Reviewed and Referred Journal',
  },
  {
    title:
      'Tanisha Harry Braganza, Fatima Felix Pereira, Sameeksha Pravin Rane, Kranti Wagle, Multipurpose Application for the Visually Impaired',
    conference:
      '2022 2nd Asian Conference on Innovation in Technology (ASIANCON), 26-28 August 2022',
  },
  {
    title:
      'Sumit Kothari, Sujata Deshmukh, Samarth Mehta, Comparison of Age, Gender and Ethnicity Prediction Using Traditional CNN and Transfer Learning',
    conference:
      '13th IEEE INTERNATIONAL CONFERENCE ON COMPUTING, COMMUNICATION AND NETWORKING TECHNOLOGIES (ICCCNT) 2022, October 3rd - 5th, 2022',
  },
]

const MechPublications = () => {
  return (
    <div className="bg-gray-50 p-4">
      <h2 className="mb-4 text-xl font-semibold">
        Publications for the year 2022-23
      </h2>
      <ul className="space-y-3">
        {publications.map((publication, index) => (
          <li
            key={index}
            className="rounded-md border border-gray-200 bg-white p-3"
          >
            <p className="text-base font-medium text-gray-800">
              {publication.title}
            </p>
            {publication.details && (
              <p className="mt-1 text-sm text-gray-600">
                {publication.details}
              </p>
            )}
            {publication.conference && (
              <p className="mt-1 text-sm text-gray-600">
                {publication.conference}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MechPublications
