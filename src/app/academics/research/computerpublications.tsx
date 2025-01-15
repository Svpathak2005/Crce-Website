import React, { useState } from 'react'

const publications_23 = [
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
  {
    title:
      'Kalpana Deorukhkar, Satish Ket, Optimal Hybrid LSTM-RNN for Image Captioning with Deep Features',
    conference:
      'International Conference on Embracing Industry 4.0 Technologies for Sustainable Growth (ICEI 4.0), April 2022',
  },
  {
    title:
      'Brendan Lucas, Aditya Mahamuni, Vinyas Kulal, Abhi Gupta, Kalpana Deorukhkar, Affordable Real-Time Heart Rate, ECG & SpO2 Monitoring System Using Internet of Things (IoT)',
    details:
      'Volume 10, Issue XI, International Journal for Research in Applied Science and Engineering Technology (IJRASET), Page No: 1852-1858, ISSN: 2321-9653, www.ijraset.com',
  },
  {
    title:
      'Ron George, Swati Ringe, Clayton Almeida, Akshay Naphade, Resolving the Data Imbalance problem in Fraud Detection Using Sampling and Machine Learning Techniques',
    details: 'POSITIF Journal, Vol. 22, Issue 7, 2022, ISSN NO: 0048-4911',
  },
  {
    title:
      'Thomas, M. and Meshram, B.B., ChSO-DNFNet: Spam detection in Twitter using feature fusion and optimized Deep Neuro Fuzzy Network',
    details:
      'Advances in Engineering Software [Preprint], (175), 2023. Available at: https://doi.org/10.1016/j.advengsoft.2022.103333',
  },
  {
    title:
      'Thomas, M. and Meshram, B.B., A Brief Review of Network Forensics Process Models and a Proposed Systematic Model for Investigation',
    details:
      'Intelligent Cyber Physical Systems and Internet of Things [Preprint], (Chapter 45), 2022. DOI: 10.1007/978-3-031-18497-0',
  },
  {
    title:
      'Merly Thomas, B.B. Meshram, Combating the Distributed Network Attacks using A Proposed Progressive Analyzer based on an Ensemble Learning Framework',
    details:
      '13th IEEE International Conference on Computing, Communication and Networking Technologies (ICCCNT) 2022, October 3rd - 5th, 2022',
  },
  {
    title:
      'Pranav Gangurde, Melita Japhet, Clafacio Lobo, Nilesh Patil, Prachi Patil, ResStorage - Blockchain Based Decentralized Resume Storage Application',
    details:
      '2022 IEEE World Conference on Applied Intelligence and Computing (AIC), August 2022',
  },
  {
    title:
      'Vijay Shelake, Narendra Shekokar, Cyber Security Threats and Challenges Facing Human Life',
    details: '1st ed., Chapman and Hall/CRC, Taylor & Francis, 2022',
  },
]

