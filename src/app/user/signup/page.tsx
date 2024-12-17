"use client"
import { motion } from "motion/react";
import Input from "@/components/input";
import Button from "@/components/button";
import HollowButton from "@/components/hollowButton";
import { SignUp } from "@/firebase/auth";
import { validate } from "email-validator";
import { useEffect, useState } from "react";

export default function Page() {
    const [errors, setErrors] = useState([])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")

    useEffect(() => {
        setErrors([])
        if (!validate(email)) {
            setErrors(pv => ["email is not valid", ...pv]) 
        } 
        if (password != passwordAgain) {
            setErrors(pv => ["Passwords are not equal", ...pv]) 
        }
        if (password.length < 7) {
            setErrors(pv => ["Password must be at least 7 characters", ...pv]) 
        }
    }, [email, password, passwordAgain])

    async function trySignUp() {
        await SignUp(email, password) 
    }

    return (
        <div className="w-screen h-screen overflow-hidden flex flex-row items-center justify-center md:justify-start pl-0 md:pl-40">
            <div className="w-1/3 h-fit flex flex-col gap-5 min-h-48">
                <h1 className="text-4xl font-semibold text-sec mb-5">
                    Register Deg:
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

                <Input type="password"
                    value={passwordAgain}
                    setter={(v : string) => setPasswordAgain(v)}
                >
                    Password Again
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
                        Sign Up
                    </Button>
                    <span className="w-10 h-1 bg-pri" />
                    <Button>
                        Sign Up with google
                    </Button>
                </div>

                <HollowButton redirect="/user/login">
                    Log In
                </HollowButton>
            </div>
        </div>
    );
}
