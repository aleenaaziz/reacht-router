import {useEffect} from 'react';

const UseTitleCount = (count) => {
    useEffect(() => {
        if(count >= 1){
        document.title = `chats(${count })`;
    }else{
        document.title = `chats`;
    }
    },[count]);
    

}

export default UseTitleCount
