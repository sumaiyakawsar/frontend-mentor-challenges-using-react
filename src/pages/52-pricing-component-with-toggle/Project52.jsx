import { useState } from 'react';
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project52.scss';
import { prices } from "./data/data"
import PricingCard from './component/PricingCard';

function Project52() {
    useFavicon("icons/project1314.png");
    useDocumentTitle("Pricing with toggle | Frontend Mentor");

    const [billing, setBilling] = useState('monthly');


    return (
        <div className='project-52'>
            <div className="container">
                <h1>  Our Pricing</h1>

                <div className="toggle-container">
                    <span className={billing === 'annually' ? 'active' : ''}>Annually</span>
                    <div className="toggle-switch"
                        role="switch"
                        aria-checked={billing === 'monthly'}
                        aria-label="Toggle billing mode between annually and monthly"
                        tabIndex={0}
                        onClick={() => setBilling(prev => prev === 'monthly' ? 'annually' : 'monthly')}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setBilling(prev => prev === 'monthly' ? 'annually' : 'monthly');
                            }
                        }}
                    >
                        <div className={`switch-ball ${billing === 'monthly' ? 'right' : 'left'}`} />
                    </div>
                    <span className={billing === 'monthly' ? 'active' : ''}>Monthly</span>
                </div>

                <div className="pricing-cards">
                    {prices[billing].map((plan, idx) => (
                        <PricingCard key={idx} {...plan} />
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Project52


