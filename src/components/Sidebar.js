import Nome from '../assets/head.png';


const Sidebar = () => {
    const Menus = [
        { title: "Dashboard", image: 'speedometer' },
        { title: "Search Property", image: 'search-status' },
        { title: "Calender", image: 'calendar'  },
        { title: "My Clients ", image: 'profile-2user' },
        { title: "MLS Lists", image: 'shopping-cart' },
        { title: "Notifications", image: 'notification' },
        { title: "Invite & Earn ", image: 'user-cirlce-add' }
      ];
    return (
        <div className='flex'>
            <div className='h-screen w-72 bg-slate-300'>
                <div>
                    <img src={Nome} alt='no' className='h-12 w-12 top-8 left-6'/>
                </div>
                <div className='flex p-3'>
                    <button className='flex gap-3 p-5 w-34 h-14 left-6 top-28 bg-blue-800 text-white'>
                        <h3>Create New Tour</h3>
                        <span className='text-xl'>+</span>
                    </button>
                </div>
                    <ul className='p-3'>
                        {Menus.map((menu, index) => (   
                            <li key={index} className='flex gap-3 p-2 w-64 bg-slate-50 text-black'>
                                <img src={require('./../assets/' + menu.image + '.png')} alt='no' />
                                <h3>{menu.title}</h3>
                            </li>
                        ))}
                    </ul>
            </div>
            <div className = 'h-screen text-2xl p-7 flex-1 text-bold'>
                <h1>Home page</h1>
            </div>
        </div>
    );
}

export default Sidebar;