const publications_22 = [
  {
    title:
      'Sujata Deshmukh, Bhushan Patil, Ketaki Joshi, Chinmay Gaonkar, Prerna Pallan, Sumedh Bhatkar, A Novel Method For IOT Based Smart Traffic System',
    details:
      'Industrial Engineering Journal, Vol. XV & Issue No. 06, June 2022, UGC approved Journal',
  },
  {
    title:
      'Sujata Deshmukh, Y. Khasgiwala, D.T. Castellino, A Decentralized Federated Learning Paradigm for Semantic Segmentation of Geospatial Data',
    details:
      'International Conference on Intelligent Computing & Optimization (ICO), Lecture Notes in Networks and Systems, vol 371, Springer, Cham, January 2022. https://doi.org/10.1007/978-3-030-93247-3_20',
  },
  {
    title:
      'Sujata Deshmukh, P. Rede, S. Sharma, S. Iyer, Voice-Enabled Vision For The Visually Disabled',
    details:
      '2021 International Conference on Advances in Computing, Communication, and Control (ICAC3), 2021, pp. 1-6. doi: 10.1109/ICAC353642.2021.9697125, Scopus indexed',
  },
  {
    title:
      'Sujata Deshmukh, Candida Noronha, Lizel Farnandes, Gini Chacko, Virtual E-mail Assistance for The Visually Impaired',
    details:
      'IEEE Conference on Technologies for Future Cities (CTFC 2021), 8th & 9th October 2021',
  },
  {
    title:
      'Sujata Deshmukh, Amurto Basu, Sarvesh Kulkarni, Shubham Mishra, Prashant Deshmukh, Bhushan Patil, Disaster Damage Assessment of Satellite Images Using Transfer Learning With Fine Tuning',
    details:
      'Journal of Engineering, Project, and Production Management, 2022, Scopus indexed',
  },
  {
    title:
      'V. Rao, B.T. Patil, V Shaikh, D.S.S Sudhakar, Sujata Deshmukh, Investigation of Surface Roughness and Cutting Temperature Parameters in Turning AISI 4340 Steel using MQL Mist Technique with Nano-Fluids (n-Al2O3, n-MoS2 & n-GrapheneJ mixed in Edible Vegetable Coconut Oils)',
    details:
      'Journal of Engineering, Project, and Production Management, 2022, Scopus indexed [Accepted through RGIT ICEI4.0]',
  },
  {
    title:
      'Dipali Bhise, B.T. Patil, V Shaikh, D.S.S Sudhakar, Sujata Deshmukh, Comparative Economic Analysis and Investigation of Micro Lubrication Over Conventional Cooling in Manufacturing',
    details:
      'Journal of Engineering, Project, and Production Management, 2022, Scopus indexed [Accepted through RGIT ICEI4.0]',
  },
  {
    title:
      'Monali Shetty, S. Shetty, J. Dsouza, Cyberbullying Detection in Native Languages',
    details:
      'Springer, International Conference on Soft Computing for Security Applications, 2021',
  },
  {
    title:
      'Ashwini Pansare, S. I. Amjad Abidi, A. A. Almeida, L. G. Soares, Interactive Map Application For Real-Time Crime Reporting',
    details:
      '2021 International Conference on Advances in Computing, Communication, and Control (ICAC3), 2021, pp. 1-8, doi: 10.1109/ICAC353642.2021.9697179',
  },
  {
    title:
      'Mario Dias, Hansie Aloj, Nijo Ninan, Dipali Koshti, BERT Based Multiple Parallel Co-attention for Visual Question Answering',
    details: '6th International IEEE Conference ICICCS 2022, May 25-27, 2022',
  },
  {
    title:
      'Ashwini Pansare, Sanath Shetty, Ganesh Reddy, Princely Lopes, Cyber Bullying Detection System',
    details:
      '4th International Conference PICET 2022, AIP Publishing, Scopus indexed',
  },
  {
    title:
      'Supriya Kamoji, Mario Dias, Hansie Aloj, Nijo Ninan, First Aid and Emergency Assistance Robot for Individuals at Home using IoT and Deep Learning Models',
    details:
      'International Conference on Embracing Industry 4.0 Technologies for Sustainable Growth, April 2022',
  },
  {
    title:
      'Swati Ringe, Davin Barboza, Sanfer Noronha, Mayank Srivastava, Food Ordering Assistant with Dish Recognition and Recommendation System',
    details: 'ICRTTEAS 2021, held on 19-20 July 2021',
  },
]

