import React, { useState } from 'react'

const publications_19 = [
  {
    title:
      'Seema Talmale, Srija Unnikrishnan, B K Lande, “Modified Linear Block Code with Code Rate 1/2 and Less Than ½”',
    details:
      'Journal of Discrete Mathematical Sciences and Cryptography, Taylor and Francis, Vol. 22 (2019), No. 2, pp. 139-150, ISSN 0972-0829 (Print), ISSN 2169-0065 (Online), DOI: 10.1080/09720529',
  },
  {
    title:
      'Monica Khanore, Srija Unnikrishnan, “A Robust Hybrid Interference Canceller for Multiuser, Multipath CDMA System”',
    details:
      'International Conference ICECEIC 2019, in association with IEEE Madras Section, Kanchipuram, Tamil Nadu, 30-31 January 2019',
  },
  {
    title:
      'Seema Talmale, Srija Unnikrishnan, B K Lande, “Decoding of Error Correcting Codes: Various Approaches”',
    details:
      'International Conference ICECEIC 2019, in association with IEEE Madras Section, Kanchipuram, Tamil Nadu, 30-31 January 2019',
  },
  {
    title:
      'Ami Munshi, Srija Unnikrishnan, “Compressive Sensing in Channel Estimation for SISO and MIMO OFDM Systems”',
    details:
      'TENCON 2018, IEEE Region 10 (Asia-Pacific) Conference, Jeju, S. Korea, 28-31 October 2018',
  },
  {
    title:
      'Sushma Nagdeote, “Parametric And Non Parametric Classification For Minimizing Misclassification Errors”',
    details:
      'International Conference on Social Networking and Computational Intelligence, 8-9 March 2019',
  },
  {
    title:
      'Vaibhav Godbole, “A Message Cryptography Technique Using DNA Based Hybrid Approach”',
    details: 'Defence S & T Technical Bulletin, Volume 12, No. 1, pp. 79-90',
  },
  {
    title: 'Swapnali Makdey, “2D Material Based Varactor”',
    details:
      'International Conference on Nanoscience and Nanotechnology, 28-30th 2019',
  },
  {
    title:
      'Swapnali Makdey, Jayen Modi, Deepak Bhoir, “Understanding Semiconductor Construction & Fabrication with 3-D Modeling”',
    details: 'OBE Symposium at DY Patil University, 8th December 2018',
  },
  {
    title:
      'Jayen Modi, Deepak Bhoir, “Teaching Small Signal Amplifiers Using Bloom’s Taxonomy”',
    details: 'OBE Symposium at DY Patil University, 8th December 2018',
  },
  {
    title:
      'Jayen Modi, Deepak Bhoir, “Poster Presentation for Participative Learning Experience”',
    details: 'OBE Symposium at DY Patil University, 8th December 2018',
  },
  {
    title:
      'Sangeeta Parshionikar, “Real-Time Monitoring of CO2, TYOC, PM2.5, PM10”',
    details:
      'International Conference on Intelligent Sustainable System (ICISS 2019), 21-22 March 2019, IEEE Xplore ISBN: 978-1-5386-7799-5',
  },
  {
    title: 'Swapnali Makdey, “RpiScope: An Effective Tool for Farmers”',
    details:
      'International Conference on Recent Innovations in Electrical, Electronics and Communication Engineering, 27-28 July 2018, IEEE Xplore ISBN: 978-1-5386-5994-6',
  },
  {
    title:
      'Sangeeta Parshionikar, “Efficient Portable Camera Based Text to Speech”',
    details:
      'International Conference on Intelligent Sustainable System (ICISS 2019), 21-22 March 2019, IEEE Xplore ISBN: 978-1-5386-7799-5',
  },
  {
    title:
      'P.V. Kasambe, D. V. Bhoir, K. S. Bhole, “Design and Simulation of High SNR Varying Thickness Embedded Strain Sensing Polymer Micro-Cantilever for Bio-Sensing Applications”',
    details:
      'Proceedings of the ASME 2018 International Design Engineering Technical Conferences & Computers and Information in Engineering Conference IDETC/CIE 2018, August 26-29, 2018, Quebec City, Canada',
  },
  {
    title:
      'Jayen Modi, Joseph Patole, Gaurav Kolpate, Chinmay More, “Security System & House Automation Using Raspberry Pi”',
    details:
      'International Conference on Recent Advances & Challenges in Engineering and Management (RACEM -2019), March 29-30, 2019',
  },
]

