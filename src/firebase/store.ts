import { getDoc, getDocs, doc, collection, addDoc, setDoc, Firestore, documentId, DocumentSnapshot } from 'firebase/firestore';
import { db } from "./fire"

export async function createRequest(data) {
    await addDoc(collection(db, "Requests"), data)
}
