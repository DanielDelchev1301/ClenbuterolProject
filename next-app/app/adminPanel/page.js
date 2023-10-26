'use client';

import { useState, useEffect } from "react";
import '../../styles/admin.css';
import { Autocomplete, TextField } from "@mui/material";
import { emailTemplate } from "./adminHelper";

function Admin() {
    const [orders, setOrders] = useState([]);
    const [isOpen, setIsOpen] = useState({});
    const [status, setStatus] = useState({});
    const [isEditMode, setIsEditMode] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);
    const [password, setPassword] = useState('');
    const [disableButton, setDisableButton] = useState(false);
    
    useEffect(() => {
        setIsAdmin(JSON.parse(window.localStorage.getItem('user'))?.admin);
        init();
    }, []);
    
    const init = () => {
        fetch('/api/getAllOrders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                let openObj = {};
                let statusObj = {};
                let editObj = {};
                data.forEach(order => {
                    openObj[order._id] = false;
                    editObj[order._id] = false;
                    statusObj[order._id] = order.orderInfo.status;
                });
                setIsOpen({...openObj});
                setIsEditMode({...editObj});
                setStatus({...statusObj});
            })
            .catch(err => {
                console.log(err)
                alert('Something went wrong, please try again later.');
            });

    };

    const handleSave = (id) => {
        let order = orders.find(order => order._id === id);
        order.orderInfo.status = status[id];
        fetch('/api/order/editStatus', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(() => {
                init();
            })
            .catch(err => {
                console.log(err)
                alert('Something went wrong, please try again later.');
            });
    };

    const loginAdmin = () => {
        setDisableButton(true);
        fetch('/api/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({password: password})
        })
            .then(res => res.json())
            .then(() => {
                setIsAdmin(true);
                window.localStorage.setItem('user', JSON.stringify({admin: true}));
                setDisableButton(false);
            })
            .catch(err => {
                console.log(err)
                alert('Wrong password!');
                setDisableButton(false);
        });
    };

    const copyFunction = (order) => {
        const text = emailTemplate(order, order.orderInfo.products);
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="adminMainContainer">
            {!isAdmin
            ?   
            <>
                <h2>Admin Panel</h2>
                <div className="adminLoginContainer">
                    <TextField 
                        className="adminLoginInput"
                        label="Password"
                        variant="standard"
                        type="password"
                        color="warning"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <button onClick={loginAdmin} className={`adminLoginButton ${disableButton ? 'buttonNoAction' : ''}`}>Login</button>
                </div>
            </>
            :
            <>
                <h2>Orders</h2>
                <div className="adminOrdersContainer">
                    {orders.map((order) => (
                        <div key={order._id} className="adminOrderContainer">
                            <div 
                                onClick={() => setIsOpen(prev => {
                                    return {
                                        ...prev,
                                        [order._id]: !prev[order._id]}
                                    }
                                    )} 
                                className={`adminOrderPreview ${order.orderInfo.status}`}
                            >
                                <p>Order ID: <span>{order._id}</span></p>
                                <p>Email: <span>{order.email}</span></p>
                            </div>
                            {isOpen[order._id] && 
                                <div className="adminOrderInfo">
                                    <p>First Name: <span>{order.firstName}</span></p>
                                    <p>Last Name: <span>{order.lastName}</span></p>
                                    <p>Country: <span>{order.country}</span></p>
                                    <p>City: <span>{order.city}</span></p>
                                    <p>Address: <span>{order.address}</span></p>
                                    <p>ZIP: <span>{order.zipCode}</span></p>
                                    <p>Date: <span>{new Date(order.orderInfo.date).toLocaleDateString('bg-BG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></p>
                                    {isEditMode[order._id] 
                                    ?
                                        <Autocomplete
                                            id="status-select-autocomplete"
                                            options={['pending', 'shipped', 'delivered']}
                                            value={status[order._id]}
                                            onChange={(e, value) => setStatus(prev => { return {...prev, [order._id]: value} })}
                                            renderInput={(params) => <TextField {...params} label="Status" color="warning" variant="standard" />}
                                        />
                                    :
                                        <p>Status: <span>{order.orderInfo.status}</span></p>
                                    }
                                    <p>Final Price: <span>${Number(order.orderInfo.finalPrice).toFixed(2)}</span></p>
                                    {order.orderInfo.products.map((product) => (
                                        <div key={product._id} className="adminOrderProduct">
                                            <p>Name: <span>{product.heading}</span></p>
                                            <p>Price: <span>{product.price}</span></p>
                                            <p>Quantity: <span>{product.quantity}</span></p>
                                        </div>
                                    ))}
                                    {isEditMode[order._id] 
                                    ?
                                        <button className={`editModeButton ${!status[order._id] && 'buttonNoAction'}`} onClick={() => handleSave(order._id)}>Save</button>
                                    :
                                        <button className="editModeButton" onClick={() => setIsEditMode(prev => { return {...prev, [order._id]: !prev[order._id]} })}>Edit</button>
                                    }
                                    <button onClick={() => copyFunction(order)} className="copyButton">Copy</button>
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </>
            }
        </div>
    );
}

export default Admin;