const publications_21 = [
  {
    title:
      'Vedant S., Jason D., Mayank S., Mahendra M., Dhananjay K., Leveraging Deep Learning and IoT for Monitoring COVID-19 Safety Guidelines Within College Campus',
    details:
      'In: Garg D., Wong K., Sarangapani J., Gupta S.K. (eds), Advanced Computing. IACC 2020, Communications in Computer and Information Science, vol 1367, Springer, Singapore, 2021. https://doi.org/10.1007/978-981-16-0401-0_3',
  },
  {
    title:
      'Samarjeet Kaur, Vedant Sahai, Aditi Jaiswal, Sayonsom Chanda, Knowledge Mining for Defining Systemic Engineering Practices',
    details:
      '4th International Conference on Electronics, Communication and Aerospace Technology (ICECA 2020), pp. 1346-1352, doi: 10.1109/ICECA49313.2020.9297380',
  },
  {
    title:
      'Benita Rego, Nolita Rego, Mohit Kunder, Social Media Analysis for Mental Health Evaluation',
    details:
      'International Journal for Research in Applied Science & Engineering Technology (IJRASET), Volume 9 Issue IV, April 2021, pp. 1453-1460, ISSN: 2321-9653. doi: https://www.doi.org/10.22214/ijraset.2021.33962',
  },
  {
    title:
      'S. Kaur, V. Sahai, A. Jaiswal, Sayonsom Chanda, Knowledge Mining for Defining Systemic Engineering Practices',
    details:
      '4th International Conference on Electronics, Communication and Aerospace Technology (ICECA 2020), pp. 1346-1352, doi: 10.1109/ICECA49313.2020.9297380',
  },
  {
    title:
      'D. Koshti, S. Kamoji, K. Cheruthuruthy, S. P. Shahi, M. Mishra, A Detection, Tracking and Alerting System for Covid-19 using Geo-Fencing and Machine Learning',
    details:
      '5th International Conference on Intelligent Computing and Control Systems (ICICCS), 2021, pp. 1499-1506, doi: 10.1109/ICICCS51141.2021.9432254',
  },
  {
    title:
      'Swati Ringe, Sharwari Marathe, Rajesh Manjrekar, Raksha Shetty, Teaching Pre-schoolers using VQA: A Web App that Answers Natural Language Questions',
    details:
      'Zeichen Journal, Vol 6, Issue 9, September 2020, pp. 64-71, ISSN No: 0932-4747',
  },
  {
    title:
      'Swati Ringe, Vedant Sakhardande, Cajetan Rodrigues, Atharva Atre, Drone Delivery - Application and Path Optimization',
    details: 'Alochana Chakra Journal, September 2020, Vol 9, Issue 9',
  },
  {
    title:
      'Ashwini Pansare, Simran Gadkari, Jnnell Mathians, Merlin P, Categorization of Diabetic Retinopathy and Identification of Characteristics to Assist Effective Diagnosis',
    details:
      '3rd IEEE International Conference on Emerging Smart Computing and Informatics, 5th-7th March 2021',
  },
  {
    title:
      'Mahendra Mehra, Steve D’Costa, Ryan D’Mello, Joseph George, Dr. D.R. Kalbande, Leveraging Deep Learning for Nail Disease Diagnostic',
    details:
      '4th Biennial International Conference on Nascent Technologies in Engineering, IEEE Conference (Scopus indexed), January 2021',
  },
  {
    title:
      'Monali Shetty, Sankalp Rane, Selection of Optimal Cricket Team Based on the Players Performance',
    details:
      'IEEE XPLORE ISBN:978-1-7281-5371-1, International Conference on Communication and Electronics Systems 2020, July 2020',
  },
  {
    title:
      'Supriya Kamoji, Dipali Koshti, Joshua Noronha, Smart Street Lamps: A Solution to Urban Pollution',
    details:
      '2nd International Conference on Inventive Research in Computing Applications (ICIRCA) 2020, RVS College of Engineering and Technology, Coimbatore, India, 15-17 July 2020',
  },
  {
    title:
      'Carol Sebastian, Princeton Baretto, Sherwin Pillai, Supriya Kamoji, Virtual Assistance Using Question Generation/Answering',
    details:
      'IEEE Sponsored International Conference on Communication, Information and Computing Technology (ICCICT 2021), June 25-27, 2021, Organised by SPIT Mumbai, India',
  },
  {
    title:
      'Yameen Ajani, Krish Mangalorkar, Yohann Nadar, Homomorphic Encryption for Secure Conversations with AI Bots over Cloud to Prevent Social Engineering Attacks',
    details: 'Accepted in ICAITR 2021 by VIT Mumbai',
  },
  {
    title:
      'Bilonikar Shreya, Mendonca Carol, Phadakale Divita, Blockchain Based Model of Royalty Payments of Artists and Remix-Makers',
    details:
      'International Conference on Smart Data Intelligence (ICSMDI 2021), 29th April 2021, Organized by Kongunadu College of Engineering and Technology, Trichy, Tamil Nadu',
  },
  {
    title:
      'Roshni Padate, Hazel Lobo, Shreya Raut, Renita Augustin, A Mobile Application for Detection and Classification of Facial Acne',
    details:
      'Alochana Chakra Journal, Volume IX, Issue VI, June 2020, ISSN NO: 2231-3990, Scientific Journal Impact Factor: 6.3',
  },
  {
    title:
      'Roshni Padate, Dhananjay Chobhe, Davina Pinto, Fire Detection System Using Convolutional Neural Network',
    details:
      'Alochana Chakra Journal, Volume IX, Issue XII, June 2020, ISSN NO: 2231-3990, Scientific Journal Impact Factor: 6.3',
  },
  {
    title:
      'Sherwyn Dsouza, Darlene Nazareth, Cassia Vaz, Prof. Monali Shetty, Blockchain and AI in Pharmaceutical Supply Chain',
    details:
      'Elsevier SSRN, International Conference on Smart Data Intelligence (ICSMDI 2021)',
  },
  {
    title:
      'Sharwari Marathe, Monali Shetty, Comparative Study of Botnet Detection System Using Different Machine Learning Algorithms',
    details: 'SCOPUS UGC-CARE Approved group-II Journal',
  },
  {
    title:
      'K. Hariharan, A. Lobo, S. Deshmukh, Hybrid Approach for Effective Disaster Management Using Twitter Data and Image-Based Analysis',
    details:
      'IEEE-2021 International Conference on Communication Information and Computing Technology (ICCICT), SPIT, Mumbai, 2021, pp. 1-6, doi: 10.1109/ICCICT50803.2021.9510029',
  },
]

