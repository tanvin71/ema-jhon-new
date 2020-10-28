import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCard';
import SplitCardForm from './SplitCardForm';
const stripePromise = loadStripe('pk_test_51HZw22DiJulDOpdVv3mcrCm9J7ldHumoDjIRiD4RHgv9UK0aat2woyV24RhADw4I5j3VgnoqtPcf9RscslrMzFzh00IKdwJg2A');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;