const publications_18 = [
  {
    title:
      'Aditi S. Deshpande, Kranti Wagle, “FPGA Based RF Signal Generation for MRI Systems”',
    details:
      'Proceedings of the Second International Conference on Computing Methodologies and Communication (ICCMC 2018), IEEE Conference Record #42656; IEEE Xplore ISBN: 978-1-5386-3452-3',
  },
  {
    title:
      'Sonia I. Fernandes, Kranti Wagle, “A Survey on Scheduling in Heterogeneous Distributed Systems for Higher Reliability”',
    details:
      'International Journal of Advanced Research in Electrical, Electronics and Instrumentation Engineering, ISSN: 2320-3765',
  },
  {
    title:
      'Aditi S. Deshpande, Kranti Wagle, “RF Signal Generation for MRI System Using PS-PL Communication in FPGA over Ethernet”',
    details: '',
  },
  {
    title:
      'Avilash Sawant, Shilpa Patil, “Waveform Generator for RADAR Using FPGA”',
    details:
      '3rd IEEE International Conference on Recent Trends in Electronics, Information & Communication Technology (RTEICT-2018), May 18-19, 2018',
  },
  {
    title:
      'Sushma Nagdeote, “Detection of Lung Nodule Using Image Processing Techniques”',
    details: 'IJCRT Volume 6, Issue 2, April 2018, ISSN: 2320-2882',
  },
  {
    title:
      'Furqan Shaikh, Binsy Joseph, “Simulation of Synchronous Reference Frame PLL for Grid Synchronization Using Simulink”',
    details:
      'Proceedings of International Conference on Advances in Computing, Communication and Control 2017; IEEE Xplore',
  },
  {
    title:
      'Iqra Rizvi, Narayanan Kallingal, “MR Image Enhancement for Extra Axial”',
    details:
      'International Journal of Innovative Research in Computer and Communication Engineering, Vol. 5, Issue 7, July 2017',
  },
  {
    title:
      'P.V. Kasambe, K.S. Bhide, D.V. Bhoir, “Performance Evaluation of Embedded Strain Sensing Varying Thickness Polymer Microcantilever as Biosensor Platform”',
    details:
      'International Journal of Latest Technology in Engineering, Management & Applied Science (IJLTEMAS), Volume VI, Issue VII, July 2017, ISSN 2278-2540',
  },
  {
    title:
      'Meghna Punjabi, Sapna Prabhu, “An ANN-Based Detection of Obstructive Sleep Apnea from Simultaneous ECG and SpO2 Recordings”',
    details:
      'International Conference on ISMAC in Computational Vision and Bio-Engineering (ISMAC - CVB 2018)',
  },
  {
    title:
      'Archana Lopes, Sangeeta Parshionkar, Heenakausar Pendhari, “Early Detection of Heart Disease Using BRANN”',
    details: 'IJCRT Volume 6, Issue 2, April 2018, ISSN: 2320-2882',
  },
]

const publications_17 = [
  {
    title:
      'Ami Munshi, Srija Unnikrishnan, “Design, Simulation and Evaluation of SISO/MISO/MIMO- OFDM Systems”',
    details:
      'International Journal of Latest Technology in Engineering, Management and Applied Sciences, Volume VI, Issue VIIS, ISSN 2278-2540, July 2017',
  },
  {
    title:
      'D. V. Bhoir, Anish Bhurke, “Review Paper for Sample Separation and Preparation for Gas Chromatography”',
    details:
      'International Journal of Science Engineering and Research (IJSER), Volume 4, Issue 10, October 2016, ISSN 2437-3878',
  },
  {
    title:
      'D. V. Bhoir, Mangala Satardekar, “Analysis and Enhancement in the Performance of Electrical Muscle Simulator”',
    details:
      'International Journal of Engineering Science & Research Technology, Vol. (Iss.), January 2017, ISSN: 2277-9655',
  },
  {
    title:
      'Deepak Bhoir, Nandana Prabhu, Uma Rao, “Automatic Detection of Diabetic Retinopathy: A Review”',
    details:
      'Proceedings of the 11th INDIACom; INDIACom-2017, March 01-03, 2017, International Conference on “Computing for Sustainable Global Development”',
  },
  {
    title:
      'D. V. Bhoir, P. V. Kasambe, K. S. Bhole, “Performance Evaluation of Embedded Strain Sensing Varying Thickness Polymer Microcantilever as Biosensor Platform”',
    details:
      'International Journal of Latest Technology in Engineering, Management & Applied Science (IJLTEMAS), Volume VI, Issue VII, July 2017, ISSN 2278-2540',
  },
  {
    title:
      'Nadar Laveena, K. Narayanan, “Categorization of Diabetic Retinopathy by Dissociating Features in a Retinal Image”',
    details:
      'International Journal of Latest Engineering and Management Research (IJLEMR), ISSN: 2455-4847, Volume 02 - Issue 02, February 2017, pp. 70-79',
  },
  {
    title:
      'Tanushree Bhilare, Kranti Wagle, “Analysis of Features Affecting the Time Predictability”',
    details:
      'International Journal of Advanced Research in Electrical, Electronics and Instrumentation Engineering, Vol. 5, Issue 10, October 2016',
  },
  {
    title:
      'Nadeem Ahmad, Binsy Joseph, “Review Paper on Multilevel Inverters with Its Control and Power Quality Parameters”',
    details:
      'Imperial Journal of Interdisciplinary Research (IJIR), Vol-3, Issue 1, January 2017, ISSN: 2454-1362',
  },
  {
    title:
      'Prabhat Shukla, Swapnali Makde, “Simulation of Silicon Nanowire Field Effect Transistor for Different High k Dielectric Material”',
    details:
      'International Journal of Scientific Engineering and Research (IJSER), Volume 5, Issue 2, February 2017',
  },
]

