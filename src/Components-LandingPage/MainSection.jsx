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
    <div className="intro-container">
      <div className="intro-section">
        <div className="main-content">
          <div className="badge">
            <span className="badge-dot"></span>
            NOW POWERED BY AI 2.0
          </div>
          <h1 className="intro-title">Bridging Ambition with Opportunity.</h1>          
          <p className="intro-description">
            Empowering the next generation of talent by connecting high-performing <br />
            candidates with industry-leading organizations through AI-driven matching.
          </p>
          
          <div className="profile-container">
            <div className="profile">
              <img src={Profiles} alt="Profiles" className="profiles-img" />
            </div>
            <p className="profile-text">Join 50k+ professionals hired this month</p>
          </div>
        </div>
        <div className="intro-image-wrapper">
          <img src={Discussion} alt="Discussion" className="intro-image" />
        </div>
      </div>

      <div className="OS-sources">
        <h2 className="OS-sources-text">TRUSTED BY INDUSTRY LEADERS</h2>
        <div className="logos-slider">
          <img src={LeftArrow} alt="Left Arrow" className="rightarrow-icon" />
          <div className="OS-logos">
            <img src={Google} alt="Google" className="logo-img google" />
            <img src={Claude} alt="Claude" className="logo-img claude" />
            <img src={Deepseek} alt="Deepseek" className="logo-img deepseek" />
            <img src={GeminiAI} alt="Gemini" className="logo-img gemini" />
            <img src={Gradio} alt="Gradio" className="logo-img gradio" />
            <img src={Copilot} alt="Copilot" className="logo-img copilot" />
          </div>
          <img src={RightArrow} alt="Right Arrow" className="rightarrow-icon" />
        </div>
      </div>

      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Tailored Solutions for Everyone</h2>
          <p className="features-subtitle">Seamlessly connecting talent, growth, and institutional excellence with a modern, human-centric approach.</p>
        </div>

        <div className="features-grid">
          <div className="features-card">
            <img src={Candidates} alt="Candidates" className="card-icon" />
            <h3 className="card-title purple-text">For Candidates</h3>
            <p className="card-description">Accelerate your career growth with AI-powered job matching and direct access to top-tier hiring managers across the globe.</p>
            <div className="card-features">
              <div className="card-points">
                <img src={VerifiedPurple} alt="Verified" className="feature-icon" />
                <span className="feature-text">Personalized Job Alerts</span>
              </div>
              <div className="card-points">
                <img src={VerifiedPurple} alt="Verified" className="feature-icon" />
                <span className="feature-text">AI Resume Optimization</span>
              </div>
            </div>
            <Link to="" className="card-link purple-text">
              Get Started<img src={PurpleArrow} alt="Arrow" className="arrow-icon" />
            </Link>
          </div>

          <div className="features-card">
              <img src={Employers} alt="Employers" className="card-icon" />
            <h3 className="card-title purple-text">For Employers</h3>
            <p className="card-description">
              Build a sustainable talent pipeline with automated screening and high-precision sourcing tools designed for modern recruitment.
            </p>
            <div className="card-features">
              <div className="card-points">
                <img src={VerifiedPurple} alt="Verified" className="feature-icon" />
                <span className="feature-text">Instant Talent Sourcing</span>
              </div>
              <div className="card-points">
                <img src={VerifiedPurple} alt="Verified" className="feature-icon" />
                <span className="feature-text">Hiring Analytics Dashboard</span>
              </div>
            </div>
            <Link to="" className="card-link purple-text">
              Start Hiring <img src={PurpleArrow} alt="Arrow" className="arrow-icon" />
            </Link>
          </div>

          <div className="features-card">
              <img src={Institutions} alt="Institutions" className="card-icon" />
            <h3 className="card-title pink-text">For Institutions</h3>
            <p className="card-description">
              Streamline placement tracking and strengthen industry partnerships with a centralized hub for student success and alumni engagement.
            </p>
            <div className="card-features">
              <div className="card-points">
                <img src={VerifiedPink} alt="Verified" className="feature-icon" />
                <span className="feature-text">Placement Success Metrics</span>
              </div>
              <div className="card-points">
                <img src={VerifiedPink} alt="Verified" className="feature-icon" />
                <span className="feature-text">Corporate Network Access</span>
              </div>
            </div>
            <Link to="" className="card-link pink-text">
              Partner with Us <img src={PinkArrow} alt="Arrow" className="arrow-icon" />
            </Link>
          </div>
        </div>
      </div>

      <div className="datas-container">
        <div className="datas">
          <h2>500k+</h2>
          <p>Jobs Posted Annually</p>
          <span></span>
        </div>
        <div className="datas">
          <h2>10k+</h2>
          <p>Hiring Partners</p>
          <span></span>
        </div>
        <div className="datas">
          <h2>95%</h2>
          <p>Placement Rate</p>
          <span></span>
        </div>
      </div>

      <div className="review-container">
        <div className="review-header">
          <p className="review-tag">SUCCESS STORIES</p>
          <h2 className="review-title">Voices from our thriving community</h2>
        </div>

        <div className="review-wrapper">
          <div className="review-card">
            <div className="review-content">
              <img src={ProfileImage} alt="Profile" className="profile-image"/>
              <div className="review-user">
                <img src={Stars} alt="Stars" className="stars-image"/>
                <h4>Sarah Chen</h4>
                <p>Product Designer @ Aura Systems</p>
              </div>
              <img src={Quotes} alt="Quotes" className="quotes-image"/>
            </div>
            <p className="review-text">
              "ConnectHire transformed my job search. The AI matching felt
              intuitive, and within two weeks, I was interviewed and hired by my
              dream company in fintech. The process was seamless."
            </p>
          </div>

          <div className="review-card">
            <div className="review-content">
              <img src={ProfileImage} alt="Profile" className="profile-image"/>
              <div className="review-user">
                <img src={Stars} alt="Stars" className="stars-image"/>
                <h4>David Miller</h4>
                <p>Talent Director @ Zenith Capital</p>
              </div>
              <img src={Quotes} alt="Quotes" className="quotes-image"/>
            </div>
            <p className="review-text">
              "The quality of candidates on ConnectHire is unmatched. We
              reduced our time-to-hire by 40% and have found some of our most
              productive team members through their automated screening."
            </p>
          </div>
        </div>
      </div>

      <div className="cta-container">
        <h2>Ready to build your <br />professional future?</h2>
        <p>Join thousands of professionals and companies who have already found their perfect match through ConnectHire.</p>
        <div className="cta-buttons">
          <Link to=""><button className="cta-find-btn">Find Your Next Role</button></Link>
          <Link to=""><button className="cta-hire-btn">Hire Top Talent</button></Link>
        </div>
      </div>

    </div>
  )
}

export default MainSection