import './sidebar.css';
import Avatar from '@mui/material/Avatar';
import { DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import { IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';
import { useEffect, useState } from 'react';
import db from '../firebase.js';
import { useStateValue } from './StateProvider';


function Sidebar()
{
    const [rooms, setRooms] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect( ()=>{
        db.collection('rooms').onSnapshot( snapshot =>(
            setRooms(snapshot.docs.map( doc =>(
                {
                    id: doc.id,
                    data: doc.data()
                }
                )))
        ))
    },[])

    return(
        <div className='sidebar'>

            <div className='sidebar_header'>
                <Avatar src={user.photoURL}/>

                <div className='sidebar_headerRight'>
                    <IconButton >  <DonutLarge/> </IconButton>
                    <IconButton >  <ChatIcon />  </IconButton>
                    <IconButton>   <MoreVert/>   </IconButton>
                </div>
            </div>

            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    <SearchOutlined/>
                    <input placeholder='Search or start new chat'/>
                </div>
            </div>

            <div className='sidebar_chats'>
                <SidebarChat addNewChat/>
                {rooms.map( room => ( <SidebarChat key={room.id} id={room.id}  name={room.data.name} /> ) )}
            </div>

        </div>
    );
}

export default Sidebar;