import Post from '../common/Post'

const style  = {
    wrapper: 'space-y-2.5',
}

const posts = [
    {id: 0, title:"build reddit", author: "juan"},
    {id: 1, title:"build twitter", author: "rhey"},
    {id: 2, title:"build facebook", author: "yogi"},
]

const Feed = () => {
    return (
        <div className={style.wrapper}>
            {posts.map((post, id) => (
                <Post {...post} key={id}/>
            ))}
        </div>
    )
}

export default Feed;