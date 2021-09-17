import Card from 'react-bootstrap/Card';
import './home.css';

const Home = () => {  
  return (
  <Card className="bg-dark text-white home-card">
    <Card.Img src="coding-1920x1536-unsplash.jpg" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>Welcome to my webpage!<br/>I am Alberto.</Card.Title>
      <Card.Text>
        Junior Full Stack Web Developer with 5-year background in IT as a Business Systems Analyst for a manufacturing and retail company.<br/>My passion for learning, problem-solving skills, and strong work ethic are the engine that drives me forward through this new and exciting career path.
      </Card.Text>
      <Card.Text>Photo by <a href="https://unsplash.com/@altumcode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">AltumCode</a> on <a href="https://unsplash.com/s/photos/developer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </Card.Text>
    </Card.ImgOverlay>
  </Card>
  )
}

export default Home;