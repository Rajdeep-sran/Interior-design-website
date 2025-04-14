import React from 'react'
import './Team.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import TeamCard from './TeamCard'
import team_1 from "../../assets/team1.png"
import team_2 from "../../assets/team2.png"
import team_3 from "../../assets/team3.png"
import team_4 from "../../assets/team4.png"
import team_5 from "../../assets/team5.png"
import team_6 from "../../assets/team6.png"
import team_7 from "../../assets/team7.png"
import team_8 from "../../assets/team8.png"
import team_9 from "../../assets/team9.png"
import team_10 from "../../assets/team10.png"
import team_11 from "../../assets/team11.png"
import team_12 from "../../assets/team12.png"
import team_13 from "../../assets/team13.png"
import team_14 from "../../assets/team14.png"
import team_15 from "../../assets/team15.png"
import team_16 from "../../assets/team16.png"

const Team = () => {
  return (
    <>
    <div className='main'>
    <Navbar />
    <div className='team'>

     <h1><br />The Team</h1>
    
    <div className='cardComp'>
    <TeamCard title="Agni Mehra" subtitle="Chief Inspiration Officer" img={team_1}/>
    <TeamCard title="Ajay Puri" subtitle="Chief Code Couturier" img={team_2}/>
    <TeamCard title="Mandeep Malik" subtitle="Innovation Officer" img={team_3}/>
    <TeamCard title="Aditi Arora" subtitle="Teamwork Tactician & CSR" img={team_4}/>
    <TeamCard title="Anna Tatsioni" subtitle="Design Director & Editor" img={team_5}/>
    <TeamCard title="Parav Gupta" subtitle="User Experience Guru" img={team_6}/>
    <TeamCard title="Rohini Sharma" subtitle="Marketing Maverick" img={team_7}/>
    <TeamCard title="Jashika Roy" subtitle="Content Choreographer" img={team_8}/>
    <TeamCard title="Jasmeen kaur" subtitle="Senior Code Commander" img={team_9}/>
    <TeamCard title="Bhavana Chopra" subtitle="SEO Strategist" img={team_10}/>
    <TeamCard title="Ritik Bedi" subtitle="Sales Designer" img={team_11}/>
    <TeamCard title="Deepak Singh" subtitle="Customer Delight Specialist" img={team_12}/>
    <TeamCard title="Palak Jain" subtitle="Customer Care Representative" img={team_13}/>
    <TeamCard title="Maya Kapoor" subtitle="Customer Care Representative" img={team_14}/>
    <TeamCard title="Tanvi" subtitle="Resident Interior Designer" img={team_15}/>
    <TeamCard title="Diya Bansal" subtitle="Resident Interior Designer" img={team_16}/>
    </div>
    
     </div>
    </div>
    <Footer />
  </>
  )
}

export default Team