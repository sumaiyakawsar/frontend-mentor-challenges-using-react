import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';

import './style/project68.scss';

import ThemeToggle from './component/ThemeToggle';
import Calculator from './component/Calculator';

export default function project68() {
    useFavicon("icons/project18.png");
    useDocumentTitle("Calculator App | Frontend Mentor");

    return (
        <div className='project-68'>
            <div className="calc">
                <div className="calc-header">
                    <h1>calc</h1>
                    <ThemeToggle />
                </div>

                <Calculator />
            </div>
        </div >
    )
}