const publications_20 = [
  {
    title:
      'Pradya Borkar, Merlyn Pulinthitha, Ashwini Pansare, Match Pose - A System for Comparing Poses',
    details:
      'International Journal of Engineering Research & Technology (IJERT), ISSN: 2278-0181, Vol. 8 Issue 10, October 2019',
  },
  {
    title:
      'M. Mehra, D. R. Kalbande, S. Mankar, S. Mutsaddi, Data Mining in Educational Systems for Effective Student Mentoring',
    details:
      '2019 International Conference on Advances in Computing, Communication and Control (ICAC3), 2019, pp. 1-5, doi: 10.1109/ICAC347590.2019.9036803',
  },
  {
    title:
      'Simran Gadkari, Jenell, Ashwini Pansare, Analysis of pre trained Convolutional Neural Networks to Build a Flower Classification System',
    details:
      'IJRASET, Volume 7, Issue XI, Nov 2019, ISSN: 2321-9653, DOI: 10.22214/ijraset.2019.11079, http://dx.doi.org/10.22214/ijraset.2019.11079',
  },
  {
    title:
      'Pradnya Borkar, Marilyn Pulinthitha, Mrs. Ashwini Pansare, Match Pose - A system for Comparing Poses',
    details:
      'International Journal of Engineering Research and Technology, Volume 8, Issue 10, October 2019, ISSN 2278-0181',
  },
  {
    title:
      'Ashley Lobo, Kartick Hariharan, Suyash Sreekumar, Monali Shetty, Time Optimal long distance trip planning for electric vehicles',
    details:
      '2019 5th International Conference on Computing Communication Control and Automation ICCUBEA - IEEE conference, 2019. ISSN: 978-1-7281-4042-1/19, http://doi.one/10.1729/Journal.23359',
  },
  {
    title:
      'Kamoji S., Koshti D., Peter R., Analysis of Growth and Planning of Urbanization and Correlated Changes in Natural Resources',
    details:
      'In: Raj J., Bashar A., Ramson S. (eds) Innovative Data Communication Technologies and Application. ICIDCA 2019. Lecture Notes on Data Engineering and Communications Technologies, vol 46. Publisher Springer, Cham. Print ISBN: 978-3-030-38039-7, Online ISBN: 978-3-030-38040-3',
  },
  {
    title:
      'D. Koshti, S. Kamoji, N. Kalnad, S. Sreekumar, S. Bhujbal, Video Anomaly Detection using Inflated 3D Convolution Network',
    details:
      '2020 International Conference on Inventive Computation Technologies (ICICT), 2020, pp. 729-733, doi: 10.1109/ICICT48043.2020.9112552',
  },
  {
    title:
      'M. Mehra, V. Sahai, P. Chowdhury, E. Dsouza, Home Security System using IOT and AWS Cloud Services',
    details:
      '2019 International Conference on Advances in Computing, Communication and Control (ICAC3), 2019, pp. 1-6, doi: 10.1109/ICAC347590.2019.9089839',
  },
  {
    title:
      'S. Kamoji, D. Koshti, A. Dmonte, S. J. George, C. Sohan Pereira, Image Processing based Vehicle Identification and Speed Measurement',
    details:
      '2020 International Conference on Inventive Computation Technologies (ICICT), 2020, pp. 523-527, doi: 10.1109/ICICT48043.2020.9112419',
  },
  {
    title:
      'Dr. Brijmohan Daga, Juhi Checker, Sayali Deo, Anne Rajan, Computer Science Career Recommendation System using Artificial Neural Network',
    details:
      'IJCTT, Volume 68, Issue 3, ISSN: 2231-2803, March 2020, doi: 10.14445/22312803/IJCTTV68I3P117',
  },
  {
    title:
      'Yashom Dhige, Yash Turkar, Cristo Aluckal, Yogesh Agarwadkar, Dr. Sunil Surve, Dynamic path planning system for UAV remote sensing in urban environments',
    details:
      'National Symposium on Innovations in Geospatial Technology for Sustainable Development with special emphasis on NER, ISG, ISRS, Shillong, Meghalaya, India, November 20-22, 2019, doi: 10.1007/s10846-020-01151-x',
  },
  {
    title:
      'H. Tulapurkar, V. Turkar, B. K. Mohan, Y. Turkar, Curvelet Based Watermarking Of Multispectral Images And Its Effect On Classification Accuracy',
    details:
      '2019 URSI Asia-Pacific Radio Science Conference (AP-RASC), 2019, pp. 1-7, doi: 10.23919/URSIAPRASC.2019.8738393',
  },
  {
    title:
      'Cristo Aluckul, Yash Turkar, Yashom Dhige, Sumedh Deshpande, B. K. Mohan, Yogesh Agarwadkar, Sunil Surve, Brijmohan Daga, Dynamic real-time indoor environment mapping for Unmanned Autonomous Vehicle navigation',
    details:
      '2019 International Conference on Advances in Computing, Communication and Control (ICAC3), 2019, pp. 1-6, doi: 10.1109/ICAC347590.2019.9036813',
  },
  {
    title:
      "Rochelle Cordeiro, Anol Kurian, Brinel D'souza, Brijmohan Daga, Automated training for Job Interviews",
    details:
      'International Journal of Computer Trends and Technology (IJCTT), Volume 68, Issue 3, pp. 74-79, March 2020, doi: 10.14445/22312803/IJCTT-V68I3P115',
  },
  {
    title:
      'Roshni Padate, Dhanajay Chobhe, Davina Pinto, Fire detection system using convolutional neural network',
    details:
      'International Journal of Scientific & Technology Research, Volume 9, Issue 04, ISSN 2277-8616, April 2020, doi: 10.14445/22312803/IJCTTV68I3P115',
  },
  {
    title:
      'Dipali K. Bhise, Bhushan T. Patil, Vasim A. Shaikh, Sujata P. Deshmukh, Investigating the microlubrication flow inside the nozzle using computational fluid dynamics',
    details: 'Materials Today: Proceedings [Further details needed]',
  },
]

