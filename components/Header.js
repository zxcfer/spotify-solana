import Image from 'next/image'
import UploadButton from './UploadButton'
import { useContext } from 'react'
import { SpotifyContext } from '../context/context'

const styles = {
    header: `max-w-7xl m-auto p-3`,
    headerWrapper: `flex items-center justify-between`,
    arrowButton: `bg-black mr-2 w-10 h-10 flex items-center justify-center rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-75`,
    headerRight: `flex`,
    profile: `flex items-center bg-black rounded-full p-1 px-3 bg-opacity-50 cursor-pointer hover:bg-opacity-75`,
    profileAvatarContainer: `w-7 h-7 rounded-full -ml-2 mr-3`,
    iconContainer: `ml-10`,
    title: `text-6xl font-extrabold`,
    playListTextContent: `flex items-end mt-10`,
    controlsContainer: `flex items-center mt-10`,
    playButton: `bg-green-500 w-16 h-16 flex pl-2 items-center justify-center rounded-full cursor-pointer`
}


const Header = ({setShowUploadMusic}) => {
    
    const { currentSong } = useContext(SpotifyContext)

  return (
    <div className={styles.header}>
        <div className={styles.headerWrapper}>
            <div className='flex items-center'>
                <div className={styles.arrowButton}>
                    <Image
                        src = '/assets/chevronLeft.svg'
                        width={20}
                        height={20}
                        alt = 'left'
                    />
                </div>
                <div className={styles.arrowButton}>
                    <Image
                        src = '/assets/chevronRight.svg'
                        width={20}
                        height={20}
                        alt = 'left'
                    />
                </div>
            </div>

            <div className={styles.headerRight}>
                <UploadButton setShowUploadMusic={setShowUploadMusic}/>
                <div className={styles.profile}>
                        <div className={styles.profileAvatarContainer}>
                            <Image
                            src='/assets/avatar.jpg'
                            width={20}
                            height={20}
                            alt = 'avatar'
                            className='rounded-full'
                            />
                        </div>
                    <p>farrenbrat</p>
                </div>
            </div>
        </div>

        <div className={styles.playListTextContent}>
            <Image
            src='https://i.scdn.co/image/ab67706c0000bebbdc2a0ecbfe4a19f4774b44af'
            width={220}
            height={220}
            alt='album'
            />

            <div className='ml-5'>
                <>Album</>
                <div className={styles.title}>{currentSong.album}</div>
                <div className='flex items-center mt-5'>
                    <div className={styles.profileAvatarContainer}>
                    <Image
                    src='/assets/avatar.jpg'
                    width={20}
                    height={20}
                    alt='artist'
                    className='rounded-full'
                    />
                    </div>
                    <p>
                    <span className='text-bold'>About Damn TimeLizzo</span> • 2020 • 46 songs, 3
                    hr 20 min
                    </p>
                </div>
            </div>
        </div>


        <div className={styles.controlsContainer}>
            <div className={styles.playButton}>
                <Image 
                  src='/assets/play.svg' 
                  width={30} 
                  height={30} 
                  alt='play' 
                />
            </div>
            <div className={styles.iconContainer}>            
                <Image 
                  src='/assets/heart.svg' 
                  width={30} 
                  height={30} 
                  alt='play' 
                />
            </div>
            <div className={styles.iconContainer}>            
                <Image 
                  src='/assets/download.svg' 
                  width={30} 
                  height={30} 
                  alt='download' 
                />
            </div>
            <div className={styles.iconContainer}>            
                <Image 
                  src='/assets/more.svg' 
                  width={30} 
                  height={30} 
                  alt='more' 
                />
            </div>

      </div>
    </div>
  )
}

export default Header