const publications_16 = [
  {
    title:
      'K. Narayanan, Nadar Laveena Lasar, “Diagnosis of Diabetic Retinopathy Using Morphology Methods”',
    details:
      'International Journal of Advanced Research in Electronics and Communication Engineering (IJARECE), ISSN: 2278 – 909X, Volume 5, Issue 3, March 2016',
  },
  {
    title:
      'Mitali R. Ambekar, Sapna Prabhu, “A Novel Algorithm to Obtain Respiratory Rate from the PPG Signal”',
    details:
      'International Journal of Computer Applications, ISSN: 0975 – 8887, Volume 126 – No.15, September 2015, Pgs. 9-12',
  },
  {
    title:
      'A. Chaudhari, S. Prabhu, R. Pinto, “Frequency Estimator to Improve Short Range Accuracy in FMCW Radar”',
    details:
      'Advances in Computing, Communication and Informatics (ICACCI), 10-13 August 2015, Pgs. 640-644',
  },
  {
    title:
      'Joshua Michael, Srija Unnikrishnan, “Peak-To-Average Power Ratio Reduction in an OFDM System Using Signal Distortion Technique”',
    details:
      'International Journal of Global Technology Initiatives, ISSN (Print): 2277-6591, ISSN (Online): 2320-1207, Volume 5, Issue 1, March 2016',
  },
  {
    title:
      'Mrudula Chikhale, Srija Unnikrishnan, Monica Khanore, “RFID Enabled Mobile Billing in Retail”',
    details:
      'International Journal of Advanced Research in Computer and Communication Engineering (IJARCCE), ISSN (Online) 2278-1021, ISSN (Print) 2319-5940, Vol. 4, Issue 6, June 2015',
  },
  {
    title:
      'Ami Munshi, Srija Unnikrishnan, “Vehicle to Vehicle Communication Using DS-CDMA Radar”',
    details:
      'ScienceDirect, Procedia Computer Science, Volume 49 (2015), pp 235-243',
  },
  {
    title:
      'Smitha Sunny, Srija Unnikrishnan, “Performance Evaluation of Routing Protocols in MANET”',
    details:
      'International Journal of Electronics, Communication and Computer Engineering (IJECCE), ISSN (Online): 2249-071X, ISSN (Print): 2278-4209, Volume 6, Issue 1, January 2015',
  },
  {
    title:
      'Sharda Narawade, Swapnali Makdey, “Study on Performance of 22nm Single Gate and Multi-Gate MOSFET”',
    details:
      'International Journal of Scientific Engineering and Research (IJSER), ISSN: 2347-3878, October 2016',
  },
  {
    title:
      'Manasi Warde, V. Chandana, Sangeeta Parshonikar, “Design and Analysis of 8x8 Static RAM”',
    details:
      'International Journal of Scientific and Engineering Research, Vol. 6, Issue 7, July 2015',
  },
  {
    title:
      'Prasanna Sagdeo, Shilpa Patil, Vipinkumar Meshram, “SVPWM Controller for Three Phase Inverter Using PI Controller Operating Under Nonlinear Load”',
    details:
      'International Journal of Advance Research in Computer and Communication Engineering, Vol. 4, Issue 10, October 2015',
  },
  {
    title:
      'Sapna Prabhu, Rohin Daruwala, “Shared Resource Management in Multi-Core Systems Using LV Competition Model”',
    details:
      'International Journal of High Performance Computing and Networking, Vol. 9, No. 3, 2016, Pgs. 206-217',
  },
]

