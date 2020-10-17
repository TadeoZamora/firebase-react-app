import { useState } from 'react';

const NotificationHook = () => {
    const [show, setShow] = useState(false);
    return {
        show,
        setShow
    };
};

export default NotificationHook;