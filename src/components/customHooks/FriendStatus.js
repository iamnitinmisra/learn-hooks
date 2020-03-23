import React, { useState, useEffect } from 'react';

function FriendStatus(props){
    const [isOnline, setIsOnline] = useFriendStatus(null);
    


    if (isOnline === null) {
        return 'Loading...';
    }

    return isOnline ? 'Online' : 'Offline';
}