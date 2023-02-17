import './App.css';
import "../src/style/main.css";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import ForgotPass from "./components/ForgotPass/ForgotPass";
import Registration from "./components/Registration/Registration";
import Project from "./pages/Project/Project";
import ProjectDetail from "../src/pages/ProjectDetail/ProjectDetail";
import Module from "../src/pages/Module/Module";

function App() {
	return (
		<div className="app">
			<Router>
				<h3><Link to="/project">Проект</Link></h3>
				<h3><Link to="/project-detail">Проект детальная</Link></h3>
				<h3><Link to="/registration">Регистрация</Link></h3>
				<h3><Link to="/forgot">Забыли пароль</Link></h3>
				<h3><Link to="/auth">Авторизация</Link></h3>
				<h3><Link to="/module">Модуль</Link></h3>
				<Routes>
					<Route path="/project" element={<Project />}/>
					<Route path="/project-detail" element={<ProjectDetail />}/>
					<Route path="/registration" element={<Registration />}/>
					<Route path="/auth" element={<Auth />}/>
					<Route path="/forgot" element={<ForgotPass />}/>
					<Route path="/module" element={<Module />}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
