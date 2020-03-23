import {useState, useEffect } from 'react';

function useFriendStatus(friendId){
    const [isOnline, setIsOnline] = useState(null);
    
    useEffect(()=> {
        function handleStatusChange(status){
            setIsOnline(status.isOnline);
        }

        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(props)
            
        }
    })

    return isOnline;
}


