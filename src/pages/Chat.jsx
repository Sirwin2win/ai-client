import React, {useState,useEffect} from 'react'
import { IoMdSend } from "react-icons/io";
import { createChat, getChat } from '../features/chat/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Chat = () => {
 const [prompt, setPrompt] = useState('')
  const {chats,status,error} = useSelector(state=>state.chats)
  const {userId} = useSelector(state=>state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = (e)=>{
    e.preventDefault()
      dispatch(createChat(prompt))
      console.log(prompt)
  }

  console.log(chats)

  useEffect(()=>{
    if(status==='idle'){
      dispatch(getChat())
    }
  },[])

  useEffect(()=>{
    if(!userId){
      navigate('/about')
    }
  },[])
  return (
    <div className='container'>
      <h5 className='my-5 text-primary text-center'>Hello!, I am your AI agent, ask me anything</h5>
      {chats.map(chat=>(
        <div className=''>
          {/* // <p className='col-sm-4'>{chat.role}</p> */}
          <p className={`col-sm-8 ${chat.role==='model'? 'text-start':'text-end text-bg-secondary'}`}>{chat.parts}</p>

        </div>
      ))}
        <form method='post' onSubmit={handleSubmit}>
          {status==='failed'&& <p className='text-danger'>{error}</p>}
            <div className='container' style={{position:"relative"}}>
                <input type="text" value={prompt} onChange={(e)=>setPrompt(e.target.value)} name='prompt' className='form-control mx-5' style={{height:'50px',}}  />
                <IoMdSend size={50} onClick={handleSubmit} className='text-primary' style={{position:'absolute', bottom:0,right:-20}} />

            </div>
        </form>
    </div>
  )
}

export default Chat