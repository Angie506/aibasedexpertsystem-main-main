import "../App.css";
import bookclub from '../assets/bookclub.gif';

export default function Home() {
  return (
    <>
    
<h1>Welcome to</h1>
        <h1 className="brand-name"><i>Book Club📚</i></h1>
        <br />
        <img src={bookclub} alt="Book gif" style={{width: "300px"}} />
        </>
  )
}