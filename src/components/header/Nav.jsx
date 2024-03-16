import avatar from '../../assets/avatar-icon.png';
import Li from './Li';
const Nav = () => {
    return (
        <div className="navbar my-4 p-0">
            <div className="navbar-start w-full lg:w-1/2">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
                        <Li />
                    </ul>
                </div>
                <a href="https://ph-assignment-7-sassy-cuisine-spa.surge.sh/" className="hover:cursor-pointer text-lg lg:text-3xl font-bold">Sassy Cuisine</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 opacity-70">
                    <Li />
                </ul>
            </div>
            <div className="navbar-end md:gap-4">
                <label className="input hidden md:flex items-center bg-haiti-950/5 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    <input type="text" className="grow" placeholder="Search" />
                </label>
                <button className="btn btn-circle bg-spring-green-500 hover:bg-spring-green-600">
                    <img src={avatar} alt="avatar-icon" />
                </button>
            </div>
        </div>
    );
};

export default Nav;