const publications_15 = [
  {
    title:
      'Ami Munshi, Srija Unnikrishnan, “Vehicle to Vehicle Communication Using DS-CDMA Radar”',
    details:
      'International Conference on Advances in Computing, Communications and Control, Mumbai, April 2015',
  },
  {
    title:
      'Shraddha Patil, Srija Unnikrishnan, “PAPR Reduction in OFDM Systems Using Advanced SLM Techniques”',
    details:
      'International Conference and Workshop on Electronics and Telecommunication Engineering, Mumbai, 2014',
  },
  {
    title:
      'Najib Ghatte, Shilpa Patil, Dr. D.V. Bhoir, “Double Precision Floating Point Square Root Computation”',
    details:
      'International Journal of Engineering Trends and Technology (IJETT), Vol. 13, No. 6, July 2014',
  },
  {
    title:
      'Aqhsa Syed, K. Narayanan, “Detection of Tumor in MRI Images Using Artificial Neural Networks”',
    details:
      'International Journal of Advanced Research in Electrical, Electronics and Instrumentation Engineering (IJAREEIE), Volume 3, Issue 9, September 2014',
  },
  {
    title:
      'Prabhu S, Daruwala R, “Workload Characterization for Shared Resource Management in Multi-core Systems”',
    details:
      'Proceedings of International Conference on Computing, Communications and Informatics (ICACCI 2014), September 24-27, 2014, ISBN No. 978-1-4799-3078-4, Pgs. 607-612',
  },
  {
    title:
      'Prabhu S, Daruwala R, “Improving the Scalability of Shared Cache Multi-core Systems”',
    details:
      'India Conference (INDICON), 2014 Annual IEEE, YASHADA, December 12-14, 2014, ISBN No. 978-1-4799-5362-2, Pgs. 1-6',
  },
  {
    title:
      'Aparna Vishwanath, Ramesh V., Sapna Prabhu, “Task Scheduling in Homogeneous Multiprocessor Multi-Network Systems Using Evolutionary Techniques”',
    details:
      'International Journal of Engineering Research and Technology (IJERT)',
  },
  {
    title:
      'Parshvi Shah, Sapna Prabhu, “Hybrid Learning-based Branch Predictor”',
    details:
      'International Journal of Engineering Research and Technology (IJERT), ISSN 2278-0181, Vol. 3, Issue 8, Pages 1135-1140, August 2014',
  },
  {
    title:
      'Najib Ghatte, Shilpa Patil, Dr. D.V. Bhoir, “Single Precision Floating Point Division”',
    details:
      'Proceedings of Fifth IRF International Conference, August 2014, Goa, India, ISBN: 978-93-84209-45-2',
  },
  {
    title:
      'Najeeb Ghate, Shilpa Patil, Dr. D.V. Bhoir, “Single Precision Floating Point Square Root Computation”',
    details:
      'Proceedings of Fifth IRF International Conference, August 2014, Goa, India, ISBN: 978-93-84209-45-2',
  },
  {
    title:
      'Dattaprasad Madur, Dr. Deepak Bhoir, Swapnali Makdey, “Three Dimensional Integration of CMOS”',
    details:
      'International Journal of Electronics and Communication Engineering and Technology (IJECET), Vol. 5, Issue 11, November 2014, pp 01-05',
  },
  {
    title:
      'Tushar Surwadekar, Swapnali Makdey, “Upgrading the Performance of VLSI Circuit Using FinFET”',
    details:
      'International Journal of Engineering Trends and Technology (IJETT), Volume 14, No. 4, August 2014, Page 179-184',
  },
]

