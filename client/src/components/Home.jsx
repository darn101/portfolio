import { Link } from 'react-scroll';
import { AiOutlineRight } from 'react-icons/ai'
import image from '../../data/portfolio.png'

const Home = () => {
    return (
        <div className='mt-[10rem] flex justify-between lg:flex-row flex-col pr-[5%] ml-[5%] md:ml-[20%] pr-[10%] lg:pr-[13%]' id='Home'>
            <div className='lg: max-w-[31rem]'>
                <p className='text-white text-4xl sm:text-7xl md:text-6xl font-bold md:tracking-wide md:[word-spacing:10px] md:leading-[4rem]'>I'm a Full Stack Developer.</p>
                <p className='text-neutral-500 mt-5 text-xl'>I have experience of building applications.<br></br> Currently I love to work on web applications using technologies like React, Tailwind, Node and MongoDB.</p>
                <Link to="Portfolio" smooth duration={500} offset={-50}>
                    <button className='group flex mt-5 text-white px-4 py-2 mt-4 text-xl bg-blue-700 rounded-md'>Portfolio <i className='group-hover:rotate-90 duration-300 mt-1 ml-0.5'><AiOutlineRight /></i></button>
                </Link>
            </div>
            <div className='rounded-2xl w-[23rem] h-[30rem] md:w-[28rem] md:[40rem] mt-10 lg:mt-0 '>
                <img src={image}></img>
            </div>
        </div>
    );
}

export default Home;