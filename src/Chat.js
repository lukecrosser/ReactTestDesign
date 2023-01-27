import './index.css';

function Chat() {
    return (
        <>
            <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1 flex">
                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/192/192/people"/>
                                </div>
                            </div>
                            <div className="chat-header">
                                You
                                <time className="text-xs opacity-50"> 12:45</time>
                            </div>
                            <div className="chat-bubble">I love this website!</div>
                            <div className="chat-footer opacity-50">
                                Delivered
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/192/192/people"/>
                                </div>
                            </div>
                            <div className="chat-header">
                                Anakin
                                <time className="text-xs opacity-50">12:46</time>
                            </div>
                            <div className="chat-bubble bg-blue-600">Thank you! I hand coded it using React and TailwindCss which
                                are components for Javascript
                            </div>

                        </div>

                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/192/192/people"/>
                                </div>
                            </div>
                            <div className="chat-header">
                                You
                                <time className="text-xs opacity-50"> 12:45</time>
                            </div>
                            <div className="chat-bubble">Wow how can I get you to make a website for me?</div>
                            <div className="chat-footer opacity-50">
                                Delivered
                            </div>
                        </div>

                        <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/192/192/people"/>
                                </div>
                            </div>
                            <div className="chat-header">
                                Anakin
                                <time className="text-xs opacity-50">12:46</time>
                            </div>
                            <div className="chat-bubble bg-blue-600">Head over to Luo Designs and contact me to get started on your website!
                            </div>
                            <div className="chat-footer opacity-50">
                                Seen at 12:46
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Chat;