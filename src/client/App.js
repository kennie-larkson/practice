import React, {Component} from 'react';

const posts = [
    {
        id:2,
        text: 'lorem ipsum',
        user: {
            avatar: 'uploads/avatar1.png',
            username: 'test user'
        }
    },
    {
        id:2,
        text: 'lorem ipsum',
        user: {
            avatar: 'uploads/avatar1.png',
            username: 'test user'
        }
    }
];
export default class App extends Component{
    state = {
        posts: posts 
    }

    render(){
        const { posts } = this.state;
        return ( 
            <div className="container">
                <div className="feed">
                    {
                        posts.map((post, i)=>
                        <div key={post.id} className='post'>
                            <div className="header">
                                <img src={post.user.avatar} />
                                <h2>{post.user.username}</h2>
                                </div>
                                <p className='content'> 
                                {post.text}
                                </p>
                        </div>
                        )
                                
                    }

                </div>
            </div>
         )
    }
}