const publications_19 = [
  {
    title:
      'Christi Pereira, Sujata Deshmukh, Virtual walk-through of stitched image using cylindrical projection',
    details:
      'IEEE International Conference on Recent Innovations in Electrical, Electronics & Communication Engineering (ICRIEECE), July 27th-28th, 2018',
  },
  {
    title:
      'Prof. Kalpana Deorukhkar, Ms. Malita Dodti, Ms. Anisa Tuscano, Triplet based Partitioning on Document Clustering',
    details:
      'International Journal of Scientific & Engineering Research, Volume 9, Issue 10, October 2018, ISSN 2229-5518',
  },
  {
    title:
      'Vishwesh Hande, Supriya Kamoji, Prediction of Cardio Vascular Disease - A review Publication',
    details:
      'International Journal for Research in Applied Science and Engineering Technology (IJRASET), Volume 7, Issue 4, April 2019, ISSN: 2321-9653, DOI: 10.22214',
  },
  {
    title:
      'Dipali Koshti, Scarlet Lopes, Prediction of tourism flow in India Using LSTM Model',
    details:
      'Journal of Emerging Technologies and Innovative Research, Volume 5, Issue 5, May 2019, 2349-5162, DOI: http://doi.one/10.1729/Journal.20564',
  },
  {
    title:
      'Sunil Surve, Ms. Priti Jain, Resource Centric Characterization and Classification of Applications Using KMeans for Multicores',
    details:
      '33rd IEEE International Conference on Information and Technology, Kuala Lumpur, Malaysia, Jan. 9-11, 2019 (In press)',
  },
  {
    title:
      'Sujata Deshmukh, Prashant Deshmukh, Bhushan Patil, G. T. Thampi, Exploring the factors to make E-Commerce and M-Commerce ubiquitous and pervasive to improve national productivity of India',
    details:
      'International Journal of Productivity and Quality Management, 1(1):1, DOI: 10.1504/IJPQM.2019.10019964, January 2019, Scopus indexed free Publication Journal (In press)',
  },
  {
    title:
      'B. S. Daga, Jason Dsouza, Ryan Furtado, Manupendra Tiwari, Authorship Identification: Naïve Bayes with XGBoost Approach',
    details:
      'International Journal of Emerging Trends & Technology in Computer Science (IJETTCS), Volume 8, Issue 3, May - June 2019, pp. 001-007, ISSN 2278-6856',
  },
  {
    title:
      'B.S. Daga, Glaston Dsouza, Aadesh Bassi, Lionel Lobo, Speech Emotion Recognition using Convolutional Neural Networks',
    details:
      'International Journal of Emerging Trends & Technology in Computer Science (IJETTCS), Volume 8, Issue 3, May - June 2019, pp. 008-013, ISSN 2278-6856',
  },
  {
    title:
      'Monali Shetty, Hybrid approach for Detection and Analysis of SQL and XSS vulnerabilities',
    details:
      'International Journal of Engineering Trends and Technology (IJETT), Vol-8 Number -4, June 2017, DOI: 10.14445/22315381/IJETT-V59P206',
  },
  {
    title:
      'Mufaddal Haidermota, Drishit Mitra, Mrs. Ashwini Pansare, Classifying Twitter user as a bot or not',
    details:
      'International Journal of Advanced Research in Computer Science, Volume 9, No 3, May-June 2018, DOI: 10.26483/ijarcs.v9i3.5949',
  },
  {
    title:
      'Mrs. Ashwini Pansare, Mrs. Monali Shetty, Mood detection based on facial expressions',
    details:
      'International Journal of Engineering Trends and Technology, Volume 48, Issue 4, June 2017, DOI: 10.14445/22315381/IJETT-V48P236',
  },
]

