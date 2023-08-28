import React from 'react';
import { useNavigate } from 'react-router-dom';

import MockService from '@/_Services/mock.service.js';

import './Home.css'

const Home = () => {
    const mockAllUsers = MockService.GetAllUsers()
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
                        mockAllUsers.map((value) => {
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