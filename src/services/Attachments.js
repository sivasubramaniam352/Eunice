import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
export const AttachmentPicker = async(type) =>{
    let res;
switch (type) {
     
    case 'Picture camera':
        try {
            res = await ImagePicker.openCamera({
                mediaType: "image",
              });
            if (res) {
                console.log('image',res);
                return res;
            }
        } catch (e) {
            console.log(e);
            throw new Error(e)
        }
    case 'video camera':
        try {
            res = await ImagePicker.openCamera({
                mediaType: "video",
              });
            if (res) {
                console.log('video',res);
                return res;
            }
        } catch (e) {
            console.log(e);
            throw new Error(e)
        }
    case 'Image Gallery':
        try {
            res = await ImagePicker.openPicker({
                mediaType: "image",
              });
            if (res) {
                console.log('image',res);
                return res;
            }
            if (res.isCancelled) {
                
            }
        } catch (e) {
            console.log(e);
            throw new Error(e)
        }
    case 'Video Gallery':
        try {
            res = await ImagePicker.openPicker({
                mediaType: "image",
              });
            if (res) {
                console.log('image',res);
                return res;
            }
        } catch (e) {
            console.log(e);
            throw new Error(e)
        }
    case 'Document':
        try {
            res = await DocumentPicker.pick({
                type:[DocumentPicker.types.allFiles]
            })
            if (res) {
                console.log('image',res);
                return res;
            }
        } catch (e) {
            console.log(e);
            throw new Error(e)
        }
 
     default:
         break;
 }
 
 
    try {     
      let media = await ImagePicker.openCamera({
        mediaType: 'Image',
      })

      if (media) {
          console.log(media);
      }
} catch(e){
            console.log(e);
            throw new Error(e);
        }
}