const publications_18 = [
  {
    title:
      'Christi Pereira, Sujata Dekhmukh, An Improved Virtual Walkthrough from a 2D Stitched Image',
    details:
      'International Journal of Recent Trends in Engineering & Research, vol. 3, Issue 9, September 2017, pg 1-5, DOI: 10.23883/IJRTER.2017.3422.QGI2I',
  },
  {
    title:
      'Swati Ringe, Vinayak Kini, Nigel Koli, Shreya Kamat, Dashboard for Learning Outcome based Attainment Measurement',
    details:
      'International Journal on Future Revolution in Computer Science & Communication Engineering, Volume: 4 Issue: 5, May 2018, pg 97–99, ISSN: 2454-4248',
  },
  {
    title:
      'Rahul Pereira, Swati Mukul Ringe, Tracy Pereira, Darshi Sheth, Social Networking With Smart Education',
    details:
      'International Refereed Journal of Engineering and Science (IRJES), ISSN (Online) 2319-183X, (Print) 2319-1821, Volume 7, Issue 5 Ver. I (May 2018), pp. 30-34, Index: 10.183x/E0705013034',
  },
  {
    title:
      'Slavvy Coelho, Ruchita Rozario, Rohit Sharma, Prof. Mahendra Mehra, An IOT Based Smart Cubicle System for Effective Power Usage and Employee Monitoring',
    details:
      'IEEE Publication, January 2018, ISSN 0976-5697, DOI: 10.1109/ICSCET.2018.8537319',
  },
  {
    title:
      'Dhruva Gaidhani, Joshua Koyeerath, Neel Kudu, Prof. Mahendra Mehra, A Survey Report on Techniques for Data Confidentiality in Cloud Computing Using Homomorphic Encryption',
    details:
      'International Journal of Advanced Research in Computer Science, Volume 8, No. 9, September-October 2017, DOI: http://dx.doi.org/10.26483/ijarcs.v8i9.4746, ISSN 0976-5697',
  },
  {
    title:
      'Mohit Khosla, Nishi Sheth, Mahendra Mehra, Web Application for Providing Immersive Development & Visualization of Web Pages',
    details:
      'International Journal of Advanced Research in Computer Science, Volume 9, No. 3, May-June 2018, DOI: http://dx.doi.org/10.26483/ijarcs.v9i3.5936, ISSN 0976-5697',
  },
  {
    title:
      'B. S. Daga, A. A. Ghatol, V. M. Thakare, Semantic Enriched Lecture Video Retrieval System Using Feature Mixture and Hybrid Classification',
    details:
      'Advances in Image and Video Processing, Vol 5(3), June 2017, DOI:10.14738/aivp.53.2852, ISSN 2054-7414',
  },
  {
    title:
      'B. S. Daga, A. A. Ghatol, V. M. Thakare, Silhouette based Human Fall Detection Using Multimodal Classifiers for Content Based Video Retrieval Systems',
    details:
      'International Conference on Intelligent Computing, Instrumentation and Control Technologies, Published in IEEE Xplore, ISBN-978-1-5090-6106-8, 2017, DOI: 10.1109/ICICICT1.2017.8342776',
  },
]

const publications_17 = [
  {
    title:
      'B. S. Daga, A. A. Ghatol, Detection of Objects and Activities in Videos Using Spatial Relations and Ontology Based Approach in Video Database System',
    details:
      'International Journal of Advances in Engineering & Technology, December 2016, Vol. 9(6), ISSN – 2231 - 1963. Available: http://www.ijaet.org/media/9I36-IJAET0936228-v9-i6-pp640-650.pdf, DOI:10.7323/ijaet',
  },
  {
    title: 'Ashwini Pansare, Mood Detection Based on Facial Expressions',
    details:
      'International Journal of Engineering Trends and Technology (IJETT), Volume 48, Number 4, ISSN: 2231-5381, June 2017',
  },
  {
    title:
      'Samarth Jaykar Shetty, Badal Rakesh Thosani, Lenherd Deon Olivera, Supriya Kamoji, Controversial Analysis: Sentimental Analysis of Twitter Data',
    details:
      'International Journal of Advanced Research in Computer Science and Software Engineering (IJARCSSE), Volume 7, Issue 4, ISSN: 2277 128X, April 2017',
  },
  {
    title: 'Monali Shetty, Mood Detection Based on Facial Expressions',
    details:
      'International Journal of Engineering Trends and Technology (IJETT), Volume 48, Number 4, ISSN: 2231-5381, June 2017',
  },
]

