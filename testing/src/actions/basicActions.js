export const CHANGE_A = 'changeA';

export default function actionOne(str) {
    return {
        type: CHANGE_A,
        payload: {
            newText: str
        }
    }
 }
 