export const CHANGE_A = 'changeA';

export default function actionOne() {
    return {
        type: CHANGE_A,
        payload: {
            newText: "I was changed!"
        }
    }
 }
 