const publications_16 = [
  {
    title:
      'Mangalwedekar Sindhuja, Surve Sunil K, Mangalvedekar H.A., Error Propagation in Linear and Non-Linear Systems for False Data Injection Attack',
    details:
      'Proceedings of International Conference on Advances in Computing, Communication and Informatics (IEEE)',
  },
  {
    title:
      'Sindhuja Mangalwedekar, Sunil Surve K, Mangalvedekar H.A., False Data Injection Attacks and Detection Scenarios in the Power System',
    details: 'Proceedings of 2015 Annual IEEE India Conference (INDICON), 2015',
  },
  {
    title:
      'Ayushi Gupta, Chaitali Pawar, Blessy Antony, Swati Ringe, Aarogya-An Intelligent Multi-Agent Paediatric System',
    details:
      'International Journal of Scientific & Engineering Research (IJSER), ISSN- 2229-5518, Volume 7, Issue 2, February 2016',
  },
  {
    title:
      'Karan Diware, Vikram Rajpurohit, Nikit Kale, Swati Ringe, Data Mining and Text Analytics of Twitter Data',
    details:
      'International Journal of Advanced Research in Computer Science and Software Engineering (IJARCSSE), ISSN-2277-128X, Volume 6, Issue 2, February 2016',
  },
  {
    title:
      'Karan Diware, Aakash Borade, Swati Ringe, A Holistic Study of Top Data Mining Algorithms',
    details:
      'International Journal of Advanced Research in Computer Science and Software Engineering (IJARCSSE), ISSN-2277-128X, Volume 6, Issue 2, February 2016',
  },
  {
    title:
      'Mrs. Ashwini Pansare, Purva Sakharkar, Shailesh Fasale, Pawan Soni, GIS Based Tourist Management System',
    details:
      'International Journal of Advanced Research in Computer and Communication Engineering, Vol. 5, Issue 5, May 2016',
  },
  {
    title:
      'Monali Shetty, Alex Chirayath, Shyam Padia, Alfred Gonsalves, Cryptographic Key Exchange Using Dual Tone Multi Frequency Generator',
    details:
      'International Journal of Innovative Research in Computer and Communication Engineering (An ISO 3297: 2007 Certified Organization), Vol. 3, Issue 11, November 2015',
  },
  {
    title:
      'Mahendra Mehra, Alex Chirayath, Alfred Gonsalves, Chinmayi Kulkarni, Battery Optimization of Android OS',
    details:
      'International Journal of Computer Science and Information Technologies (IJCSIT), Vol. 6, Issue 5, 4361-4363, ISSN: 0975-9646, 2015',
  },
  {
    title:
      'Mahendra Mehra, Alex Chirayath, Ruben Monteiro, Mobile Computing on Android Using Cloud Infrastructure',
    details:
      'International Journal of Computer Science and Mobile Computing, Vol. 4, Issue 11, November 2015, Pg. 77-83, ISSN: 2320-088X',
  },
  {
    title:
      'Mahendra Mehra, Alfred Gonsalves, Chinmayi Kulkarni, Ketankokane, Pratik Mali, A Tool for Preventing the Metasploit Attack on the Android OS',
    details:
      'International Journal of Computer Science and Communication Networks (IJCSCN), Vol. 5, Issue 5, ISSN 2249-5789',
  },
  {
    title:
      'Mahendra Mehra, Pranit Shinde, Saideep Shetty, A Survey of Keystroke Dynamics as a Biometric for Static Authentication',
    details:
      'International Journal of Computer Science and Information Security, Vol. 14, No. 04, ISSN 1947-5500, January 2016',
  },
]