const publications_14 = [
  {
    title:
      'Swati Mirlekar, Dr. Srija Unnikrishnan, Monica Khanore, “NFC Ticketing Methodology for Non-NFC Mobiles”',
    details:
      'International Journal of Infinite Innovations in Technology (IJIIT), Volume-2, Issue-1, July 2013-2014, ISSN: 2278-9057',
  },
  {
    title:
      'Manav Jaiswal, Akshay Gavandi, Kundan Srivastav, Dr. Srija Unnikrishnan, “Motion-Sensed RTOS-based Application Control Using Image Processing”',
    details:
      'International Journal of Computer Engineering and Technology (IJCET), Volume 4, Issue 6, pp. 337-346, November-December 2013, ISSN 0976-6367 (Print), ISSN 0976-6375 (Online)',
  },
  {
    title:
      'Poonam Shrivastava, Dr. Srija Unnikrishnan, “Analysis of LEACH and Its Variants for Routing in Wireless Sensor Networks”',
    details:
      'International Journal of Engineering Research and Application (IJERA), Vol 3, Issue 6, pp. 386-389, Nov-Dec 2013, ISSN: 2248-9622',
  },
  {
    title:
      'Najib Ghatte, Shilpa Patil, Dr. D.V. Bhoir, “Floating Point Engine Using VHDL”',
    details:
      'International Journal of Engineering Trends and Technology (IJETT), Vol 8(4), Feb 2014, pp. 198-203, ISSN: 2231-5381',
  },
  {
    title:
      'Najib Ghatte, Shilpa Patil, Dr. D.V. Bhoir, “High-Speed ALU Design Using Vedic Sutras”',
    details:
      'International Conference on Recent Trends in Computer and Electronics Engineering (ICRTCEE), Mumbai',
  },
  {
    title:
      'Sangeeta Parshionikar, Dr. D.V. Bhoir, “Standby Leakage Power Reduction Techniques in Deep Submicron CMOS Circuits”',
    details:
      'International Journal of Computer Applications, ISSN: 0975 – 8887',
  },
  {
    title:
      'Vinit Pereira, K. Narayanan, “Intensity Mapping Function Based High ISO Noise Reduction in Images”',
    details:
      'International Journal of Global Technology (IJGTI), Volume 3, Issue 1, March 2014, ISSN (Print): 2277-6591, ISSN (Online): 2320-1207',
  },
  {
    title:
      'Uttara Bhatt, Dr. D.V. Bhoir, K. Narayanan, “High Speed Multiplier Using Vedic Mathematics”',
    details:
      'International Journal of Research in Engineering Technology (IJRET), Volume 3, Issue 1, Jan 2014, Pages 548-552, e-ISSN: 2319-1163, P-ISSN: 2321-7308',
  },
  {
    title:
      'Prabhu S., Daruwala R., “Performance Variability of SPECCPU 2006 Programs in Multi-core Systems”',
    details:
      'India Conference (INDICON), 2013, Annual IEEE, IITB, December 13-15, 2013, ISBN No. 978-1-4799-2274-1, pp. 1-6',
  },
]

type Publication = {
  title: string
  details?: string
  conference?: string
}

type PublicationsByYear = {
  [year: string]: Publication[]
}

const ECSPublications: React.FC = () => {
  const allPublications: PublicationsByYear = {
    2019: publications_19,
    2018: publications_18,
    2017: publications_17,
    2016: publications_16,
    2015: publications_15,
    2014: publications_14,
  }

  const sortedYears = Object.keys(allPublications).sort(
    (a, b) => Number(b) - Number(a)
  )

  const [expandedYears, setExpandedYears] = useState<Record<string, boolean>>(
    {}
  )

  const toggleYear = (year: string) => {
    setExpandedYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }))
  }

  const loadMore = (year: string) => {
    setExpandedYears((prev) => ({
      ...prev,
      [year]: true,
    }))
  }

  return (
    <div className="bg-gray-50 p-4">
      <h2 className="mb-4 text-2xl font-semibold">Publications</h2>
      <ul className="space-y-3">
        {sortedYears.map((year) => (
          <li
            key={year}
            className="rounded-md border border-gray-200 bg-white p-3"
          >
            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={() => toggleYear(year)}
            >
              <h3 className="text-xl font-medium text-gray-800">{`Publications for the year ${year}`}</h3>
              <span className="text-gray-600">
                {expandedYears[year] ? '-' : '+'}
              </span>
            </div>
            {expandedYears[year] && allPublications[year] && (
              <ul className="mt-3 space-y-2">
                {allPublications[year]
                  ?.slice(
                    0,
                    expandedYears[year] === true
                      ? allPublications[year].length
                      : 5
                  )
                  .map((publication, index) => (
                    <li
                      key={index}
                      className="rounded-md border border-gray-200 bg-gray-100 p-3"
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
                {allPublications[year]?.length > 5 &&
                  expandedYears[year] !== true && (
                    <button
                      onClick={() => loadMore(year)}
                      className="mt-2 text-blue-500 hover:underline"
                    >
                      Load More
                    </button>
                  )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ECSPublications
