import React from 'react'
import Logo from '../Images/edusphere-2.png'
import DirectImpact from '../Images/direct-impact.png'
import IndirectImpact from '../Images/indirect-impact.png'

export default function Edusphere() {
  return (
    <>
    <div className="space"></div>
    <div className="edusphere-container">
      <div className="product-content">
        <img id='edusphere-logo' src={Logo} alt="" />
        <p id='content'>Welcome to <span id='span'>Edusphere</span>, where knowledge meets innovation in the ever-evolving realm of education. Here, we believe that learning is not just a journey; it's a transformative experience that shapes minds, empowers individuals, and drives progress. <br /><br />
          Established with a vision to revolutionize education, it stands at the forefront of educational excellence, offering a dynamic platform where students, educators, and enthusiasts come together to explore, engage, and excel. Our mission is to inspire lifelong learning, foster creativity, and equip learners with the skills and knowledge they need to thrive in the 21st century.
        </p>
      </div>
      <p id='heading'>Value <b>Proposition</b></p>
      <div className="box">
        <div className="left">
          <p id='sub-heading'><b>EduSphere</b> for <b>Educational Institutes</b></p>
          <div id="highlight"><p>EduSphere empowers institutions with global curriculum standards, enhancing operations and status.</p></div>
          <ul>
            <li><b>Enhanced Curriculum</b><br />Edusphere enriches the school curriculum with diverse skills for holistic student development.</li>
            <li><b>Innovative Learning Solutions</b><br />Innovative learning solutions to enhance student engagement and academic performance.</li>
            <li><b>Enhanced Reputation</b><br />Boosts school reputation, emphasizing their dedication to comprehensive education.</li>
          </ul>
        </div>
        <div className="right">
          <p id='sub-heading'><b>EduSphere</b> for <b>Students</b></p>
          <div id="highlight"><p>EduSphere enhances student learning with global curriculum standards, technology, and empathetic holistic teaching.</p></div>
          <ul>
            <li><b>Skillful Futures</b><br />Equips students with practical skills, preparing them for future success in their careers.</li>
            <li><b>Personalized Growth</b><br />Edusphere offers personalized learning, fostering growth in students' interests.</li>
            <li><b>Inclusive Support</b><br />Technology and psychology are incorporated into specialized, inclusive training for specially-abled kids.</li>
          </ul>
        </div>
      </div>
      <p id='heading'><b>Benefits</b></p>
      <div className="box">
        <div className="left">
          <p id='sub-heading'><b>EduSphere</b> for <b>Educational Institutes</b></p>
          <div id="highlight"><p>EduSphere empowers institutions with global curriculum standards, enhancing operations and status.</p></div>
          <ul>
            <li>Teacher upskilling enhances instructional quality and effectiveness, leading to improved student outcomes.</li>
            <li>Enrollment Boost: Attracts families seeking holistic, personalized education.</li>
            <li>Competitive Edge: Sets the institution apart with tailored, future-focused education.</li>
            <li>Visibility Boost: Increased recognition through expanded community engagement.</li>
          </ul>
        </div>
        <div className="right">
          <p id='sub-heading'><b>EduSphere</b> for <b>Students</b></p>
          <div id="highlight"><p>EduSphere enhances student learning with global curriculum standards, technology, and empathetic holistic teaching.</p></div>
          <ul>
            <li>Personalized Learning: Tailored educational experiences cater to individual learning styles</li>
            <li>The real-world application enhances comprehension and skill.</li>
            <li>Personalized support for dyslexic and dysgraphic students.</li>
            <li>Values and empathy are fostered through education.</li>
          </ul>
        </div>
      </div>
      <p id='heading'>The EduSphere <b style={{color: '#F69605'}}>Impact</b></p>
      <div className="box">
        <div className="left">
          <p id='sub-heading'>Direct <b style={{color: '#F69605'}}>Impact</b></p>
          <img src={DirectImpact} alt="" />
          <p>Teacher upskilling enhances instructional quality and effectiveness, leading to improved student outcomes.</p>
        </div>
        <div className="right">
          <p id='sub-heading'>Indirect <b style={{color: '#F69605'}}>Impact</b></p>
          <img src={IndirectImpact} alt="" />
          <p>Greater community involvement, improved school reputation, and long-term societal benefits through well-prepared graduates contributing positively to society.</p>
        </div>
      </div>
    </div>
    </>
  )
}