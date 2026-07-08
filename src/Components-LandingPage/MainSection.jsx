import React from 'react'
import { Link } from "react-router-dom";
import './MainSection.css'
import Discussion from '../assets/LandingPageAssets/DiscussionImg.png'
import Profiles from '../assets/LandingPageAssets/ProfileIcons.png'
import LeftArrow from '../assets/LandingPageAssets/LeftArrow.png'
import RightArrow from '../assets/LandingPageAssets/RightArrow.png'
import Claude from '../assets/LandingPageAssets/ClaudeIcon.png'
import Copilot from '../assets/LandingPageAssets/CopilotIcon.png'
import Deepseek from '../assets/LandingPageAssets/DeepseekIcon.png'
import GeminiAI from '../assets/LandingPageAssets/GeminiIcon.png'
import Gradio from '../assets/LandingPageAssets/GradioIcon.png'
import Google from '../assets/LandingPageAssets/GoogleIcon.png'
import Candidates from '../assets/LandingPageAssets/CandidatesIcon.png'
import Employers from '../assets/LandingPageAssets/EmployersIcon.png'
import Institutions from '../assets/LandingPageAssets/InstitutionIcon.png'
import VerifiedPurple from '../assets/LandingPageAssets/Verified-Purple.png'
import VerifiedPink from '../assets/LandingPageAssets/Verified-Pink.png'
import PurpleArrow from '../assets/LandingPageAssets/PurpleRightArrow.png'
import PinkArrow from '../assets/LandingPageAssets/PinkRightArrow.png'
import Quotes from '../assets/LandingPageAssets/DoubleQuotes.png'
import ProfileImage from '../assets/LandingPageAssets/ProfileImage.png'
import Stars from '../assets/LandingPageAssets/StarIcon.png'

