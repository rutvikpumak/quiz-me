import {
    auth,
    db,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    addDoc,
    collection
} from "../firebase"


const logInWithEmailAndPassword = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {

    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res?.user;
    if (user) {
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            email,
            scores: [
            ]
        });
    }
    return res;
};

const logout = () => {
    signOut(auth);
};

export { logInWithEmailAndPassword, registerWithEmailAndPassword, logout }