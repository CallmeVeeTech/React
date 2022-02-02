import React, {useEffect, useState} from 'react';
import './App.css';
import logo from './img/logo.svg'

const App =()=>{
const [counter, setCounter] = useState(0);

  const bgColorText = [
    {
      bg: "#123e7d",
      text: "land your dream job, home and abroad"
    },
    {
      bg: "#12687d",
      text: "Doing well"
    },
    {
      bg: "#7fffd4",
      text: "Abroad"
    }
  ]
  const addCount = ()=>{
    setCounter(counter + 1)
  }
  const redCount =()=>{
    setCounter(counter - 1)
    if(counter === 1){
      setCounter(counter)
    }
  }
  useEffect(()=>{
    setInterval(()=>{
      setCounter((el)=>el +1)
  }, 5000);
}, []);
  

  return(
    <div className="project">
    <header>
      <div className="head">
      <div className="logo-hold"><img src={logo} alt=""/></div> 
      <div className="header-text">
        <div>Find Job</div>
        <div>Coaching</div>
        <div>Sign In</div>
        <button className="bt">For Employees</button>
      </div>
      </div>
    </header> 
    <div className="hero" style={{backgroundColor: bgColorText[counter % bgColorText.length].bg}}>
      <h2>{bgColorText[counter % bgColorText.length].text}</h2>
      <div className="info">
        We connect you with companies hiring 
        talented and professional in the <span>US </span> and <span>Africa</span>
      </div>
      <div className="input-hold">
        <img src={require("./img/search.png")} alt=""/>
        <input placeholder='Search '></input>
        <button>Search</button>
      </div>
      <div className="control">
        <div className="control-hold" onClick={redCount}><img src={require('./img/prev.png')} alt=""/></div>
        <div className="control-hold" onClic={addCount}><img src={require('./img/next.png')} alt=""/></div>
      </div>
    </div>
    <main>
      <div className="top">Recently posted jobs</div>
      <div className="card-hold">
      <div className="card">
        <img src={require("./img/ko.png")} alt=""/>
        <div className="text">
          <div className="job">Backend Engineer</div>
          <div className="address">Kobo 360 (K0bo Logistics..</div>
          <div className="location">Lagos</div>
          <div className="date-hold">
          <div className="date"><i>3 months  ago</i></div>
          <button className= "btn">Apply</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={require("./img/ko.png")} alt=""/>
        <div className="text">
          <div className="job">Backend Engineer</div>
          <div className="address">Kobo 360 (K0bo Logistics..</div>
          <div className="location">Lagos</div>
          <div className="date-hold">
          <div className="date"><i>3 months  ago</i></div>
          <button className= "btn">Apply</button>
          </div>
        </div>
      </div>
      </div>
      <div className="top">Explore US-based jobs</div>
      <div className="card-hold">
      <div className="card">
        <img src={require("./img/ko.png")} alt=""/>
        <div className="text">
          <div className="job">Backend Engineer</div>
          <div className="address">Kobo 360 (K0bo Logistics..</div>
          <div className="location">Lagos</div>
          <div className="date-hold">
          <div className="date"><i>3 months  ago</i></div>
          <button className= "btn">Apply</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={require("./img/ko.png")} alt=""/>
        <div className="text">
          <div className="job">Backend Engineer</div>
          <div className="address">Kobo 360 (K0bo Logistics..</div>
          <div className="location">Lagos</div>
          <div className="date-hold">
          <div className="date"><i>3 months  ago</i></div>
          <button className= "btn">Apply</button>
          </div>
        </div>
      </div>
      </div>
      <div className="explore-btn">
      <button className="explore">EXPLORE ALL JOBS</button>
      </div>
      <div className="top">Companies recruiting from our Talent List</div>
      <div className="pic-holder">
        <div className="pic-1">
          <img src={require('./img/raliance.png')} alt=""/>
          <img src={require('./img/fair.png')} alt=""/>
          <img src={require('./img/elevan.png')} alt=""/>
          <img src={require('./img/chris.png')} alt=""/>
        </div>
        <div className="pic-2">
          <img src={require('./img/woerman.png')} alt=""/>
          <img src={require('./img/sbc.png')} alt=""/>
          <img src={require('./img/gb.png')} alt=""/>
          <img src={require('./img/zercom.png')} alt=""/>
        </div>
      </div>
      <div className="top">Let's help you stand out</div>
      <div className="card2-hold1">
      <div className="card2-hold">
        <div className="card2" >
          <div className="talent">Join our Talent List</div>
          <div className="talent-inf0">Create your professional profile by uploading your CV
            and filing a profile from
          </div>
          <div className="link">JOIN NOW</div>
        </div>
        <div className="skill-hold">
        <img src={require('./img/skills.png')} alt=""/>
        </div>
      </div>
      </div>
      <div className="card2-hold1">
      <div className="card2-hold">
      <div className="skill-hold">
        <img src={require('./img/skills.png')} alt=""/>
        </div>
        <div className="card2" >
          <div className="talent">Get US-based remote jobs</div>
          <div className="talent-inf0">Finding your dream remote jobs just got
          easier. We curate and deliver top remote job from the US straight to
          your inbox
          </div>
          <div className="link">Find jobs</div>
        </div>
      </div>
      </div>
      <div className="card2-hold1">
      <div className="card2-hold">
        <div className="card2" >
          <div className="talent">Showcase your talent by taking
          our HR-endorsed assessment</div>
          <div className="talent-inf0">Pass the online assessment once
          and for all.
          </div>
          <div className="link">LEARN MORE</div>
        </div>
        <div className="skill-hold">
        <img src={require('./img/skills.png')} alt=""/>
        </div>
      </div>
      </div>
      <div className="card2-hold1">
      <div className="card2-hold">
      <div className="skill-hold">
        <img src={require('./img/career.png')} alt=""/>
        </div>
        <div className="card2" >
          <div className="talent">Career coaching</div>
          <div className="talent-inf0">We offer periodic FREE career coaching to
          mid-senior level managers. We help you review your career path,
          optimize your CV to land bigger roles, prep you for interview and 
          negotiations
          </div>
          <div className="link">LEARN MORE</div>
        </div>
      </div>
      </div>
      <div className="bottom-hold">
        <div className="bottom">
          <div className="people">
            <img src={require('./img/people.png')} alt=""/>
          </div>
          <div className="people-text">
            <div className="dream">Land a dream US remote job</div>
            <div className="employer">Employers are always checking our pool of talents for their
              hire
            </div>
            <div className="last-btn">
              <button className="btn1">Join Now</button>
              <button className= "btn1">Search Jobs</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}
export default App;