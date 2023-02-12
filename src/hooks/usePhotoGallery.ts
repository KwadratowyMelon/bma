import { useState, useEffect } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import { isPlatform } from '@ionic/react';
<<<<<<< HEAD


import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

const PHOTO_STORAGE = 'photos';
=======
import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";

const PHOTO_STORAGE = "photos";

>>>>>>> parent of b02f8ec (chore(): bump to cap 3 final)
export function usePhotoGallery() {

  const [photos, setPhotos] = useState<Photo[]>([]);
  const { getPhoto } = useCamera();
  const { deleteFile, readFile, writeFile } = useFilesystem();
  const { get, set } = useStorage();

  useEffect(() => {
    const loadSaved = async () => {
<<<<<<< HEAD
      const { value } = await Preferences.get({key: PHOTO_STORAGE });

      const photosInPreferences = (value ? JSON.parse(value) : []) as UserPhoto[];
      // If running on the web...
      if (!isPlatform('hybrid')) {
        for (let photo of photosInPreferences) {
          const file = await Filesystem.readFile({
=======
      const photosString = await get(PHOTO_STORAGE);
      const photosInStorage = (photosString ? JSON.parse(photosString) : []) as Photo[];
      // If running on the web...
      if (!isPlatform('hybrid')) {
        for (let photo of photosInStorage) {
          const file = await readFile({
>>>>>>> parent of b02f8ec (chore(): bump to cap 3 final)
            path: photo.filepath,
            directory: FilesystemDirectory.Data
          });
          // Web platform only: Load the photo as base64 data
          photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
        }
      }
      setPhotos(photosInPreferences);
    };
    loadSaved();
  }, [get, readFile]);

  const takePhoto = async () => {
<<<<<<< HEAD
    const photo = await Camera.getPhoto({
=======
    const cameraPhoto = await getPhoto({
>>>>>>> parent of b02f8ec (chore(): bump to cap 3 final)
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    const fileName = new Date().getTime() + '.jpeg';
    const savedFileImage = await savePicture(photo, fileName);
    const newPhotos = [savedFileImage, ...photos];
    setPhotos(newPhotos);
<<<<<<< HEAD
    Preferences.set({key: PHOTO_STORAGE,value: JSON.stringify(newPhotos)});
=======
    set(PHOTO_STORAGE, JSON.stringify(newPhotos));
>>>>>>> parent of b02f8ec (chore(): bump to cap 3 final)
  };

  const savePicture = async (photo: CameraPhoto, fileName: string): Promise<Photo> => {
    let base64Data: string;
    // "hybrid" will detect Cordova or Capacitor;
    if (isPlatform('hybrid')) {
      const file = await readFile({
        path: photo.path!
      });
      base64Data = file.data;
    } else {
      base64Data = await base64FromPath(photo.webPath!);
    }
    const savedFile = await writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });

    if (isPlatform('hybrid')) {
      // Display the new image by rewriting the 'file://' path to HTTP
      // Details: https://ionicframework.com/docs/building/webview#file-protocol
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    }
    else {
      // Use webPath to display the new image instead of base64 since it's 
      // already loaded into memory
      return {
        filepath: fileName,
        webviewPath: photo.webPath
      };
    }
  };

  const deletePhoto = async (photo: Photo) => {
    // Remove this photo from the Photos reference data array
    const newPhotos = photos.filter(p => p.filepath !== photo.filepath);

    // Update photos array cache by overwriting the existing photo array
<<<<<<< HEAD
    Preferences.set({key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
=======
    set(PHOTO_STORAGE, JSON.stringify(newPhotos));
>>>>>>> parent of b02f8ec (chore(): bump to cap 3 final)

    // delete photo file from filesystem
    const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
    await deleteFile({
      path: filename,
      directory: FilesystemDirectory.Data
    });
    setPhotos(newPhotos);
  };

  return {
    deletePhoto,
    photos,
    takePhoto
  };
}

export interface Photo {
  filepath: string;
  webviewPath?: string;
}

