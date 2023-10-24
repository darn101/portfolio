import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { GrDocumentText } from "react-icons/gr";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <AiFillLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/priyanshu-chaudhary-70894b166/',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <AiFillGithub size={30} />
                </>
            ),
            href: 'https://github.com/darn101'
        },
        {
            id: 3,
            child: (
                <>
                    E-mail <AiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:chaudharypriyanshu1@gmail.com',

        },
        {
            id: 4,
            child: (
                <>
                    Resume <GrDocumentText size={30} />
                </>
            ),
            href: '/Priyanshu(resume).pdf',
            download: true,
        },
        {
            id: 5,
            child: (
                <>
                    Twitter <AiFillTwitterCircle size={30} />
                </>
            ),
            href: 'https://twitter.com/rishuukun',
            style: 'rounded-tr-md'
        },
    ]



    return (
        <>
            <ul className='hidden lg:flex flex-col gap-2 fixed mt-[10rem]'>
                {links.map(({ id, child, href, download, style }) => (
                    <li key={id} className=' bg-white px-4 flex justify-between items-center w-40 h-14 cursor-pointer ml-[-100px] hover:ml-[0px] duration-500'>
                        <a href={href} className='flex justify-between items-center w-full text-[1.1rem] text-black '
                            download={download}
                            target='_blank'
                            rel='noreferrer'>
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default SocialLinks;