import React from 'react';
import './Home.css';
function Home (){
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");
    return(
        <div className='home'>
            <div className="containerHome">
                <div className="leftSide">
                    <div className='header'>
                        <div className='userimg'>
                            <img src='"C:\Users\Asus\Desktop\nkar\25bbeb23-ffb1-478c-822d-603579e69a3f.jpeg"' className='cover'/>
                        </div>
                        <ul className='nav_icons'>
                            <li><button>ok</button></li>
                            <li><button>ok</button></li>
                        </ul>
                    </div>
                    <div className='search_chat'>
                        <div>
                            <input type='text' placeholder='Search or start new chat' />
                            <button>search</button>
                        </div>
                    </div>
                    <div className='chatlist'>
                        <div className='block'>
                            <div className='imgbx'>
                                <img src='./' className='cover'/>
                            </div>
                            <div className='details'>
                                <div className='listHead'>
                                    <h4>mher tovmasyan</h4>
                                    <p className='time'>10:56</p>
                                </div>
                                <div className='message_p'>
                                    <p>How to make Whatsapp clone using html and css</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className='chatBox'>
                        <div className='message my_message'>
                            <p>hi<br/><span>12:15</span></p>
                        </div>
                        <div className='message frnd_message'>
                            <p>hi<br/><span>12:15</span></p>
                        </div>
                    </div>
                    <div className='chatbox_input'>
                        <input type='text' placeholder='Type a message'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;