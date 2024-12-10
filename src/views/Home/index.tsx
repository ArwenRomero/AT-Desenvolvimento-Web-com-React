import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header/index";
import "../../styles/views/home.scss";
import DashBoard from "../Dashboard/index";
import Alert from "../../components/Alert";
import Avatar from "../../components/Avatar";
import "../../styles/views/container.scss";
import FloatingActionButton from "../../components/Fab/MenuFab";


export default function Home() {
    return (
        <div className="Home">
            <Header />
            <div className="container">
                <Avatar />
                <Alert />
                <DashBoard />
                <FloatingActionButton />
            </div>
            <Footer />
        </div>
    );
}
