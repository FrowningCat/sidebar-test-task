import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/', id: '1' },
    { title: 'Sales', icon: 'chart-line', path: '/sales', id: '2' },
    { title: 'Costs', icon: 'chart-column', path: '/costs', id: '3' },
    { title: 'Payments', icon: 'wallet', path: '/payments', id: '4' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances', id: '5' },
    { title: 'Messages', icon: 'envelope', path: '/messages', id: '6' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings', id: '7' },
    { title: 'Support', icon: 'phone-volume', path: '/support', id: '8' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }));
    };

    goToRoute = (path, id) => {
        let nameScss = document.getElementById(id);
        console.log(`going to "${path}"`);
        nameScss.setAttribute('class', 'sidebar__icon__click');
    };

    render() {
        const { isOpened } = this.state;
        const containerClassnames = classnames('sidebar', {
            opened: !isOpened,
        });

        return (
            <div className={isOpened ? 'sidebar' : 'sidebarSmall'}>
                <div className="sidebar__logo">
                    <img
                        className="sidebar__logo__img"
                        src={logo}
                        alt="TensorFlow logo"
                    />
                    <span className="sidebar__logo__text">TensorFlow</span>
                    <button
                        className="sidebar__logo__button"
                        onClick={() => this.toggleSidebar(containerClassnames)}
                    >
                        <FontAwesomeIcon
                            icon={isOpened ? 'angle-left' : 'angle-right'}
                        />
                    </button>
                </div>

                <div className="sidebar__icon">
                    {routes.map((route) => (
                        <div
                            id={route.id}
                            className="sidebar__icon__element"
                            key={route.title}
                            onClick={() => this.goToRoute(route.path, route.id)}
                        >
                            <FontAwesomeIcon icon={route.icon} />
                            <span className="sidebar__icon__element__text">
                                {route.title}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="sidebar__icon sidebar__footer">
                    {bottomRoutes.map((route) => (
                        <div
                            id={route.id}
                            className="sidebar__icon__element"
                            key={route.title}
                            onClick={() => this.goToRoute(route.path, route.id)}
                        >
                            <FontAwesomeIcon icon={route.icon} />
                            <span className="sidebar__icon__element__text">
                                {route.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
