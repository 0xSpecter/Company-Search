import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from '@/firebase/fire';
import { useRouter } from 'next/navigation';

interface session {
    status: string,
    user: unknown
}

const useSession = (force_auth : boolean = false, redirect_url : string = "/") => {
    const router = useRouter()
    const [session, setSession] = useState<session>({
        status: "loading", // can be: 'loading', 'authenticated', 'unauthenticated'
        user: null
    })

    useEffect(() => {
        onAuthStateChanged(auth, (user : User) => {
            if (user) {
                setSession(() => ({
                    status: "authenticated",
                    user: user
                }))
            }
            else {
                setSession(() => ({
                    status: "unauthenticated",
                    user: null
                }))
                if (force_auth == true) {
                    router.push(redirect_url)
                }
            }
        });
    }, [force_auth, router, redirect_url])

    return {session, setSession}
}

export default useSession
