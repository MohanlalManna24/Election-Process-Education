import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Navbar
    nav: {
      home: 'Home',
      simulator: 'Simulator',
      candidates: 'Candidates',
      process: 'Process',
      guide: 'Guide',
      register: 'Register Now',
    },
    // Hero
    hero: {
      badge: 'Your Vote. Your Voice.',
      title1: 'Understand the',
      title2: 'Election Process',
      title3: 'Step by Step',
      subtitle: 'A complete, interactive guide to help every citizen cast their vote with confidence. Learn the process, know your candidates, and make your voice heard.',
      cta1: 'Start Learning',
      cta2: 'Watch How to Vote',
      stat1Label: 'Voter Turnout',
      stat2Label: 'Nearest Booth',
      stat2Value: '1.2 km away',
      cardTitle: 'Voter Registration Status',
      cardName: 'Ramesh Kumar',
      cardConstituency: 'Constituency 42-B',
      cardStatus: 'Verified & Ready to Vote',
      cardEpic: 'EPIC No.',
    },
    // Statistics
    stats: {
      badge: 'By the Numbers',
      title: 'India Votes 2024',
      subtitle: 'The world\'s largest democratic exercise, unfolding across a billion+ eligible voters.',
      stat1Label: 'Registered Voters',
      stat2Label: 'Polling Stations',
      stat3Label: 'Candidates',
      stat4Label: 'Voter Turnout',
    },
    // Timeline
    timeline: {
      badge: 'Step by Step',
      title: 'The Election Process',
      subtitle: 'Follow the complete journey from voter registration to the final result.',
      steps: [
        { title: 'Voter Registration', desc: 'Ensure your name is on the electoral roll. Visit your local BLO or register online at voters.eci.gov.in.' },
        { title: 'Nomination of Candidates', desc: 'Political parties and independent candidates file their nomination papers with the returning officer.' },
        { title: 'Campaign Period', desc: 'Candidates campaign across constituencies, presenting their manifestos and seeking votes from citizens.' },
        { title: 'Polling Day', desc: 'Head to your designated polling booth with your Voter ID card. Cast your vote using the EVM machine.' },
        { title: 'Counting & Results', desc: 'Votes are counted at designated centres. Results are declared by the Election Commission.' },
      ],
    },
    // VoterGuide
    guide: {
      title: 'Voter Registration Guide',
      subtitle: 'Getting ready to vote? Make sure you have the required documents before starting your registration process.',
      docs: [
        { title: 'Recent Photograph', desc: 'Passport size color photograph taken within the last 6 months with a clear background.' },
        { title: 'Proof of Address', desc: 'Utility bill, bank passbook, rent agreement, or any official document showing your current address.' },
        { title: 'Age Proof', desc: 'Birth certificate, school leaving certificate, or passport to verify you are 18 years or older.' },
        { title: 'Identity Proof', desc: 'National ID, PAN card, driving license, or any government-issued photo identity card.' },
      ],
      helpTitle: 'Need help with your application?',
      helpSubtitle: 'Our support team is available to assist you with any questions regarding the voter registration process.',
      callBtn: 'Call Helpline',
      emailBtn: 'Email Support',
    },
    // Simulator
    simulator: {
      badge: 'Interactive Demo',
      title: 'EVM Voting Simulator',
      subtitle: 'Experience how easy it is to cast your vote! Try our interactive Electronic Voting Machine (EVM) simulator.',
      ready: 'READY',
      instructTitle: 'How to vote',
      instructBody: 'Press the blue button next to your preferred candidate. Wait for the beep and check the VVPAT window to confirm your vote.',
      successTitle: 'Vote Cast Successfully!',
      successBody: 'Your vote has been recorded. The printed slip will be visible in the VVPAT window for 7 seconds.',
      resetBtn: 'Reset Simulator',
    },
    // Footer
    footer: {
      tagline: 'Empowering citizens with accurate, accessible, and timely information about the democratic election process.',
      quickLinks: 'Quick Links',
      resources: 'Official Resources',
      newsletter: 'Newsletter',
      newsletterDesc: 'Subscribe for updates on upcoming elections and registration deadlines.',
      emailPlaceholder: 'Your email address',
      subscribe: 'Subscribe',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      accessibility: 'Accessibility',
      rights: `© ${new Date().getFullYear()} Election Process Guide. All rights reserved.`,
      links: ['Home', 'The Process', 'Voter Guide', 'FAQs', 'Contact Us'],
      officialLinks: ['Election Commission', 'Voter Registration Portal', 'Know Your Candidate', 'Electoral Roll Search'],
    },
    // News Section
    news: {
      badge: 'Official Election News',
      subtitle: 'Verified updates directly from the National Election Commission.',
      allUpdates: 'All Updates',
    },
    // FAQ
    faq: {
      badge: 'FAQ',
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to the most common questions about the voting process.',
      items: [
        { q: 'Who is eligible to vote?', a: 'Any Indian citizen who is 18 years of age or older and is registered on the electoral roll of their constituency is eligible to vote.' },
        { q: 'What documents do I need at the polling booth?', a: 'Your Voter ID card (EPIC) is the primary document. Alternatively, you can use Aadhaar Card, Passport, Driving License, or other government-approved photo ID.' },
        { q: 'What is NOTA?', a: 'NOTA stands for "None of the Above". It allows voters to reject all candidates on the ballot if they find none suitable for the position.' },
        { q: 'How does the EVM work?', a: 'An Electronic Voting Machine (EVM) is a simple electronic device. You press the blue button next to your chosen candidate\'s name and symbol. A beep confirms your vote.' },
        { q: 'Can I vote if my name is not on the electoral roll?', a: 'No. Your name must be on the electoral roll to vote. You can verify your registration at voters.eci.gov.in or at your local ERO office.' },
      ],
    },
    // Candidate Finder
    candidate: {
      badge: 'Know Your Candidate',
      title: 'Make an Informed Choice',
      subtitle: 'Enter your Pincode or Constituency name to discover the candidates contesting in your area.',
      placeholder: 'Enter Pincode (e.g., 110001, 700001)...',
      searchBtn: 'Search',
      resultsFor: 'Candidates found for',
      education: 'Education',
      profession: 'Profession',
      age: 'Age',
      years: 'Years',
      criminalCases: 'Criminal Cases',
      manifesto: 'Manifesto Highlights',
    },
  },

  bn: {
    nav: {
      home: 'হোম',
      simulator: 'সিমুলেটর',
      candidates: 'প্রার্থীরা',
      process: 'প্রক্রিয়া',
      guide: 'গাইড',
      register: 'নিবন্ধন করুন',
    },
    hero: {
      badge: 'আপনার ভোট। আপনার কণ্ঠস্বর।',
      title1: 'নির্বাচনী প্রক্রিয়া',
      title2: 'সম্পর্কে জানুন',
      title3: 'ধাপে ধাপে',
      subtitle: 'প্রতিটি নাগরিক যাতে আত্মবিশ্বাসের সাথে ভোট দিতে পারেন তার জন্য একটি সম্পূর্ণ ইন্টারেক্টিভ গাইড। প্রক্রিয়া শিখুন, প্রার্থীদের জানুন এবং আপনার কণ্ঠস্বর শুনিয়ে দিন।',
      cta1: 'শিক্ষা শুরু করুন',
      cta2: 'ভোট দেওয়া দেখুন',
      stat1Label: 'ভোটার উপস্থিতি',
      stat2Label: 'নিকটতম বুথ',
      stat2Value: '১.২ কিমি দূরে',
      cardTitle: 'ভোটার নিবন্ধন স্ট্যাটাস',
      cardName: 'রমেশ কুমার',
      cardConstituency: 'নির্বাচনী এলাকা ৪২-বি',
      cardStatus: 'যাচাইকৃত ও ভোট দিতে প্রস্তুত',
      cardEpic: 'EPIC নং',
    },
    stats: {
      badge: 'পরিসংখ্যানে',
      title: 'ভারত ভোট দেয় ২০২৪',
      subtitle: 'বিশ্বের সবচেয়ে বড় গণতান্ত্রিক আয়োজন, একশো কোটিরও বেশি যোগ্য ভোটার নিয়ে।',
      stat1Label: 'নিবন্ধিত ভোটার',
      stat2Label: 'ভোট কেন্দ্র',
      stat3Label: 'প্রার্থী',
      stat4Label: 'ভোটার উপস্থিতি',
    },
    timeline: {
      badge: 'ধাপে ধাপে',
      title: 'নির্বাচন প্রক্রিয়া',
      subtitle: 'ভোটার নিবন্ধন থেকে চূড়ান্ত ফলাফল পর্যন্ত সম্পূর্ণ যাত্রা অনুসরণ করুন।',
      steps: [
        { title: 'ভোটার নিবন্ধন', desc: 'নিশ্চিত করুন আপনার নাম ভোটার তালিকায় আছে। আপনার স্থানীয় BLO-এ যান বা voters.eci.gov.in-এ অনলাইনে নিবন্ধন করুন।' },
        { title: 'প্রার্থীর মনোনয়ন', desc: 'রাজনৈতিক দল এবং স্বতন্ত্র প্রার্থীরা রিটার্নিং অফিসারের কাছে তাদের মনোনয়নপত্র দাখিল করেন।' },
        { title: 'প্রচারণা পর্ব', desc: 'প্রার্থীরা নির্বাচনী এলাকায় প্রচারণা চালান, তাদের ইশতেহার উপস্থাপন করেন এবং নাগরিকদের কাছ থেকে ভোট চান।' },
        { title: 'ভোটের দিন', desc: 'আপনার ভোটার আইডি কার্ড নিয়ে নির্ধারিত ভোটকেন্দ্রে যান। EVM মেশিন ব্যবহার করে আপনার ভোট দিন।' },
        { title: 'গণনা ও ফলাফল', desc: 'নির্ধারিত কেন্দ্রে ভোট গণনা করা হয়। নির্বাচন কমিশন ফলাফল ঘোষণা করে।' },
      ],
    },
    guide: {
      title: 'ভোটার নিবন্ধন গাইড',
      subtitle: 'ভোট দেওয়ার জন্য প্রস্তুত? নিবন্ধন প্রক্রিয়া শুরু করার আগে প্রয়োজনীয় নথিগুলো নিশ্চিত করুন।',
      docs: [
        { title: 'সাম্প্রতিক ছবি', desc: 'গত ৬ মাসের মধ্যে তোলা পরিষ্কার পটভূমিতে পাসপোর্ট সাইজের রঙিন ছবি।' },
        { title: 'ঠিকানার প্রমাণ', desc: 'বিদ্যুৎ বিল, ব্যাংক পাসবুক, ভাড়ার চুক্তি, বা আপনার বর্তমান ঠিকানা দেখানো যেকোনো সরকারি নথি।' },
        { title: 'বয়সের প্রমাণ', desc: 'জন্ম সনদ, স্কুল ছাড়ার সনদ, বা পাসপোর্ট যাতে আপনার বয়স ১৮ বছর বা তার বেশি প্রমাণ হয়।' },
        { title: 'পরিচয়ের প্রমাণ', desc: 'জাতীয় পরিচয়পত্র, প্যান কার্ড, ড্রাইভিং লাইসেন্স, বা সরকার প্রদত্ত যেকোনো ফটো পরিচয় কার্ড।' },
      ],
      helpTitle: 'আবেদনে সাহায্য দরকার?',
      helpSubtitle: 'আমাদের সহায়তা দল ভোটার নিবন্ধন প্রক্রিয়া সম্পর্কিত যেকোনো প্রশ্নে আপনাকে সহায়তা করতে প্রস্তুত।',
      callBtn: 'হেল্পলাইনে কল করুন',
      emailBtn: 'ইমেইল সাপোর্ট',
    },
    simulator: {
      badge: 'ইন্টারেক্টিভ ডেমো',
      title: 'EVM ভোটিং সিমুলেটর',
      subtitle: 'ভোট দেওয়া কতটা সহজ তা অনুভব করুন! আমাদের ইন্টারেক্টিভ EVM সিমুলেটর ব্যবহার করে দেখুন।',
      ready: 'প্রস্তুত',
      instructTitle: 'কিভাবে ভোট দেবেন',
      instructBody: 'আপনার পছন্দের প্রার্থীর পাশের নীল বোতাম চাপুন। বিপ শুনুন এবং VVPAT উইন্ডোতে আপনার ভোট নিশ্চিত করুন।',
      successTitle: 'ভোট সফলভাবে দেওয়া হয়েছে!',
      successBody: 'আপনার ভোট নথিভুক্ত হয়েছে। মুদ্রিত স্লিপটি ৭ সেকেন্ডের জন্য VVPAT উইন্ডোতে দেখা যাবে।',
      resetBtn: 'সিমুলেটর রিসেট করুন',
    },
    footer: {
      tagline: 'নাগরিকদের আত্মবিশ্বাসের সাথে ভোট দেওয়ার জ্ঞান দিয়ে তাদের দেশের ভবিষ্যৎ গড়ার ক্ষমতায়ন করা।',
      quickLinks: 'দ্রুত লিঙ্ক',
      resources: 'অফিসিয়াল রিসোর্স',
      newsletter: 'নিউজলেটার',
      newsletterDesc: 'আসন্ন নির্বাচন এবং নিবন্ধনের সময়সীমার আপডেটের জন্য সাবস্ক্রাইব করুন।',
      emailPlaceholder: 'আপনার ইমেইল ঠিকানা',
      subscribe: 'সাবস্ক্রাইব',
      privacy: 'গোপনীয়তা নীতি',
      terms: 'সেবার শর্তাবলী',
      accessibility: 'অ্যাক্সেসিবিলিটি',
      rights: `© ${new Date().getFullYear()} ইলেকশন প্রসেস গাইড। সর্বস্বত্ব সংরক্ষিত।`,
      links: ['হোম', 'নির্বাচন প্রক্রিয়া', 'ভোটার গাইড', 'সাধারণ প্রশ্ন', 'যোগাযোগ'],
      officialLinks: ['নির্বাচন কমিশন', 'ভোটার নিবন্ধন পোর্টাল', 'প্রার্থী জানুন', 'ভোটার তালিকা অনুসন্ধান'],
    },
    faq: {
      badge: 'সাধারণ প্রশ্ন',
      title: 'প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী',
      subtitle: 'ভোটদান প্রক্রিয়া সম্পর্কে সবচেয়ে সাধারণ প্রশ্নের উত্তর খুঁজুন।',
      items: [
        { q: 'কে ভোট দিতে পারবেন?', a: 'যেকোনো ভারতীয় নাগরিক যার বয়স ১৮ বছর বা তার বেশি এবং যার নাম তার নির্বাচনী এলাকার ভোটার তালিকায় নথিভুক্ত আছে তিনি ভোট দিতে পারবেন।' },
        { q: 'ভোটকেন্দ্রে কী কী কাগজপত্র লাগবে?', a: 'ভোটার আইডি কার্ড (EPIC) প্রধান নথি। বিকল্পভাবে, আপনি আধার কার্ড, পাসপোর্ট, ড্রাইভিং লাইসেন্স বা সরকার অনুমোদিত ফটো আইডি ব্যবহার করতে পারবেন।' },
        { q: 'NOTA কী?', a: 'NOTA মানে "None of the Above" (উপরের কেউ নয়)। এটি ভোটারদের ব্যালটে সকল প্রার্থীকে প্রত্যাখ্যান করার সুযোগ দেয় যদি কাউকে উপযুক্ত না মনে হয়।' },
        { q: 'EVM কীভাবে কাজ করে?', a: 'একটি ইলেকট্রনিক ভোটিং মেশিন (EVM) একটি সহজ ইলেকট্রনিক ডিভাইস। আপনার পছন্দের প্রার্থীর নাম ও প্রতীকের পাশের নীল বোতামটি চাপুন। একটি বিপ আপনার ভোট নিশ্চিত করবে।' },
        { q: 'ভোটার তালিকায় নাম না থাকলে কি ভোট দিতে পারব?', a: 'না। ভোট দিতে আপনার নাম ভোটার তালিকায় থাকতে হবে। আপনি voters.eci.gov.in-এ বা আপনার স্থানীয় ERO অফিসে আপনার নিবন্ধন যাচাই করতে পারবেন।' },
      ],
    },
    // Candidate Finder
    candidate: {
      badge: 'প্রার্থীকে জানুন',
      title: 'সচেতন পছন্দ করুন',
      subtitle: 'আপনার এলাকার প্রার্থীদের জানতে পিনকোড বা নির্বাচনী এলাকার নাম লিখুন।',
      placeholder: 'পিনকোড লিখুন (যেমন: ১১০০০১, ৭০০০০১)...',
      searchBtn: 'অনুসন্ধান',
      resultsFor: 'প্রার্থী পাওয়া গেছে',
      education: 'শিক্ষা',
      profession: 'পেশা',
      age: 'বয়স',
      years: 'বছর',
      criminalCases: 'ফৌজদারি মামলা',
      manifesto: 'ইশতেহারের মূল বিষয়',
    },
    news: {
      badge: 'অফিসিয়াল নির্বাচনী সংবাদ',
      subtitle: 'জাতীয় নির্বাচন কমিশন থেকে সরাসরি যাচাইকৃত আপডেট।',
      allUpdates: 'সব আপডেট',
    },

  },

  hi: {
    nav: {
      home: 'होम',
      simulator: 'सिम्युलेटर',
      candidates: 'उम्मीदवार',
      process: 'प्रक्रिया',
      guide: 'मार्गदर्शिका',
      register: 'पंजीकरण करें',
    },
    hero: {
      badge: 'आपका वोट। आपकी आवाज़।',
      title1: 'चुनाव प्रक्रिया',
      title2: 'को समझें',
      title3: 'चरण दर चरण',
      subtitle: 'प्रत्येक नागरिक को आत्मविश्वास के साथ वोट देने में मदद करने के लिए एक संपूर्ण इंटरैक्टिव गाइड। प्रक्रिया सीखें, अपने उम्मीदवारों को जानें।',
      cta1: 'सीखना शुरू करें',
      cta2: 'वोट करना देखें',
      stat1Label: 'मतदाता मतदान',
      stat2Label: 'निकटतम बूथ',
      stat2Value: '१.२ किमी दूर',
      cardTitle: 'मतदाता पंजीकरण स्थिति',
      cardName: 'रमेश कुमार',
      cardConstituency: 'निर्वाचन क्षेत्र ४२-बी',
      cardStatus: 'सत्यापित एवं मतदान के लिए तैयार',
      cardEpic: 'EPIC नं.',
    },
    stats: {
      badge: 'आंकड़ों में',
      title: 'भारत मतदान करता है 2024',
      subtitle: 'दुनिया का सबसे बड़ा लोकतांत्रिक आयोजन, एक अरब से अधिक पात्र मतदाताओं के साथ।',
      stat1Label: 'पंजीकृत मतदाता',
      stat2Label: 'मतदान केंद्र',
      stat3Label: 'उम्मीदवार',
      stat4Label: 'मतदाता उपस्थिति',
    },
    timeline: {
      badge: 'चरण दर चरण',
      title: 'चुनाव प्रक्रिया',
      subtitle: 'मतदाता पंजीकरण से अंतिम परिणाम तक की पूरी यात्रा का अनुसरण करें।',
      steps: [
        { title: 'मतदाता पंजीकरण', desc: 'सुनिश्चित करें कि आपका नाम मतदाता सूची में है। अपने स्थानीय BLO से मिलें या voters.eci.gov.in पर ऑनलाइन पंजीकरण करें।' },
        { title: 'उम्मीदवारों का नामांकन', desc: 'राजनीतिक दल और निर्दलीय उम्मीदवार रिटर्निंग ऑफिसर के पास अपने नामांकन पत्र दाखिल करते हैं।' },
        { title: 'प्रचार अभियान', desc: 'उम्मीदवार निर्वाचन क्षेत्रों में प्रचार करते हैं, अपने घोषणापत्र प्रस्तुत करते हैं और नागरिकों से वोट मांगते हैं।' },
        { title: 'मतदान का दिन', desc: 'अपना वोटर आईडी कार्ड लेकर अपने निर्धारित मतदान केंद्र जाएं। EVM मशीन का उपयोग करके वोट डालें।' },
        { title: 'मतगणना और परिणाम', desc: 'नामित केंद्रों पर वोटों की गणना की जाती है। चुनाव आयोग द्वारा परिणाम घोषित किए जाते हैं।' },
      ],
    },
    guide: {
      title: 'मतदाता पंजीकरण मार्गदर्शिका',
      subtitle: 'मतदान के लिए तैयार हैं? पंजीकरण प्रक्रिया शुरू करने से पहले आवश्यक दस्तावेज़ सुनिश्चित करें।',
      docs: [
        { title: 'हालिया फोटोग्राफ', desc: 'स्पष्ट पृष्ठभूमि के साथ पिछले 6 महीनों के भीतर लिया गया पासपोर्ट साइज का रंगीन फोटो।' },
        { title: 'पते का प्रमाण', desc: 'बिजली बिल, बैंक पासबुक, किराया समझौता, या आपका वर्तमान पता दिखाने वाला कोई भी आधिकारिक दस्तावेज़।' },
        { title: 'आयु प्रमाण', desc: 'जन्म प्रमाण पत्र, स्कूल छोड़ने का प्रमाण पत्र, या पासपोर्ट जो यह सत्यापित करे कि आपकी आयु 18 वर्ष या उससे अधिक है।' },
        { title: 'पहचान प्रमाण', desc: 'राष्ट्रीय आईडी, पैन कार्ड, ड्राइविंग लाइसेंस, या कोई भी सरकार द्वारा जारी फोटो पहचान पत्र।' },
      ],
      helpTitle: 'आवेदन में सहायता चाहिए?',
      helpSubtitle: 'हमारी सहायता टीम मतदाता पंजीकरण प्रक्रिया से संबंधित किसी भी प्रश्न में आपकी मदद के लिए उपलब्ध है।',
      callBtn: 'हेल्पलाइन पर कॉल करें',
      emailBtn: 'ईमेल सहायता',
    },
    simulator: {
      badge: 'इंटरैक्टिव डेमो',
      title: 'EVM वोटिंग सिम्युलेटर',
      subtitle: 'देखें वोट डालना कितना आसान है! हमारे इंटरैक्टिव EVM सिम्युलेटर को आज़माएं।',
      ready: 'तैयार',
      instructTitle: 'वोट कैसे डालें',
      instructBody: 'अपने पसंदीदा उम्मीदवार के बगल में नीला बटन दबाएं। बीप की प्रतीक्षा करें और VVPAT विंडो में अपना वोट देखें।',
      successTitle: 'वोट सफलतापूर्वक डाला गया!',
      successBody: 'आपका वोट दर्ज हो गया है। मुद्रित पर्ची 7 सेकंड के लिए VVPAT विंडो में दिखेगी।',
      resetBtn: 'सिम्युलेटर रीसेट करें',
    },
    footer: {
      tagline: 'नागरिकों को आत्मविश्वास के साथ मतदान करने और अपने राष्ट्र का भविष्य बनाने के लिए सशक्त बनाना।',
      quickLinks: 'त्वरित लिंक',
      resources: 'आधिकारिक संसाधन',
      newsletter: 'न्यूज़लेटर',
      newsletterDesc: 'आगामी चुनावों और पंजीकरण समय-सीमाओं के अपडेट के लिए सदस्यता लें।',
      emailPlaceholder: 'आपका ईमेल पता',
      subscribe: 'सदस्यता लें',
      privacy: 'गोपनीयता नीति',
      terms: 'सेवा की शर्तें',
      accessibility: 'अभिगम्यता',
      rights: `© ${new Date().getFullYear()} इलेक्शन प्रोसेस गाइड। सर्वाधिकार सुरक्षित।`,
      links: ['होम', 'चुनाव प्रक्रिया', 'मतदाता मार्गदर्शिका', 'सामान्य प्रश्न', 'संपर्क करें'],
      officialLinks: ['चुनाव आयोग', 'मतदाता पंजीकरण पोर्टल', 'उम्मीदवार जानें', 'मतदाता सूची खोज'],
    },
    faq: {
      badge: 'सामान्य प्रश्न',
      title: 'अक्सर पूछे जाने वाले प्रश्न',
      subtitle: 'मतदान प्रक्रिया के बारे में सबसे सामान्य प्रश्नों के उत्तर खोजें।',
      items: [
        { q: 'मतदान करने के लिए कौन पात्र है?', a: 'कोई भी भारतीय नागरिक जो 18 वर्ष या उससे अधिक का है और जिसका नाम उनके निर्वाचन क्षेत्र की मतदाता सूची में पंजीकृत है, वह मतदान करने के लिए पात्र है।' },
        { q: 'मतदान केंद्र पर कौन से दस्तावेज़ चाहिए?', a: 'आपका वोटर आईडी कार्ड (EPIC) प्राथमिक दस्तावेज़ है। वैकल्पिक रूप से, आप आधार कार्ड, पासपोर्ट, ड्राइविंग लाइसेंस या सरकार द्वारा अनुमोदित फोटो आईडी का उपयोग कर सकते हैं।' },
        { q: 'NOTA क्या है?', a: 'NOTA का अर्थ है "None of the Above" (इनमें से कोई नहीं)। यह मतदाताओं को मतपत्र पर सभी उम्मीदवारों को अस्वीकार करने की अनुमति देता है।' },
        { q: 'EVM कैसे काम करती है?', a: 'इलेक्ट्रॉनिक वोटिंग मशीन (EVM) एक सरल इलेक्ट्रॉनिक उपकरण है। अपने चुने हुए उम्मीदवार के नाम और प्रतीक के बगल में नीले बटन को दबाएं। एक बीप आपका वोट की पुष्टि करेगी।' },
        { q: 'क्या मैं मतदाता सूची में नाम न होने पर वोट दे सकता हूं?', a: 'नहीं। वोट देने के लिए आपका नाम मतदाता सूची में होना चाहिए। आप voters.eci.gov.in पर या अपने स्थानीय ERO कार्यालय में अपना पंजीकरण सत्यापित कर सकते हैं।' },
      ],
    },
    news: {
      badge: 'आधिकारिक चुनाव समाचार',
      subtitle: 'राष्ट्रीय चुनाव आयोग से सीधे सत्यापित अपडेट।',
      allUpdates: 'सभी अपडेट',
    },
    // Candidate Finder
    candidate: {
      badge: 'उम्मीदवार को जानें',
      title: 'सूचित विकल्प चुनें',
      subtitle: 'अपने क्षेत्र के उम्मीदवारों को जानने के लिए पिनकोड या निर्वाचन क्षेत्र का नाम दर्ज करें।',
      placeholder: 'पिनकोड दर्ज करें (जैसे: 110001, 700001)...',
      searchBtn: 'खोजें',
      resultsFor: 'उम्मीदवार मिले',
      education: 'शिक्षा',
      profession: 'पेशा',
      age: 'आयु',
      years: 'वर्ष',
      criminalCases: 'आपराधिक मामले',
      manifesto: 'घोषणापत्र की मुख्य बातें',
    },

  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const t = (key) => {
    const keys = key.split('.');
    let result = translations[lang];
    for (const k of keys) {
      result = result?.[k];
    }
    return result ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
