import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BsGoogle, BsGithub,BsFacebook, BsTwitter, BsTwitch, BsWhatsapp } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const RightSideNav = () => {

    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }


    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><BsGoogle></BsGoogle> Login with Google</Button>
                <Button variant="outline-dark"><BsGithub></BsGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><BsFacebook/>Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><BsTwitter/>Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><BsTwitch/>Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><BsWhatsapp/>WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;