import React, {useState} from 'react';
import styles from 'spotify-playlist\Files\Components\Modules CSS\Header.module.css';

function Header () {
    return (
        <div className={styles.header}>
            <h1>Jammming</h1>
        </div>
    );
};

export default Header;