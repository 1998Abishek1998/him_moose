
import type { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
    children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
    return (
        <>
            <Header />
            {/* <section> */}
                <Outlet/>
            {/* </section> */}
            <Footer />
        </>
    );
};

export default Layout;