import Image from 'next/image'

const style = {
  wrapper:
    'flex flex-col space-y-2 divide-y divide-[#343536] rounded border border-[#343536] bg-[#1a1a1b] p-4 text-gray-300',
  profileInfoContainer: 'flex items-center space-x-4 ',
  profilePicContainer: `relative h-12 w-12`,
  profilePic: 'object-contain',
  aboutContent: 'py-2 text-sm',
  statsWrapper: 'flex items-center space-x-16',
  stat: 'flex flex-col',
  statTitle: 'text-xs',
  footer: 'flex flex-col space-y-4 pt-2',
  createdAt: 'text-sm font-light',
  joinedButton:
    'cursor-pointer rounded-full border border-gray-300 py-1 text-center text-sm font-semibold',
}

const About = () => {
  return (
    <div className={style.wrapper}>
      <div className='pb-2'>
        <div className={style.profileInfoContainer}>
          <div className={style.profilePicContainer}>
            <Image
              src='https://i.ibb.co/Ks6r2s5/r-Ll-Cifh-XRJi-T0-Ro-N2-Fj-K-Logo-roundbackground-black.png'
              layout='fill'
              className={style.profilePic}
              alt='Profile Image'
            />
          </div>
          <p>r/cleverprogrammer</p>
        </div>
        <p className={style.aboutContent}>
          Clever Programmer, a community with over 1M+ devs who are learning to
          code. We build real-world stuff with code. Turn our dreams into
          reality with Programming. We speak business and code fluently. Here at
          Reddit, you can find us sharing our coding war stories around a
          fireplace. So, grab a cup of coffee and join us. We got lots to catch
          up on… You'll find awesome programming lessons here! Also, expect
          programming tips and tricks that will take your coding skills to the
          next level.
        </p>

        <div className={style.statsWrapper}>
          <div className={style.stat}>
            <span>2.1m</span>
            <span className={style.statTitle}>Members</span>
          </div>
          <div className={style.stat}>
            <span>246</span>
            <span className={style.statTitle}>Online</span>
          </div>
        </div>
      </div>

      <div className={style.footer}>
        <p className={style.createdAt}>Created Jan 31, 2021</p>

        <div className={style.joinedButton}>Joined</div>
      </div>
    </div>
  )
}

export default About
