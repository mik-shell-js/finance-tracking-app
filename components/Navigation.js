import { useContext } from "react";

import { authContext } from "@/lib/store/auth-context";

import { ImStatsBars } from "react-icons/im";

function Nav() {

  const {user, loading, logout} = useContext(authContext)

  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* User Profile Information */}
        {user && !loading &&  (
          <div className="flex items-center gap-2">
            {/* User Profile Picture */}
            <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={user.photoURL}
                alt={user.displayName}
                referrerPolicy="no-referrer"
              />
            </div>
  
            {/* name */}
            <small className="font-bold font-sans text-sm/10">Hi, {user.displayName}</small>
          </div>
        )}

        {/* Right side of our navigation */}
        {user && !loading && (
          <nav className="flex items-center gap-4">
            <div>
              <a href="#stats">
                <ImStatsBars className="statsBar text-2xl" />
              </a>
            </div>
            <div>
              <button onClick={logout} className="btn btn-danger">Sign Out</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Nav;