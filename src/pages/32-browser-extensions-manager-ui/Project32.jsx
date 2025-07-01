import { useState, useEffect } from 'react';
import { BsSun, BsMoon } from "react-icons/bs";
import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project32.scss';
import { extensions as extensionData } from './data/data';

import Extension from './components/Extension';
import ConfirmModal from './components/ConfirmModal';
import Toast from './components/Toast';
import logolight from './images/logo-light.svg';
import logodark from './images/logo-dark.svg';

import { useTheme } from '../../components/theme/ThemeContext';


function Project32() {
    useFavicon("icons/project32.png");
    useDocumentTitle("Browser extensions manager | Frontend Mentor");

    const [extensions, setExtensions] = useState(extensionData);
    const [filter, setFilter] = useState("all");
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedExtension, setSelectedExtension] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const { theme, toggleTheme } = useTheme();



    const toggleExtension = (index) => {
        const updated = [...extensions];
        updated[index].isActive = !updated[index].isActive;
        setExtensions(updated);
    };

    const filteredExtensions = extensions.filter((ext) =>
        filter === 'all' ? true : filter === 'active' ? ext.isActive : !ext.isActive
    );



    const confirmRemove = (index) => {
        setSelectedExtension(extensions[index]);
        setSelectedIndex(index);
        setModalOpen(true);
    };

    const handleRemove = () => {
        const updated = [...extensions];
        const name = updated[selectedIndex].name;

        updated.splice(selectedIndex, 1);
        setExtensions(updated);
        setModalOpen(false);
        setSelectedExtension(null);

        setToastMessage(`${name} extension removed`);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 4000);
    };

    return (
        <div className='project-32' >


            <div className="container">
                <header>
                    {theme === "light" ?
                        <img src={logolight} alt="Logo as image" />
                        : <img src={logodark} alt="Logo as image" />
                    }

                    <button onClick={toggleTheme} className={`theme-toggle ${theme}`} >
                        {theme === "light" ? <BsMoon /> : <BsSun />}

                    </button>


                </header>

                <div className='filter__container'>
                    <h1>Extensions List</h1>

                    <div className="filters">
                        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
                        <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
                        <button onClick={() => setFilter('inactive')} className={filter === 'inactive' ? 'active' : ''}>Inactive</button>
                    </div>
                </div>




                <section className="extensions">
                    {filteredExtensions.map((ext, idx) => (
                        <Extension
                            key={ext.name}
                            extension={ext}
                            onToggle={() => toggleExtension(idx)}
                            onRemove={() => confirmRemove(idx)}

                        />
                    ))}
                </section>

                {modalOpen && (
                    <ConfirmModal
                        isOpen={modalOpen}
                        extensionName={selectedExtension?.name}
                        onConfirm={handleRemove}
                        onCancel={() => setModalOpen(false)}
                    />
                )}

                <Toast message={toastMessage} visible={toastVisible} />

            </div>
        </div>

    )
}

export default Project32




