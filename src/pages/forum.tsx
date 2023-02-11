import React from 'react'
import Header from '../components/forumdiskusi/header'
import Banner from '../components/forumdiskusi/community/Banner'
import CreatePost from '../components/forumdiskusi/feed/CreatePost'
import About from '../components/forumdiskusi/community/About'
import Feed from "../components/forumdiskusi/feed";

const style = {
  wrapper: `flex min-h-screen flex-col bg-black text-white`,
  main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6`,
  content: `w-full space-y-4 lg:w-2/3`,
  infoContainer: `hidden w-1/3 lg:block`,
}

const Forum = () => {
  return (
    <>
        <div className={style.wrapper}>
        <Header />
        <Banner />
        <main className={style.main}>
            <div className={style.content}>
            <CreatePost />
            <Feed/>
            </div>
            <div className={style.infoContainer}>
            <About />
            </div>
        </main>
        </div>
    </>
  )
}

export default Forum
