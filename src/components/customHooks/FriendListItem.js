import React, { useState, useEffect } from 'react';

function FriendListItem(props){
    const [isOnline, setIsOnline] = useFriendStatus(null);
    
    

    return (
        <li style={{ color: isOnline ? 'green' : 'black'}}>
            {props.friend.name}
        </li>
    )
}