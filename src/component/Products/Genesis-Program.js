import React from 'react'
import Logo from '../Images/genesis-2.png'
import DirectImpact from '../Images/direct-impact-1.png'
import IndirectImpact from '../Images/indirect-impact-1.png'

export default function Genesis() {
  return (
    <>
    <div className="space"></div>
    <div className="genesis-container">
      <div className="product-content">
        <img id='genesis-logo' src={Logo} alt="" />
        <p id='content'>Welcome to <span id='span'>Genesis Program</span>, where knowledge meets innovation in the ever-evolving realm of education. Here, we believe that learning is not just a journey; it's a transformative experience that shapes minds, empowers individuals, and drives progress. <br /><br />
          Established with a vision to revolutionize education, it stands at the forefront of educational excellence, offering a dynamic platform where students, educators, and enthusiasts come together to explore, engage, and excel. Our mission is to inspire lifelong learning, foster creativity, and equip learners with the skills and knowledge they need to thrive in the 21st century.
        </p>
      </div>
      <p id='heading'>Value <b>Proposition</b></p>
      <div className="box">
        <div className="left">
          <p id='sub-heading'><b>Genesis</b> for <b>Corporates</b></p>
          <div id="highlight"><p>Outsource your HR sourcing, Onboarding, and Training with Genesis.</p></div>
          <ul>
            <li><b>Tailored Talent Acquisition</b><br />We tailor intern and job applicant selection to your company's unique culture, values, and skill needs.</li>
            <li><b>Streamlined Recruitment Process</b><br />Say goodbye to lengthy recruitment processes and endless resumes.</li>
            <li><b>Long-term Partnerships</b><br />We provide ongoing support for candidates and corporates, ensuring long-term success.</li>
          </ul>
        </div>
        <div className="right">
          <p id='sub-heading'><b>Genesis</b> for <b>Students</b></p>
          <div id="highlight"><p>Skill up to the industry standards with Genesis.</p></div>
          <ul>
            <li><b>Personalized Skill Development</b><br />With Genesis, access tailored courses empowering your skills for today's job market.</li>
            <li><b>Networking Opportunities</b><br />Connect through events, workshops, and networking sessions for endless career opportunities.</li>
            <li><b>Tailored Career Opportunities</b><br />Goodbye to generic job searches. Genesis connects you with opportunities aligned with your skills and aspirations.</li>
          </ul>
        </div>
      </div>
      <p id='heading'><b>Benefits</b></p>
      <div className="box">
        <div className="left">
          <p id='sub-heading'><b>Genesis</b> for <b>Corporates</b></p>
          <div id="highlight"><p>Outsource your HR sourcing, Onboarding, and Training with Genesis.</p></div>
          <ul>
            <li><b>Targeted Talent Acquisition</b><br />Genesis Program ensures that the candidates presented to corporates are not just qualified on paper but are also culturally aligned with the organization. </li>
            <li><b>Diverse Talent Pool</b><br />The Genesis Program provides access to a diverse pool of candidates, ensuring corporates can benefit from a variety of perspectives and skill sets, which can foster innovation and creativity within the organization.</li>
            <li><b>Reduced Turnover</b><br />By focusing on cultural fit and long-term partnerships, Genesis helps reduce turnover rates. </li>
            <li><b>Brand Enhancement</b><br />Partnering with Genesis demonstrates a commitment to investing in talent development and supporting the community. This can enhance the corporate brand and reputation, making it more attractive to potential customers, investors, and future employees.
</li>
          </ul>
        </div>
        <div className="right">
          <p id='sub-heading'><b>Genesis</b> for <b>Students</b></p>
          <div id="highlight"><p>Skill up to the industry standards with Genesis.</p></div>
          <ul>
            <li><b>Customized Skill Development</b><br />The Genesis Program offers tailored learning paths for students based on their interests and career goals. </li>
            <li><b>Alignment with Career Aspirations</b><br />Unlike generic job search platforms, Genesis understands the individual strengths and aspirations of each student. By matching them with internships and job opportunities that align with their career goals, it ensures higher job satisfaction and fulfillment among students.</li>
            <li><b>Mentorship Opportunities</b><br />Students enrolled in the Genesis Program have access to mentorship from experienced professionals in their field. </li>
            <li><b>Career Advancement Support</b><br />Genesis doesn't just focus on entry-level positions but also supports students in their career advancement journey. Whether it's through upskilling opportunities, career counseling, or job placement assistance</li>
          </ul>
        </div>
      </div>
      <p id='heading'>The Genesis <b style={{color: '#004AAD'}}>Impact</b></p>
      <div className="box">
        <div className="left">
          <p id='sub-heading'>Direct <b style={{color: '#004AAD'}}>Impact</b></p>
          <img src={DirectImpact} alt="" />
          <p>The Genesis Program directly empowers individuals by providing them with tailored skill development programs designed to meet the demands of the modern job market. By bridging the gap between education and employment, we empower individuals to unlock their full potential and pursue rewarding career opportunities. Additionally, by enhancing participants' skill sets, we contribute to their employability and professional growth, ultimately fostering economic independence and personal fulfillment.</p>
        </div>
        <div className="right">
          <p id='sub-heading'>Indirect <b style={{color: '#004AAD'}}>Impact</b></p>
          <img src={IndirectImpact} alt="" />
          <p>Beyond the immediate training outcomes, the Genesis Program has a ripple effect on communities and industries. Indirectly, our program contributes to economic growth by producing a skilled workforce capable of driving innovation and productivity within businesses. Furthermore, by nurturing a pipeline of skilled professionals, we contribute to industry advancement, ensuring a continuous supply of talent to meet evolving market demands.</p>
          </div>
      </div>
    </div>
    </>
  )
}