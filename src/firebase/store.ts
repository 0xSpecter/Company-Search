import { collection, addDoc, getDoc } from 'firebase/firestore';
// import { getDoc, getDocs, doc, collection, addDoc, setDoc, Firestore, documentId, DocumentSnapshot } from 'firebase/firestore';
import { db } from "./fire"

export async function createRequest(data) {
    const dat = {}
    if (!data.ignore["industri"]) {
        dat["industry"] = data.industri
    }
    if (!data.ignore["antall_ansatte"]) {
        dat["employees"] = {from: Number(data.antall_ansatte[0]), to: Number(data.antall_ansatte[1])}
    }
    if (!data.ignore["SoMe"]) {
        Object.keys(data.SoMe).forEach(media => {
            if (data.SoMe[media]) {
                if (typeof dat["SoMe"] == "undefined") {
                    dat["SoMe"] = {}
                }
                dat["SoMe"][media] = true 
            }
        })
    }
    if (!data.ignore["nettside"]) {
        dat["website"] = data.nettside
    }

    await addDoc(collection(db, "Requests"), dat)
}

export async function getRequest(id: string = "qnCH3bsd2FCa0Blk4s3j") {
    const content = await getDoc(doc(db, "Requests", id))
        .then(snapshot => snapshot.data())
        .catch(err => console.log(err))
    
    return content
}










