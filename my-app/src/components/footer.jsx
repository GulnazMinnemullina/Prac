import * as React from 'react';
export const Footer = () => {

    const date = new Date();
    
    return(
        <footer class="footer">
            <a>Teics {date.getFullYear()}</a>
        </footer>
    )
}