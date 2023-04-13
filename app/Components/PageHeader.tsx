import brainWaveLogo from '../../public/img/LogoAzulSinFondo.png'
import profilePicture from '../../public/img/profilePicture.jpg'

function PageHeader() {
    return(
        <div className="flex flex-row bg-black h-20">
            <div className='basis-4/5'>
                <img src={brainWaveLogo} className='h-20'/>
            </div>
                <img src={profilePicture} className='h-16 my-2 rounded-full'/>
                <span className='text-white text-xl mx-5 my-6'>Francisco Mestizo</span>
            
        </div>
    )
}

export default PageHeader;