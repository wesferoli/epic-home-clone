import { useState } from 'react';

import Header from '../../components/Header'
import MiniCard from '../../components/MiniCard';
import Nav from '../../components/Nav';

import R6Large from '../../assets/images/R6-Large.jpg';
import R6Image from '../../assets/images/r6-extraction.jpg';
import dl2 from '../../assets/images/dl2.png';
import ffVII from '../../assets/images/ff-vii.jpg';
import fortnite from '../../assets/images/fortnite.jpg';
import gow from '../../assets/images/gow.jpg';
import lol from '../../assets/images/lol.jpg';

import '../../styles/pages/Home/Home.sass'

interface SliderProps {
  id: number;
  image: string;
  title: string;
}

const Home = () => {
  const [slideContent, setSlideContent] = useState<SliderProps[]>([
    {
      id: 1,
      image: R6Image,
      title: 'Rainbow Six: Extraction'
    }, 
    {
      id: 2,
      image: dl2,
      title: 'Dying Light 2'
    }, 
    {
      id: 3,
      image: gow,
      title: 'God of War'
    }, 
    {
      id: 4,
      image: lol,
      title: 'League of Legends'
    }, 
    {
      id: 5,
      image: fortnite,
      title: 'Fortnite'
    }, 
    {
      id: 6,
      image: ffVII,
      title: 'Final Fantasy VII'
    }
  ])

  return (
    <>
      <Header />
      <body style={{margin: '0 150px'}}>  
        <Nav />
        <section>
          <div>
            <img src={R6Large} alt="" className='main-image' />
          </div>

          <div>
            { slideContent.map((content) => {
              return <MiniCard image={content.image} title={content.title} />
            }) }
          </div>
        </section>
      </body>
    </>
  )
}

export default Home;