const publications_15 = [
  {
    title:
      'Mangalwedekar, Sindhuja; Surve, Sunil K., Measurement Sets in Power System State Estimator in Presence of False Data Injection Attack',
    details:
      'Proceedings of Advance Computing Conference (IACC), 2015 IEEE International, vol., no., pp. 855-860, 12-13 June 2015',
  },
  {
    title:
      'Kadam, R.; Shajahan, S.; Malegam, K.; Wagle, K.; Surve, Localization and Tracking of Indoor Mobile Robot with Beacons and Dead Reckoning Sensors',
    details:
      "IEEE Students' Conference on Electrical, Electronics and Computer Science (SCEECS), 2014",
  },
  {
    title:
      'Jeenal Shah, Sunil Surve, Varsha Turkar, Pancreatic Tumour Detection Using Image Processing',
    details: 'ICAC3, 2015',
  },
  {
    title:
      'Aakash Tiwari, Ashwini Pandit, Pratyush Mohapatra, Prof. Merly Thomas, Improving the Prediction of Players in IPL Analytical System Using Support Vector Machines (SVM) and Kernel Functions',
    details:
      'International Journal of Engineering and Technical Research (IJETR), ISSN: 2321-0869, Volume 3, March 2015',
  },
  {
    title:
      'Swati Ringe, Rishabh Kedia, Anuj Poddar, Sahil Patel, HTML5 Based Virtual Whiteboard for Real-Time Interaction',
    details: 'ICAC3, 2015',
  },
  {
    title:
      'Swati Ringe, Dylan A, Hardik Agrawal, Various Approaches to Achieve Data Compression',
    details:
      'International Journal of Engineering Research and Technology (IJERT), ISSN-2278-0181, Vol. 4, Issue 3, March 2015',
  },
  {
    title:
      'Swati Ringe, Hardik Agrawal, Dylan Andrades, Approaches to Optimize Bit Compression Algorithm',
    details:
      'International Journal of Engineering Research and Technology (IJERT), Vol. 4, Issue 3, ISSN: 2278-0181, March 2015',
  },
  {
    title:
      'Roshni P, Aamna Patel, A Survey on Image Retrieval System Based on Contents',
    details:
      'International Journal of Engineering Trends and Technology (IJETT), ISSN: 2231-5381, Vol. 21, March 2015',
  },
  {
    title: 'Roshni P, Review of Image Denoising Techniques',
    details:
      "International Conference on Advances in Computer Communication and Control (ICAC3'15), FRCRCE, April 2015",
  },
  {
    title: 'Roshni P, Medical Image Registration',
    details:
      "International Conference on Advances in Computer Communication and Control (ICAC3'15), FRCRCE, April 2015",
  },
  {
    title: 'Roshni P, Image Encryption and Decryption Using AES Algorithm',
    details:
      'International Journal of Electronics and Communication Engineering & Technology (IJECET), ISSN 0976-6464, Volume 6, Issue 1, January 2015, pp. 23-29',
  },
  {
    title:
      'Ashish B. Nair, Ishita M. Raut, Sangeeta Joseph, Prof. Dipali Koshti, Content Retrieval and Protection of Smart Phone Through Remote Access',
    details:
      'International Journal of Engineering and Technical Research (IJETR), ISSN: 2321-0869, Volume 3, Issue 4, April 2015',
  },
  {
    title:
      'Supriya Kamoji, Aswathi Nambiar, Karishma Khot, Ravi Bajpai, Dynamic Vehicle Traffic Management System',
    details:
      'International Journal of Research in Engineering and Technology (IJRET), eISSN: 2319-1163, pISSN: 2321-7308',
  },
  {
    title:
      'Monali Shetty, Tejas Puranik, Swati Jaybhaye, Swapnali Ghos Alkar, Analysis of Elliptic Curve Cryptography for Mobile Banking',
    details:
      'International Journal of Engineering Research & Technology (IJERT), ISSN: 2278-0181, Vol. 3, Issue 7, July 2014',
  },
  {
    title:
      'Monali Shetty, Priyali Patil, Akshita Gandotra, Shivam Mishra, An Efficient Mobile Voting System Scheme Based on Elliptic Curve Cryptography',
    details:
      'International Journal of Scientific & Engineering Research, Volume 6, Issue 4, 1736, ISSN 2229-5518, April 2015',
  },
  {
    title:
      'Mandeep Rana, Pooja Candorkar, Alisheeba, Kazi Nikahat, Breast Cancer Diagnosis and Recurrence Prediction Using Machine Learning Techniques',
    details:
      'International Journal of Research in Engineering and Technology (IJRET), eISSN: 2319-1163, pISSN: 2321-7308, Volume 4, Issue 4, April 2015',
  },
]

const publications_14 = [
  {
    title:
      'Nikita Agwankar, Sunil Surve and Sapna Prabu, Development Of Robust Security Options For Portable Data Storage Media',
    details:
      'MULTICON-W 2014, International Conference & Workshop On Advance Computing, March 2014',
  },
  {
    title:
      'Radhika Nayak, Sunil Surve and Sapna Prabu, Computational Complexity Based Development Of Embedded System',
    details:
      'MULTICON-W 2014, International Conference & Workshop On Advance Computing, March 2014',
  },
  {
    title:
      'Ritesh Meshram, Sunil Surve, Formation Control For Wheeled Mobile Robots',
    details:
      'International Journal Of Scientific & Technology Research, Volume 3, Issue 5, ISSN 2277-8616, May 2014',
  },
  {
    title:
      'Radhika Nayak, Sunil Surve and Sapna Prabu, Reduction in Computational Complexity - A Face Recognition Case Study',
    details:
      'International Journal of Advanced Research in Computer and Communication Engineering, Vol. 3, Issue 2, February 2014',
  },
  {
    title:
      'Nikita Agwankar, Sunil Surve and Sapna Prabu, Security For Portable Data Storage Media',
    details:
      'International Journal of Advanced Research in Computer and Communication Engineering, Vol. 3, Issue 1, January 2014',
  },
  {
    title:
      'Brijmohan Daga, Content Based Video Retrieval Using Color Feature: An Integration Approach',
    details:
      'Springer-Verlag Berlin Heidelberg, Communications in Computer and Information Science, Vol 361, ISBN - 978-3-642-36320-7, pp. 609-619, 2013',
  },
  {
    title:
      'H.B. Kekre, T.K. Sarode and J.K. Save, Classification of Image Database Using Independent Principal Component Analysis',
    details:
      'International Journal of Advanced Computer Science and Applications (IJACSA), Vol. 4, pp. 109-116, 2013',
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

const Publicationss: React.FC = () => {
  const allPublications: PublicationsByYear = {
    2023: publications_23,
    2022: publications_22,
    2021: publications_21,
    2020: publications_20,
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

export default Publicationss
