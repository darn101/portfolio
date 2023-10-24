import img from '../../data/dbq.png'
import ebazaar from '../../data/ebazaar.png'

const Portfolio = () => {
    return (
        <>
            <div id="Portfolio">
                <div className=' flex flex-col justify-center mt-[10rem] ml-[5%] md:ml-[20%] pb-[10rem]  h-full'>
                    <p className='text-white underline text-4xl font-medium decoration-solid underline-offset-[0.8rem]'>Portfolio</p>
                    <p className='mt-[5rem] text-white pr-[10%] text-lg'>Check some of my projects right here</p>
                    <div>
                        <div className='grid sm:grid-cols-2 md:grid-cols-3 mt-[2rem] gap-8 p-4'>
                            <div className='shadow-md shadow-gray-600 rounded-lg flex flex-col cursor-pointer'>
                                <img src={ebazaar} alt="" className="h-[15rem] w-[25rem] rounded-md duration-200 hover:scale-105" />
                                <div className='text-white flex justify-around items-center p-[1rem]'>

                                    <a href="https://ebazaar.cyclic.app/" target="_blank"><button className="duration-200 hover:scale-110 cursor-pointer">Demo</button></a>
                                    <a href="https://github.com/darn101/E-bazaar/tree/master" target="_blank"><button className="duration-200 hover:scale-110 cursor-pointer">Code</button></a>
                                </div>
                            </div>
                            <div className='shadow-md shadow-gray-600 rounded-lg flex flex-col cursor-pointer '>
                                <img src={img} alt="" className="h-[15rem] rounded-md duration-200 hover:scale-105" />
                                <div className='text-white flex justify-around items-center p-[1rem]'>
                                    {/* <button className="duration-200 hover:scale-110 cursor-pointer">Demo</button> */}
                                    <a href='https://github.com/darn101/database-query-generator/tree/master' target="_blank" className="duration-200 hover:scale-110 cursor-pointer">Code</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;