import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
	apiKey: 'AIzaSyDsxrb2hqIOF6Y1zyAxgbBfaXjh8Kb7axg',
	authDomain: 'house-market2-5f6c4.firebaseapp.com',
	projectId: 'house-market2-5f6c4',
	storageBucket: 'house-market2-5f6c4.appspot.com',
	messagingSenderId: '360608856949',
	appId: '1:360608856949:web:f14e9bdf6e12e79db7b13c',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore()
