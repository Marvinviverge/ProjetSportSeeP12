import React from 'react';

import DataService from '@/_Services/data.service.js';

import './Home.css'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const dataAllUsers = DataService.GetAllUsers()
    let navigate = useNavigate()

    const onChange = (e) => {
        let getId = e.target.value;

        navigate('/user/' + getId)
    }

    return (
        <section className='home'>
            <div className="typeData">
                <h2>Choix de l'utilisateur: </h2>
                <select onChange={onChange}>
                    <option value=''>Veuillez choisir un utilisateur</option>
                    {
                        dataAllUsers.map((value) => {
                            return (
                                <option key={value.id} value={value.id} id={value.id}>{value.userInfos.firstName}</option>
                            )
                        })
                    }
                </select>
            </div>
        </section>
    );
};

export default Home;