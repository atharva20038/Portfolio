import logo from './logo.svg';
import './App.css';
import {RiInstagramFill, RiLinkedinFill} from 'react-icons/ri';
import {ImLinkedin} from 'react-icons/im';

function Talking(){
  console.log("Talking");
}

function DivHeader(){
  return (
   <nav className='navBarParent'>
      <ul className='navBar'>
        <li><img src={logo} className="App-logo" alt="logo" /></li>
        <li><p>Portfolio</p></li>
      </ul>
      <ul className='navBar'>
        <li><a href='/'>Home</a></li>
        <li><a href='/projects'>Projects</a></li>
        <li><a href='/resume'>Resume</a></li>
      </ul>
   </nav>
  )
}

function Introduction(){
  return (
    <div className='Introduction'>
      <h2>Hello, <p>I'm</p></h2>
      <p className='colorChange'>Aarav Balachandran</p>
      <h2>UI/UX Designer</h2>
      <p className='IntroductionText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  )
}

function Socials(){
  console.log("Socials");
}

function InstagramSocial(icon){
  return (
    <div className='IconSocial' onClick={Socials}>
      <RiInstagramFill color='#00bd95'/>
    </div>
  )
}

function LinkedinSocial(icon){
  return (
    <div className='IconSocial' onClick={Socials}>
      <ImLinkedin color='#00bd95' />
    </div>
  )
}

function PageHeader(){
  return (
    <div className='MainDiv'>
      <DivHeader />
      <Introduction />
      <button className='letsTalk' onClick={Talking}>Let's Talk</button>
      <div className='Social'>
        <p className='IntroductionText'>Check Out my</p>
        <InstagramSocial />
        <LinkedinSocial />
      </div>
    </div>
  )
}



export default PageHeader;
