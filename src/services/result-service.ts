import { doc, updateDoc } from "firebase/firestore";
import { collection, db, getDocs } from "../firebase";
import { quizData } from "../pages/Question/quiz.model";

export const addScoreToUser = async (scoreValue: number) => {
  const quizId = sessionStorage.getItem("quizId");
  const quizCategory = quizData.find((quizObj) => quizObj.id === quizId)?.category;
  const uid: any = localStorage.getItem("user")
  const userRef = collection(db, "users");
  const data = await getDocs(userRef);
  let userData: any;
  let isExist: boolean = false;
  let scoreData = [];
  let userDocId: string = ""

  data.docs.forEach((doc) => {
    if ((doc.data()).uid.toString() === uid) {
      userData = doc.data();
      userDocId = doc.id
    }
  });

  if (userData.scores.length > 0)
    scoreData = userData.scores.map((ele: any) => {
      if (ele.quizId === quizId) {
        isExist = true;
        return { ...ele, score: scoreValue }
      } else { return ele }
    })

  if (!isExist) {
    scoreData = [...scoreData, { quizId: quizId, quizCategory: quizCategory, score: scoreValue }]
  }

  const getUser = doc(db, "users", userDocId);
  await updateDoc(getUser, {
    scores: [...scoreData]
  })
};
