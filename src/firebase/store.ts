import { collection, addDoc, getDoc, doc } from 'firebase/firestore';
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

    return (await addDoc(collection(db, "Requests"), dat)).id
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export async function getRequest(id: string = "GhLmJWKWNf3k74Znia5I") {
    while (true) {
        const content = await getDoc(doc(db, "Requests", id))
            .then(snapshot => snapshot.data())
            .catch(err => console.log(err))

        if (typeof content["data"] != "undefined") return content
        await sleep(1000)
    }
}










