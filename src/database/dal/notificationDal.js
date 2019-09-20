import dbFactory from '../../dbFactory';
// import firebase from 'firebase';
import { toastr } from 'react-redux-toastr';

const getDbRef = collectionName => {
    const db = dbFactory.create('firebase');
    const ref = db.firestore().collection(collectionName);
    return ref;
};


export const getTeacherNotificationFromDB = (dispatch, uid) => {
    console.log("getTeacherNotificationFromDB", uid)
    const notifications = [];
    const db = dbFactory.create('firebase');
    db.firestore().collection('chatNotifications').where("tId", "==", uid).where("deleted", "==", false).get()
        .then((querySnapshot) => {
            querySnapshot.docs.forEach(doc => {
                notifications.push(doc.data())
            });
            dispatch({ type: 'GET_TEACHER_NOTIFICATIONS', notifications })
        }).catch(err => {
            dispatch({ type: 'ERROR', err })
        })

}

export const getNotificationFromDB = (dispatch, uid) => {
    console.log("getNotificationFromDB")
    const notifications = [];
    const db = dbFactory.create('firebase');
    db.firestore().collection('chatNotifications').where("nId", "==", uid).where("deleted", "==", false).get()
        .then((querySnapshot) => {
            querySnapshot.docs.forEach(doc => {
                notifications.push(doc.data())
            });
            dispatch({ type: 'GET_NOTIFICATIONS', notifications })
        }).catch(err => {
            dispatch({ type: 'ERROR', err })
        })

}

export const getTeacherFromStudentIdFromDB = (dispatch, uid) => {
    console.log("getNotificationFromDB")
    const notifications = [];
    const db = dbFactory.create('firebase');
    db.firestore().collection('chatNotifications').where("sId", "==", uid).where("deleted", "==", false).get()
        .then((querySnapshot) => {
            querySnapshot.docs.forEach(doc => {
                notifications.push(doc.data())
            });
            dispatch({ type: 'GET_STUDENT_NOTIFICATIONS', notifications })
        }).catch(err => {
            dispatch({ type: 'ERROR', err })
        })

}

export const getTeachertNotificationFromDB = (dispatch, uid) => {
    console.log("getStudentNotificationFromDB")
    const notifications = [];
    const db = dbFactory.create('firebase');
    db.firestore().collection('chatNotifications').where("tId", "==", uid).where("deleted", "==", false).get()
        .then((querySnapshot) => {
            querySnapshot.docs.forEach(doc => {
                notifications.push(doc.data())
            });
            dispatch({ type: 'GET_NOTIFICATIONS', notifications })
        }).catch(err => {
            dispatch({ type: 'ERROR', err })
        })

}



export const getTeacherFromDB = (dispatch, uid) => {
    console.log("getTeacherFromDB")
    const data = [];
    const db = dbFactory.create('firebase');
    db.firestore().collection('userProfiles').where("userId", "==", uid).get()
        .then((querySnapshot) => {
            querySnapshot.docs.forEach(doc => {
                data.push(doc.data())
            });
            dispatch({ type: 'GET_TEACHERS', Teachers: data })
        }).catch(err => {
            dispatch({ type: 'ERROR', err })
        })
}

export const getStudentFromDB = (dispatch, uid) => {
    console.log("getStudentFromDB")
    const data = [];
    const db = dbFactory.create('firebase');
    db.firestore().collection('userProfiles').where("userId", "==", uid).get()
        .then((querySnapshot) => {
            querySnapshot.docs.forEach(doc => {
                data.push(doc.data())
            });
            dispatch({ type: 'GET_STUDENTS', Students: data })
        }).catch(err => {
            dispatch({ type: 'ERROR', err })
        })
}
//

export const getTeacherNotificationData = userId => {
    return getDbRef('chatNotifications')
        .where('tId', '==', userId)
        .where("deleted", "==", false)
        .get();
};

export const getNotificationData = userId => {
    return getDbRef('chatNotifications')
        .where('sId', '==', userId)
        .where("deleted", "==", false)
        .get();
};

export const getNotificationDataFromNid = userId => {
    return getDbRef('chatNotifications')
        .where('nId', '==', userId)
        .where("deleted", "==", false)
        .get();
};

export const getUserProfile = userId => {
    console.log("getUserProfile", userId)
    return getDbRef('userProfiles')
        .where('userId', '==', userId)
        .get();
};





export const saveChatNotificationDetails = chatNotificationDetails => {

    const db = dbFactory.create('firebase');
    db.firestore().collection('chatNotifications').doc(chatNotificationDetails.nId).set(chatNotificationDetails).then(() => {
        toastr.success('Notification sent successfully.');

    })
};


export const udpateChatNotificationDetails = chatNotificationDetails => {
    console.log(chatNotificationDetails.nId)
    const db = dbFactory.create('firebase');
    db.firestore().collection('chatNotifications').doc(chatNotificationDetails.nId).update(chatNotificationDetails).then(() => {
        toastr.success('Success.');

    })
};



