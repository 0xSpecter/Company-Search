"use client"
import useSession from "@/hooks/useSession";
import { motion } from "motion/react";
import Button from "@/components/button";
import { logOut } from "@/firebase/auth";

export default function Home() {
    const {session} = useSession()

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-10">
            <motion.h1 className="text-2xl text-sec">
                {session.user ? `You are ${session.user["email"]}` : "Logged out"}
            </motion.h1>
            { session.status == "authenticated" ?
                <Button onClick={() => logOut()}>
                    Logout
                </Button>
            : 
                <> 
                    <Button redirect="/user/login">
                        Login
                    </Button>
                    <Button redirect="/user/signup">
                        Signup
                    </Button>
                </>
            }
        </div>
    );
}
