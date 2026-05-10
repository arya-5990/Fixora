// src/firebase/storage.js
// ─────────────────────────────────────────────────────────────────────────────
// Firebase Storage helpers – upload, get download URL, delete.
// ─────────────────────────────────────────────────────────────────────────────

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { storage } from './config';

/**
 * Upload a file with progress callback.
 * @param {string} path   - Storage path e.g. "avatars/userId/photo.png"
 * @param {File}   file   - File object from <input type="file">
 * @param {(progress: number) => void} onProgress
 * @returns {Promise<string>} Download URL
 */
export const uploadFile = (path, file, onProgress) =>
  new Promise((resolve, reject) => {
    const fileRef = ref(storage, path);
    const task    = uploadBytesResumable(fileRef, file);

    task.on(
      'state_changed',
      (snap) => onProgress?.((snap.bytesTransferred / snap.totalBytes) * 100),
      reject,
      async () => {
        try {
          const url = await getDownloadURL(task.snapshot.ref);
          resolve(url);
        } catch (err) {
          reject(err);
        }
      },
    );
  });

/**
 * Get the download URL for an existing storage path.
 */
export const getFileURL = (path) => getDownloadURL(ref(storage, path));

/**
 * Delete a file at the given storage path.
 */
export const deleteFile = (path) => deleteObject(ref(storage, path));
