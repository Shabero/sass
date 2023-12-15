// import React, {useState} from 'react';
//
// const App = () => {
//     const [count, setCount] = useState(0);
//
//     const handleClick = () => {
//         setCount(count + 1);
//     }
//
//     return (
//         <div>
//           <p>Cliked {count} times</p>
//            <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// };
//
// export default App;

import React from 'react';

const App = () => {
    return (
        <div>
            <header className={'header'}>
                <h2 className={'header-logo'}>Logo</h2>
                <nav className={'header-nav'}>
                    <a href={"#"} className={'header-nav__link'}>Home</a>
                    <a href={"#"} className={'header-nav__link'}>About</a>
                    <a href={"#"} className={'header-nav__link'}>Contact</a>
                </nav>
            </header>
            <main className={'main'}>
                <section className={'intro-section'}>
                    <h2 className={'intro-section__title'}>
                        Section title
                    </h2>
                    <p className={'intro-section__text'}>Lorem ipsum dolor sit amet, consectetur.</p>
                </section>
                <section className={'action-section'}>
                    <button className={'action-section__button'}>Get Started</button>
                </section>
            </main>
            <footer className={'footer'}>
                <p className={'footer-text'}>Copyright 2021</p>
            </footer>
        </div>
    );
};

export default App;