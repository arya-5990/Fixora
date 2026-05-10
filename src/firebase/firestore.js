// src/firebase/firestore.js
// ─────────────────────────────────────────────────────────────────────────────
// Generic Firestore CRUD helpers. Import and extend as needed per feature.
// ─────────────────────────────────────────────────────────────────────────────

import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './config';

// ── Create ────────────────────────────────────────────────────────────────────
export const createDocument = (collectionName, data) =>
  addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

// ── Read one ──────────────────────────────────────────────────────────────────
export const getDocument = async (collectionName, id) => {
  const snap = await getDoc(doc(db, collectionName, id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

// ── Read many ─────────────────────────────────────────────────────────────────
export const getCollection = async (collectionName) => {
  const snap = await getDocs(collection(db, collectionName));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// ── Update ────────────────────────────────────────────────────────────────────
export const updateDocument = (collectionName, id, data) =>
  updateDoc(doc(db, collectionName, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });

// ── Delete ────────────────────────────────────────────────────────────────────
export const deleteDocument = (collectionName, id) =>
  deleteDoc(doc(db, collectionName, id));

// ── Real-time listener ────────────────────────────────────────────────────────
export const subscribeToCollection = (collectionName, callback, constraints = []) => {
  const q = query(collection(db, collectionName), ...constraints);
  return onSnapshot(q, (snap) => {
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  });
};

// Re-export Firestore query helpers so features can compose queries easily
export { query, where, orderBy, limit, collection, db };
