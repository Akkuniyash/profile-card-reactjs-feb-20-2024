import PropTypes from 'prop-types'
const userData = [
  {
    name: "Akkuniyash",
    city: "Chennai",
    description: "Junior Full Stack Developer",
    skills: ["HTML", "CSS", "JS", "Bootstrap", "Tailwind CSS", "Node JS", "React", "Java", "Spring", "SpringBoot", "Mysql", "MongoDB", "Swing", "Git"],
    online: true,
    profile: "images/me.jpg"
  },
  {
    name: "Paul",
    city: "San Francisco",
    description: "UI/UX Designer",
    skills: ["UI/UX Design", "Sketch", "Adobe XD", "Figma","Photoshop","CorelDRAW","DaVinci Resolve","Adobe Illustrator", "HTML", "CSS", "JavaScript"],
    online: true,
    profile: "images/pic4.jpg"
  },
  {
    name: "Elisa",
    city: "Los Angeles",
    description: "Software Tester",
    skills: ["Manual Testing", "Automated Testing", "Selenium", "JUnit", "TestNG", "Bug Tracking","Apache JMeter","Jenkins","Bugzilla","OWASP ZAP"],
    online: false,
    profile: "images/pic3.png"
  }
];

function User(props)
{
    return (
        
    <div className="card-container">
        <div className={props.online?"pro online":"pro offline"}>{props.online ? "ONLINE":"OFFLINE"}</div>
        <img className="img" src={props.profile} alt="" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
          <h6>Skills</h6>
            <ul>
               {props.skills.map((skill,index)=>(
                <li key={index}>{skill}</li>
               ))}
            </ul>
        </div>
    </div>
        
    )
}
const UserCard = () => {
  return (
    <>
    {
      userData.map((user,index)=>(
        <User key={index} name={user.name} city={user.city} description={user.description}
        skills={user.skills}
        online={user.online}
        profile={user.profile}/>
        
      ))

    }
    </>
  )
}

export default UserCard

User.propTypes={
  name:PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  skills:PropTypes.arrayOf(PropTypes.string).isRequired,
  online:PropTypes.bool.isRequired,
  profile:PropTypes.string.isRequired
}
