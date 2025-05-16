import React from 'react'
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Register from './Register';
import SubmissionPage from './SubmissionPage';
import ImportantDates from './ImportantDates';
import Publications from './Publications';
export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <SubmissionPage/>
    <Register/>
    <ImportantDates/>
    <Publications/>
    </>
  )
}
