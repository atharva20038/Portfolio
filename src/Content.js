import './Content.css'
import Card from './Cards'

function Content(){

    const intro = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

    return (
        <div className='contentDiv'>
            <h2 className='header'>My <p className='diffColor'>services</p></h2>
            <h2 className='diffSize'>What I Do</h2>
            <div className="flex">
                <Card title="UI/UX Designer" intro={intro} icon={1}/>
                <Card title="Graphic Designer" intro={intro} icon={2}/>
                <Card title="Web Designer" intro={intro} icon={3}/>
            </div>
        </div>
    );
}

export default Content;