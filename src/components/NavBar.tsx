import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const avatar =
    'https://avatars.githubusercontent.com/u/79697348?s=400&u=298c76fcc5d51d7d51dc72516a11c23b7e929945&v=4';
  const active = 'bg-gray-900 text-white px-3 py-2 rounded-md text-lg font-medium';
  const inactive =
    'text-gray-300 hover:bg-gray-700 text-lg hover:text-white block px-3 py-2 rounded-md text-base font-medium';
  const Menus = [
    { index: 0, name: 'Profile', url: '' },
    { index: 1, name: 'Resume', url: '/resume' },
    { index: 2, name: 'Projects', url: '/projects' },
    { index: 3, name: 'Contacts', url: '/contacts' }
  ];
  return (
    <div className={'flex justify-center backdrop-blur-3xl'}>
      <nav className={'bg-gray-800 rounded-2xl'}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <NavLink to={'/'} className="flex flex-shrink-0 items-center">
                <img className="h-10 w-10 rounded-full" src={avatar} alt="" />
              </NavLink>
              <div className="ml-6 block">
                <div className="flex space-x-4">
                  {Menus.map((Menu) => (
                    <NavLink
                      to={Menu.url}
                      key={Menu.index}
                      className={({ isActive, isPending }) =>
                        isActive ? active : isPending ? inactive : inactive
                      }>
                      {Menu.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
