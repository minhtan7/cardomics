
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Toast } from '../components/Toast'

const MainLayout = () => {

    return (
        <>
            <Toast />
            <Header />
            <Outlet />

        </>
    )
}

export default MainLayout