import {useState} from 'react'
import firebase from '../services/Firebase'
import NotificationHook from './NotificationHook';
const DbHook = () => {
    const [orders, setOrders] = useState([]);
    const {show,setShow} = NotificationHook()
    const write = (path,object) =>{
        console.log(object)
        const db = firebase.database();
        db.ref(path).set(object, function(error){
            console.log(error);
        })
    }
    const readOrders = () =>{
        return firebase.database().ref('/orders/').once('value').then(function(snapshot) {
            let backup = []
            snapshot.forEach(item=>{
                let product = item.val()
                product.key = item.key
                backup.push(product)
            })
            setOrders(backup)
        });
    }
    const newOrders = () =>{
        var commentsRef = firebase.database().ref('orders/');
        commentsRef.on('child_added', function(data) {
            setShow(true)
        });
    }
    return {
        orders,
        write,
        show,
        setShow,
        readOrders,
        newOrders
    };
};

export default DbHook;