const MainSection = () => {
  return (
    <div className="landingPage-intro-container">
      <div className="landingPage-intro-section">
        <div className="landingPage-main-content">
          <div className="landingPage-badge">
            <span className="landingPage-badge-dot"></span>
            NOW POWERED BY AI 2.0
          </div>
          <h1 className="landingPage-intro-title">Bridging Ambition with Opportunity.</h1>          
          <p className="landingPage-intro-description">
            Empowering the next generation of talent by connecting high-performing <br />
            candidates with industry-leading organizations through AI-driven matching.
          </p>
          
          <div className="landingPage-profile-container">
            <div className="landingPage-profile">
              <img src={Profiles} alt="Profiles" className="landingPage-profiles-img" />
            </div>
            <p className="landingPage-profile-text">Join 50k+ professionals hired this month</p>
          </div>
        </div>
        <div className="landingPage-intro-image-wrapper">
          <img src={Discussion} alt="Discussion" className="landingPage-intro-image" />
        </div>
      </div>

      <div className="landingPage-OS-sources">
        <h2 className="landingPage-OS-sources-text">TRUSTED BY INDUSTRY LEADERS</h2>
        <div className="landingPage-logos-slider">
          <img src={LeftArrow} alt="Left Arrow" className="landingPage-rightarrow-icon" />
          <div className="landingPage-OS-logos">
            <img src={Google} alt="Google" className="logo-img google" />
            <img src={Claude} alt="Claude" className="logo-img claude" />
            <img src={Deepseek} alt="Deepseek" className="logo-img deepseek" />
            <img src={GeminiAI} alt="Gemini" className="logo-img gemini" />
            <img src={Gradio} alt="Gradio" className="logo-img gradio" />
            <img src={Copilot} alt="Copilot" className="logo-img copilot" />
          </div>
          <img src={RightArrow} alt="Right Arrow" className="landingPage-rightarrow-icon" />
        </div>
      </div>

      <div className="landingPage-features-container">
        <div className="landingPage-features-header">
          <h2 className="landingPage-features-title">Tailored Solutions for Everyone</h2>
          <p className="landingPage-features-subtitle">Seamlessly connecting talent, growth, and institutional excellence with a modern, human-centric approach.</p>
        </div>

        <div className="landingPage-features-grid">
          <div className="landingPage-features-card">
            <img src={Candidates} alt="Candidates" className="landingPage-card-icon" />
            <h3 className="landingPage-card-title purple-text">For Candidates</h3>
            <p className="landingPage-card-description">Accelerate your career growth with AI-powered job matching and direct access to top-tier hiring managers across the globe.</p>
            <div className="landingPage-card-features">
              <div className="landingPage-card-points">
                <img src={VerifiedPurple} alt="Verified" className="landingPage-feature-icon" />
                <span className="landingPage-feature-text">Personalized Job Alerts</span>
              </div>
              <div className="landingPage-card-points">
                <img src={VerifiedPurple} alt="Verified" className="landingPage-feature-icon" />
                <span className="landingPage-feature-text">AI Resume Optimization</span>
              </div>
            </div>
            <Link to="" className="landingPage-card-link purple-text">
              Get Started<img src={PurpleArrow} alt="Arrow" className="landingPage-arrow-icon" />
            </Link>
          </div>

          <div className="landingPage-features-card">
              <img src={Employers} alt="Employers" className="landingPage-card-icon" />
            <h3 className="landingPage-card-title purple-text">For Employers</h3>
            <p className="landingPage-card-description">
              Build a sustainable talent pipeline with automated screening and high-precision sourcing tools designed for modern recruitment.
            </p>
            <div className="landingPage-card-features">
              <div className="landingPage-card-points">
                <img src={VerifiedPurple} alt="Verified" className="landingPage-feature-icon" />
                <span className="landingPage-feature-text">Instant Talent Sourcing</span>
              </div>
              <div className="landingPage-card-points">
                <img src={VerifiedPurple} alt="Verified" className="landingPage-feature-icon" />
                <span className="landingPage-feature-text">Hiring Analytics Dashboard</span>
              </div>
            </div>
            <Link to="" className="landingPage-card-link purple-text">
              Start Hiring <img src={PurpleArrow} alt="Arrow" className="landingPage-arrow-icon" />
            </Link>
          </div>

          <div className="landingPage-features-card">
              <img src={Institutions} alt="Institutions" className="landingPage-card-icon" />
            <h3 className="landingPage-card-title pink-text">For Institutions</h3>
            <p className="landingPage-card-description">
              Streamline placement tracking and strengthen industry partnerships with a centralized hub for student success and alumni engagement.
            </p>
            <div className="landingPage-card-features">
              <div className="landingPage-card-points">
                <img src={VerifiedPink} alt="Verified" className="landingPage-feature-icon" />
                <span className="landingPage-feature-text">Placement Success Metrics</span>
              </div>
              <div className="landingPage-card-points">
                <img src={VerifiedPink} alt="Verified" className="landingPage-feature-icon" />
                <span className="landingPage-feature-text">Corporate Network Access</span>
              </div>
            </div>
            <Link to="" className="landingPage-card-link pink-text">
              Partner with Us <img src={PinkArrow} alt="Arrow" className="landingPage-arrow-icon" />
            </Link>
          </div>
        </div>
      </div>

      <div className="landingPage-datas-container">
        <div className="landingPage-datas">
          <h2>500k+</h2>
          <p>Jobs Posted Annually</p>
          <span></span>
        </div>
        <div className="landingPage-datas">
          <h2>10k+</h2>
          <p>Hiring Partners</p>
          <span></span>
        </div>
        <div className="landingPage-datas">
          <h2>95%</h2>
          <p>Placement Rate</p>
          <span></span>
        </div>
      </div>

      <div className="landingPage-review-container">
        <div className="landingPage-review-header">
          <p className="landingPage-review-tag">SUCCESS STORIES</p>
          <h2 className="landingPage-review-title">Voices from our thriving community</h2>
        </div>

        <div className="landingPage-review-wrapper">
          <div className="landingPage-review-card">
            <div className="landingPage-review-content">
              <img src={ProfileImage} alt="Profile" className="landingPage-profile-image"/>
              <div className="landingPage-review-user">
                <img src={Stars} alt="Stars" className="landingPage-stars-image"/>
                <h4>Sarah Chen</h4>
                <p>Product Designer @ Aura Systems</p>
              </div>
              <img src={Quotes} alt="Quotes" className="landingPage-quotes-image"/>
            </div>
            <p className="landingPage-review-text">
              "ConnectHire transformed my job search. The AI matching felt
              intuitive, and within two weeks, I was interviewed and hired by my
              dream company in fintech. The process was seamless."
            </p>
          </div>

          <div className="landingPage-review-card">
            <div className="landingPage-review-content">
              <img src={ProfileImage} alt="Profile" className="landingPage-profile-image"/>
              <div className="landingPage-review-user">
                <img src={Stars} alt="Stars" className="landingPage-stars-image"/>
                <h4>David Miller</h4>
                <p>Talent Director @ Zenith Capital</p>
              </div>
              <img src={Quotes} alt="Quotes" className="landingPage-quotes-image"/>
            </div>
            <p className="landingPage-review-text">
              "The quality of candidates on ConnectHire is unmatched. We
              reduced our time-to-hire by 40% and have found some of our most
              productive team members through their automated screening."
            </p>
          </div>
        </div>
      </div>

      <div className="landingPage-cta-container">
        <h2>Ready to build your <br />professional future?</h2>
        <p>Join thousands of professionals and companies who have already found their perfect match through ConnectHire.</p>
        <div className="landingPage-cta-buttons">
          <Link to=""><button className="landingPage-cta-find-btn">Find Your Next Role</button></Link>
          <Link to=""><button className="landingPage-cta-hire-btn">Hire Top Talent</button></Link>
        </div>
      </div>

    </div>
  )
}

export default MainSection