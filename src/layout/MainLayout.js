
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Toast } from '../components/Toast'

const MainLayout = () => {

    return (
        <>
            <Toast /> {/* Toast component that will toast the message on the screen after some actions */}
            <Header />
            <Outlet /> {/* Outlet component will be replace by others components that define in the Router*/}

        </>
    )
}

export default MainLayout