import React, {useState} from 'react'
import { IoMdSend } from "react-icons/io";
import { createChat } from '../features/chat/chatSlice';
import { useDispatch, useSelector } from 'react-redux';



const ChatComponent = () => {
  const [data, setData] = useState('')
  const {chats,status,error} = useSelector(state=>state.chats)
  const dispatch = useDispatch()
  const handleSubmit = (e)=>{
    e.preventDefault()
      dispatch(createChat(data))
      console.log(data)
  }
  return (
    <div>
        <form method='post' onSubmit={handleSubmit}>
          {status==='failed'&& <p className='text-danger'>{error}</p>}
            <div className='container' style={{position:"relative"}}>
                <input type="text" value={data} onChange={(e)=>setData(e.target.value)} name='prompt' className='form-control mx-5' style={{height:'50px',}}  />
                <IoMdSend size={50} onSubmit={handleSubmit} className='text-primary' style={{position:'absolute', bottom:0,right:-20}} />

            </div>
        </form>
    </div>
  )
}

export default ChatComponent