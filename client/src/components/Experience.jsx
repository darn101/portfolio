const Experience = () => {

    const techs = [
        {
            id: 1,
            name: 'HTML',
            url: 'https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            name: 'CSS',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            name: 'JavaScript',
            url: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            name: 'React',
            url: 'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            name: 'Tailwind',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            name: 'Express',
            url: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
            style: 'shadow-green-500'
        },
        {
            id: 7,
            name: 'Mongo DB',
            url: 'https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Photo.png',
            style: 'shadow-green-400'
        },


    ]

    return (
        <>
            <div className=' flex flex-col justify-between mt-[10rem] pb-[20rem]' id="Experience">
                <div className="ml-[5%] md:ml-[20%]">


                    <p className='text-white underline text-4xl font-medium decoration-solid underline-offset-[0.8rem]'>Experience</p>
                    <p className='mt-[5rem] text-white pr-[10%] text-lg'>These are the technologies I have worked with</p>
                </div>

                <div className="ml-[20%] mt-[2rem] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-r-[30rem]">
                    {
                        techs.map(({ id, name, url, style }) => (
                            <div key={id} className={`mt-[2rem] w-[15rem] shadow-md flex flex-col items-center text-white hover:scale-105 cursor-pointer rounded-lg ${style}`}>
                                <img src={url} alt={name} className='h-[10rem] w-[10rem] p-5' />
                                <p className="uppercase pb-3">{name}</p>
                            </div>
                        ))
                    }


                </div>
            </div>
        </>
    );
}

export default Experience;