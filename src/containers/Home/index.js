import React from 'react';
import Layout from '../../components/Layout'
import {Jumbotron} from 'react-bootstrap'

const Home = () => {
    return (
        <div>
            <Layout>
                <Jumbotron className="text-center" style={{margin:'5rem',background:'#fff'}}>
                <h1>Welcome to Admin Dashboard</h1>
                </Jumbotron>
            </Layout>
        </div>
    );
};

export default Home;