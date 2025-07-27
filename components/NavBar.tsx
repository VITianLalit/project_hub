import { auth } from "@/auth";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { handleGitHubSignIn, handleSignOut } from "@/lib/actions";

const NavBar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XOLQHgVRT3Cbyz2O1Bi4B-5uFByrLjHocQ&s"
            alt="Logo"
            width={164}
            height={40}
          />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/project/create">
                <span className="text-6 font-sans max-sm:hidden">Create</span>
              </Link>
              <form action={handleSignOut}>
                <button type="submit" className="text-6 font-sans max-sm:hidden">
                  Logout
                </button>
              </form>
              <Link href={`/user/${session.user.id}`}>
                {session.user.name || "Username"}
              </Link>
            </>
          ) : (
            <form action={handleGitHubSignIn}>
              <button type="submit" className="text-6 font-sans">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
