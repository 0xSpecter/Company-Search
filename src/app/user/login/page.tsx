"use client"
import { motion } from "motion/react";
import Input from "@/components/input";
import Button from "@/components/button";
import HollowButton from "@/components/hollowButton";
import Login from "@/firebase/auth";
import { useRouter } from "next/navigation";
import { validate } from "email-validator";
import { useEffect, useState } from "react";

export default function Page() {
    const [errors, setErrors] = useState([])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    useEffect(() => {
        setErrors([])
        if (!validate(email)) {
            setErrors(pv => ["email is not valid", ...pv]) 
        } 
        if (password.length < 7) {
            setErrors(pv => ["Password must be at least 7 characters", ...pv]) 
        }
    }, [email, password])

    async function trySignUp() {
        await Login(email, password) 
        router.push("/dashboard")
    }

    return (
        <div className="w-screen h-screen overflow-hidden flex flex-row items-center justify-center md:justify-start pl-0 md:pl-40">
            <div className="w-1/3 h-fit flex flex-col gap-5 min-h-48">
                <h1 className="text-4xl font-semibold text-sec mb-5">
                    Log deg inn:
                </h1> 

                <Input type="email"
                    value={email}
                    setter={(v : string) => setEmail(v)}
                >
                    Email
                </Input>

                <Input type="password"
                    value={password}
                    setter={(v : string) => setPassword(v)}
                >
                    Password
                </Input>

                <motion.div className="flex flex-col items-center gap-3">
                    { (errors && errors.length > 0) &&
                        errors.map((error : string, i) => (
                            <span className="text-red-400 text-lg text-center italic"
                                key={`${i} love doritos`}
                            >
                                {error}
                            </span>
                        ))
                    }
                </motion.div>

                <div className="flex flex-row items-center justify-between">
                    <Button onClick={() => trySignUp()}>
                        Login
                    </Button>
                    <span className="w-10 h-1 bg-pri" />
                    <Button>
                        Login with google
                    </Button>
                </div>

                <HollowButton redirect="/user/signup">
                    Registrer
                </HollowButton>
            </div>
        </div>
    );
}
