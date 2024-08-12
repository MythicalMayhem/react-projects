import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

const wrap = { currentlyUploading: false, lastUploadedimage: null, currentProgress: 0 }

wrap.upload = async (file) => {
    if (!file) return  
    const date = new Date();
    const storageRef = ref(storage, `images/${date + file?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    wrap.currentlyUplading = true;
    wrap.currentProgress = 0
    return new Promise((resolve, reject) => {
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                wrap.currentProgress = progress
            },
            (error) => {
                wrap.currentlyUplading = false;
                reject("Something went wrong!" + error.code);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    wrap.currentlyUplading = false;
                    wrap.lastUploadedimage = downloadURL;
                    resolve(downloadURL);
                });
            }
        );
    });
};

export default wrap;


